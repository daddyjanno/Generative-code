import { Application, Container, Graphics } from 'pixi.js'

console.log('Generative code')

const app = new Application()
await app.init({
    resizeTo: window,
    antialias: true,
})
globalThis.__PIXI_APP__ = app
document.body.appendChild(app.canvas)

const matrix = []
const spaceInvaderSize = 7
const pixelSize = 32

function generateInvader() {
    // generate base matrix
    for (let i = 0; i < spaceInvaderSize; i++) {
        const row = []
        for (let j = 0; j < spaceInvaderSize; j++) {
            row.push({ value: 0, alpha: 0 })
        }
        matrix.push(row)
    }

    //randomize values for the first 4 columns
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < Math.ceil(matrix[i].length / 2); j++) {
            matrix[i][j].value = Math.round(Math.random())
            matrix[i][j].alpha = 0.25 + Math.random() * 0.75
        }
    }

    // Symetry
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < Math.floor(matrix[i].length / 2); j++) {
            const valueToDuplicate = matrix[i][j]

            matrix[i][matrix.length - 1 - j] = valueToDuplicate
        }
    }
}
console.log(matrix)

generateInvader()

function createPixel() {
    const p = new Graphics().rect(0, 0, pixelSize, pixelSize).fill(0xffffff)
    return p
}

function drawInvader() {
    const invaderContainer = new Container()

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i]
        for (let j = 0; j < row.length; j++) {
            if (matrix[i][j].value) {
                const newPixel = createPixel()
                newPixel.y = i * pixelSize
                newPixel.x = j * pixelSize
                newPixel.alpha = matrix[i][j].alpha
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
