const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.resolve('C:/Users/heyrj/.gemini/antigravity/brain/372a8f5e-543c-46c7-b385-515f79bb6cbe/scratch/moss_raw');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));

async function inspect() {
  console.log(`Analyzing ${files.length} images...`);
  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    const p = path.join(dir, f);
    try {
      const meta = await sharp(p).metadata();
      const orientation = meta.width >= meta.height ? 'Landscape' : 'Portrait';
      console.log(`[${i + 1}] ${f} | ${meta.width}x${meta.height} (${orientation}) | ${(fs.statSync(p).size / 1024).toFixed(1)} KB`);
    } catch (e) {
      console.log(`[${i + 1}] ${f} -> Error:`, e.message);
    }
  }
}
inspect();
