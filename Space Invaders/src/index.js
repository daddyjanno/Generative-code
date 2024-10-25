import { Application, Container } from 'pixi.js'
import { generateInvaderMatrix } from './generateInvaderMatrix'
import { drawInvader } from './drawInvader'

console.log('Generative code')

const app = new Application()
await app.init({
    resizeTo: window,
    antialias: true,
})
globalThis.__PIXI_APP__ = app
document.body.appendChild(app.canvas)

const spaceInvaderSize = 14
const pixelSize = 3
const color = 'white'
const gap = pixelSize * 2

const invaderMatrix = generateInvaderMatrix(spaceInvaderSize)

const matrixContainer = new Container()

for (let i = 0; i < 100; i++) {
    let invader = drawInvader(invaderMatrix, 'white', pixelSize, pixelSize)

    invader.x = invader.width * (i % 10) + (i % 10) * gap
    let tens = Math.floor(i / 10)
    console.log(tens)

    invader.y = invader.height * tens + tens * gap

    matrixContainer.addChild(invader)
}
matrixContainer.x = app.screen.width / 2 - matrixContainer.width / 2
matrixContainer.y = app.screen.height / 2 - matrixContainer.height / 2

app.stage.addChild(matrixContainer)
