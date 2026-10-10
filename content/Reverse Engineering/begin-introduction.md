---
tags:
  - ctf
  - reverse engineering
  - engineering
title: begin, introduction!
draft: false
published: 2026-10-10
---

every step of forward engineering, information is lost  
so reverse engineering is getting back that lost information

what is lost in transition between design and code?(strips out)
- comments
- variable names
- function names
- structure(classes, structs, etc)data
- sometimes, entire algorithm(optimization)

**so how do we got all this information back?!**

example:
![image](/assets/image-20261010231258-629e875c.png)
we have this very simple program called hello, then we compile
![image](/assets/image-20261010231337-5bacef25.png)

lets see whats happen if we compile it, we can using cpp for this
![image](/assets/image-20261010231524-d6acfe65.png)
as you can see the comment "//variable name" is strips out. cpp also shows what we include it in that code which is <stdio.h>

also if we compile/convert it tinto assembly code
![image](/assets/image-20261010232251-ef2670c2.png)
the variable my_name which is store character array[1024] is gone, and now it is just memory reference(lost data type also)
```
lea	rax, -1024[rbp]
```
