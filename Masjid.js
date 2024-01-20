import * as THREE from 'three'
import { Mesh } from 'three'

const baseGeometry = new THREE.BoxGeometry(30, 30, 15)
const baseMaterial = new THREE.MeshStandardMaterial({
    color: 0x87c0e6
})

const minarGeomtry = new THREE.BoxGeometry(3, 3, 30)
const gumbadGeometry = new THREE.SphereGeometry(8, 64, 64)
const gumbadTopGeometry = new THREE.ConeGeometry(0.5, 6, 32, 1)

// const minarTopGeometry = new THREE.BufferGeometry()
// const minarTopVertices = [
//     0, 0, 0,
//     3, 0, 0,
//     3, 0, 3,
//     0, 0, 3,
//     1.5, 5, 1.5
// ]
// const minarTopFaces = [
//     0, 1, 3,
//     3, 1, 2,
//     0, 1, 4,
//     3, 0, 4,
//     2, 3, 4,
//     1, 2, 4
// ]

// minarGeomtry.computeVertexNormals()

// minarTopGeometry.setAttribute('position', new THREE.Float32BufferAttribute(minarTopVertices, 3))
// minarTopGeometry.setIndex(minarTopFaces, 1)

const minarTopGeometry = new THREE.ConeGeometry(2.2, 5, 4, 1)

const minar = (x, y) => {
    const minar = new THREE.Mesh(minarGeomtry, baseMaterial)
    minar.position.set(x, y, 7.5)
    minar.castShadow = true
    minar.receiveShadow = true
    return minar
}

const minarTop = (x, y) => {
    const minarTop = new THREE.Mesh(minarTopGeometry, baseMaterial)
    minarTop.castShadow = true
    minarTop.receiveShadow = true
    minarTop.position.set(x, y, 25)
    minarTop.rotation.y = Math.PI / 4
    minarTop.rotation.x = Math.PI / 2
    return minarTop
}

export const Masjid = () => {
    const masjid = new THREE.Mesh(baseGeometry, baseMaterial)
    masjid.position.z = 15 / 2
    masjid.castShadow = true
    masjid.receiveShadow = true

    const [x, y] = [13.5, 13.5]
    masjid.add(minar(x, y))
    masjid.add(minar(-x, y))
    masjid.add(minar(x, -y))
    masjid.add(minar(-x, -y))
    
    const gumbad = new THREE.Mesh(gumbadGeometry, baseMaterial)
    gumbad.position.z = 8
    masjid.add(gumbad)

    masjid.add(minarTop(x, y))
    masjid.add(minarTop(-x, y))
    masjid.add(minarTop(x, -y))
    masjid.add(minarTop(-x, -y))

    const gumbadTop = new Mesh(gumbadTopGeometry, baseMaterial)
    gumbadTop.position.z = 16
    gumbadTop.rotation.y = Math.PI / 4
    gumbadTop.rotation.x = Math.PI / 2
    masjid.add(gumbadTop)

    return [masjid, baseGeometry.parameters]
}