// Main.js - Main Application Logic
let motionScene;
let animationController;
let isGenerating = false;

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    const canvas = document.getElementById('canvas');
    
    // Handle canvas sizing
    const preview = document.getElementById('preview');
    canvas.width = preview.clientWidth;
    canvas.height = preview.clientHeight;

    motionScene = new MotionScene(canvas);
    animationController = new AnimationController(motionScene);

    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = preview.clientWidth;
        canvas.height = preview.clientHeight;
        motionScene.onWindowResize();
    });
}

function setupEventListeners() {
    const generateBtn = document.getElementById('generateBtn');
    const clearBtn = document.getElementById('clearBtn');

    generateBtn.addEventListener('click', handleGenerate);
    clearBtn.addEventListener('click', handleClear);
}

async function handleGenerate() {
    if (isGenerating) return;

    const prompt = document.getElementById('prompt').value;
    const duration = parseInt(document.getElementById('duration').value);
    const style = document.getElementById('style').value;

    if (!prompt.trim()) {
        showStatus('Please enter a prompt', 'error');
        return;
    }

    isGenerating = true;
    const generateBtn = document.getElementById('generateBtn');
    const originalText = generateBtn.textContent;
    generateBtn.disabled = true;
    generateBtn.textContent = 'Generating...';

    try {
        showStatus('Generating motion graphic...', 'info');
        
        // Show preview and loading
        const preview = document.getElementById('preview');
        const loading = document.getElementById('loading');
        preview.classList.add('active');
        loading.classList.add('active');

        // Generate based on selected style
        await createAnimation(style, duration);

        // Start animation
        animationController.updateAnimations();
        motionScene.animate(() => {
            animationController.updateAnimations();
        });

        showStatus('Motion graphic generated successfully!', 'success');
    } catch (error) {
        console.error('Generation failed:', error);
        showStatus('Failed to generate motion graphic: ' + error.message, 'error');
    } finally {
        isGenerating = false;
        generateBtn.disabled = false;
        generateBtn.textContent = originalText;
        document.getElementById('loading').classList.remove('active');
    }
}

async function createAnimation(style, duration) {
    // Clear previous objects
    motionScene.scene.children = motionScene.scene.children.filter(child => 
        child instanceof THREE.Light
    );
    animationController.clearAnimations();

    switch(style) {
        case 'cyberpunk':
            createCyberpunkAnimation(duration);
            break;
        case 'minimalist':
            createMinimalistAnimation(duration);
            break;
        case 'abstract':
            createAbstractAnimation(duration);
            break;
        case 'organic':
            createOrganicAnimation(duration);
            break;
        default:
            createModernAnimation(duration);
    }
}

function createModernAnimation(duration) {
    const cube = motionScene.createCube('modern');
    motionScene.addObject(cube);

    animationController.rotateObject(cube, 0.02);
    animationController.pulseObject(cube, 0.03, 0.2);
}

function createCyberpunkAnimation(duration) {
    const cube = motionScene.createCube('cyberpunk');
    motionScene.addObject(cube);

    const particles = motionScene.addParticles();

    animationController.rotateObject(cube, 0.03);
    animationController.scaleObject(cube, duration * 100);

    // Animate particles
    let particleRotation = 0;
    animationController.animations.push(() => {
        particleRotation += 0.005;
        particles.rotation.x = particleRotation;
        particles.rotation.y = particleRotation;
    });
}

function createMinimalistAnimation(duration) {
    const sphere = motionScene.createSphere('minimalist');
    motionScene.addObject(sphere);

    sphere.material.wireframe = true;
    animationController.orbitObject(sphere, new THREE.Vector3(0, 0, 0), 3, 0.01);
}

function createAbstractAnimation(duration) {
    const sphere = motionScene.createSphere('abstract');
    motionScene.addObject(sphere);

    animationController.rotateObject(sphere, 0.015);
    animationController.pulseObject(sphere, 0.04, 0.25);

    const particles = motionScene.addParticles();
    animationController.rotateObject(particles, 0.008);
}

function createOrganicAnimation(duration) {
    const sphere = motionScene.createSphere('organic');
    motionScene.addObject(sphere);

    animationController.pulseObject(sphere, 0.025, 0.3);
    
    // Wave motion
    let time = 0;
    const initialPos = sphere.position.clone();
    animationController.animations.push(() => {
        time += 0.02;
        sphere.position.y = initialPos.y + Math.sin(time) * 0.5;
    });
}

function handleClear() {
    document.getElementById('prompt').value = '';
    document.getElementById('duration').value = '5';
    document.getElementById('style').value = 'modern';
    document.getElementById('preview').classList.remove('active');
    document.getElementById('status').classList.remove('active');
    
    if (motionScene) {
        motionScene.dispose();
        const canvas = document.getElementById('canvas');
        const preview = document.getElementById('preview');
        initializeApp();
    }
}

function showStatus(message, type = 'info') {
    const statusEl = document.getElementById('status');
    statusEl.textContent = message;
    statusEl.className = `status active ${type}`;
    
    if (type !== 'error') {
        setTimeout(() => {
            statusEl.classList.remove('active');
        }, 3000);
    }
}
