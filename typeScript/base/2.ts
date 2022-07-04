// 部分应用函数

function isGoodNumber(goodFactor: number, v: number) {
    return v % goodFactor === 0
}

function filterArray(a: number[], f: (v: number) => boolean) {
    return a.filter(f)
}

// config
const GOOD_FACTOR = 2
// end config

const a = [1,2,3,4,5,6,7,8,9]
console.log(filterArray(a, (v) => isGoodNumber(GOOD_FACTOR, v)))