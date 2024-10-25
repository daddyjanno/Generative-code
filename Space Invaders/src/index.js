import { Application, Container, Graphics } from 'pixi.js'
import { generateInvader } from './generateInvaderMatrix'
import { generatePixel } from './generatePixel'
import { drawInvader } from './drawInvader'

console.log('Generative code')

const app = new Application()
await app.init({
    resizeTo: window,
    antialias: true,
})
globalThis.__PIXI_APP__ = app
document.body.appendChild(app.canvas)

const spaceInvaderSize = 7
const pixelSize = 14
const color = Math.random() * 0xffffff

const invaderMatrix = generateInvader(spaceInvaderSize)

const invader = drawInvader(app, invaderMatrix, color, pixelSize, pixelSize)
