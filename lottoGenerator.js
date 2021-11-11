

const numArr = []

while(true) {
    const num = parseInt(Math.random() * 45 + 1)

    const index = numArr.indexOf(num)
    console.log(`NUM: ${num}, INDEX: ${index}`)

    if(index>=0){
        continue
    }
    const arrLength = numArr.push(num)
    // console.log(arrLength)

    if(arrLength === 6) {
        break
    }
}
console.log(`이번 주 로또 당첨 번호는 ${numArr}입니다.`)