import * as THREE from 'three'

export const camera = new THREE.PerspectiveCamera(50, innerWidth / innerWidth, 0.1, 1000)
camera.position.y = 20
camera.position.z = 150
camera.rotation.x = 0
camera.aspect = innerWidth / innerHeight
camera.updateProjectionMatrix()

addEventListener('keydown', (e) => {
  if (e.key == 'w') {
    camera.translateZ(-1)
  } else if (e.key == 's') {
    camera.translateZ(1)
  } else if (e.key == 'a') {
    camera.translateX(-1)
  } else if (e.key == 'd') {
    camera.translateX(1)
  } else if (e.key == 'q') {
    camera.translateY(1)
  } else if (e.key == 'e') {
    camera.translateY(-1)
  } else if (e.key == 'ArrowUp') {
    camera.rotateX(0.02)
  } else if (e.key == 'ArrowDown') {
    camera.rotateX(-0.02)
  } else if (e.key == 'ArrowLeft') {
    camera.rotateY(0.02)
  } else if (e.key == 'ArrowRight') {
    camera.rotateY(-0.02)
  } else if (e.key == ',') {
    camera.rotateZ(0.02)
  } else if (e.key == '.') {
    camera.rotateZ(-0.02)
  }
})

addEventListener('pointermove', (e) => {
  // if (e.clientX <= innerWidth / 2) {
  //   const mouseX = (e.clientX * 2 / innerWidth) * 2 - 1
  //   const mouseY = -(e.clientY / innerHeight) * 2 + 1
  //   camera.rotateX(mouseY * 0.01)
  //   camera.rotateY(-mouseX * 0.01)
  // }
  const mouseX = (e.clientX / innerWidth) * 2 - 1
  const mouseY = -(e.clientY / innerHeight) * 2 + 1
  camera.rotateX(mouseY * 0.01)
  camera.rotateY(-mouseX * 0.01)
})