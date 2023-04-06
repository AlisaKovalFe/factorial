// Итерационный подсчет факториала
function factIterat(num) {

    //while
    let res = 1

    if (num < 0 || num % 1 !== 0 || (num === 0 && (1 / num) === -Infinity)) { // если вдруг кто-то захочет узнать факториал -0, а его нет
        return 'не почитаю значение факториала'
    } else {
        while (num > 0) {
            res *= num
            num--
        }
    }

    return res

    //for
    // let res = 1
    // if (num < 0 || num % 1 !== 0 || (num === 0 && (1 / num) === -Infinity)) {
    //     return 'не почитаю значение факториала'
    // } else {
    //     for (let i = 1; i <= num; i++) {
    //         res *= i
    //     }
    // }
    // return res
}
console.log(factIterat(5));

// Рекурсивный расчет факториала
function factRec(num) {
    return num < 0 || num % 1 !== 0 || (num === 0 && (1 / num) === -Infinity) ? 'не посчитаю значение факториала' : (num ? num * factRec(num - 1) : 1)

    //здесь обратная логика в последней скобке
    // return num < 0 || num % 1 !== 0 || (num === 0 && (1 / num) === -Infinity) ? 'не посчитаю значение факториала' : (num === 0 ? 1 : num * factRec(num - 1))
}

console.log(factRec(-0));

