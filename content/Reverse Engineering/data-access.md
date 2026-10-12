---
tags:
  - data access
  - reverse engineering
  - ctf
  - engineering
title: data access
draft: false
published: 2026-10-12
---

data can be in:
- .data: used for pre-initialized global writable data (such as global arrays with initial values)  
- .rodata: used for global read-only data (such as string constants)  
- .bss: used for uninitialized global writable data (such as global arrays without initial values)  
- stack: used for statically-allocated local variables  
- heap: used for dynamically-allocated (malloc()ed) variables.
