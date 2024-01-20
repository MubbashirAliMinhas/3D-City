import * as THREE from 'three'

const buildingGeometry = new THREE.BoxGeometry(20, 30, 15)
const buildingMaterial = new THREE.MeshStandardMaterial({
    color: 0xfb8e00
})

export const building2 = (direction='V') => {
    const building = new THREE.Mesh(buildingGeometry, buildingMaterial)
    building.castShadow = true
    building.receiveShadow = true
    building.position.z = 15 / 2

    let translate = null

    if (direction == 'H') {
        building.rotation.z = Math.PI / 2
        translate = [5, -5]
    }

    return [building, buildingGeometry.parameters, translate]
}