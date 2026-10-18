const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const sharp = require('sharp');

const dest = path.resolve('C:/Users/heyrj/.gemini/antigravity/brain/372a8f5e-543c-46c7-b385-515f79bb6cbe/scratch/moss_batch2');
fs.mkdirSync(dest, { recursive: true });

const zip = path.resolve('C:/Users/heyrj/.gemini/antigravity/brain/372a8f5e-543c-46c7-b385-515f79bb6cbe/.user_uploaded/media_1792366640973_49d9dbe1.zip');
execSync(`tar -xf "${zip}" -C "${dest}"`);

const files = fs.readdirSync(dest).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));

async function inspect() {
  console.log(`Inspecting ${files.length} images from batch 2:`);
  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    const p = path.join(dest, f);
    const meta = await sharp(p).metadata();
    const stat = fs.statSync(p);
    console.log(`[${i + 1}] ${f} | ${meta.width}x${meta.height} | ${(stat.size / 1024).toFixed(1)} KB`);
  }
}

inspect();
