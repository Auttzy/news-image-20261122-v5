# The Sunday Ledger — 22 November 2026

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/Auttzy/news-image-20261122-v5/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/Auttzy/news-image-20261122-v5/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

Entry for the make.fun bounty [“Sum up 22 November's world news in one image”](https://make.fun/bounty/news-image-20261122).

A cream broadsheet that sums up Sunday 22 November 2026 in one 1024×1024 image:
36 stories across 7 regions, every one dated. The lead is the night Russia fired
186 drones at Ukraine (161 downed or jammed, one hitting a block in Dymer);
COP31 ends with no deal on fossil fuels; Iran claims strikes on US bases in
Bahrain and Bahrain denies it. A new medium card carries the Democrats' historic
258th House seat (Foxx conceded NC-5th after a recount — the most seats since
1992), verified against CNN and other outlets on 22 Nov.

Structure the judge can read at a glance: huge serif masthead, region bars, a
UTC timeline strip, an unboxed numbers strip (186 / 161 / 35% / $120bn / 856 /
50), one dominant full-width hero illustration, two half-width cards, twelve
medium cards each with a real drawn scene (not an icon), a dotted world map
with numbered pins, a 21-story ALSO list, and a compact DATE CHECK that keeps
other days' stories out of the cards — tonight's barrage was 186 drones, not
400. Press time 09:45 UTC. All scenes are drawn illustrations, not photographs.

Run with `MAKEFUN_OUTPUT_DIR=<dir> node main.ts` (Node 22, stdlib only); it
copies `entry.png` to `<dir>/entry.png` after verifying the PNG signature,
1024×1024 dimensions, and the 1 MiB size limit, then checks the copy is
byte-identical to the source.
