// 函数作为“一等公民”：
// 变量类型可以是函数
// 值可以是函数
// 对象字段可以是函数
// 函数的参数可以是函数
// 函数的返回值可以是函数

// 数组排序
// let a = [5,2,1,6,8,10,5,25,16,23,11]

// function compareNumber(a: number, b: number) {
//     // a<b ==> 返回负数
//     // a===b ==> 返回0
//     // a>b ==> 返回正数
//     return a-b
// }

// let compareNumber = function (a: number, b: number) {
//     // a<b ==> 返回负数
//     // a===b ==> 返回0
//     // a>b ==> 返回正数
//     return a-b
// }
// a.sort(compareNumber)
// console.log(a)


// compareNumber = function (a: number, b: number) {
//     // a<b ==> 返回负数
//     // a===b ==> 返回0
//     // a>b ==> 返回正数
//     return b-a
// }

// a.sort(compareNumber)
// console.log(a)


// lambda 表达式，javaScript/typeScript: 箭头函数
// let compareNumber = (a:number, b: number) => a-b

// let a = [5,2,1,6,8,10,5,25,16,23,11]

// a.sort(compareNumber)
// console.log(a)

let a = [5,2,1,6,8,10,5,25,16,23,11]

a.sort((a, b) => {
    console.log('comparing', a, b)
    return a-b
})
console.log(a)