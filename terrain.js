import * as THREE from 'three'

const terrainGeometry = new THREE.PlaneGeometry(150, 150, 10, 10)
const terrainMaterial = new THREE.MeshStandardMaterial({
})
export const terrain = new THREE.Mesh(terrainGeometry, terrainMaterial)
terrain.receiveShadow = true
terrain.rotateX(- Math.PI / 2)