import { render } from "./factory"

const animate = () => {
  render()
  requestAnimationFrame(animate)
}

animate()