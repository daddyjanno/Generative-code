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
    // generate base matrix
    for (let i = 0; i < spaceInvaderSize; i++) {
        const row = []
        for (let j = 0; j < spaceInvaderSize; j++) {
            row.push(0)
        }
        matrix.push(row)
    }

    //randomize values for the first 4 columns
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < Math.ceil(matrix[i].length / 2); j++) {
            matrix[i][j] = Math.round(Math.random())
        }
    }
}
generateInvader()
console.log(matrix)
