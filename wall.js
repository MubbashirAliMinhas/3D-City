import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(20, 2, 10);
const texture_loader = new THREE.TextureLoader();
const texture_wall = texture_loader.load('textures/wall/brickswall.jpg');
//const geometry = new THREE.BoxGeometry( 50, 20, 1);
const material = new THREE.MeshStandardMaterial( { map:texture_wall} );

export const wall = (direction='F') => {
    const wall = new THREE.Mesh( geometry, material);
    wall.position.z = 5
    wall.castShadow = true
    wall.receiveShadow = true
    let translate = null
    if (direction == 'B') {
        translate = [0, 8]
    } else if (direction == 'L') {
        wall.rotation.z = Math.PI / 2
        translate = [-9, 0]
    } else if (direction == 'R') {
        wall.rotation.z = Math.PI / 2
        translate = [9, 0]
    }
    return [wall, geometry.parameters, translate]
}
