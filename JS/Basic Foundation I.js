function To255() {
    arr = [];
    for (var i = 1; i < 256; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(To255());


function even1000() {
    var sum = 0;
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(even1000());

function sumOdd5000() {
    var sum = 0;
    for (var i = 1; i <= 5000; i + 2) {
        sum += i;
    }
    return sum;
}
console.log(sumOdd5000());

function iterateArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        arr[i] += sum
    }
    return sum;
}
console.log(iterateArray([1, 2, 5]));

function findMax(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([-3, 3, 5, 7]));

function findAverage(arr) {
    var avg = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg;
}
console.log(findAverage([1, 3, 5, 7, 20]));

function arrayOdd() {
    var newArr = [];
    for (var i = 0; i <= 50; i++) {
        if (i % 2 == 1) {
            newArr.push(i);
        }
    }
    return newArr;
}
console.log(arrayOdd());

function greaterThanY(arr, y) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (y < arr[i]) {
            sum++
        }
    }
    return sum;
}
console.log(greaterThanY([1, 3, 5, 7], 3));

function squares(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
console.log(squares([1, 5, 10, -2]));

function negatives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(negatives([1, 5, 10, -2]));

function maxMinAvg(arr) {
    var newArr = [];
    var min = 0;
    var max = 0;
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }
    avg = sum / arr.length;
    newArr.push(max);
    newArr.push(min);
    newArr.push(avg);
    return newArr;
}
console.log(maxMinAvg([1, 5, 10, -2]));

function swapValues(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}
console.log(swapValues([1, 5, 10, -2]));

function numberToString(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    return arr;
}
console.log(numberToString([-1, -3, 2]));