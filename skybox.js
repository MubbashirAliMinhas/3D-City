import * as THREE from 'three'

const skyBoxLocation = 'textures/Daylight Box_Pieces/Daylight Box_'
const sides = ['Front', 'Back', 'Top', 'Bottom', 'Left', 'Right']
const cubeMaterialArray = []

const skyBoxUV = new THREE.CubeTextureLoader().load('textures/Daylight-Box-UV_0.png')

sides.forEach(side => cubeMaterialArray.push(new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load(skyBoxLocation + side + '.bmp'), side: THREE.BackSide, wireframe: false
})))

const skyBoxGeometry = new THREE.BoxGeometry(400, 400, 400)
export const skyBox = new THREE.Mesh(skyBoxGeometry, cubeMaterialArray)