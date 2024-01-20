import * as THREE from 'three'

const geometry = new THREE.BoxGeometry(20, 20, 20 );
const material = new THREE.MeshStandardMaterial( { color: 0xf5f4e4 } );
const cube = new THREE.Mesh( geometry, material );

const geometry3 = new THREE.BoxGeometry( 10, 12.1, 16 );
const material3 = new THREE.MeshStandardMaterial( { color: 0x1f1f1f } );

const geometry2 = new THREE.SphereGeometry( 8,40,30 );
const material2 = new THREE.MeshStandardMaterial( { color: 0xf5f4e4 } );

export const tomb = (direction='F') => {
    const cube = new THREE.Mesh( geometry, material );
    cube.castShadow = true
    cube.receiveShadow = true

    const cube2 = new THREE.Mesh( geometry3, material3 );
    cube2.position.y = -4
    cube2.position.z = -2
    cube2.castShadow = true
    cube2.receiveShadow = true
    cube.add( cube2 );

    const sphere = new THREE.Mesh( geometry2, material2 );
    sphere.position.z = 10
    sphere.castShadow = true
    sphere.receiveShadow = true
    cube.add( sphere );

    cube.position.z = 10

    if (direction == 'B') {
        cube.rotation.z = Math.PI
    } else if (direction == 'L') {
        cube.rotation.z = -Math.PI / 2
    } else if (direction == 'R') {
        cube.rotation.z = Math.PI / 2
    }

    return [cube, geometry.parameters]
}