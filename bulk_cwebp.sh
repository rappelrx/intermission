# Bulk convert a folder of images to WebP format while keeping the original images.
for file in images/*.{jpg,png}; do
    cwebp -q 80 "$file" -o "images/$(basename "$file" .${file##*.}).webp"
done