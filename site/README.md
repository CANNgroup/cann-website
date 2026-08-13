# CANN lab website — v4

This version adds:

- Homepage team roster and alumni
- Individual pages for Seán Froudist-Walsh, Eva Sevenster, Tsvetoslav Ivanov, Aswathi Thrivikraman and Xiaohe Yu
- `people/index.html` directory
- `media.html`: recorded talks, teaching videos, podcast and press coverage
- `teaching.html`
- `outreach.html`
- Expanded rolling news ticker and full homepage News section
- Google Scholar, Oxford, Trinity and Oxford CANN links for Seán
- `EDIT_PROFILES.md` for lab members to fill in their page content

## Preview

Run:

```bash
python3 -m http.server 8000
```

from this folder, then open `http://localhost:8000`.

## Before public deployment

1. Ask each student to fill the fields in `EDIT_PROFILES.md`; transfer their content into their page.
2. Add profile photos if desired.
3. Review third-party scientific figure permissions in `CREDITS.md`.
4. Check alumni job titles/institution naming exactly as you want them publicly displayed.
5. Consider converting to Astro once content stabilises; the current structure maps cleanly to components/content collections.

## v5 additions
- Tsvetoslav Ivanov profile populated with supplied biography and photograph.
- Aswathi Thrivikraman profile populated with supplied biography, projects, GitHub and LinkedIn.
- Interactive “Explore how the lab connects” module adapted from Ash's concept demo.
- Relationship network spans NeuroAI/CERNNs, neuromodulation, cortical anatomy, cross-species neuroscience and computational psychiatry.
- Added incoming team members Julian Kedys, Yufan Wang and James McAllister with placeholder profile pages.
- Homepage People section now includes an Incoming Team group.


## v6 additions
- Added incoming PhD student Naomi Curnow — decision-making across scales and species.
- Added Naomi to the interactive lab-relationships map and People directory.
- Added a `Decision-making across scales` project node.
- Renamed the top-level research area `NeuroAI & CERNNs` to `NeuroAI`; CERNNs remains a specific project nested under NeuroAI.


## v10 addition
Added Joyce*, Ivanov* et al., Communications Biology (2025):
“Higher dopamine D1 receptor expression in prefrontal parvalbumin neurons underlies higher distractibility in marmosets versus macaques.”
Connected in the CANN hierarchy to:
- Working memory
- Across species
- Biophysical models
- Tsvetoslav Ivanov


## v11 incoming-project updates
- Julian Kedys: biophysical modelling of serotonin and dopamine effects on fMRI signals.
- James McAllister: cross-species CERNN modelling.
- Naomi Curnow: cross-species CERNNs of decision-making.
- Updated their graph connections, homepage summaries, directory entries and profile pages.


## v12 homepage simplification
Merged The question, Across timescales, Research in motion, Two complementary programmes, and Cortex-wide computation into one compact Research programme section after the hero. Removed the standalone Selected work section; publication links now live in the interactive CANN hierarchy.


## v13 publication graph update
Added:
- Klatzmann et al. (2025), bioRxiv, “Spatial layout of visual specialization is shaped by competing default mode and sensory networks.” Connected to (Ab)normal perception, connectivity, Ulysse Klatzmann, and Seán.
- Magrou*, Joyce* et al. (2024), Cerebral Cortex, “The meso-connectomes of mouse, marmoset, and macaque: network organization and the emergence of higher cognition.” Connected to across species, connectivity, working memory, and Seán.

Removed the Luppi et al. Nature Neuroscience publication node from the graph.


## v14 graph correction
Added Rahul Gupta as a coauthor-linked person node for Joyce*, Ivanov* et al., Communications Biology (2025).


## v15 research programme simplification
Reduced the Research Programme section to a single message and three horizontal visual panels:
1. Discover cortical organisation.
2. Build it into models.
3. Discover how they shape cognition.

Kept only the receptor-space image and the two existing videos. Removed the timescale strip and additional explanatory panels/copy from this section.


## v16 top news rail
- Replaced the horizontal news ticker with a rolling vertical news rail beside the hero on desktop.
- The rail links to the full News section lower on the homepage.
- Hover/focus pauses the animation; reduced-motion users receive a static scrollable panel.
- On mobile/tablet the rail moves below the hero.
- Fixed the old hero button that still linked to the removed `#motion` section; it now links to the interactive research map.


