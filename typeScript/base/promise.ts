// function add(a: number, b: number,
//     callback: (res: number) => void): void {
//         setTimeout(() =>{
//             callback(a+b)
//         }, 2000)
// }

// add(2, 3, res => {
//     console.log(res)
// })

function add(a: number, b: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (b % 17 === 0) {
            reject(`bad number: ${b}`)
        }
        setTimeout(() => {
            resolve(a+b)
        }, 2000)
    })
}

add(2, 3).then(res => {
    console.log('2+3', res)
    return add(res, 17)
}).then(res => {
    console.log('2+3+17', res)
}).catch(err => {
    console.log('caught error', err)
})