import * as THREE from 'three'
import { randomRange } from './utils'

const buildingMaterial = new THREE.MeshStandardMaterial({
    color: 0xfcdebb
})

export const building = () => {
    const depth = randomRange(10, 40, 10)
    const buildingGeometry = new THREE.BoxGeometry(10, 10, depth)
    const building = new THREE.Mesh(buildingGeometry, buildingMaterial)
    building.position.z = depth / 2
    building.castShadow = true
    building.receiveShadow = true
    return [building, buildingGeometry.parameters]
}