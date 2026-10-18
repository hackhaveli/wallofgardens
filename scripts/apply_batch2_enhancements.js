const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const batch2Dir = path.resolve('C:/Users/heyrj/.gemini/antigravity/brain/372a8f5e-543c-46c7-b385-515f79bb6cbe/scratch/moss_batch2');
const outDir = path.resolve('public/projects/moss-walls');
fs.mkdirSync(outDir, { recursive: true });

// Mapping batch 2 retouched photos to project IDs
const BATCH2_MAPPINGS = [
  {
    id: 'exl-crimson-inlaid-logo',
    file: 'WhatsApp Image 2026-10-19 at 5.06.11 AM (1).jpeg',
    title: 'EXL Crimson Moss Inlaid Monogram',
    client: 'EXL Services Headquarters',
    category: 'Brand Logo Inlay',
    angle: 'Straight-On Architectural Symmetrical Angle',
    technique: 'Hand-Dyed Crimson Scandinavian Moss Monogram in Emerald Field with White Marble Pebble Planter Base',
    vibrancy: 1.14,
    brightness: 1.03,
    contrast: 1.12,
  },
  {
    id: 'puma-brand-moss-icon',
    file: 'WhatsApp Image 2026-10-19 at 5.06.11 AM.jpeg',
    title: 'Puma Leaping Cat Brand Silhouette',
    client: 'Puma Corporate Studio',
    category: 'Brand Logo Inlay',
    angle: 'Dramatic Oblique Floating Silhouette',
    technique: 'Precision CNC-Contoured Reindeer Moss Leaping Cat Suspended on Acoustic Smoked Glass Partition',
    vibrancy: 1.16,
    brightness: 1.04,
    contrast: 1.14,
  },
  {
    id: 'exl-chennai-heritage-reception',
    file: 'WhatsApp Image 2026-10-19 at 5.06.12 AM (1).jpeg',
    title: 'EXL Services Panoramic Heritage Mural',
    client: 'EXL Services Chennai',
    category: 'Enterprise Reception',
    angle: 'Unobstructed Full-Wall Architectural Perspective',
    technique: '100% Scandinavian Preserved Greenery with Custom Architectural Inlays & Modern Halo Pendants',
    vibrancy: 1.12,
    brightness: 1.03,
    contrast: 1.10,
  },
  {
    id: 'federal-bank-moss-wall',
    file: 'WhatsApp Image 2026-10-19 at 5.06.12 AM (2).jpeg',
    title: 'Federal Bank Executive Boardroom',
    client: 'Federal Bank Regional HQ',
    category: 'Corporate Boardroom',
    angle: 'Frontal Architectural Boardroom Angle',
    technique: 'Multi-Tone Rolling Waves of Scandinavian Reindeer Moss with 3D Backlit Lettering & Slatted Wood Soffit',
    vibrancy: 1.14,
    brightness: 1.04,
    contrast: 1.12,
  },
  {
    id: 'outdoor-architectural-courtyard-facade',
    file: 'WhatsApp Image 2026-10-19 at 5.06.12 AM.jpeg',
    title: 'Multi-Tone Bun Moss & Ivy Feature Facade',
    client: 'Private Luxury Estate',
    category: 'Multi-Texture Living Facade',
    angle: 'Full-Height Architectural Courtyard Sconce Angle',
    technique: '3D Relief Bun Moss Nodules with Ground-Recessed Grazing Lights and Cascading English Ivy Canopy',
    vibrancy: 1.15,
    brightness: 1.04,
    contrast: 1.12,
  },
  {
    id: 'syngenta-illuminated-crest',
    file: 'WhatsApp Image 2026-10-19 at 5.06.13 AM (1).jpeg',
    title: 'Syngenta Botanical Wall & Golden Leaf',
    client: 'Syngenta India',
    category: 'Brand Logo Inlay',
    angle: 'Frontal Reception Perspective with Fluted Oak Counter',
    technique: 'Preserved Moss Wall with Custom Gilded Leaf Outline and Warm White Grazing Glow Behind Fluted Desk',
    vibrancy: 1.14,
    brightness: 1.03,
    contrast: 1.12,
  },
  {
    id: 'exl-global-moss-world-map',
    file: 'WhatsApp Image 2026-10-19 at 5.06.13 AM (2).jpeg',
    title: 'EXL Global Sculpted Continental World Map',
    client: 'EXL Global Facilities',
    category: '3D Art & Sculpture',
    angle: 'Pristine Polished Marble Corridor Perspective',
    technique: 'High-Relief 3D Preserved Moss Cartography Depicting Global Office Networks Across Continents',
    vibrancy: 1.15,
    brightness: 1.05,
    contrast: 1.12,
  },
  {
    id: 'wipro-revantage-reception',
    file: 'WhatsApp Image 2026-10-19 at 5.06.13 AM.jpeg',
    title: 'Wipro & Revantage Executive Lounge',
    client: 'Wipro & Revantage Campus',
    category: 'Corporate Reception',
    angle: 'Full Lounge Perspective with Pebble Planter Base',
    technique: 'High-Density Forest Green Moss Acoustic Wall with Precision Matte Acrylic Corporate Logos & Pebble Planter',
    vibrancy: 1.14,
    brightness: 1.04,
    contrast: 1.12,
  },
];

