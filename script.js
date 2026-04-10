// MOBILE MENU
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.onclick = () => {
  nav.classList.toggle("active");
};

// GSAP ANIMATION
gsap.from(".hero h1", {
  y: -50,
  opacity: 0,
  duration: 1
});

gsap.from(".hero p", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.3
});

// THREE.JS 3D DUMBBELL
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("gym3d"), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// LIGHT
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5,5,5);
scene.add(light);

// DUMBBELL (simple)
const material = new THREE.MeshStandardMaterial({ color: 0xff3c00 });

// center bar
const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,3), material);

// weights
const weight1 = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,0.5), material);
weight1.position.x = -1.5;

const weight2 = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,0.5), material);
weight2.position.x = 1.5;

scene.add(bar, weight1, weight2);

camera.position.z = 5;

// ANIMATION LOOP
function animate(){
  requestAnimationFrame(animate);

  bar.rotation.x += 0.01;
  bar.rotation.y += 0.01;
  weight1.rotation.x += 0.01;
  weight2.rotation.x += 0.01;

  renderer.render(scene, camera);
}

animate();

// RESPONSIVE
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
});