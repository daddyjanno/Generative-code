import { Application } from 'pixi.js'

console.log('Generative code')

const app = new Application()
await app.init({
    resizeTo: window,
    // width: 400,
    // height: 300,
    antialias: true,
})
document.body.appendChild(app.canvas)
