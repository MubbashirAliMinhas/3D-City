import { TDSLoader } from 'three/examples/jsm/loaders/TDSLoader'

export const tree = async () => {
    const loader = new TDSLoader()
    const tree = await loader.loadAsync('models/tree1_3ds/Tree1.3ds')
    tree.castShadow = tree
    tree.receiveShadow = true
    return [tree, {width: 10, height: 10}]
}