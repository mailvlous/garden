---
title: pencarian akar metode terbuka
draft: false
tags:
  - pencarian akar
  - numerical analysis
  - semester 5
  - metode terbuka
  - fixed point
published: '2026-10-25T00:00:00.000Z'
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

### newton raphson
```
INPUT: f, df, x0, toleransi, max_iter

IF ABS(f(x0)) <= toleransi:
    RETURN x0

FOR i = 1 TO max_iter:

    IF df(x0) == 0:
        ERROR "Turunan bernilai nol"

    x_baru = x0 - f(x0) / df(x0)

    IF ABS(f(x_baru)) <= toleransi:
        RETURN x_baru

    x0 = x_baru

ERROR "Maksimum iterasi tercapai"
```
