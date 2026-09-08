# 🚀 Getting Started - Panduan Setup Lengkap

## Prerequisites

Pastikan Anda telah install:

1. **Node.js** (versi 16+)
   - Download dari https://nodejs.org/
   - Verifikasi: `node --version` & `npm --version`

2. **FFmpeg** (untuk video export)
   - **Windows**: Download dari https://ffmpeg.org/download.html
   - **macOS**: `brew install ffmpeg`
   - **Linux**: `sudo apt-get install ffmpeg`

## Installation

### 1. Clone Repository
```bash
git clone https://github.com/zuamaasyabiycode/Apaya.git
cd Apaya
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
```bash
# Copy file .env.example ke .env
cp .env.example .env

# Edit .env dan tambahkan API keys (optional)
# - HUGGINGFACE_API_KEY: Dari https://huggingface.co/settings/tokens
# - REPLICATE_API_TOKEN: Dari https://replicate.com/account
```

## Running the Application

### Development Mode
```bash
npm run dev
```

Akan auto-reload saat ada perubahan file.

### Production Mode
```bash
npm start
```

## Access the Application

Buka browser dan kunjungi:
```
http://localhost:3000
```

## Project Structure

```
Apaya/
├── public/                 # Frontend files
│   ├── index.html         # Main HTML
│   ├── js/
│   │   ├── main.js        # Application logic
│   │   ├── scene.js       # Three.js setup
│   │   ├── animation.js   # Animation controller
│   │   └── ai-generator.js # AI integration
│   └── style/             # CSS (di-embed di index.html)
├── src/
│   └── api/
│       └── server.js      # Express backend
├── package.json           # Dependencies
├── .env.example           # Environment template
└── README.md             # Documentation
```

## Features

### ✨ Supported Styles

1. **Modern** - Clean 3D cube dengan rotasi smooth
2. **Cyberpunk** - Neon glow effect dengan particles
3. **Minimalist** - Wireframe sphere dengan smooth animation
4. **Abstract** - Colorful sphere dengan particle effects
5. **Organic** - Wave motion dan pulsing animation

### 🎮 Controls

- **Prompt**: Deskripsi motion graphic yang diinginkan
- **Duration**: Durasi animasi (1-30 detik)
- **Style**: Pilih gaya visual
- **Generate**: Buat motion graphic
- **Clear**: Reset aplikasi

## API Integration

### 1. Hugging Face Inference API (Free Tier)

```javascript
// Update di public/js/ai-generator.js
const HF_API_KEY = 'your_huggingface_api_key';

// Get API Key: https://huggingface.co/settings/tokens
```

### 2. Replicate API (Free Tier)

```javascript
// Update di src/api/server.js
const REPLICATE_API_TOKEN = 'your_token';

// Get API Key: https://replicate.com/account
```

### 3. Backend Integration

```javascript
// POST /api/generate
// Receive: { prompt, style, duration }
// Return: { success, videoUrl, status }
```

## Video Export

Untuk export hasil sebagai video MP4:

```bash
# Memerlukan ffmpeg yang sudah ter-install
# Fitur akan di-implement di /api/export endpoint
```

## Troubleshooting

### Port 3000 sudah digunakan?
```bash
# Ubah PORT di .env
PORT=3001
```

### Canvas tidak render?
- Cek console browser (F12 → Console)
- Pastikan WebGL support tersedia

### API Error?
- Periksa internet connection
- Verifikasi API keys di .env
- Cek CORS settings di server.js

## Development Tips

### 1. Debug Mode
```javascript
// Tambah di console browser:
console.log(motionScene);
console.log(animationController);
```

### 2. Custom Animations
Edit file `public/js/main.js` untuk menambah gaya baru:

```javascript
function createCustomAnimation(duration) {
    const object = motionScene.createCube('modern');
    motionScene.addObject(object);
    
    // Add custom animation logic
    animationController.rotateObject(object, 0.05);
}
```

### 3. Three.js Resources
- Docs: https://threejs.org/docs/
- Examples: https://threejs.org/examples/

## Performance Optimization

1. **Reduce particle count** - Ubah di `scene.js` line 76
2. **Lower resolution** - Ubah canvas size di CSS
3. **Simplify geometry** - Kurangi `IcosahedronGeometry` segmentation

## Next Steps

- [ ] Implement actual AI image generation
- [ ] Add video export functionality
- [ ] Create more animation presets
- [ ] Add sound visualization
- [ ] Mobile responsive improvements
- [ ] Implement real-time preview

## Contributing

Untuk kontribusi:
1. Fork repository
2. Buat branch baru (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buat Pull Request

## License

MIT License - Bebas digunakan untuk project personal maupun commercial.

## Support

Jika ada pertanyaan atau issue, buka GitHub Issues di:
https://github.com/zuamaasyabiycode/Apaya/issues

---

**Happy Creating! 🎬✨**
