import * as THREE from 'three'

const geometry = new THREE.BoxGeometry( 10, 5, 5 );
const material = new THREE.MeshStandardMaterial( { color: 0xff293e } );

const geometry2 = new THREE.BoxGeometry( 4, 3, 5.1 );
const material2 = new THREE.MeshStandardMaterial( { color: 0x5089fa } );

const geometry3 = new THREE.CylinderGeometry( 1, 1, 6, 40 );
const material3 = new THREE.MeshStandardMaterial( {color: 0x1f1f1f } );

function wheels(xPos){
    const cylinder = new THREE.Mesh( geometry3, material3 );
    cylinder.castShadow = true
    cylinder.receiveShadow = true
    cylinder.position.y = -2
    cylinder.rotation.x = 1.62
    cylinder.position.x = xPos

    return cylinder
}

export const bus = (direction='R') => {
    const cube = new THREE.Mesh( geometry, material );
    cube.castShadow = true
    cube.receiveShadow = true

    const cube2 = new THREE.Mesh( geometry2, material2 );
    cube2.position.x = 3.1;
    cube2.position.y = 0.7;
    cube2.castShadow = true
    cube2.receiveShadow = true

    cube.add( cube2 );

    const wheels1 = wheels(-3)
    const wheels2 = wheels(3)

    cube.add( wheels1 );
    cube.add( wheels2 );

    cube.position.z = 3.2
    cube.rotation.x = Math.PI / 2

    if (direction == 'F') {
        cube.rotation.y = -Math.PI / 2
    } else if (direction == 'B') {
        cube.rotation.y = Math.PI / 2
    } else if (direction == 'L') {
        cube.rotation.y = Math.PI
    } 

    return [cube, {width: 10, height: 10}]
}