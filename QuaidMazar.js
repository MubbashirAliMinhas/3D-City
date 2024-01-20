import * as THREE from 'three'

const cubeGeometry = new THREE.BoxGeometry(20, 20, 20)
const cubeMaterialArray = [
    new THREE.MeshStandardMaterial({color: new THREE.Color(0xffffe2)}),
    new THREE.MeshStandardMaterial({color: new THREE.Color(0xffffe2)}),
    new THREE.MeshStandardMaterial({color: new THREE.Color(0xffffe2)}),
    new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load('textures/mazar/mazar_front.png')}),
    new THREE.MeshStandardMaterial({color: new THREE.Color(0xffffe2)}),
    new THREE.MeshStandardMaterial({color: new THREE.Color(0xffffe2)})
]
const cubeMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffe2
})

export const mazar = (rotation='F') => {
    const mazar = new THREE.Mesh(cubeGeometry, cubeMaterial)
    mazar.castShadow = true
    mazar.receiveShadow = true

    mazar.position.z = 20 / 2

    const sphereGeomtery = new THREE.SphereGeometry(9.5, 128, 128)
    const sphereMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffe2
    })
    const dom = new THREE.Mesh(sphereGeomtery, sphereMaterial)
    dom.castShadow = true
    dom.receiveShadow = true

    mazar.add(dom)
    dom.position.z = 11

    const triangleGeometry = new THREE.BufferGeometry()
    const triangleVertices = [
        0, 0, 0, 
        8, 0, 0, 
        4, 7, 0,
        0, 0, -2,
        8, 0, -2,
        4, 7, -2
    ]

    const triangleFace = [
        0, 1, 2,
        3, 2, 0,
        3, 5, 2,
        1, 5, 2,
        1, 4, 2,
        4, 3, 5,
        0, 4, 3,
        0, 1, 4
    ]

    triangleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(triangleVertices, 3))
    triangleGeometry.setIndex(triangleFace, 1)

    const triangleMaterial = new THREE.MeshStandardMaterial({
        color: 0x000000
    })

    const gate = new THREE.Mesh(triangleGeometry, triangleMaterial)
    mazar.add(gate)
    gate.position.set(-4, -10.1, -10)
    gate.scale.y = 2
    gate.rotation.x = Math.PI / 2
    gate.castShadow = true
    gate.receiveShadow = true

    if (rotation == 'B') {
        mazar.rotation.z = Math.PI
    } else if (rotation == 'L') {
        mazar.rotation.z = -Math.PI / 2
    } else if (rotation == 'R') {
        mazar.rotation.z = Math.PI / 2
    }

    return [mazar, cubeGeometry.parameters]
}