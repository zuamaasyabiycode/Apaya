// Animation.js - Animation Logic
class AnimationController {
    constructor(scene) {
        this.scene = scene;
        this.animations = [];
    }

    rotateObject(object, speed = 0.01) {
        const animation = () => {
            object.rotation.x += speed;
            object.rotation.y += speed;
        };
        this.animations.push(animation);
        return animation;
    }

    scaleObject(object, duration = 2000) {
        const startTime = Date.now();
        const startScale = object.scale.copy(object.scale);
        const targetScale = new THREE.Vector3(1.5, 1.5, 1.5);

        const animation = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            object.scale.lerpVectors(startScale, targetScale, progress);
        };
        
        this.animations.push(animation);
        return animation;
    }

    moveObject(object, endPosition, duration = 2000) {
        const startTime = Date.now();
        const startPos = object.position.clone();

        const animation = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            object.position.lerpVectors(startPos, endPosition, progress);
        };

        this.animations.push(animation);
        return animation;
    }

    fadeInOut(object, duration = 2000, fadeIn = true) {
        const startTime = Date.now();
        const startOpacity = fadeIn ? 0 : 1;
        const targetOpacity = fadeIn ? 1 : 0;

        const animation = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            object.material.opacity = startOpacity + (targetOpacity - startOpacity) * progress;
        };

        object.material.transparent = true;
        this.animations.push(animation);
        return animation;
    }

    pulseObject(object, speed = 0.02, intensity = 0.3) {
        let time = 0;
        const initialScale = object.scale.clone();

        const animation = () => {
            time += speed;
            const scale = 1 + Math.sin(time) * intensity;
            object.scale.copy(initialScale).multiplyScalar(scale);
        };

        this.animations.push(animation);
        return animation;
    }

    orbitObject(object, targetPos, radius = 5, speed = 0.01) {
        let angle = 0;

        const animation = () => {
            angle += speed;
            object.position.x = targetPos.x + Math.cos(angle) * radius;
            object.position.y = targetPos.y + Math.sin(angle) * radius;
        };

        this.animations.push(animation);
        return animation;
    }

    updateAnimations() {
        this.animations.forEach(anim => anim());
    }

    clearAnimations() {
        this.animations = [];
    }
}

// Instantiate globally
let animationController;