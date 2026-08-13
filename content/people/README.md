# People data scaffold

This folder is the start of the move from hand-written profile duplication to structured lab data.

## Current status

The live v1 website is still primarily hand-written HTML/JavaScript. **Editing this JSON alone will not yet change every live page.**

For now:

- lab members should edit their own live profile at `site/people/<slug>.html`;
- maintainers should keep `people.json` broadly in sync when adding/removing people or research-network relationships;
- `scripts/check_site.py` validates that profile/photo paths listed here exist.

## Intended next migration

Move the following to generated output:

1. profile metadata;
2. homepage people cards;
3. people directory;
4. graph person nodes and theme edges;
5. eventually full profile pages.

Once that is complete, each person will have one structured content file and the site will render all appearances automatically.

## Status values

- `current`
- `visitor`
- `incoming`
- `alumnus`

## Theme IDs currently used

Cognition: `cog-perception`, `cog-wm`, `cog-decision`, `cog-planning`

Anatomy: `anat-principles`, `anat-acute`, `anat-chronic`, `anat-evolution`

Models: `nn-trained`, `nn-biophysical`
