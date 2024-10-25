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
const pixelSize = 10
const color = Math.floor(Math.random() * 0xffffff)

const gap = pixelSize * 2
const invaderSize = pixelSize * spaceInvaderSize

const matrix = generateInvaderMatrix(spaceInvaderSize)
const matrixContainer = new Container()
const invader = drawInvader(
    matrix,
    color,
    pixelSize,
    pixelSize,
    spaceInvaderSize
)
matrixContainer.addChild(invader)

// for (let i = 0; i < 100; i++) {
//     const invaderMatrix = generateInvaderMatrix(spaceInvaderSize)
//     let invader = drawInvader(
//         invaderMatrix,
//         color,
//         pixelSize,
//         pixelSize,
//         spaceInvaderSize
//     )
//     console.log('invaderSize : ', invader.width, invader.height)

//     let tens = Math.floor(i / 10)
//     const row = Math.floor(i / 10) + 1
//     const col = i % 10

//     invader.x = invaderSize * col + col * gap
//     invader.y = invaderSize * row + row * gap

//     console.log('i :', i, 'tens: ', tens, 'row :', row, 'col :', col)
//     console.log('x: ', invader.x, 'y :', invader.y)

//     matrixContainer.addChild(invader)
// }
matrixContainer.x = app.screen.width / 2 - matrixContainer.width / 2
matrixContainer.y = app.screen.height / 2 - matrixContainer.height / 2

app.stage.addChild(matrixContainer)
