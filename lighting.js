import * as THREE from 'three'

const ambientLight = new THREE.AmbientLight(0xffffff, 0.9)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
directionalLight.position.set(0, 50, -30)
directionalLight.castShadow = true
directionalLight.shadow.camera.left = -200
directionalLight.shadow.camera.right = 200
directionalLight.shadow.camera.top = 200
directionalLight.shadow.camera.bottom = -200
directionalLight.shadow.camera.far = 1000

export {
    ambientLight, directionalLight
}