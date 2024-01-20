import { Box3 } from "three"
import { terrain } from "./terrain"
import { bBoxArray } from "./factory"

const randomRange = (start, end, step) => {
    return Math.floor(Math.random() * (end - start) / step) * step + start
}

const terrainWidth = terrain.geometry.parameters.width / 2
const terrainHeight = terrain.geometry.parameters.height / 2

const plot = (u, v, objectMap) => {
    const [object, parameters, tranlate] = objectMap
    const objectWidth = parameters.width / 2
    const objectHeight = parameters.height / 2
    const uBlock = -terrainWidth + objectWidth
    const vBlock = -terrainHeight + objectHeight
    object.position.x = uBlock + u * 10
    object.position.y = vBlock + v * 10
    if (tranlate) {
        object.position.x += tranlate[0]
        object.position.y += tranlate[1]
    }
    terrain.add(object)
    // bBoxArray.push(new Box3().setFromObject(object))
  }

export {
    randomRange, plot
}