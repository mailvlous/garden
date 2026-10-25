---
tags:
  - pencarian akar
  - numerical analysis
  - semester 5
  - metode terbuka
  - fixed point
title: pencarian akar metode terbuka
draft: false
published: 2026-10-25
---

### fixed point

```
INPUT: g, x0, toleransi, max_iter

FOR i = 1 TO max_iter:
    x_baru = g(x0)

    IF ABS(x_baru - x0) <= toleransi:
        RETURN x_baru

    x0 = x_baru

ERROR "Maksimum iterasi tercapai"
```

###
