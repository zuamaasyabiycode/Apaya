# Apaya - AI Motion Graphics Generator

Aplikasi untuk membuat motion graphic menggunakan AI secara gratis.

## 🎯 Fitur
- Generate motion graphics dengan AI
- Menggunakan library open-source dan free tier API
- Web-based interface
- Export video output

## 🛠️ Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript
- **Animation**: Three.js / Babylon.js
- **AI Models**: Replicate API (free tier) atau Hugging Face
- **Video**: FFmpeg
- **Backend**: Node.js (optional)

## 📦 Tools Gratis yang Digunakan
1. **Three.js** - 3D graphics library
2. **Replicate API** - Free tier untuk AI models
3. **Hugging Face** - Free inference API
4. **FFmpeg** - Video processing
5. **Animejs** - Animation library

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm atau yarn
- FFmpeg (untuk export video)

### Installation

```bash
git clone https://github.com/zuamaasyabiycode/Apaya.git
cd Apaya
npm install
```

### Usage

```bash
npm start
```

Buka browser di `http://localhost:3000`

## 📝 Project Structure

```
Apaya/
├── public/
│   ├── index.html
│   └── style.css
├── src/
│   ├── js/
│   │   ├── scene.js          # Three.js scene setup
│   │   ├── ai-generator.js   # AI prompt & generation
│   │   └── animation.js       # Animation logic
│   └── api/
│       └── server.js          # Backend (optional)
├── package.json
└── README.md
```

## 📚 Resources
- [Three.js Docs](https://threejs.org/docs/)
- [Replicate API](https://replicate.com/) (Free tier available)
- [Hugging Face Inference](https://huggingface.co/inference-api)
- [FFmpeg Guide](https://ffmpeg.org/documentation.html)

## 📄 License
MIT

---

**Created by:** zuamaasyabiycode
