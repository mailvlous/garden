---
tags:
  - digital image processing
  - image
  - college
title: Week 3, part 2
draft: false
---

### Digital representation      



#### Pixel  
is the smallest individual unit of a digital image or screen.

Every pixel stores a value that determines its brightness or color.  

For example, in a grayscale image, a pixel commonly has a value from 0–255:
- 0 = black
- 255 = white
- values in between = shades of gray  

In an RGB color image, each pixel usually contains three values:  
Pixel = (R, G, B)

```
(255, 0, 0)   → Red
(0, 255, 0)   → Green
(0, 0, 255)   → Blue
(255, 255, 255) → White
(0, 0, 0)     → Black

```

So an image with resolution 1920 × 1080 consists of:  
1920 × 1080 = 2,073,600 pixels  
or about 2.07 megapixels.

#### Image Sampling  

proses untuk mendigitalisasi suatu fungsi menjadi fungsi diskrit  

makin besar sampling rate makin *pecah
misal, sampling rate 4 itu 4x4 pixel jadi 1

#### Image Quantization  

sebuah teknik pengelompokan nilai tingkat keabuan citra kedalam beberapa level, misal 256-> 4

**Image quantization** is the process of reducing continuous or high-precision pixel values into a **limited set of discrete intensity or color levels**.

The key idea is:

> **Sampling decides where the pixels are.**  
> **Quantization decides what values those pixels can have.**

For example, suppose a grayscale pixel originally has an intensity like:

```text
137.6
```

If the image uses 8-bit grayscale, the value must be represented as one of:

```text
0, 1, 2, ..., 255
```

So it may be quantized to:

```text
138
```

The number of available levels depends on the bit depth:

| Bit depth | Number of intensity levels |
|---|---:|
| 1-bit | 2 |
| 2-bit | 4 |
| 4-bit | 16 |
| 8-bit | 256 |

For example, with **2-bit quantization**, grayscale can only have four possible levels:

```text
0    85    170    255
```

So many different original intensity values must be mapped to one of those four values.

Higher quantization:

```text
256 levels
→ smoother gradients
→ more accurate representation
```

Lower quantization:

```text
4 levels
→ less detail in intensity
→ visible bands / posterization
```

So the complete digitization process is:

```text
Real-world image
       ↓
    Sampling
       ↓
Spatial grid / pixels
       ↓
   Quantization
       ↓
Discrete pixel intensity/color values
```

In short, image quantization converts pixel intensity or color into a finite number of allowed values.


#### Raster Image

Raster image = image represented as a matrix/grid of pixels.

Common raster formats include:
- JPEG / JPG
- PNG
- BMP
- GIF
- TIFF

#### Vector Graphics
Vector graphics are digital images made from mathematical shapes and paths instead of pixels.  

They are built using objects such as:
- lines
- curves
- circles
- rectangles
- polygons
For example, a circle in a vector image can be represented mathematically by its center, radius, stroke, and fill color.  

Common vector formats include:
- SVG
- AI
- EPS
- PDF (can contain vector graphics)  

Vector graphics = images represented using mathematical shapes, allowing them to scale without becoming pixelated.


#### RGB Color Model

The **RGB color model** represents colors using three components:

- **R = Red**
- **G = Green**
- **B = Blue**

A color is written as:

```text
(R, G, B)
```

Usually, each component ranges from **0 to 255**.

Examples:

```text
(255, 0, 0)     = Red
(0, 255, 0)     = Green
(0, 0, 255)     = Blue
(255, 255, 255) = White
(0, 0, 0)       = Black
(255, 255, 0)   = Yellow
```

RGB is an **additive color model**. This means colors are created by adding light together.

```text
Red + Green = Yellow
Green + Blue = Cyan
Red + Blue = Magenta
Red + Green + Blue = White
```

If all components are equal, you get a shade of gray:

```text
(50, 50, 50)    = dark gray
(128, 128, 128) = medium gray
(220, 220, 220) = light gray
```

RGB is commonly used in:

- computer monitors
- smartphones
- digital cameras
- digital images
- image processing

So, simply:

