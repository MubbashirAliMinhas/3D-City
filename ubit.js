import * as THREE from 'three'

const geometry = new THREE.BoxGeometry( 20, 20, 20 );
const material = new THREE.MeshStandardMaterial( { color: 0xfcdebb } );

const geometry3 = new THREE.BoxGeometry( 10, 14, 20.1 );           // window
const material3 = new THREE.MeshStandardMaterial( { color: 0x1f1f1f } );

const geometry4 = new THREE.BoxGeometry( 60, 16, 16 );           // siding

const geometry2 = new THREE.SphereGeometry(8, 40, 30);


export const ubit = (direction='H') => {
    const cube = new THREE.Mesh( geometry, material );
    cube.castShadow = true
    cube.receiveShadow = true

    const cube2 = new THREE.Mesh( geometry3, material3 );
    cube2.position.y = -3
    cube2.castShadow = true
    cube2.receiveShadow = true
    cube.add( cube2 );

    const cube3 = new THREE.Mesh( geometry4, material );
    cube3.position.y = -2
    cube3.castShadow = true
    cube3.receiveShadow = true
    cube.add( cube3 );

    const sphere = new THREE.Mesh( geometry2, material );
    sphere.position.y = 7
    sphere.castShadow = true
    sphere.receiveShadow = true
    cube.add( sphere );

    cube.rotation.x = Math.PI / 2
    cube.position.z = 10

    let translate = null
    if (direction == 'V') {
        cube.rotation.y = Math.PI / 2
        translate = [-20, 20]
    }
    return [cube, {width: 60, height: 20}, translate]
}