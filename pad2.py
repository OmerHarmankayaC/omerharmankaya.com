from PIL import Image
import glob
import os

portrait_files = [
    'room_select.png',
    'room_booking.png',
    'admin.png',
    'daily_view.png',
    'main_page.png'
]

# Max width for portrait is 1142, height is 1400
PORTRAIT_SIZE = (1142, 1400)

for filename in portrait_files:
    filepath = os.path.join('proje_resim/Roomerang', filename)
    if not os.path.exists(filepath): continue
    
    img = Image.open(filepath).convert("RGBA")
    new_img = Image.new("RGBA", PORTRAIT_SIZE, (0, 0, 0, 0))
    x = (PORTRAIT_SIZE[0] - img.width) // 2
    y = (PORTRAIT_SIZE[1] - img.height) // 2
    new_img.paste(img, (x, y))
    new_img.save(filepath)
    print(f"Padded portrait {filename}")
