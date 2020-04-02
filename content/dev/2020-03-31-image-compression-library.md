---
title: Image compression library notes
---
I wanted to reduce the size of all the images for this website. Usually, ImageMagick is my go-to for image manipulation, but this time I wanted to explore a few other options since I haven't done it in a long time.

To limit my research, I focused just on PNG compression libraries. I currently only have one JPEG, so I didn't want to waste my time on that.
Here's the ImageMagick command I used to compress the JPEG:

```javascript
magick my-image.jpg -strip -interlace Plane -gaussian-blur 0.05 -quality 85% my-image.min.jpg
```

Since I'm writing this post a few days after doing the image-minifying research, I don't remember the few different PNG libraries I compared. But, the most important thing to me is which tool was the best. Presenting, [pngquant](https://pngquant.org/). It retains alpha transparency, it reduces the color palette, it can create 'lossy' PNGs, and more. Here's the pngquant command I used to compress the images, and using '--speed 1' to use the slowest algorithm and ensure the smallest image size:

```javascript
pngquant my-image.png --speed 1
```




