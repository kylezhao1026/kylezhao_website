#!/usr/bin/env python3
"""
Generate cropped/zoomed favicons from source icon.
Usage: python scripts/generate-favicons.py [zoom_factor]
Default zoom_factor: 0.70 (crops to 70% of center, making icon appear larger)
"""

import sys
from PIL import Image
import os

# Configuration
SOURCE_IMAGE = "app/icon.png"
ZOOM_FACTOR = float(sys.argv[1]) if len(sys.argv) > 1 else 0.70

OUTPUTS = [
    ("app/icon.png", 512),           # Next.js default (will be optimized)
    ("app/apple-icon.png", 180),     # Apple touch icon
    ("public/favicon-32x32.png", 32),
    ("public/favicon-16x16.png", 16),
]

def crop_center_zoom(image, zoom_factor):
    """Crop to center with zoom factor (smaller = more zoom)"""
    width, height = image.size
    crop_size = int(min(width, height) * zoom_factor)

    left = (width - crop_size) // 2
    top = (height - crop_size) // 2
    right = left + crop_size
    bottom = top + crop_size

    return image.crop((left, top, right, bottom))

def main():
    # Load source image
    if not os.path.exists(SOURCE_IMAGE):
        print(f"Error: Source image not found at {SOURCE_IMAGE}")
        sys.exit(1)

    source = Image.open(SOURCE_IMAGE)
    print(f"Source: {SOURCE_IMAGE} ({source.size[0]}x{source.size[1]})")
    print(f"Zoom factor: {ZOOM_FACTOR} (cropping to {int(ZOOM_FACTOR * 100)}% of center)")

    # Crop to center with zoom
    cropped = crop_center_zoom(source, ZOOM_FACTOR)
    print(f"Cropped to: {cropped.size[0]}x{cropped.size[1]}")

    # Generate all sizes
    for output_path, size in OUTPUTS:
        resized = cropped.resize((size, size), Image.Resampling.LANCZOS)

        # Ensure output directory exists
        os.makedirs(os.path.dirname(output_path), exist_ok=True)

        resized.save(output_path, "PNG", optimize=True)
        print(f"✓ Generated: {output_path} ({size}x{size})")

    print(f"\nDone! Favicons generated with {int(ZOOM_FACTOR * 100)}% crop.")
    print("To adjust zoom: python scripts/generate-favicons.py 0.65  (tighter)")
    print("                python scripts/generate-favicons.py 0.75  (looser)")

if __name__ == "__main__":
    main()