> **RGB color model = a way to represent a color using different amounts of red, green, and blue light.**

#### Alpha Channel  

An **alpha channel** is an extra image channel that controls **transparency**.

For an RGB image, you normally have:

```text
R = Red
G = Green
B = Blue
```

With an alpha channel, it becomes:

```text
RGBA
```

where:

- **R** = Red
- **G** = Green
- **B** = Blue
- **A** = Alpha / transparency

In an 8-bit image, alpha usually ranges from `0` to `255`:

```text
A = 0     → fully transparent
A = 128   → about 50% transparent
A = 255   → fully opaque
```

Example:

```text
(255, 0, 0, 255)
```

means fully visible red.

```text
(255, 0, 0, 128)
```

means semi-transparent red.

```text
(255, 0, 0, 0)
```

means completely transparent red.

A useful way to think about it:

> **RGB determines the color, while alpha determines how visible that color is.**

PNG commonly supports alpha transparency, while standard JPEG does not.


#### Grayscale Image


A **grayscale image** is an image that contains only **shades of gray**, from black to white.

It does not store full color information like RGB.

Typically, each pixel has a single intensity value:

```text
0   = black
255 = white
```

Values in between are different shades of gray:

```text
0     → black
64    → dark gray
128   → medium gray
192   → light gray
255   → white
```

So instead of an RGB pixel like:

```text
(120, 200, 80)
```

a grayscale pixel might simply be:

```text
145
```

For an 8-bit grayscale image, there are **256 possible intensity levels**.

In simple terms:

> **Grayscale image = an image where each pixel represents only brightness, not color.**

Compared with RGB, grayscale uses less data because each pixel usually stores **1 channel instead of 3**.

#### Binary Image

A binary image is an image where each pixel has only two possible values:
- 0 = black
- 1 = white  
In practice, it is often stored as:
0   = black
255 = white

#### Indexed Color Image

An **indexed color image** is an image where each pixel stores an **index number** that points to a color in a separate **color palette**.

Instead of storing full RGB values for every pixel, the image stores something like:

```text
Pixel value = 3
```

Then the palette says:

```text
Index 0 → (0, 0, 0)       = Black
Index 1 → (255, 0, 0)     = Red
Index 2 → (0, 255, 0)     = Green
Index 3 → (0, 0, 255)     = Blue
```

So a pixel with value `3` is displayed as blue.

Example image data:

```text
0  0  1  1
0  2  2  1
3  3  2  1
```

The computer looks up each number in the palette to determine the actual color.

The main advantage is **smaller file size**, especially when the image uses only a limited number of colors.

For example, an 8-bit indexed image can usually reference up to:

**2⁸ = 256 colors**

Indexed color is commonly used in formats such as **GIF** and some **PNG** images.

So, simply:

> **Indexed color image = an image where pixel values point to colors stored in a color palette instead of storing RGB colors directly.**

### Files and resolution

#### Image File Structure

**Image file structure** means how the data inside an image file is organized so software can correctly interpret and display the image.

Although the exact structure depends on the format—PNG, JPEG, BMP, GIF, TIFF, etc.—most image files contain several common parts.

A simplified structure looks like this:

```text
+----------------------+
| Header               |
+----------------------+
| Metadata             |
+----------------------+
| Color information    |
+----------------------+
| Pixel / Image Data   |
+----------------------+
| Optional extra data  |
+----------------------+
```

The **header** is usually at the beginning of the file. It tells the program basic information about the image, such as the file type, width, height, bit depth, color format, and sometimes the compression method.

For example:

```text
Width       = 1920
Height      = 1080
Bit depth   = 24-bit
Color model = RGB
Compression = JPEG
```

Many formats also have a special identifier called a **file signature** or **magic number**. This helps software determine the actual file type.

For example, a PNG file begins with a specific PNG signature, while JPEG files have a different signature.

The **metadata** section stores information about the image that is not necessarily part of the visible pixels. It can include things such as:

```text
Camera model
Date and time
GPS information
Author
Copyright
Image orientation
Exposure settings
```

JPEG images commonly store this kind of information using **EXIF metadata**.

