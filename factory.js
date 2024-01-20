import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { camera } from './camera'
import { ambientLight, directionalLight } from './lighting'
import { skyBox } from './skybox'
import { terrain } from './terrain'
import { plot } from './utils'
import { road } from './roads'
import { building } from './building'
import { mazar } from './QuaidMazar'
import { signBoard } from './signBoard'
import { Masjid } from './Masjid'
import { building2 } from './building2'
import { wall } from './wall'
import { tree } from './tree'
import { trafficLights } from './trafficLight'
import { ubit } from './ubit'
import { tomb } from './tomb'
import { bus } from './bus'

const roadTexture = new THREE.TextureLoader().load('textures/unsplash.jpg')

const scene = new THREE.Scene()
scene.add(skyBox)
scene.add(terrain)

export const bBoxArray = []

plot(1, 0, road('2-1', 'V'))
plot(1, 1, road('2-1', 'V'))
plot(1, 2, road('2-1', 'V'))
plot(1, 3, road('2-1', 'V'))
plot(1, 4, road('3', 'R'))
plot(1, 5, road('2-1', 'V'))
plot(1, 6, road('2-1', 'V'))
plot(1, 7, road('2-1', 'V'))
plot(1, 8, road('2-1', 'V'))
plot(1, 9, road('4'))
plot(1, 10, road('2-1', 'V'))
plot(1, 11, road('2-1', 'V'))
plot(1, 12, road('2-1', 'V'))
plot(1, 13, road('2-1', 'V'))
plot(1, 14, road('2-1', 'V'))

plot(2, 4, road('2-1', 'H'))
plot(3, 4, road('2-1', 'H'))
plot(4, 4, road('2-1', 'H'))
plot(5, 4, road('2-1', 'H'))
plot(6, 4, road('2-1', 'H'))
plot(7, 4, road('2-1', 'H'))
plot(8, 4, road('2-1', 'H'))
plot(9, 4, road('3', 'U'))
plot(10, 4, road('2-1', 'H'))
plot(11, 4, road('2-1', 'H'))
plot(12, 4, road('2-1', 'H'))
plot(13, 4, road('3', 'D'))
plot(14, 4, road('2-1', 'H'))

plot(0, 9, road('2-1', 'H'))
plot(2, 9, road('2-1', 'H'))
plot(3, 9, road('2-1', 'H'))
plot(4, 9, road('2-1', 'H'))
plot(5, 9, road('2-1', 'H'))
plot(6, 9, road('2-1', 'H'))
plot(7, 9, road('2-1', 'H'))
plot(8, 9, road('2-1', 'H'))
plot(9, 9, road('4'))
plot(10, 9, road('2-1', 'H'))
plot(11, 9, road('2-1', 'H'))
plot(12, 9, road('2-1', 'H'))
plot(13, 9, road('2-1', 'H'))
plot(14, 9, road('2-1', 'H'))

plot(9, 5, road('2-1', 'V'))
plot(9, 6, road('2-1', 'V'))
plot(9, 7, road('2-1', 'V'))
plot(9, 8, road('2-1', 'V'))
plot(9, 10, road('2-1', 'V'))
plot(9, 11, road('2-1', 'V'))
plot(9, 12, road('2-1', 'V'))
plot(9, 13, road('2-1', 'V'))
plot(9, 14, road('2-1', 'V'))

plot(13, 0, road('2-1', 'V'))
plot(13, 1, road('2-1', 'V'))
plot(13, 2, road('2-1', 'V'))
plot(13, 3, road('2-1', 'V'))

plot(0, 6, building())
plot(0, 7, building())
plot(10, 2, signBoard('H'))
plot(3, 5, ubit('H'))
plot(2, 12, tomb('F'))
plot(6, 10, Masjid())
plot(10, 10, wall('F'))
plot(12, 10, building2('H'))

plot(2, 3, trafficLights('B'))
plot(10, 5, trafficLights('L'))
plot(2, 8, await tree())
plot(8, 8, await tree())

plot(12, 5, mazar('F'))
plot(1, 3, bus('L'))
plot(8, 4, bus('R'))

console.log(bBoxArray)

const comparator = objectsBBox => {
  objectsBBox.forEach(bBox => {
    if (camera.position.x == bBox.min.x || camera.position.x == bBox.max.x) {
      console.log('x is hit')
      console.log(bBox, camera.position.x)
    }
  })
}

scene.add(ambientLight)
scene.add(directionalLight)

const loader = new GLTFLoader()

// loader.load('/vite-project/material/assets/scene.gltf', function(gltf){
// 	scene.add(gltf.scene);
// 	const car = gltf.scene.children[0];
// 	car.scale.set(0.1, 0.1, 0.1);
// 	car.position.set(0,0,0);
// 	renderer.render(scene,camera);
// })

scene.add( new THREE.CameraHelper( directionalLight.shadow.camera ) );

// addEventListener('mousemove', (e) => {
//   const mouseX = e.clientX - (innerWidth / 2)
//   const mouseY = e.clientY - (innerHeight / 2)
//   camera.rotateX(mouseX * 0.00001)
//   camera.rotateY(mouseY * 0.00001)
// })

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('.three-webgl'),
  antialias: true
})
renderer.setSize(innerWidth, innerHeight)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

// const mouse = new THREE.Vector2()
// addEventListener('mousemove', (e) => {
//   mouse.x = e.clientX - (innerHeight / 2)
//   mouse.y = e.clientY - (innerWidth / 2)
//   cube.rotation.set(-mouse.x * 0.01, mouse.y * 0.01, 0)
// })

// const [left1, bottom1, width1, height1] = [0, 0, innerWidth / 2, innerHeight]
// const [left2, bottom2, width2, height2] = [innerWidth / 2 + 1, 0, innerWidth / 2, innerHeight]

// const camera2 = new THREE.PerspectiveCamera(25, width2 / innerHeight, 0.1, 1000)
// camera2.translateY(400)
// camera2.rotateX(-Math.PI / 2)

// export const render = () => {
//     // viewport 1
//     renderer.setViewport(left1, bottom1, width1, height1)
//     renderer.setScissor(left1, bottom1, width1, height1)
//     renderer.setScissorTest(true)
//     renderer.render(scene, camera)
    
//     // viewport 2
//     renderer.setViewport(left2, bottom2, width2, height2)
//     renderer.setScissor(left2, bottom2, width2, height2)
//     renderer.setScissorTest(true)
//     renderer.render(scene, camera2)
// }

export const render = () => {
  renderer.render(scene, camera)
}

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(innerWidth, innerHeight)
})