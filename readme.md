```markdown
# Chai UI ☕ **v2.0** - *Zero Config Production UI*

[![npm version](https://img.shields.io/npm/v/my-chai-ui.svg)](https://www.npmjs.com/package/my-chai-ui) [![Size](https://img.shields.io/bundlephobia/minzip/my-chai-ui)](https://bundlephobia.com/result?p=my-chai-ui)

**75+ Tailwind-style utility classes + components** that work **instantly**. No config, no build step, no CSS files.

## 🚀 **Live Demo**
```html
<div class="chai-card-glass chai-p-32 chai-shadow-4xl">
  <h1 class="chai-fs-72 chai-fw-black chai-text-orange-400">Production Ready</h1>
  <button class="chai-btn chai-btn-glow chai-p-20 chai-rounded-3xl">Click Me</button>
</div>

<script type="module">
  import { applyChaiStyles } from 'my-chai-ui'
  applyChaiStyles() // ✨ Magic!
</script>
```

## 📦 **Install**
```bash
npm i my-chai-ui
```

## 🎯 **3 Second Setup**

**1. `app.js` banao:**
```javascript
import { applyChaiStyles } from 'my-chai-ui'
document.addEventListener('DOMContentLoaded', () => applyChaiStyles())
```

**2. HTML mein add karo:**
```html
<script type="module" src="./app.js"></script>
```

**3. chai-* classes use karo kahin bhi!**

## 📋 **Complete Classes (75+)**

### **Spacing** `(40+)`
```
chai-p-4/8/12/16/20/24/32/40/48  (padding: 1rem, 2rem...)
chai-px-6 chai-py-12              (x/y padding)
chai-m-8 chai-mx-auto             (margin)
chai-gap-4/8/12/16/24             (flex/grid gap)
```

### **Colors**
```
chai-bg-slate-900    (dark bg)
chai-bg-orange-500   (brand orange)
chai-text-slate-100  (light text)
chai-text-orange-400 (accent)
chai-text-emerald-400 (success)
chai-text-red-400    (danger)
```

### **Typography**
```
chai-fs-24/48/72/96  (font-size)
chai-fw-bold         (700)
chai-fw-black        (900)
chai-text-center
```

### **Layout**
```
chai-flex  chai-grid
chai-grid-cols-3
chai-items-center
chai-justify-center/between
chai-col-span-2
```

### **Components** `(Production Ready)`
```
chai-card           (basic card)
chai-card-glass     (glassmorphism ✨)
chai-btn            (primary)
chai-btn-secondary  (outline)
chai-avatar         (40x40)
chai-avatar-lg      (80x80)
chai-progress       (animated bar)
chai-table          (hover table)
```

### **Effects**
```
chai-rounded-3xl
chai-shadow-2xl/4xl
chai-border-orange-500 (neon)
chai-hover-scale
chai-hover-lift     (3D)
chai-hover-glow
```

## 🎮 **Playground**
```bash
npm i my-chai-ui
npx serve .
```
Open `index.html` → **Live class tester!**

## 🌟 **Features**
✅ **Glassmorphism** `chai-card-glass`  
✅ **Neon borders** `chai-border-orange-glow`  
✅ **3D hovers** `chai-hover-lift`  
✅ **Progress bars** `chai-progress data-progress="92"`  
✅ **VS Code IntelliSense**  
✅ **2.1kb gzipped**  

Deplyment link- https://my-chai-ui.netlify.app/


