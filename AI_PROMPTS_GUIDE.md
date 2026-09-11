# Google Flow AI & Generative Video/Image Prompts Guide
## Universal EFX Studios Pvt Ltd

This document provides production-ready prompts designed for **Google Flow AI**, **Google Imagen 3**, **Google Veo**, or **Midjourney v6**. You can use these exact prompts to generate custom high-resolution still images or 4K video clips, and drop them directly into the website's `assets/images/` folder.

---

## File Naming & Placement Reference

When you generate new visuals, export them as **JPEG / WebP / MP4** and replace the corresponding file in `assets/images/`:

| Slot | Target File Path | Recommended Ratio | Format |
| :--- | :--- | :--- | :--- |
| **Hero Video (Reel)** | `assets/videos/hero-vfx.mp4` | `16:9` | Loopable 24fps H.264 MP4 (1080p / 4K) |
| **Hero Image (Fallback)** | `assets/images/hero-vfx.jpg` | `16:9` | High-res JPG/WebP (1920x1080) |
| **About Studio** | `assets/images/about-studio.jpg` | `4:3` or `16:9` | High-res JPG/WebP |
| **Before Plate (Slider)** | `assets/images/before-plate.jpg` | `16:9` | High-res JPG/WebP |
| **After Plate (Slider)** | `assets/images/after-plate.jpg` | `16:9` | High-res JPG/WebP |
| **Portfolio 01: Rotoscopy** | `assets/images/project-rotoscopy.jpg` | `16:9` | High-res JPG/WebP |
| **Portfolio 02: Cleanup & Paint** | `assets/images/project-cleanup.jpg` | `16:9` | High-res JPG/WebP |
| **Portfolio 03: Matchmove** | `assets/images/project-matchmove.jpg` | `16:9` | High-res JPG/WebP |
| **Portfolio 04: Compositing** | `assets/images/project-compositing.jpg` | `16:9` | High-res JPG/WebP |
| **Portfolio 05: VFX Shot** | `assets/images/project-vfx-shot.jpg` | `16:9` | High-res JPG/WebP |
| **Portfolio 06: Post Production**| `assets/images/project-post-production.jpg` | `16:9` | High-res JPG/WebP |

---

## 1. Hero Section Showcase

### Video Prompt for Google Flow AI / Google Veo (`assets/videos/hero-vfx.mp4`)
```text
Cinematic slow tracking camera push-in towards a professional VFX artist workstation inside a high-end darkened visual effects studio. The ultra-wide calibrated monitor displays an epic sci-fi blockbuster film sequence being composited in real-time, showing multi-pass visual effects layers blending seamlessly from a raw green screen actor plate into a photorealistic rainy cyberpunk city with glowing neon lights and atmospheric volumetric fog. Node-based compositing tree visible on the side monitor. Subtle blue ambient studio rim lighting, 24fps cinema look, 35mm anamorphic lens, Arri Alexa film aesthetic, hyper-realistic, photoreal 4K quality.
```
*Note: The website is already wired to auto-play this video in a muted loop with play/pause controls. Once generated, simply drop the file into `assets/videos/hero-vfx.mp4`.*

### Image Prompt / Fallback Poster (`assets/images/hero-vfx.jpg`)
```text
Photorealistic cinematic VFX compositing breakdown on a dual-monitor workstation, a high-budget live action film sequence being seamlessly combined with photorealistic computer generated environment, intricate multi-pass visual effects layers (raw green screen plate, depth pass, alpha matte, lighting pass, final color grade), node-based compositing graph, calibrated color grading reference monitor, Hollywood visual effects studio quality, 8k resolution, crisp cinema look --ar 16:9 --style raw --v 6.0
```

---

## 2. About Section: Studio Workstation

### Image Prompt (`about-studio.jpg`)
```text
Cinematic close-up of a professional VFX artist at work, viewed from the side in a modern post-production studio. The artist is using a digital pen tablet to draw high-precision rotoscoping spline curves and edge masks around an actor's silhouette on a high-end color-calibrated display. Soft studio ambient lighting, sound dampening foam panels in background, authentic film studio atmosphere, 8k --ar 4:3 --style raw
```

