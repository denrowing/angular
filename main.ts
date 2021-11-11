/////////////////////////// * HOMEWORK * ////////////////////////////////

/* - створити функцію яка обчислює та повертає площу прямокутника висотою */

function rect(a: number, h: number) {
    let resultRect
    resultRect = 1 / 2 * a * h
    return resultRect
}
console.log(rect(10, 20));

/* - створити функцію яка обчислює та повертає площу кола */

function round(r: number) {
    let resultRound = Math.PI * r ** 2
    return resultRound
}
console.log(round(4));


/* - створити функцію яка обчислює та повертає площу циліндру */

function columpnam(r: number, h: number) {
    let resultColump = Math.PI * r ** 2 * h
    return resultColump
}
console.log(columpnam(4, 6));


/* - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено); */

function returnMinNum(arr: Array<number>) {
    let minNum = arr[0];
    let maxNum = minNum;
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        } else if (arr[i] < minNum) {
            minNum = arr[i];
        }
    }

    return minNum
}
console.log(returnMinNum([10, - 6, 7, 9, 0, 17]));


/* - створити функцію яка  створює блок з текстом. Текст задати через аргумент */

function createDivText(str: string) {
    return document.write(`<div>${str}</div>`)
}
console.log(createDivText(`Typed some text`));

/* - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий */

function createList(unitList: string) {
    document.write(`<ul>`)
    for (let i = 1; i <= 3; i++) {
        document.write(`<li>${unitList}</li>`)
    }
    document.write(`</ul>`)
}
console.log(createList('item #'));

/* - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) */document

function createList2(unitList: string, n: number) {
    document.write(`<ul>`)
    for (let i = 1; i <= n; i++) {
        document.write(`<li>${unitList}</li>`)
    }
    document.write(`</ul>`)
}
console.log(createList2('banana', 10));

/* - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список */

function createList3(mixArr: any) {
    document.write(`<ul>`)
    for (let i = 0; i < mixArr.length; i++) {
        document.write(`<li>${mixArr[i]}</li>`)
    }
    document.write(`</ul>`)
}
console.log(createList3(['banana', false, 56]));


/////////////////////////// * CLASSWORK * ////////////////////////////////

/* - створити функцію яка приймає масив та виводить його */
function  returnArr(arr: any) {
    document.write(`<div>${arr}</div>`)
}
returnArr(['Some values', 12, false])

/* - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!) */
function minNum(a: number, b: number, c: number) {
    if (a < b && a < c) {
        alert(a);
    } else if (b < c && b < a) {
        alert(b);
    } else if (c < b && c < a) {
        alert(c);
    }
}
minNum(10, -8, 15)

/* - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!) */
function maxNum(a: number, b: number, c: number) {
    if (a > b && a > c) {
        alert(a);
    } else if (c > b && c > a) {
        alert(c);
    } else if (b > c && b > a) {
        alert(b);
    }
}
maxNum(10, -8, 100500)


/* - створити функцію яка повертає найбільше число з масиву */
function getMaxOfArray(numArray: Array<number>) {
    return Math.max.apply(null, numArray);
}
console.log(getMaxOfArray([20, 100, -3, 0]))


/* - створити функцію яка повертає найменьше число з масиву */
function getMinOfArray(numArray: Array<number>) {
    return Math.min.apply(null, numArray);
}
console.log(getMinOfArray([20, 100, -3, 0]))


/* - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13 */
function sumValues(arr: Array<number>) {
    let sum = 0
    for (let num of arr) {
        sum += num
    }
    return sum
}
console.log(sumValues([20, 100, -3, 0]))

/*  - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень. */
function averageValues(arr: Array<number>) {
    let sum = 0
    for (let num of arr) {
        sum += num
    }
    let result = sum / (arr.length - 1)
    return result
}
console.log(averageValues(randomValues(4)))

/* - створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
    Для виведення використати попередню функцію. */

function randomValues(n: number) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr[i] = Math.round(Math.random() * 100)
    }
    return arr;
}


/* - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ] */

function someObjKeys(arr: Array<object>) {
    let objKeys = []
    for (let obj of arr) {
        for (const key in obj) {
            objKeys.push(key)
        }
    }
    return objKeys
}

console.log(someObjKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]))

/*   - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
EXAMPLE:
   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ] */

function someObjValues(arr: Array<object>) {
    let values = []
    for (let obj of arr) {
        for (const key in obj) {
            values.push(obj[key])
        }
    }
    return values
}
console.log(someObjValues([{name: 'Dima', age: 13}, {model: 'Camry'}]))


////////////////////////// *** ADDITIONAL *** /////////////////////////////

/* - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
        EXAMPLE:
    [1,2,3,4]
        [2,3,4,5]
    результат
        [3,5,7,9]  */

function sumEqualIndex(arr1: Array<number>, arr2: Array<number>) {
    let arr = []
    for (let i = 0; i < arr1.length; i++) {
        arr[i] = arr1[i] + arr2[i];
    }
    return arr
}

console.log(sumEqualIndex([1,2,3,4], [2,3,4,5]))
document.write(`<p>${sumEqualIndex([1,2,3,4], [2,3,4,5])}</p>`)


/* - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу. */
function addElemsToArr(arr1: Array<any>) {

    for (let i = 1; i <= 3; i++) {
        arr1.push(i)
    }
    return arr1
}
console.log(addElemsToArr(['a', 'b', 'c']))
document.write(`<p>${addElemsToArr(['a', 'b', 'c'])}</p>`)


/* - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1]. */
function reverseArr(arr: Array<number>) {
    return arr.reverse()
}
console.log(reverseArr([1, 2, 3]))
document.write(`<p>${reverseArr([1, 2, 3])}</p>`)


/* - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6. */

function pushElements(arr1: Array<number>) {
    for (let i = 4; i <= 6 ; i++) {
        arr1.push(i)
    }

    return arr1
}
console.log(pushElements([1, 2, 3]))
document.write(`<p>${pushElements([1, 2, 3])}</p>`)


/* - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6. */
function pushElementsUnshift(arr: Array<number>) {
    for (let i = 6; i >= 4 ; i--) {
        arr.unshift(i)
    }

    return arr
}
console.log(pushElementsUnshift([1, 2, 3]))
document.write(`<p>${pushElementsUnshift([1, 2, 3])}</p>`)


/* - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5]. */
function transform1(arr: Array<number>) {
    return  arr.slice(-2)
}
console.log(transform1([1, 2, 3, 4, 5]))
document.write(`<p>${transform1([1, 2, 3, 4, 5])}</p>`)


/* - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2]. */

function transform2(arr: Array<number>) {
    return arr.slice(0, 2)
}
console.log(transform2([1, 2, 3, 4, 5]))
document.write(`<p>${transform2([1, 2, 3, 4, 5])}</p>`)

/* - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c']. ?????????????*/

function transform3(arr1: Array<any>) {

    let result = arr1.slice(0, 2)
    result.push('a', 'b', 'c')
    return result
}
console.log(transform3([1, 2, 3, 4, 5]))
document.write(`<p>${transform3([1, 2, 3, 4, 5])}</p>`)

/* - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними. */
function getPairedRandomNums(arr: Array<number>) {
    return arr.filter(elem => elem % 2 == 0)

}
console.log(getPairedRandomNums([15, 19, -20, -30, 11, 5, 8, -11.5, 13, 12]))
document.write(`<p>${getPairedRandomNums([15, 19, -20, -30, 11, 5, 8, -11.5, 13, 12])}</p>`)

/* - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший. */
function copyArr(arr1: Array<number>) {
    let arr2 = []
    for (let elem of arr1) {
        arr2.push(elem)
    }
    return arr2
}
console.log(copyArr([15, 19, -20, -30, 11, 5, 8, -11.5, 13, 12]))
document.write(`<p>${copyArr([15, 19, -20, -30, 11, 5, 8, -11.5, 13, 12])}</p>`)

/* - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово. */
function pasteArr1(arr: Array<string>) {
    let result2 = ''
    for (let i = 0; i < arr.length; i++) {
        result2 += arr[i]
    }
    return result2
}
console.log(pasteArr1([ 'a', 'b', 'c']))
document.write(`<p>${pasteArr1([ 'a', 'b', 'c'])}</p>`)

/* - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово. */
function pasteArr2(arr: Array<string>) {
    let result3 = ''
    let i = 0
    while (i < arr.length) {
        result3 += arr[i]
        i++
    }
    return result3
}
console.log(pasteArr2([ 'a', 'b', 'c']))
document.write(`<p>${pasteArr2([ 'a', 'b', 'c'])}</p>`)


/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово. */
function pasteArr3(arr: Array<string>) {
    let result3 = ''
    for (let elem of arr) {
        result3 += elem
    }
    return result3
}
console.log(pasteArr3([ 'a', 'b', 'c']))
document.write(`<p>${pasteArr3([ 'a', 'b', 'c'])}</p>`)

/* -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
EXAMPLE:
foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]  */

function changeIndex(arr: Array<number>, i: number) {
    [arr[i], arr[i + 1]]  = [arr[i + 1], arr[i]];
    return arr

}
console.log(changeIndex([9,8,0,4], 0))
document.write(`<p>${changeIndex([9,8,0,4], 0)}</p>`)


/* - Дано список імен.
let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger' */

function normalizeNames(str: string) {
    return str.trim().split(' ').filter(string => !!string).join(' ')
}
console.log(normalizeNames('    Harry       Potter      '))
document.write(`<p>${normalizeNames('    Harry       Potter      ')}</p>`)

/* - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
Двожина масиву від 2 до 100
EXAMPLE:
[1,0,6,0,3] => [1,6,3,0,0]
[0,1,2,3,4] => [1,2,3,4,0]
[0,0,1,0]   => [1,0,0,0] */

function moveZero(arr: Array<number>) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr.splice(i, 1)
            result.push(0)
            i--
        }
    }

    return arr.concat(result)
}

console.log(moveZero([0,0,1,0]))
document.write(`<p>${moveZero([0,0,1,0])}</p>`)
