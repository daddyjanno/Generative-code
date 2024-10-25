export function generateInvader(size) {
    // generate base matrix
    const matrix = []
    for (let i = 0; i < size; i++) {
        const row = []
        for (let j = 0; j < size; j++) {
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
    console.log(matrix)
    return matrix
}
