import * as THREE from 'three'

const roadGeometry = new THREE.PlaneGeometry(10, 10, 10, 10)

export const road = (type, direction) => {
  const roadMaterial = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('textures/Roads/road-' + type + '.png')
  })
  const road = new THREE.Mesh(roadGeometry, roadMaterial)
  if (type == '1') {
    if (direction == 'U') {

    } else if (direction == 'D') {
      road.rotation.z = Math.PI
    } else if (direction == 'L') {
      road.rotation.z = Math.PI / 2
    } else if (direction == 'R') {
      road.rotation.z = -Math.PI / 2
    }
  } else if (type == '2-1') {
    if (direction == 'V') {
      
    } else if (direction == 'H') {
      road.rotation.z = Math.PI / 2
    }
  } else if (type == '2-2') {
    if (direction == 'UL') {
      road.rotation.z = Math.PI / 2
    } else if (direction == 'UR') {

    } else if (direction == 'DL') {
      road.rotation.z = Math.PI
    } else if (direction == 'DR') {
      road.rotation.z = -Math.PI / 2
    }
  } else if (type = '3') {
    if (direction == 'D') {
        road.rotation.z = -Math.PI / 2
    } else if (direction == 'U') {
        road.rotation.z = Math.PI / 2
    } else if (direction == 'R') {

    } else if (direction == 'L') {
        road.rotation.z = Math.PI
    }
  } else if (type == '4') {
    
  }
  road.position.z = 0.05
  road.receiveShadow = true
  return [road, roadGeometry.parameters]
}