const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rawDir = path.resolve('C:/Users/heyrj/.gemini/antigravity/brain/372a8f5e-543c-46c7-b385-515f79bb6cbe/scratch/moss_raw');
const outDir = path.resolve('public/projects/moss-walls');
fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(rawDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));

async function generatePreview() {
  const items = [];
  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    const src = path.join(rawDir, f);
    const thumbName = `raw_thumb_${i + 1}.jpg`;
    const thumbPath = path.join(outDir, thumbName);

    const meta = await sharp(src).metadata();
    await sharp(src)
      .resize({ width: 800, height: 600, fit: 'inside' })
      .jpeg({ quality: 85 })
      .toFile(thumbPath);

    items.push({
      idx: i + 1,
      name: f,
      width: meta.width,
      height: meta.height,
      thumb: `/projects/moss-walls/${thumbName}`
    });
  }

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Moss Wall Raw Photos Review</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #0E1811; color: #F4F3EC; margin: 0; padding: 24px; }
    h1 { font-size: 24px; color: #C8A55B; margin-bottom: 8px; }
    p { color: rgba(244,243,236,0.7); font-size: 14px; margin-bottom: 24px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
    .card { background: #16241B; border: 1px solid rgba(200,165,91,0.25); border-radius: 8px; overflow: hidden; }
    .img-wrap { height: 240px; background: #000; display: flex; align-items: center; justify-content: center; }
    .img-wrap img { max-width: 100%; max-height: 100%; object-fit: contain; }
    .info { padding: 12px 16px; font-size: 13px; }
    .info b { color: #C8A55B; font-size: 15px; }
    .dim { color: rgba(244,243,236,0.5); font-size: 11px; margin-top: 4px; font-family: monospace; }
  </style>
</head>
<body>
  <h1>21 Preserved Moss Wall Project Photos Review</h1>
  <p>Overview of all uploaded images to determine subject, orientation, and studio grading plan.</p>
  <div class="grid">
    ${items.map(it => `
      <div class="card">
        <div class="img-wrap">
          <img src="${it.thumb}" alt="Photo ${it.idx}" />
        </div>
        <div class="info">
          <b>#${it.idx}</b>
          <div class="dim">${it.width} x ${it.height} px &bull; ${it.name}</div>
        </div>
      </div>
    `).join('')}
  </div>
</body>
</html>`;

  fs.writeFileSync(path.resolve('public/moss-preview.html'), html, 'utf-8');
  console.log('Preview generated at public/moss-preview.html');
}

generatePreview();
