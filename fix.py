from PIL import Image, ImageDraw
import glob
import os

files = [
    'inventory_admin.png',
    'room_select.png',
    'room_booking.png',
    'admin.png',
    'daily_view.png',
    'main_page.png'
]

TARGET_SIZE = (1600, 1600)

for filename in files:
    filepath = os.path.join('proje_resim/Roomerang', filename)
    if not os.path.exists(filepath): continue
    
    try:
        img = Image.open(filepath).convert("RGBA")
        
        # We want to fit it in 1400x1400 to have some padding
        img_w, img_h = img.size
        scale = min(1400 / img_w, 1400 / img_h)
        new_w = int(img_w * scale)
        new_h = int(img_h * scale)
        
        img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        # Add a subtle border/shadow effect? No, let's just pad it.
        new_img = Image.new("RGBA", TARGET_SIZE, (0, 0, 0, 0))
        
        # Center
        x = (1600 - new_w) // 2
        y = (1600 - new_h) // 2
        new_img.paste(img, (x, y))
        
        new_img.save(filepath)
        print(f"Fixed {filename}")
    except Exception as e:
        print(f"Error {filename}: {e}")
