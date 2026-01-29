<template>
  <div ref="container" class="scene-container"></div>
</template>

<script setup>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { onMounted, onUnmounted, ref } from "vue";

const container = ref(null);
let scene, camera, renderer, airplane, animationFrame;

onMounted(() => {
  initScene();
  loadModel();
  animate();

  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onResize);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onResize);

  cancelAnimationFrame(animationFrame);
  renderer.dispose();
});

function initScene() {
  scene = new THREE.Scene();

  const w = window.innerWidth;
  const h = window.innerHeight;

  camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 2000);

  // câmera distante → avião pequeno
  camera.position.set(0, 1, 10);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(w, h);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.value.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 0.8));

  const dir = new THREE.DirectionalLight(0xffffff, 1.5);
  dir.position.set(5, 5, 10);
  scene.add(dir);
}

function loadModel() {
  const loader = new GLTFLoader();
  const url = new URL("@/assets/airplane.glb", import.meta.url).href;

  loader.load(url, (gltf) => {
    airplane = gltf.scene;

    // Tamanho inicial
    airplane.scale.set(0.25, 0.25, 0.25);

    scene.add(airplane);

    // Primeiro: centraliza e ajusta o modelo à câmera
    fitModelToCamera(airplane);

    // Depois: desloca para a esquerda
    // valor negativo = esquerda
    airplane.position.x -= 2.5; // ajuste fino aqui (entre -1 e -5 normalmente)
    onScroll();
  });
}

// Ajusta enquadramento automático do modelo
function fitModelToCamera(model) {
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3()).length();
  const center = box.getCenter(new THREE.Vector3());

  model.position.x -= center.x;
  model.position.y -= center.y;
  model.position.z -= center.z;

  camera.position.z = size * 0.8; // distância ideal
}

function animate() {
  animationFrame = requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

function onScroll() {
  if (!airplane) return;

  // Quanto do scroll total da página foi percorrido
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scroll = window.scrollY;

  // Normalização para 0..1
  let t = scroll / maxScroll;
  t = Math.min(Math.max(t, 0), 1); // clamp

  // MOVIMENTO NATURAL
  // --------------------------------------------------

  // Curvas suaves
  const curve = t * 1.2;

  // 1. Avião diminui de tamanho
  const scale = 1 - t * 0.9; // mínimo ~0.2
  airplane.scale.set(scale * 0.1, scale * 0.1, scale * 0.1);

  // 2. Avião sai pela direita
  // Quanto maior a distância, mais longe ele vai sumir
  airplane.position.x = t * 10;

  // 3. Pequena oscilação vertical
  airplane.position.y = Math.sin(t * 6) * 0.3;

  // 4. Rotação suave (mantém animação aérea)
  airplane.rotation.y = t * 3;
  airplane.rotation.x = Math.sin(t * 1.3) * 0.15;
  airplane.rotation.z = Math.sin(t * 1.8) * 0.25;

  // 5. Desaparecimento suave (opcional)
  if (scale < 0.1) {
    airplane.visible = false;
  } else {
    airplane.visible = true;
  }
}

function onResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  camera.aspect = w / h;
  camera.updateProjectionMatrix();

  renderer.setSize(w, h);
}
</script>

<style scoped>
.scene-container {
  width: 100%;
  height: 100vh; /* ocupa a tela inteira */
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none; /* evita interferir no scroll */
}
</style>
