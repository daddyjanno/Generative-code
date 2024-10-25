import { Container } from 'pixi.js'
import { generatePixel } from './generatePixel'

export function drawInvader(matrix, color, sizeX, sizeY) {
    const invaderContainer = new Container()

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i]
        for (let j = 0; j < row.length; j++) {
            if (matrix[i][j].value) {
                const newPixel = generatePixel(color, sizeX, sizeY)
                newPixel.y = i * sizeX
                newPixel.x = j * sizeY
                newPixel.alpha = matrix[i][j].alpha
                invaderContainer.addChild(newPixel)
            }
        }
    }

    return invaderContainer
}