async function applyBatch2() {
  console.log('Upscaling and studio-enhancing 8 retouched batch 2 images...');

  for (const item of BATCH2_MAPPINGS) {
    const src = path.join(batch2Dir, item.file);
    if (!fs.existsSync(src)) {
      console.warn('File not found:', src);
      continue;
    }

    const meta = await sharp(src).metadata();
    const targetWidth = Math.max(meta.width >= 2000 ? meta.width : 2400, 2048);

    const enhanced = sharp(src)
      .resize({
        width: targetWidth,
        kernel: sharp.kernel.lanczos3,
        withoutEnlargement: false,
      })
      .modulate({
        brightness: item.brightness,
        saturation: item.vibrancy,
      })
      .linear(item.contrast, -(128 * (item.contrast - 1)))
      .sharpen({
        sigma: 1.2,
        m1: 1.0,
        m2: 2.0,
      });

    // Save high-res progressive MozJPEG
    await enhanced
      .clone()
      .jpeg({
        quality: 92,
        progressive: true,
        mozjpeg: true,
        chromaSubsampling: '4:4:4',
      })
      .toFile(path.join(outDir, `${item.id}.jpg`));

    // Save high-res WebP
    await enhanced
      .clone()
      .webp({
        quality: 90,
        effort: 6,
      })
      .toFile(path.join(outDir, `${item.id}.webp`));

    // Save optimized thumbnail
    await sharp(src)
      .resize({
        width: 720,
        height: 520,
        fit: 'cover',
        position: 'center',
      })
      .modulate({
        brightness: item.brightness,
        saturation: item.vibrancy,
      })
      .sharpen({ sigma: 1.0 })
      .webp({ quality: 86 })
      .toFile(path.join(outDir, `${item.id}-thumb.webp`));

    console.log(`✓ Processed and replaced: ${item.id} with pristine studio version`);
  }

  // Curated, non-duplicate, unique list of 12 world-class moss projects
  const CURATED_PROJECTS = [
    {
      id: 'federal-bank-moss-wall',
      title: 'Federal Bank Executive Boardroom',
      client: 'Federal Bank Regional HQ',
      category: 'Corporate Boardroom',
      angle: 'Frontal Architectural Boardroom Angle',
      technique: 'Multi-Tone Rolling Waves of Scandinavian Reindeer Moss with 3D Backlit Lettering & Slatted Wood Soffit',
      imageJpg: '/projects/moss-walls/federal-bank-moss-wall.jpg',
      imageWebp: '/projects/moss-walls/federal-bank-moss-wall.webp',
      thumbWebp: '/projects/moss-walls/federal-bank-moss-wall-thumb.webp',
    },
    {
      id: 'hul-unilever-curved-wall',
      title: 'Hindustan Unilever Atrium Feature Wall',
      client: 'Hindustan Unilever Limited (HUL)',
      category: 'Enterprise Reception',
      angle: 'Curved Architectural Panorama',
      technique: 'Seamless Reindeer Moss Field with Embedded Unilever U-Monogram & Terracotta Jali Screens',
      imageJpg: '/projects/moss-walls/hul-unilever-curved-wall.jpg',
      imageWebp: '/projects/moss-walls/hul-unilever-curved-wall.webp',
      thumbWebp: '/projects/moss-walls/hul-unilever-curved-wall-thumb.webp',
    },
    {
      id: 'syngenta-illuminated-crest',
      title: 'Syngenta Botanical Wall & Golden Leaf',
      client: 'Syngenta India',
      category: 'Brand Logo Inlay',
      angle: 'Frontal Reception Perspective with Fluted Oak Counter',
      technique: 'Preserved Moss Wall with Custom Gilded Leaf Outline and Warm White Grazing Glow Behind Fluted Desk',
      imageJpg: '/projects/moss-walls/syngenta-illuminated-crest.jpg',
      imageWebp: '/projects/moss-walls/syngenta-illuminated-crest.webp',
      thumbWebp: '/projects/moss-walls/syngenta-illuminated-crest-thumb.webp',
    },
    {
      id: 'wipro-revantage-reception',
      title: 'Wipro & Revantage Executive Lounge',
      client: 'Wipro & Revantage Campus',
      category: 'Corporate Reception',
      angle: 'Full Lounge Perspective with Pebble Planter Base',
      technique: 'High-Density Forest Green Moss Acoustic Wall with Precision Matte Acrylic Corporate Logos & Pebble Planter',
      imageJpg: '/projects/moss-walls/wipro-revantage-reception.jpg',
      imageWebp: '/projects/moss-walls/wipro-revantage-reception.webp',
      thumbWebp: '/projects/moss-walls/wipro-revantage-reception-thumb.webp',
    },
    {
      id: 'puma-brand-moss-icon',
      title: 'Puma Leaping Cat Brand Silhouette',
      client: 'Puma Corporate Studio',
      category: 'Brand Logo Inlay',
      angle: 'Dramatic Oblique Floating Silhouette',
      technique: 'Precision CNC-Contoured Reindeer Moss Leaping Cat Suspended on Acoustic Smoked Glass Partition',
      imageJpg: '/projects/moss-walls/puma-brand-moss-icon.jpg',
      imageWebp: '/projects/moss-walls/puma-brand-moss-icon.webp',
      thumbWebp: '/projects/moss-walls/puma-brand-moss-icon-thumb.webp',
    },
    {
      id: 'exl-global-moss-world-map',
      title: 'EXL Global Sculpted Continental World Map',
      client: 'EXL Global Facilities',
      category: '3D Art & Sculpture',
      angle: 'Pristine Polished Marble Corridor Perspective',
      technique: 'High-Relief 3D Preserved Moss Cartography Depicting Global Office Networks Across Continents',
      imageJpg: '/projects/moss-walls/exl-global-moss-world-map.jpg',
      imageWebp: '/projects/moss-walls/exl-global-moss-world-map.webp',
      thumbWebp: '/projects/moss-walls/exl-global-moss-world-map-thumb.webp',
    },
    {
      id: 'exl-crimson-inlaid-logo',
      title: 'EXL Crimson Moss Inlaid Monogram',
      client: 'EXL Services Headquarters',
      category: 'Brand Logo Inlay',
      angle: 'Straight-On Architectural Symmetrical Angle',
      technique: 'Hand-Dyed Crimson Scandinavian Moss Monogram in Emerald Field with White Marble Pebble Planter Base',
      imageJpg: '/projects/moss-walls/exl-crimson-inlaid-logo.jpg',
      imageWebp: '/projects/moss-walls/exl-crimson-inlaid-logo.webp',
      thumbWebp: '/projects/moss-walls/exl-crimson-inlaid-logo-thumb.webp',
    },
    {
      id: 'exl-chennai-heritage-reception',
      title: 'EXL Services Panoramic Heritage Mural',
      client: 'EXL Services Chennai',
      category: 'Enterprise Reception',
      angle: 'Unobstructed Full-Wall Architectural Perspective',
      technique: '100% Scandinavian Preserved Greenery with Custom Architectural Inlays & Modern Halo Pendants',
      imageJpg: '/projects/moss-walls/exl-chennai-heritage-reception.jpg',
      imageWebp: '/projects/moss-walls/exl-chennai-heritage-reception.webp',
      thumbWebp: '/projects/moss-walls/exl-chennai-heritage-reception-thumb.webp',
    },
    {
      id: 'genpact-timber-slat-column',
      title: 'Genpact Fluted Timber & Moss Inset',
      client: 'Genpact India HQ',
      category: 'Architectural Feature',
      angle: 'Vertical Architectural Grazing Light',
      technique: 'Recessed Full-Height Reindeer Moss Column Interlocked with White Oak Acoustic Battens',
      imageJpg: '/projects/moss-walls/genpact-timber-slat-column.jpg',
      imageWebp: '/projects/moss-walls/genpact-timber-slat-column.webp',
      thumbWebp: '/projects/moss-walls/genpact-timber-slat-column-thumb.webp',
    },
    {
      id: 'geometric-rhythm-corridor',
      title: 'Executive Corridor Geometric Rhythm Wall',
      client: 'Corporate Campus Gurugram',
      category: 'Architectural Feature',
      angle: 'Dynamic Corridor Linear Perspective',
      technique: 'Alternating Fluted Timber Mullions, Glass Vision Panels, and Preserved Moss Acoustic Spandrels',
      imageJpg: '/projects/moss-walls/geometric-rhythm-corridor.jpg',
      imageWebp: '/projects/moss-walls/geometric-rhythm-corridor.webp',
      thumbWebp: '/projects/moss-walls/geometric-rhythm-corridor-thumb.webp',
    },
    {
      id: 'outdoor-architectural-courtyard-facade',
      title: 'Multi-Tone Bun Moss & Ivy Feature Facade',
      client: 'Private Luxury Estate',
      category: 'Multi-Texture Living Facade',
      angle: 'Full-Height Architectural Courtyard Sconce Angle',
      technique: '3D Relief Bun Moss Nodules with Ground-Recessed Grazing Lights and Cascading English Ivy Canopy',
      imageJpg: '/projects/moss-walls/outdoor-architectural-courtyard-facade.jpg',
      imageWebp: '/projects/moss-walls/outdoor-architectural-courtyard-facade.webp',
      thumbWebp: '/projects/moss-walls/outdoor-architectural-courtyard-facade-thumb.webp',
    },
    {
      id: 'vertical-fluted-moss-panel',
      title: 'Architectural Stone & Multi-Texture Moss Column',
      client: 'Private Residence & Studio',
      category: 'Multi-Texture Living Facade',
      angle: 'Full Vertical Architectural Symmetrical Frame',
      technique: 'Precision Alternating Bands of Flat, Reindeer, and Cushion Bun Moss Flanked by Fluted Wall Cladding',
      imageJpg: '/projects/moss-walls/vertical-fluted-moss-panel.jpg',
      imageWebp: '/projects/moss-walls/vertical-fluted-moss-panel.webp',
      thumbWebp: '/projects/moss-walls/vertical-fluted-moss-panel-thumb.webp',
    },
  ];

  fs.writeFileSync(
    path.resolve('lib/moss-projects-data.json'),
    JSON.stringify(CURATED_PROJECTS, null, 2),
    'utf-8'
  );

  console.log(`\n🎉 Successfully updated lib/moss-projects-data.json with ${CURATED_PROJECTS.length} unique, zero-duplicate projects!`);
}

applyBatch2().catch(e => {
  console.error(e);
  process.exit(1);
});
