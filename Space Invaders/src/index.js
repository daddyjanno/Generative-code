import { Application, Container, Graphics } from 'pixi.js'
import { generateInvader } from './generateInvaderMatrix'

console.log('Generative code')

const app = new Application()
await app.init({
    resizeTo: window,
    antialias: true,
})
globalThis.__PIXI_APP__ = app
document.body.appendChild(app.canvas)

const spaceInvaderSize = 7
const pixelSize = 7

const invaderMatrix = generateInvader(spaceInvaderSize)

const color = Math.random() * 0xffffff

function createPixel(color) {
    const pixelContainer = new Container()
    const p = new Graphics().rect(0, 0, pixelSize, pixelSize).fill(color)
    pixelContainer.addChild(p)
    return pixelContainer
}

function drawInvader() {
    const invaderContainer = new Container()

    for (let i = 0; i < invaderMatrix.length; i++) {
        const row = invaderMatrix[i]
        for (let j = 0; j < row.length; j++) {
            if (invaderMatrix[i][j].value) {
                const newPixel = createPixel(color)
                newPixel.y = i * pixelSize
                newPixel.x = j * pixelSize
                newPixel.alpha = invaderMatrix[i][j].alpha
                invaderContainer.addChild(newPixel)
            }
        }
    }
    invaderContainer.x = app.screen.width / 2 - invaderContainer.width / 2
    invaderContainer.y = app.screen.height / 2 - invaderContainer.height / 2
    console.log(invaderContainer.width, invaderContainer.height)
    app.stage.addChild(invaderContainer)
}
drawInvader()
