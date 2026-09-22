import os
from PIL import Image

vipin_path = r"C:/Users/DELL/.gemini/antigravity/brain/134bedc9-5c6c-4c39-ad25-1e37dc0f5e45/.user_uploaded/media_1790079042293.jpg"
swati_path = r"C:/Users/DELL/.gemini/antigravity/brain/134bedc9-5c6c-4c39-ad25-1e37dc0f5e45/.user_uploaded/media_1790079042355.jpg"

img_v = Image.open(vipin_path)
print(f"Dr. Vipin size: {img_v.size}")

img_s = Image.open(swati_path)
print(f"Dr. Swati size: {img_s.size}")
