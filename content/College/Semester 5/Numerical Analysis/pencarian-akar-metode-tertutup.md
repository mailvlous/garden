---
tags:
  - numerical analysis
  - semester 5
  - math
title: pencarian akar metode tertutup
draft: false
published: 2026-10-22
---

#### bisection

```
INPUT: f, a, b, toleransi

IF f(a) * f(b) > 0:
    ERROR "Interval tidak mengurung akar"

WHILE (b - a) / 2 > toleransi:
    c = (a + b) / 2

    IF f(c) == 0:
        RETURN c

    IF f(a) * f(c) < 0:
        b = c
    ELSE:
        a = c

RETURN (a + b) / 2
```

#### regul flasi

```
INPUT: f, a, b, toleransi

IF f(a) * f(b) > 0:
    ERROR "Interval tidak mengurung akar"

WHILE True:
    c = (a*f(b) - b*f(a)) / (f(b) - f(a))

    IF abs(f(c)) <= toleransi:
        RETURN c

    IF f(a) * f(c) < 0:
        b = c
    ELSE:
        a = c
```
```
INPUT: f, a, b, toleransi, max_iter

IF f(a) == 0:
    RETURN a

IF f(b) == 0:
    RETURN b

IF f(a) * f(b) > 0:
    ERROR "Interval tidak mengurung akar"

FOR i = 1 TO max_iter:
    c = (a*f(b) - b*f(a)) / (f(b) - f(a))

    IF abs(f(c)) <= toleransi:
        RETURN c

    IF f(a) * f(c) < 0:
        b = c
    ELSE:
        a = c

ERROR "Maksimum iterasi tercapai"
```
