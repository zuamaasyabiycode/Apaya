// Scene.js - Three.js Scene Setup
class MotionScene {
    constructor(canvasElement) {
        this.canvas = canvasElement;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75,
            canvasElement.clientWidth / canvasElement.clientHeight,
            0.1,
            1000
        );
        this.renderer = new THREE.WebGLRenderer({ 
            canvas: canvasElement, 
            antialias: true,
            alpha: true 
        });
        
        this.camera.position.z = 5;
        this.scene.background = new THREE.Color(0x000000);
        
        this.setupLights();
        this.setupRenderer();
        this.objects = [];
    }

    setupLights() {
        // Ambient Light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        // Directional Light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 5, 5);
        this.scene.add(directionalLight);

        // Point Light (Neon effect)
        const pointLight = new THREE.PointLight(0xff00ff, 1, 100);
        pointLight.position.set(0, 0, 5);
        this.scene.add(pointLight);
    }

    setupRenderer() {
        this.renderer.setSize(
            this.canvas.clientWidth,
            this.canvas.clientHeight
        );
        this.renderer.setPixelRatio(window.devicePixelRatio);
    }

    addObject(mesh) {
        this.objects.push(mesh);
        this.scene.add(mesh);
    }

    createCube(style = 'modern') {
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        let material;

        if (style === 'cyberpunk') {
            material = new THREE.MeshStandardMaterial({ 
                color: 0xff00ff,
                emissive: 0xff00ff,
                metalness: 0.8,
                roughness: 0.2
            });
        } else if (style === 'minimalist') {
            material = new THREE.MeshStandardMaterial({ 
                color: 0xffffff,
                metalness: 0.3,
                roughness: 0.4
            });
        } else {
            material = new THREE.MeshStandardMaterial({ 
                color: 0x667eea,
                emissive: 0x667eea,
                metalness: 0.5,
                roughness: 0.5
            });
        }

        const cube = new THREE.Mesh(geometry, material);
        return cube;
    }

    createSphere(style = 'modern') {
        const geometry = new THREE.IcosahedronGeometry(1.5, 4);
        let material;

        if (style === 'abstract') {
            material = new THREE.MeshStandardMaterial({ 
                color: 0x00ff88,
                emissive: 0x00ff88,
                wireframe: false
            });
        } else {
            material = new THREE.MeshStandardMaterial({ 
                color: 0x764ba2,
                emissive: 0x764ba2
            });
        }

        const sphere = new THREE.Mesh(geometry, material);
        return sphere;
    }

    addParticles() {
        const particleCount = 100;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 10;
            positions[i + 1] = (Math.random() - 0.5) * 10;
            positions[i + 2] = (Math.random() - 0.5) * 10;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const material = new THREE.PointsMaterial({
            color: 0x00ffff,
            size: 0.1
        });

        const particles = new THREE.Points(geometry, material);
        this.scene.add(particles);
        return particles;
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    animate(callback) {
        const animate = () => {
            requestAnimationFrame(animate);
            callback();
            this.render();
        };
        animate();
    }

    dispose() {
        this.renderer.dispose();
        this.objects.forEach(obj => {
            obj.geometry.dispose();
            obj.material.dispose();
        });
    }

    onWindowResize() {
        const width = this.canvas.clientWidth;
        const height = this.canvas.clientHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
}