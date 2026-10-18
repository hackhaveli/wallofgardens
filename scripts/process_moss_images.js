const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rawDir = path.resolve('C:/Users/heyrj/.gemini/antigravity/brain/372a8f5e-543c-46c7-b385-515f79bb6cbe/scratch/moss_raw');
const outDir = path.resolve('public/projects/moss-walls');
fs.mkdirSync(outDir, { recursive: true });

// Curated list of high-value photos with custom crop, adjustments, and metadata
const PROJECTS_CONFIG = [
  {
    id: 'federal-bank-moss-wall',
    rawFile: 'WhatsApp Image 2026-10-19 at 4.04.23 AM.jpeg', // #12
    title: 'Federal Bank Executive Boardroom',
    client: 'Federal Bank',
    category: 'Corporate Boardroom',
    angle: 'Frontal Architectural Symmetrical Angle',
    technique: 'Multi-Tone Rolling Waves of Scandinavian Reindeer Moss with 3D Backlit Lettering',
    crop: null, // full image is already well framed
    vibrancy: 1.15,
    brightness: 1.04,
    contrast: 1.12,
  },
  {
    id: 'hul-unilever-curved-wall',
    rawFile: 'WhatsApp Image 2026-10-19 at 4.04.22 AM (1).jpeg', // #5
    title: 'Hindustan Unilever Atrium Feature Wall',
    client: 'Hindustan Unilever Limited (HUL)',
    category: 'Enterprise Reception',
    angle: 'Curved Architectural Panorama',
    technique: 'Seamless Reindeer Moss Field with Embedded Unilever U-Monogram & Terracotta Jali Screens',
    crop: null,
    vibrancy: 1.18,
    brightness: 1.05,
    contrast: 1.12,
  },
  {
    id: 'wipro-revantage-reception',
    rawFile: 'WhatsApp Image 2026-10-19 at 4.04.23 AM (2).jpeg', // #10
    title: 'Wipro & Revantage Executive Lounge',
    client: 'Wipro & Revantage',
    category: 'Corporate Reception',
    angle: 'Wide Lounge Environmental Perspective',
    technique: 'High-Density Forest Green Moss Acoustic Wall with Precision Matte Acrylic Corporate Logos',
    crop: null,
    vibrancy: 1.16,
    brightness: 1.05,
    contrast: 1.14,
  },
  {
    id: 'wipro-revantage-close',
    rawFile: 'WhatsApp Image 2026-10-19 at 4.04.22 AM (2).jpeg', // #6
    title: 'Wipro & Revantage Logo Acoustic Field',
    client: 'Wipro & Revantage',
    category: 'Corporate Reception',
    angle: 'Frontal Medium Telephoto Framing',
    technique: 'Seamless Preserved Moss Wall Dampening Ambient Echo in High-Traffic Reception',
    crop: null,
    vibrancy: 1.15,
    brightness: 1.04,
    contrast: 1.12,
  },
  {
    id: 'puma-brand-moss-icon',
    rawFile: 'WhatsApp Image 2026-10-19 at 4.04.21 AM (1).jpeg', // #1
    title: 'Puma Leaping Cat Brand Silhouette',
    client: 'Puma',
    category: 'Brand Logo Inlay',
    angle: 'Dramatic Oblique Floating Silhouette',
    technique: 'Precision CNC-Contoured Moss Topiary Suspended Against Smoked Glass Partition',
    crop: null,
    vibrancy: 1.22,
    brightness: 1.06,
    contrast: 1.18,
  },
  {
    id: 'syngenta-illuminated-crest',
    rawFile: 'WhatsApp Image 2026-10-19 at 4.04.22 AM (3).jpeg', // #7
    title: 'Syngenta Botanical Wall & Golden Leaf',
    client: 'Syngenta',
    category: 'Brand Logo Inlay',
    angle: 'Direct Frontal Illuminated Framing',
    technique: 'Preserved Moss Wall with Custom Gilded Leaf Outline and Warm White Grazing Glow',
    crop: { left: 0, top: 0, width: 1240, height: 576 }, // crop out water bottle on table on right
    vibrancy: 1.18,
    brightness: 1.03,
    contrast: 1.15,
  },
  {
    id: 'genpact-timber-slat-column',
    rawFile: 'WhatsApp Image 2026-10-19 at 4.04.22 AM.jpeg', // #8
    title: 'Genpact Fluted Timber & Moss Inset',
    client: 'Genpact',
    category: 'Architectural Feature',
    angle: 'Vertical Architectural Grazing Light',
    technique: 'Recessed Full-Height Reindeer Moss Column Interlocked with White Oak Acoustic Battens',
    crop: null,
    vibrancy: 1.20,
    brightness: 1.06,
    contrast: 1.14,
  },
  {
    id: 'exl-chennai-heritage-reception',
    rawFile: 'WhatsApp Image 2026-10-19 at 4.04.21 AM (2).jpeg', // #2
    title: 'EXL Services Panoramic Heritage Mural',
    client: 'EXL Services',
    category: 'Enterprise Reception',
    angle: 'Wide Angle Full-Wall Architectural Perspective',
    technique: '100% Scandinavian Preserved Greenery with Custom Architectural Inlays & Modern Halo Pendants',
    crop: null,
    vibrancy: 1.14,
    brightness: 1.04,
    contrast: 1.10,
  },
  {
    id: 'exl-chennai-reception-grazing',
    rawFile: 'WhatsApp Image 2026-10-19 at 4.04.21 AM (3).jpeg', // #3
    title: 'EXL Services Grazing Light Perspective',
    client: 'EXL Services',
    category: 'Enterprise Reception',
    angle: '3/4 Grazing Lighting Architectural Angle',
    technique: 'High-Density Textured Moss Surface Highlighting Sound-Absorbing Depth Under Linear Luminaires',
    crop: null,
    vibrancy: 1.15,
    brightness: 1.04,
    contrast: 1.12,
  },
  {
    id: 'exl-crimson-inlaid-logo',
    rawFile: 'WhatsApp Image 2026-10-19 at 4.04.23 AM (1).jpeg', // #9
    title: 'EXL Crimson Moss Inlaid Monogram',
    client: 'EXL Services',
    category: 'Brand Logo Inlay',
    angle: 'Vertical Architectural Portrait Angle',
    technique: 'Hand-Dyed Crimson Reindeer Moss Monogram Embedded in Emerald Moss with White Marble Pebble Base',
    crop: null,
    vibrancy: 1.20,
    brightness: 1.05,
    contrast: 1.16,
  },
  {
    id: 'exl-global-moss-world-map',
    rawFile: 'WhatsApp Image 2026-10-19 at 4.09.10 AM (1).jpeg', // #16
    title: 'EXL Global Sculpted Continental World Map',
    client: 'EXL Global',
    category: '3D Art & Sculpture',
    angle: 'Perspective Corridor View of Complete Installation',
    technique: 'High-Relief 3D Preserved Moss Cartography Depicting Global Office Networks Across Continents',
    crop: { left: 50, top: 200, width: 4000, height: 2850 }, // clean borders
    vibrancy: 1.18,
    brightness: 1.06,
    contrast: 1.15,
  },
  {
    id: 'exl-world-map-craftsmanship',
    rawFile: 'WhatsApp Image 2026-10-19 at 4.09.11 AM.jpeg', // #21
    title: 'Artisan Hand-Tufting EXL World Map',
    client: 'EXL Global / Studio Craft',
    category: 'Studio Craftsmanship',
    angle: 'Behind-The-Scenes Artisan Detail Angle',
    technique: 'Our In-House Horticultural Artisans Hand-Tufting Individual Bun & Reindeer Moss Clusters On-Site',
    crop: null,
    vibrancy: 1.16,
    brightness: 1.05,
    contrast: 1.12,
  },
  {
    id: 'geometric-rhythm-corridor',
    rawFile: 'WhatsApp Image 2026-10-19 at 4.04.24 AM (1).jpeg', // #13
    title: 'Executive Corridor Geometric Rhythm Wall',
    client: 'Corporate Campus Gurugram',
    category: 'Architectural Feature',
    angle: 'Dynamic Corridor Linear Perspective',
    technique: 'Alternating Fluted Timber Mullions, Glass Vision Panels, and Preserved Moss Acoustic Spandrels',
    crop: { left: 0, top: 0, width: 4160, height: 2400 }, // crop out floor boxes
    vibrancy: 1.16,
    brightness: 1.04,
    contrast: 1.14,
  },
  {
    id: 'outdoor-architectural-courtyard-facade',
    rawFile: 'WhatsApp Image 2026-10-19 at 4.09.11 AM (1).jpeg', // #19
    title: 'Multi-Tone Bun Moss & Ivy Feature Facade',
    client: 'Luxury Estate Courtyard',
    category: 'Multi-Texture Living Facade',
    angle: 'Dramatic Architectural Night Uplighting Angle',
    technique: '3D Relief Bun Moss Nodules with Ground-Recessed Grazing Lights and Cascading English Ivy Canopy',
    crop: null,
    vibrancy: 1.20,
    brightness: 1.05,
    contrast: 1.16,
  },
  {
    id: 'vertical-fluted-moss-panel',
    rawFile: 'WhatsApp Image 2026-10-19 at 4.09.09 AM.jpeg', // #15
    title: 'Architectural Stone & Multi-Texture Moss Column',
    client: 'Private Residence & Studio',
    category: 'Multi-Texture Living Facade',
    angle: 'Full Vertical Architectural Symmetrical Frame',
    technique: 'Precision Alternating Bands of Flat, Reindeer, and Cushion Bun Moss Flanked by Fluted Wall Cladding',
    crop: { left: 0, top: 0, width: 900, height: 1380 }, // crop out bottom paving boxes
    vibrancy: 1.22,
    brightness: 1.06,
    contrast: 1.18,
  },
  {
    id: 'exl-camouflage-moss-wall',
    rawFile: 'WhatsApp Image 2026-10-19 at 4.04.24 AM.jpeg', // #14
    title: 'Organic Earth Camouflage Moss Wall',
    client: 'EXL Tech Hub',
    category: 'Acoustic Wall Art',
    angle: 'Diagonal Perspective Framing',
    technique: 'Multi-Colored Scandinavian Reindeer Moss in Forest, Terracotta, Olive, and Chartreuse Accents',
    crop: null,
    vibrancy: 1.18,
    brightness: 1.05,
    contrast: 1.15,
  },
];

