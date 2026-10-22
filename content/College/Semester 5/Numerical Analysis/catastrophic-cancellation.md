---
title: catastrophic cancellation
draft: false
tags:
  - numerical analysis
  - college
  - semester 5
published: '2026-10-22T00:00:00.000Z'
---
is a numerical computing problem that occurs when subtracting two nearly equal floating-point numbers, causing a significant loss of precision

Suppose we want to calculate:

$a-b$

Where:

$a=1.23456789$



b=1.23456780


The exact result is:

$a-b=0.00000009$


Now imagine our computer can only store 6 significant digits.

Both numbers get rounded:

$a\approx1.23457$



$b\approx1.23457$


Therefore:

$a-b=1.23457-1.23457=0$

Exact arithmetic
0.00000009

Limited precision
0



The small difference disappears because the original numbers have already lost precision during rounding.
