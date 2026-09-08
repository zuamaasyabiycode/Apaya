// server.js - Express Backend
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// API endpoint for generating motion graphics
app.post('/api/generate', async (req, res) => {
    try {
        const { prompt, style, duration } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        // TODO: Integrate with AI APIs (Replicate, Hugging Face, etc.)
        // For now, this is a placeholder that returns success
        const result = {
            success: true,
            message: 'Motion graphic generation started',
            prompt,
            style,
            duration,
            status: 'processing',
            // In production, this would return the generated video URL
            videoUrl: null
        };

        res.json(result);
    } catch (error) {
        console.error('Generation error:', error);
        res.status(500).json({ error: error.message });
    }
});

// API endpoint for video export (placeholder)
app.post('/api/export', async (req, res) => {
    try {
        const { frameData, duration, fps } = req.body;

        // TODO: Use FFmpeg to convert frame data to video
        // This would require additional setup with ffmpeg-python or similar

        res.json({
            success: true,
            message: 'Export started',
            downloadUrl: '/downloads/motion-graphic.mp4'
        });
    } catch (error) {
        console.error('Export error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Apaya server is running' });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Apaya server running on http://localhost:${PORT}`);
    console.log(`📝 API endpoint: http://localhost:${PORT}/api`);
});