async function processAll() {
  console.log(`Starting studio-grade upscaling & enhancement for ${PROJECTS_CONFIG.length} curated projects...`);

  const results = [];

  for (let i = 0; i < PROJECTS_CONFIG.length; i++) {
    const p = PROJECTS_CONFIG[i];
    const srcPath = path.join(rawDir, p.rawFile);

    if (!fs.existsSync(srcPath)) {
      console.warn(`File not found: ${srcPath}`);
      continue;
    }

    const baseName = p.id;
    const outJpg = path.join(outDir, `${baseName}.jpg`);
    const outWebp = path.join(outDir, `${baseName}.webp`);
    const outThumb = path.join(outDir, `${baseName}-thumb.webp`);

    console.log(`[${i + 1}/${PROJECTS_CONFIG.length}] Processing: ${p.title} (${p.rawFile})...`);

    let pipeline = sharp(srcPath);

    // Apply custom crop if specified
    if (p.crop) {
      pipeline = pipeline.extract(p.crop);
    }

    // Inspect metadata
    const meta = await pipeline.metadata();
    const targetWidth = Math.max(meta.width >= 2000 ? meta.width : 2200, 1920);

    // STUDIO-GRADE IMAGE ENHANCEMENT:
    // 1. High-order Lanczos3 resampling up to 2400px+
    // 2. Linear color space adjustments for contrast, vibrancy, and saturation
    // 3. Unsharp mask sharpening for hyper-crisp moss textures
    // 4. Studio tonal balancing

    const enhanced = pipeline
      .resize({
        width: targetWidth,
        withoutEnlargement: false,
        kernel: sharp.kernel.lanczos3,
      })
      .modulate({
        brightness: p.brightness || 1.04,
        saturation: p.vibrancy || 1.15,
      })
      .linear(p.contrast || 1.12, -(128 * ((p.contrast || 1.12) - 1))) // Contrast enhancement
      .sharpen({
        sigma: 1.25,
        m1: 1.1,
        m2: 2.2,
      });

    // Save High-Res Progressive MozJPEG
    await enhanced
      .clone()
      .jpeg({
        quality: 92,
        progressive: true,
        mozjpeg: true,
        chromaSubsampling: '4:4:4',
      })
      .toFile(outJpg);

    // Save High-Res WebP
    await enhanced
      .clone()
      .webp({
        quality: 90,
        effort: 6,
      })
      .toFile(outWebp);

    // Save Fast Loading Thumbnail
    await pipeline
      .clone()
      .resize({
        width: 720,
        height: 500,
        fit: 'cover',
        position: 'center',
      })
      .modulate({
        brightness: p.brightness || 1.04,
        saturation: p.vibrancy || 1.15,
      })
      .sharpen({ sigma: 1.0 })
      .webp({ quality: 85 })
      .toFile(outThumb);

    const outStat = fs.statSync(outWebp);
    console.log(`   ✓ Saved: ${baseName}.webp (${(outStat.size / 1024).toFixed(1)} KB)`);

    results.push({
      id: p.id,
      title: p.title,
      client: p.client,
      category: p.category,
      angle: p.angle,
      technique: p.technique,
      imageJpg: `/projects/moss-walls/${baseName}.jpg`,
      imageWebp: `/projects/moss-walls/${baseName}.webp`,
      thumbWebp: `/projects/moss-walls/${baseName}-thumb.webp`,
    });
  }

  // Write metadata JSON for React components to import
  fs.writeFileSync(
    path.resolve('lib/moss-projects-data.json'),
    JSON.stringify(results, null, 2),
    'utf-8'
  );

  console.log(`\n🎉 Successfully processed and enhanced ${results.length} projects!`);
  console.log(`Exported metadata to lib/moss-projects-data.json`);
}

processAll().catch(err => {
  console.error('Processing error:', err);
  process.exit(1);
});