## v17 full news rail
The rolling hero news rail now includes all stories from the full News section:
- St John's Research Fellowship
- Ulysse Impact+ Canada Fellowship
- Trinity Access collaboration
- UKRI Future Leaders Fellowship
- Two Nature Neuroscience collaborations
- Eva's Mind, Brains & Machines summer school
- Rahul's Assistant Professor appointment
- Dabal joining Novomorphic
- CANN at CCCN Chengdu
- Eva & Ash selected Cosyne talk

The animation was slowed slightly to accommodate the longer complete news cycle.


## v18 open science
Added a compact Open Science section between the interactive research map and People:
- Open Code: CANN group GitHub organisation — https://github.com/CANNgroup
- BALSA: five neuroimaging study repositories listed in Seán's CV
- EBRAINS: the data collection plus three example anatomical datasets listed in the CV
- PRIME-DE / INDI: Mount Sinai open macaque multimodal MRI dataset
Also added CANN GitHub and an Open Science shortcut to Seán's profile.


## v19 header update
Added an `Open Science` button in the desktop header next to `Contact`, linking directly to the homepage Open Science section.


## v20 Join CANN
- Added a prominent `Join us` button to the desktop header and mobile nav.
- Rebuilt the Join section around concrete funded routes:
  - Oxford/NDCN: DPhil Clinical Neurosciences, NDCN studentships, Oxford Neuroscience 1+3, Oxford graduate funding.
  - Trinity/SCSS: Structured PhD, SCSS vacancies, Trinity Research Doctorate Awards, Research Ireland postgraduate scholarship.
  - Postdocs: Wellcome Early-Career, MSCA PF, Newton International (Oxford), Research Ireland Government of Ireland Postdoctoral (Trinity).
  - Pre-PhD: paid RA opportunities and research projects formally embedded in degree programmes.
- Added the lab's funding-first guidance, typical neuroscience + computational modelling background, inclusion statement, and explicit no-unfunded-research policy.


## v21 unified navigation
Removed the separate button treatment for Join us, Open Science and Contact.
All three now sit in the main navigation and use the same styling as Home, Research, People, Media, News, etc.


## v22 Teo Fantacci
Added Teo Fantacci as a Visiting PhD student:
- current-members homepage card with supplied photo
- interactive CANN graph node
- links to Decision-making, Working memory and Biophysical models
- People directory entry
- full profile page using the supplied biography and research description


## v23 collage update
Added a selection of the newly supplied boat / river lab-life photos into the homepage People collage by swapping them into two editorial collage slots, preserving the asymmetrical layout without overcrowding it.


## v24 Dabal network node
Added alumnus Dabal Pedamonti to the interactive CANN network, connected to:
- (Ab)normal perception / psilocybin
- Trained neural networks / NeuroAI


## v25 horizontal hero news band
Replaced the vertical right-hand news rail with a horizontal scrolling news band placed directly beneath the hero.
This keeps the top-of-page news visible while preserving the elegance and symmetry of the Oxford / Trinity campus imagery.


## v26 multilingual media/outreach + publications
- Media page: Seán is available to consider requests in English, Irish Gaelic, Spanish, Italian, French and Catalan.
- Media page: other CANN members may be available in Chinese (Mandarin), Hindi, Malayalam, Bulgarian and Dutch.
- Outreach page: added the same multilingual availability for widening-participation and outreach requests.
- Publications: added a clear link to Seán's full publication list on Google Scholar: https://scholar.google.com/citations?user=1n_2bLsAAAAJ&hl=en


## v27 intelligence / anatomy timescales / Ash profile
- Hero question changed to: “How does a brain's anatomy enable its intelligence?”
- Horizontal news rail made taller and the desktop hero shortened so the news is visible in the opening viewport.
- Anatomy branch reorganised into:
  - Principles
  - Acute changes · neuromodulation
  - Chronic changes · disease
  - Evolutionary changes · cross-species
- Principles explicitly links to Froudist-Walsh et al. 2023 and Klatzmann et al. 2025 bioRxiv in the graph.
- Ash's supplied full bio, GitHub and LinkedIn have been normalised on her profile.
- Exact newly uploaded Ash portrait is awaiting a filesystem-accessible image asset before it can be embedded in the downloadable bundle.
