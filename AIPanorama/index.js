import { OrbitControls } from "./js/OrbitControls.js";
import * as THREE from "./js/three.module.js";

//---- Credit to: https://www.youtube.com/watch?feature=shared&v=v2eLLBUxQiQ ----//

// Select the container for the scene
const container = document.getElementById("pan-container");

// Create the camera, and renderer
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Set up the camera and controls
camera.position.set(0, 0, 0.1);

const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.autoRotateSpeed = 0.05;
controls.enableZoom = false;
controls.enablePan = false;
controls.rotateSpeed = 0.3;

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

class PanScene {
    sphere;
    scene;

	constructor(imagePath) {
        this.scene = new THREE.Scene();
		this.loadTexture(imagePath);
        this.animate = this.animate.bind(this);
        this.animate();
	}

	loadTexture(imagePath) {
		// Load the panoramic image and create a texture
		const material = new THREE.MeshBasicMaterial({
			map: new THREE.TextureLoader().load(imagePath),
		});

		// Create a spherical geometry and map the texture to it
		const geometry = new THREE.SphereGeometry(500, 60, 40);

		// Flip the geometry inside out
		geometry.scale(-1, 1, 1);

		this.sphere = new THREE.Mesh(geometry, material);
		this.scene.add(this.sphere);
	}

	animate() {
		requestAnimationFrame(this.animate);

		controls.update();
		renderer.render(this.scene, camera);
	}
}

const panorama = new PanScene("pana.jpg");

// slideshow controls
const worldPaths = ["pana.jpg","watercolor1.png", "watercolor2.png"];
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let index = 0;
prev.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = worldPaths.length - 1;
    }
    panorama = new PanScene(worldPaths[index]);
});
next.addEventListener("click", () => {
    index++;
    if (index >= worldPaths.length) {
        index = 0;
    }
    panorama = new PanScene(worldPaths[index]);
});

