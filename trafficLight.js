import * as THREE from 'three'

const geometry = new THREE.BoxGeometry( 2, 5, 2 );
const material = new THREE.MeshStandardMaterial( { color: 0xf5f4e4 } );  // top 

const geometry2 = new THREE.BoxGeometry( 1, 6, 1 );
const material2 = new THREE.MeshStandardMaterial( { color: 0xf5f4e4 } );   // Bottom stand

const geometry3 = new THREE.SphereGeometry( 0.8 ,40,30 );
const material3 = new THREE.MeshStandardMaterial( { color: 0xFF0000 } );  // Red

const material4 = new THREE.MeshStandardMaterial( { color: 0xFFFF000 } ); // Yellow
const sphere2 = new THREE.Mesh( geometry3, material4 );

const material5 = new THREE.MeshStandardMaterial( { color: 0x00FF00 } );  // Green
const sphere5 = new THREE.Mesh( geometry3, material5 );

export const trafficLights = (direction='R') => {
    const cube = new THREE.Mesh( geometry, material );
    const cube2 = new THREE.Mesh( geometry2, material2 );
    cube2.castShadow = true
    cube2.receiveShadow = true
    cube2.position.y = -5
    cube.add( cube2 );

    const sphere = new THREE.Mesh( geometry3, material3 );
    sphere.position.x = 1
    sphere.position.y = 1.5
    sphere.castShadow = true
    sphere.receiveShadow = true
    cube.add( sphere );

    sphere2.position.x = 1
    sphere2.position.y = -0.1
    sphere2.castShadow = true
    sphere2.receiveShadow = true
    cube.add( sphere2 );

    sphere5.position.x = 1
    sphere5.position.y = -1.7
    sphere5.castShadow = true
    sphere5.receiveShadow = true
    cube.add( sphere5 );
    
    cube.rotation.x = Math.PI / 2
    cube.position.z = 8

    if (direction == 'F') {
        cube.rotation.y = -Math.PI / 2
    } else if (direction == 'B') {
        cube.rotation.y = Math.PI / 2
    } else if (direction == 'L') {
        cube.rotation.y = Math.PI
    }
    cube.castShadow = true
    cube.receiveShadow = true

    return [cube, {width: 10, height: 10}]
}