### Video Prompt (`about-studio.mp4`)
```text
Over-the-shoulder medium shot of a visual effects rotoscope artist using a stylus pen on a Wacom Cintiq tablet, adjusting delicate Bezier spline control points around fine hair strands on a cinema plate. Smooth fluid motion, focused studio lighting, 4K film look, shallow focus.
```

---

## 3. Interactive Before / After Comparison Slider

### Before Plate Prompt (`before-plate.jpg`)
```text
Behind-the-scenes film production plate: an athletic actor in a tactical suit suspended in mid-air by visible steel safety wires and rigging harnesses in front of an expansive green screen stage with white tracking cross markers. Practical studio lighting trusses and Arri Alexa cinema camera on a dolly visible in frame. Flat raw LOG film color profile, unedited production footage --ar 16:9 --style raw
```

### After Plate Prompt (`after-plate.jpg`)
*(Tip: Keep the same character posture and framing as `before-plate.jpg`)*
```text
Final composited Hollywood blockbuster VFX shot matching the action pose: The actor is leaping across rooftops in a breathtaking photorealistic futuristic cyberpunk city at night in heavy pouring rain. Glowing neon signs, holographic billboards, atmospheric steam, volumetric blue spotlights, explosive spark particles, seamless lighting integration, zero wires, no green screen, pristine ACEScg cinema color grade --ar 16:9 --style raw
```

---

## 4. Portfolio Projects (Selected Work)

### Project 01: Rotoscopy (`project-rotoscopy.jpg`)
```text
VFX software viewport screenshot showing professional rotoscoping breakdown: an actress running in high-speed motion, outlined with vibrant multi-colored Bezier spline curves around hair strands, jacket seams, and fingers. Split view showing pure black-and-white high-contrast alpha matte channel on the left, timeline keyframe scrub bar at bottom, Foundry Nuke / Silhouette FX interface aesthetic, 8k resolution --ar 16:9
```

### Project 02: Cleanup & Paint (`project-cleanup.jpg`)
```text
Film VFX cleanup and paint plate restoration breakdown in split-screen format: The left half shows an action movie plate with complex camera cranes, boom microphones, safety wires, and ground track rails. The right half shows the digitally restored clean plate with seamless desert terrain reconstruction, dynamic explosion smoke, and matching organic 35mm film grain --ar 16:9
```

### Project 03: Matchmove (`project-matchmove.jpg`)
```text
Cinematic 3D matchmove camera tracking breakdown in 3DEqualizer / PFTrack software: A busy metropolitan street filmed on anamorphic 35mm, overlaid with a dense 3D point cloud of green and red feature tracking markers, yellow wireframe camera trajectory path, and ground perspective grid plane. Sub-pixel precision solve readout in corner, high realism --ar 16:9
```

### Project 04: Compositing (`project-compositing.jpg`)
```text
Multi-pass CGI creature or heavy mechanical bipedal robot integration onto a wet asphalt city street: Left third shows blue holographic wireframe mesh, middle third shows neutral gray ambient occlusion clay render, right third shows fully textured, photorealistic weathered steel with reflections of streetlights and realistic rain contact shadows --ar 16:9
```

### Project 05: VFX Shot (`project-vfx-shot.jpg`)
```text
Massive cinematic environment extension matte painting: A practical coastal cliff location plate seamlessly extended with towering futuristic sci-fi architectural citadels, sky bridges, and landing pads. Golden hour sunset reflecting across ocean waves, volumetric cloud depth, subtle atmospheric haze, 8k Hollywood feature film quality --ar 16:9
```

### Project 06: Post Production (`project-post-production.jpg`)
```text
Commercial automotive film post-production finishing: A sleek electric hypercar traveling through an ultra-modern concrete tunnel at night. Anamorphic horizontal blue streak lens flares, hyper-detailed reflections across glossy metallic paint, subtle motion blur on wheels, premium commercial broadcast color grading --ar 16:9
```

---

## How to Drop New Assets into the Website

1. Generate your image in **Google Flow AI / Imagen / Veo**.
2. Save the file with the exact name listed above (e.g. `hero-vfx.jpg`).
3. Move the file into:
   ```
   p:\TSCG\Ads\UNIVERSAL EFX STUDIOS PVT LTD2\assets\images\
   ```
4. Refresh `index.html` in your web browser. The website will automatically display the new high-resolution visual!
