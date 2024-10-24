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

const matrix = []
const spaceInvaderSize = 7

function generateInvader() {
    for (let i = 0; i < spaceInvaderSize; i++) {
        const row = []
        for (let j = 0; j < spaceInvaderSize; j++) {
            row.push(0)
        }
        matrix.push(row)
    }
}
generateInvader()
console.log(matrix)