The **color information** describes how colors should be interpreted. Depending on the image type, this might include the color model, color profile, or palette.

For an indexed-color image, there may be a palette such as:

```text
Index 0 → Black
Index 1 → Red
Index 2 → Green
Index 3 → Blue
```

Then the pixel data only stores the indexes.

The most important part is the **pixel/image data**. This contains the actual information used to reconstruct the image.

For an uncompressed RGB image, conceptually it might look like:

```text
Pixel 1 → (255, 0, 0)
Pixel 2 → (0, 255, 0)
Pixel 3 → (0, 0, 255)
...
```

However, formats such as JPEG and PNG usually store this data in **compressed form**, so the actual bytes in the file are more complicated than a simple RGB matrix.

Some formats also contain additional structures such as checksums, transparency information, thumbnails, animation frames, or end markers.

For example, PNG organizes its data into **chunks**:

```text
PNG Signature
      ↓
IHDR  → image information
      ↓
PLTE  → optional color palette
      ↓
IDAT  → compressed image data
      ↓
IEND  → end of PNG file
```

JPEG has a different structure based on markers and compressed blocks.

So the general idea is:

> **Image file structure is the organization of headers, metadata, color information, compressed or uncompressed pixel data, and other supporting information inside an image file.**

It is useful to distinguish this from the image itself: the **image** is the matrix of pixel values, while the **image file** is the container that stores those pixels plus information needed to interpret them.

#### Image File Formats

**Image file formats** are standardized ways of storing digital images in files.

Different formats use different methods for storing:
- pixel data
- compression
- color information
- transparency
- metadata

Common image file formats include:

| Format | Main characteristic | Typical use |
|---|---|---|
| **JPEG / JPG** | Lossy compression, small file size | Photos, web images |
| **PNG** | Lossless compression, supports transparency | Logos, screenshots, graphics |
| **GIF** | Limited to 256 colors, supports animation | Simple animations |
| **BMP** | Usually uncompressed or lightly compressed | Simple/raw bitmap storage |
| **TIFF** | High quality, supports lossless storage | Scanning, printing, professional imaging |
| **WebP** | Efficient compression, supports transparency and animation | Modern web images |
| **SVG** | Vector-based, not pixel-based | Logos, icons, diagrams |

### Lossy vs Lossless

One important difference between formats is compression.

**Lossy compression** removes some image information to reduce file size.

Example:

```text
JPEG
```

Smaller file, but repeated compression can reduce image quality.

**Lossless compression** reduces file size without permanently removing image information.

Examples:

```text
PNG
TIFF
```

### Raster vs Vector formats

Most common image formats are **raster formats**:

```text
JPEG
PNG
GIF
BMP
TIFF
WebP
```

They store images as pixels.

SVG is different because it is a **vector format** and stores mathematical shapes and paths.

So, simply:

> **An image file format defines how image data is encoded, compressed, stored, and interpreted inside a file.**

For example, the same picture could be saved as `photo.jpg`, `photo.png`, or `photo.webp`, but each format stores that image differently.

#### Print Resolution

**Print resolution** is the amount of image detail used when an image is printed, usually measured in **PPI (pixels per inch)** or **DPI (dots per inch)**.

For digital images, **PPI** is the more accurate term because it describes how many image pixels are placed into one inch of printed output.

For example:

- **72 PPI** → lower print detail
- **150 PPI** → moderate quality
- **300 PPI** → high-quality printing

Suppose an image is:

```text
3000 × 2400 pixels
```

If printed at **300 PPI**, the print size is:

```text
3000 / 300 = 10 inches
2400 / 300 = 8 inches
```

So the image can be printed at about:

```text
10 × 8 inches
```

at 300 PPI.

The relationship is:

```text
Print size = Pixel dimensions / PPI
```

Higher print resolution generally produces sharper prints, but it also means the same image must be printed at a smaller physical size.

A useful distinction:

> **Image resolution** = how many pixels the image contains.  
> **Print resolution** = how densely those pixels are placed on paper.

And **DPI** technically refers to the printer itself: how many ink dots it can place per inch.
