import * as THREE from 'three'

console.log('hello')

const poleGeometry = new THREE.CylinderGeometry(1, 1, 30, 32)
const poleMaterial = new THREE.MeshStandardMaterial({
    color: 0x000000
})

export const signBoard = (direction='H') => {
    const signBoard = new THREE.Mesh(poleGeometry, poleMaterial)
    signBoard.rotation.x = Math.PI / 2

    const boardGeometry = new THREE.BoxGeometry(15, 10, 5)
    const boardMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff
    })
    const board = new THREE.Mesh(boardGeometry, boardMaterial)
    board.position.y = 8
    board.castShadow = true
    board.receiveShadow = true

    signBoard.add(board)

    const parameters = {
        width: 20,
        height: 9.5
    }
    signBoard.position.z = 15
    signBoard.castShadow = true
    signBoard.receiveShadow = true

    let translate = null
    if (direction == 'V') {
        signBoard.rotation.y = Math.PI / 2
        translate = [-5, 5]
    }
    
    return [signBoard, parameters, translate]
}