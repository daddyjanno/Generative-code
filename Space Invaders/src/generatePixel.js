import { Container, Graphics } from 'pixi.js'

export function generatePixel(color, sizeX, sizeY) {
    const pixelContainer = new Container()
    const p = new Graphics().rect(0, 0, sizeX, sizeY).fill(color)
    pixelContainer.addChild(p)
    return pixelContainer
}
