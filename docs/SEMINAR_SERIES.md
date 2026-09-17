# Seminar series

The seminar hub is `site/seminars.html`. Its four cards link to:

- `site/trinity-neuroai.html` — Trinity College Dublin NeuroAI Seminars
- `site/nacas.html` — Neuroanatomy and Computation Across Species
- `site/oxford-neuroai.html` — Oxford NeuroAI Forum
- `site/oxcin-united.html` — OxCIN United

All pages use the existing shared header, footer, styles and menu script.
`site/seminars.css` contains only seminar-specific layout rules. The hub is
linked from the main navigation on every page.

## Updating events

Edit the relevant HTML page. Add confirmed events under an Upcoming events
heading with a date, local time, venue and official announcement link. After an
event, move it into Previous events and remove live registration instructions.
Dates do not move automatically. Keep the past event list newest first.

Use the institutional calendars as the source for Oxford NeuroAI Forum and
OxCIN United schedules. Do not imply that the OxCIN calendar contains only
OxCIN United events. Seán's OxCIN United organising role is currently worded
as forthcoming.

## Sources for this addition (17 September 2026)

- Series names and organisers: supplied by Seán.
- NACAS launch on 10 March 2026: announcement supplied by Seán; the year is
  inferred from the Tuesday 10 March date and 2026 publication references.
  Old journal club and speaker meeting invitations are archived, not presented
  as open registrations.
- NACAS on 3 June 2026: https://www.oxcin.ox.ac.uk/events/neuroanatomy-and-computation-across-species-series
- Oxford NeuroAI Forum calendar: the Oxford Events series link supplied by Seán.
  The calendar could not be retrieved during preparation, so no individual
  upcoming dates were copied from it.
- OxCIN events: https://www.oxcin.ox.ac.uk/events — supplied by Seán.

The brief Trinity and Oxford NeuroAI descriptions are draft editorial copy
based on the series names, not quotations of official descriptions.

Validate with `python scripts/check_site.py` before opening a pull request.
