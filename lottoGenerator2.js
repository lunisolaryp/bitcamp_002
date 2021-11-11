
const numArr = []

for (let i = 0; i < 45 ; i++) {
    numArr.push(i+1)
}

console.log(numArr)

    for (let i = 0; i < 6; i++) {
        const idx = parseInt(Math.random() * numArr.length)
        const winningNum = numArr.splice(idx, 1)
        console.log(winningNum)
    }