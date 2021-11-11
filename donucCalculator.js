

const readLine = require('readline-sync')

console.log('원 A의 반지름 길이(cm)를 입력하세요.')
const r1 = readLine.prompt()
console.log('원 B의 반지름 길이(cm)를 입력하세요.')
const r2 = readLine.prompt()

const area1 = Math.pow(r1,2) * Math.PI
const area2 = Math.pow(r2,2) * Math.PI
const gap = Math.abs(area1-area2).toFixed(2)

console.log(`도넛의 넓이는 ${gap}cm²입니다.`)