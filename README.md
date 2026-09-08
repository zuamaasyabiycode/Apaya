# 🎬 Apaya - AI Motion Graphics Generator

**Buat motion graphic stunning dengan AI secara 100% GRATIS!** 🎨✨

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-16+-green)](https://nodejs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-r128-blue)](https://threejs.org/)

## 🌟 Fitur Utama

✅ **Generate Motion Graphics** - Buat animasi 3D dengan AI  
✅ **5 Gaya Berbeda** - Modern, Cyberpunk, Minimalist, Abstract, Organic  
✅ **Real-time Preview** - Lihat hasil langsung di browser  
✅ **100% Open Source** - Gratis selamanya  
✅ **Web-based UI** - Tidak perlu install aplikasi berat  
✅ **Export Video** - Simpan hasil sebagai MP4  

## 🛠️ Tech Stack

| Component | Technology | Reason |
|-----------|-----------|--------|
| **3D Graphics** | Three.js | WebGL rendering, lightweight |
| **Backend** | Express.js | Simple, fast, Node.js based |
| **Frontend** | Vanilla JS | No dependencies, pure performance |
| **AI Integration** | Replicate / HF | Free tier API tersedia |
| **Video Export** | FFmpeg | Best compression & quality |
| **Styling** | CSS3 | Responsive design |

## 🚀 Quick Start (3 Menit)

### 1️⃣ Clone Repository
```bash
git clone https://github.com/zuamaasyabiycode/Apaya.git
cd Apaya
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run Server
```bash
npm start
```

### 4️⃣ Akses di Browser
```
http://localhost:3000
```

**Selesai! Mulai buat motion graphic Anda! 🎉**

## 📋 Detailed Setup Guide

Lihat file [SETUP.md](./SETUP.md) untuk panduan lengkap dengan screenshots.

## 🎨 Gaya yang Tersedia

### 🎯 Modern
- Smooth 3D cube rotation
- Gradient colors
- Clean aesthetic

### ⚡ Cyberpunk
- Neon glow effects
- Magenta color scheme
- Particle effects
- Futuristic vibes

### 🎪 Minimalist
- Wireframe sphere
- White on black
- Subtle animations
- Elegant design

### 🌈 Abstract
- Colorful sphere
- Green neon lights
- Multiple particles
- Dynamic movement

### 🌿 Organic
- Wave motion
- Pulsing animation
- Natural flow
- Smooth transitions

## 💻 How to Use

### Interface Walkthrough

```
┌─────────────────────────────────────┐
│  🎬 Apaya - Motion Graphics Gen     │
├─────────────────────────────────────┤
│                                     │
│  📝 Prompt:                         │
│  [Enter your creative description]  │
│                                     │
│  ⏱️  Duration: [1-30 seconds]        │
│  🎭 Style: [Select style dropdown]  │
│                                     │
│  [Generate] [Clear]                 │
│                                     │
│  ┌─────────────────────────────────┐│
│  │  [3D Animation Preview Here]    ││
│  └──���──────────────────────────────┘│
│                                     │
└─────────────────────────────────────┘
```

### Step-by-Step

1. **Buka aplikasi** → http://localhost:3000
2. **Ketik prompt** → Deskripsikan motion graphic yang Anda inginkan
3. **Set durasi** → Pilih berapa lama animasi (1-30 detik)
4. **Pilih gaya** → Modern, Cyberpunk, Minimalist, Abstract, atau Organic
5. **Click Generate** → Tunggu proses selesai
6. **Lihat preview** → 3D animation akan tampil di layar
7. **Export (opsional)** → Simpan sebagai MP4

## 📁 Project Structure

```
Apaya/
│
├── public/                    # Frontend files
│   ├── index.html            # Main UI
│   └── js/
│       ├── main.js           # Application logic
│       ├── scene.js          # Three.js scene setup
│       ├── animation.js      # Animation controller
│       └── ai-generator.js   # AI API integration
│
├── src/                      # Backend files
│   └── api/
│       └── server.js         # Express server
│
├── package.json              # Dependencies & scripts
├── .env.example              # Environment template
├── .gitignore               # Git ignore rules
├── SETUP.md                 # Detailed setup guide
└── README.md                # This file
```

## 🔗 API Endpoints

### Generate Motion
```
POST /api/generate
Body: {
  "prompt": "string",
  "style": "modern|cyberpunk|minimalist|abstract|organic",
  "duration": number (1-30)
}
Response: {
  "success": boolean,
  "message": string,
  "videoUrl": string
}
```

### Export Video
```
POST /api/export
Body: {
  "frameData": array,
  "duration": number,
  "fps": number
}
Response: {
  "success": boolean,
  "downloadUrl": string
}
```

### Health Check
```
GET /api/health
Response: { "status": "ok" }
```

## 🎓 Learning Resources

### Untuk Beginners
- [Three.js Tutorial](https://threejs.org/docs/) - 3D graphics basics
- [Express.js Guide](https://expressjs.com/en/starter/basic-routing.html) - Backend fundamentals
- [JavaScript ES6](https://www.w3schools.com/js/js_es6.asp) - Modern JS syntax

### Untuk Advanced
- [Three.js Examples](https://threejs.org/examples/) - Advanced 3D techniques
- [Web Performance](https://web.dev/performance/) - Optimization tips
- [AI/ML APIs](https://huggingface.co/) - Machine learning integration

## 🤖 AI Integration

### Opsi 1: Hugging Face (Recommended)
```bash
# 1. Sign up di https://huggingface.co
# 2. Get API key dari https://huggingface.co/settings/tokens
# 3. Update di public/js/ai-generator.js
```

### Opsi 2: Replicate
```bash
# 1. Sign up di https://replicate.com
# 2. Get API token dari https://replicate.com/account
# 3. Update di src/api/server.js
```

### Opsi 3: Local Models
```bash
# Bisa gunakan Ollama untuk run models secara local
# Install: https://ollama.ai
```

## 🐛 Troubleshooting

### ❌ Port 3000 already in use?
```bash
# Method 1: Kill process
lsof -ti:3000 | xargs kill -9

# Method 2: Use different port
PORT=3001 npm start
```

### ❌ Canvas tidak render?
- Cek console browser (F12)
- Pastikan WebGL support aktif
- Try a different browser (Chrome/Firefox recommended)

### ❌ npm install error?
```bash
# Clear cache dan coba lagi
npm cache clean --force
npm install
```

### ❌ FFmpeg not found?
```bash
# Windows: Download dari ffmpeg.org
# macOS: brew install ffmpeg
# Linux: sudo apt-get install ffmpeg
```

## 🤝 Contributing

Kami welcome kontribusi! Ikuti steps ini:

1. **Fork** repository ini
2. **Buat branch** baru: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** ke branch: `git push origin feature/amazing-feature`
5. **Buka Pull Request**

### Issues yang Welcome
- 🐛 Bug reports
- 💡 Feature requests
- 📝 Documentation improvements
- ✨ UI/UX enhancements

## 📊 Roadmap

- [x] Basic 3D animation engine
- [x] Multiple animation styles
- [ ] AI image generation integration
- [ ] Video export to MP4
- [ ] Sound/music synchronization
- [ ] More animation presets
- [ ] Mobile app version
- [ ] Collaboration features
- [ ] Animation library/templates
- [ ] Real-time rendering farm

## 📄 License

MIT License - Bebas digunakan untuk project personal maupun commercial.

```
Copyright (c) 2024 zuamaasyabiycode

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

Full license: [LICENSE](./LICENSE)

## 👨‍💻 Author

**zuamaasyabiycode**
- GitHub: [@zuamaasyabiycode](https://github.com/zuamaasyabiycode)
- Project: [Apaya - AI Motion Graphics](https://github.com/zuamaasyabiycode/Apaya)

## 💬 Support & Community

- 💬 Buka [GitHub Issues](https://github.com/zuamaasyabiycode/Apaya/issues) untuk bug reports
- 💡 Diskusi features di [GitHub Discussions](https://github.com/zuamaasyabiycode/Apaya/discussions)
- 🌟 Star ⭐ repository ini jika bermanfaat!

## 🎁 Bonus Resources

### 30+ Free Motion Graphics Assets
- [Mixkit](https://mixkit.co/)
- [Pixabay](https://pixabay.com/videos/)
- [Pexels](https://www.pexels.com/videos/)

### Music & Sound Effects
- [Pixabay Music](https://pixabay.com/music/)
- [Freepik](https://www.freepik.com/)
- [Epidemic Sound](https://www.epidemicsound.com/) (free trial)

---

<div align="center">

### Enjoy Creating! 🎬✨

Made with ❤️ by **zuamaasyabiycode**

⭐ Don't forget to star this project! ⭐

</div>
