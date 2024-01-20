import { TDSLoader } from 'three/examples/jsm/loaders/TDSLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

var scene, camera, renderer, intensity, hlight;
 scene = new THREE.Scene();
 camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight ,1 ,5000);
 camera.position.set(0,0,5);
 scene.background = new THREE.Color(0xf7f7f7);
 
intensity = 4

hlight = new THREE.AmbientLight(0x404040, intensity);
 scene.add(hlight)
 renderer = new THREE.WebGLRenderer({
    antialias:true,
    canvas:document.querySelector(".three-webgl")
  });
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
 
const loader = new GLTFLoader()
const gltfScene = await loader.loadAsync('models/running_boy/scene.gltf')
const model = gltfScene.scene
model.scale.set(0.25, 0.25, 0.25)

const tLoader = new TDSLoader()
const tree = await tLoader.loadAsync('models/tree1_3ds/Tree1.3ds')
tree.scale.set(0.1, 0.1, 0.1)
tree.rotation.x = -Math.PI / 2
scene.add(tree)

 function animate() {
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }
  
 animate();