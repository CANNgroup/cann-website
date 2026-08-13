#!/usr/bin/env python3
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote
import json, sys

ROOT=Path(__file__).resolve().parents[1]
SITE=ROOT/'site'
PEOPLE=ROOT/'content/people/people.json'
errors=[]
warnings=[]

class Parser(HTMLParser):
    def __init__(self):
        super().__init__(); self.refs=[]; self.ids=[]
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if 'id' in a: self.ids.append(a['id'])
        for key in ('href','src','poster'):
            if key in a: self.refs.append((key,a[key]))

def external(ref):
    if ref.startswith(('mailto:','tel:','data:','javascript:')): return True
    u=urlparse(ref)
    return bool(u.scheme or u.netloc)

html_files=list(SITE.rglob('*.html'))
if not html_files: errors.append('No HTML files found under site/')

for f in html_files:
    text=f.read_text(encoding='utf-8')
    p=Parser(); p.feed(text)
    if len(p.ids)!=len(set(p.ids)):
        seen=set(); dup=[]
        for x in p.ids:
            if x in seen and x not in dup: dup.append(x)
            seen.add(x)
        errors.append(f'{f.relative_to(ROOT)} duplicate id(s): {dup}')
    for attr,ref in p.refs:
        ref=(ref or '').strip()
        if not ref or ref=='#' or external(ref): continue
        path, _, frag=ref.partition('#')
        if not path: continue
        path=unquote(path.split('?',1)[0])
        target=(f.parent/path).resolve()
        try: target.relative_to(SITE.resolve())
        except ValueError:
            errors.append(f'{f.relative_to(ROOT)} local ref escapes site/: {ref}')
            continue
        if not target.exists(): errors.append(f'{f.relative_to(ROOT)} missing {attr}: {ref}')

if not PEOPLE.exists():
    errors.append('Missing content/people/people.json')
else:
    data=json.loads(PEOPLE.read_text(encoding='utf-8'))
    ids=set(); slugs=set(); allowed={'current','visitor','incoming','alumnus'}
    for person in data:
        pid=person.get('id'); slug=person.get('slug')
        if not pid or pid in ids: errors.append(f'people.json duplicate/missing id: {pid!r}')
        if not slug or slug in slugs: errors.append(f'people.json duplicate/missing slug: {slug!r}')
        ids.add(pid); slugs.add(slug)
        if person.get('status') not in allowed: errors.append(f'{pid}: invalid status')
        if person.get('profile') and not (SITE/person['profile']).exists(): errors.append(f'{pid}: profile missing {person["profile"]}')
        if person.get('photo') and not (SITE/person['photo']).exists(): errors.append(f'{pid}: photo missing {person["photo"]}')

for req in ('index.html','styles.css','script.js'):
    if not (SITE/req).exists(): errors.append(f'Missing site/{req}')

if errors:
    print('SITE CHECK FAILED')
    for e in errors: print('ERROR:',e)
    sys.exit(1)
print(f'Site check passed: {len(html_files)} HTML pages checked; people metadata paths valid.')
