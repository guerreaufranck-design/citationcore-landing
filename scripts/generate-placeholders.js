const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const TINY_PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg==',
  'base64'
);

const files = [
  'hero-screenshot.png',
  'feature-visibility.png',
  'feature-products.png',
  'feature-competitors.png',
  'og-image.png',
  'logo.png',
];

for (const f of files) {
  const filepath = path.join(dir, f);
  if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, TINY_PNG);
    console.log('Created:', f);
  }
}
console.log('Done!');
