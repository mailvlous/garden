---
tags:
  - audio
  - sampling
  - audio sampling
  - music
title: sampling or audio sampling
draft: false
published: 2026-10-06
---

analog signals are continuous signals, which means if you take one second of an analog signal, you can divide this second into [put the greatest number you can think of and I hope it’s a big one !]  parts that last a fraction of second.  In the digital world, you can’t afford to store an infinite amount of information. You need to have a minimum unit, for example 1 millisecond. During this unit of time the sound cannot change so this unit needs to be short enough so that the digital song sounds like the analog one and big enough to limit the space needed for storing the music.

for example, think about your favorite music. Now think about it with the sound changing only every 2 seconds, it sounds like nothing. Technically speaking the sound is aliased. In order to be sure that your song sounds great you can choose a very small unit like a nano (10^-9) second. This time your music sounds great but you don’t have enough disk space to store it, too bad.

This problem is called sampling.
