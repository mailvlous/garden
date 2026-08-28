---
title: Graphic Computer Pipeline
draft: false
tags:
  - college
  - computer science
  - fourth semester
---

> Some history: 

Definition I— The use of computers to generate information which human can perceive
 
# 1. Pixel

## Definition

A **pixel** is the smallest part of a computer picture. It shows one spot in the whole photo.
Every little square has information about color, brightness and position.
When these squares are put together with others they make a complete picture that we can see.
Pixels are the parts that make up digital screens.

Pixel is the smallest element of an image.
Each pixel correspond to any one value.
In an 8-bit gray scale image, the value of the pixel between 0 and 255.
The value of a pixel at any point correspond to the intensity of the light photons striking at that point
Each pixel store a value proportional to the light intensity at that particular location.

Total number of pixels = number of rows ( X ) number of columns
Or we can say that the number of (x,y) coordinate pairs make up the total number of pixels.

## Subpixel/Subpixel rendering

...

## Dot Pitch & Density(PPI/DPI)

**Dotpitch** is distance between two adjacent pixels, it is key indicator of image sharpness/image clarity.

	* Measurement: lower numbers ususally indicating better quality
	* Significance: a smaller dot pitch allows for a higher resolution

**Pixel Density** is determine how many pixels in some area, PPI means how many pixels in one inch(width x height). More is better.

	* DPI, dots per inch(printer, titik tinta): higher dpi -> more detail
	* PPI, pixels per inch(digital screen): higher ppi -> sharper, softer detail
		Smaller dotpitch → higher PPI
		Higher dotpitch → lower PPI

## Grid Structure (Square vs. Non-square Pixels)

...

# 2. Resolution & Visual Dimension

## Spasial Resolution (Width × Height)

Spatial resolution states that the clarity of an image cannot be determined by the pixel resolution. The number of pixels in an image does not matter.
> **Spatial resolution** can be defined as the smallest discernible detail in an image. (Digital Image Processing - Gonzalez, Woods - 2nd Edition)

Or in other way we can define spatial resolution as the number of independent pixels values per inch.

In short what spatial resolution refers to is that we cannot compare two different types of images to see that which one is clear or which one is not.
If we have to compare the two images, to see which one is more clear or which has more spatial resolution, we have to compare two images of the same size.

## Ratio Aspect (Standard, Widescreen, Ultrawide)

...

## Scaling & Image Interpolation

...

# Color Representation & Bit Depth

**Bpp or bits per pixel** denotes the number of bits per pixel. The number of different colors in an image is depends on the depth of color or bits per pixel.
1 bit means that we can only make combination of 'x' from 1 or 0. For example if 3 bits means 'xxx' it also means how many combination of 1 and zero that can fill up 'xxx' = 2^n

> Number of different colors depend on the number of bits per pixel.

we can easily notice the pattern of the exponentional growth.
The famous gray scale image is of 8 bpp , means it has 256 different colors in it or 256 shades.

Shades = numbers of colors = 2^n, n = bits

In pixel black color is 0, but there is no fix value for white color. White color = 2^n - 1
Gray color is midpoint of white and black

**Image Size** = rows * cols * bpp(n of 2^n)

## RGB vs CMYK and Color Conversion

Both use red green blue color combinations.

### RGB

RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)

Color conversion
Ex. rgb(202, 87, 51)

202/16 = 12 thats remainder 10 -> # 12 10 -> C A
87/16 = 5 thats remainder 7 -> #CA 5 7
...

### CMYK

CYAN = (0, 255, 255)
MAGENTA = (255, 0, 255)
YELLOW = (255, 255, 0)
BLACK = (0, 0, 0)

# Dinamika Display

## Refresh Rate (Hz) vs. Frame Rate (FPS)

**Frame Rate** is the ability GPU to produce frame per second.
**Refresh Rate** is the ability monitor to refresh screen per second

## Response Time & Input Lag

**Rensponse Time** is time for pixels to change from one color to another
**Input Lag** iWaktu yang dibutuhkan sejak kamu menekan tombol (mouse/keyboard) hingga aksi tersebut muncul di layar. Ini melibatkan prosesor monitor, kabel, dan GPU.


## Teknologi Panel (LCD, OLED, MicroLED)

...


# Further Reading

https://www.uni-weimar.de/fileadmin/user/fak/medien/professuren/Computer_Graphics/course_material/Graphics___Animation/5-GFX-pipeline.pdf
