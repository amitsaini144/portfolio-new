from PIL import Image
im = Image.open('src/assets/projects/code_buddy.png')
print(im.size, im.mode)
im2 = im.convert('RGBA')
print(im2.getpixel((0,0)))
print(im2.getpixel((im2.width//2, im2.height//2)))
