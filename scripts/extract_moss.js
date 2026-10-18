const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dest = path.resolve('C:/Users/heyrj/.gemini/antigravity/brain/372a8f5e-543c-46c7-b385-515f79bb6cbe/scratch/moss_raw');
fs.mkdirSync(dest, { recursive: true });

const zip1 = path.resolve('C:/Users/heyrj/.gemini/antigravity/brain/372a8f5e-543c-46c7-b385-515f79bb6cbe/.user_uploaded/media_1792363178601_6c1a2110.zip');
const zip2 = path.resolve('C:/Users/heyrj/.gemini/antigravity/brain/372a8f5e-543c-46c7-b385-515f79bb6cbe/.user_uploaded/media_1792363190467_5e3577fa.zip');

execSync(`tar -xf "${zip1}" -C "${dest}"`);
execSync(`tar -xf "${zip2}" -C "${dest}"`);

const files = fs.readdirSync(dest);
console.log('Total extracted files:', files.length);
files.forEach((f, idx) => {
  const stat = fs.statSync(path.join(dest, f));
  console.log(`[${idx + 1}] ${f} (${(stat.size / 1024).toFixed(1)} KB)`);
});
