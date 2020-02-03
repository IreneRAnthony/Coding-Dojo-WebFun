function biggieSize(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}
console.log(biggieSize([-1, 3, 5, -5]));

function printLowReturnHigh(arr) {
    var max = 0;
    var min = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(min);
    return max;
}
printLowReturnHigh([1, 2, 3, 4]);

function printOneReturnAnother(arr) {
    var odd = 0;
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[arr.length - 2])
        if (arr[i] % 2 == 1) {
            return arr[i];
        }
    }
}
printOneReturnAnother();

function doubleVision(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }
    return arr;
}
console.log(doubleVision([1, 2, 3]));

function countPositives(arr) {
    var positives = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positives++;
        }
    }
    arr[arr.length - 1] = positives;
    return arr;
}
console.log(countPositives([-1, 1, 1, 1]));

function evensAndOdds(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1, arr[i - 1] % 2 == 1, arr[i - 2] % 2 == 1) {
            console.log("That's odd!")
        } else if (arr[i] % 2 == 0, arr[i - 1] % 2 == 0, arr[i - 2] % 2 == 0) {
            console.log("Even more so!");
        }
    }
}
evensAndOdds([1, 3, 5]);
evensAndOdds([2, 4, 6]);

function incrementTheSeconds(arr) {
    for (var i = 1; i < arr.length; i++) {
        if (i % 2 == 1) {
            arr[i] += 1;
            console.log(arr[i]);
        }
    }
    return arr;
}
incrementTheSeconds([1, 2, 3, 4, 5, 6]);

function previousLengths(arr) {
    for (var i = arr.length; i < arr.length; i--) {
        arr[i] = arr[i-1].length();
    }
    return arr;
}
console.log(previousLengths(["hello", "dojo", "awesome"]));

function addSeven(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }
    return newArr;
}
console.log(addSeven([1, 2, 3]));

function reverseArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr.push(arr[i]);
    }
}
console.log(reverseArray([3, 1, 6, 4, 2]));

function outlookNegative(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] / -1;
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(outlookNegative(1, -3, 5));

function alwaysHungry(arr) {
    var food = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] = "food") {
            console.log("yummy");
            food++;
        }
    }
    if (food = 0) {
        console.log("I'm hungry");
    }
}
alwaysHungry([1, 2, "food"]);
alwaysHungry([1, 2, 3]);

function swapCenter(arr) {
    var temp1 = 0;
    var temp2 = 0;
    temp1 = arr[0];
    temp2 = arr[arr.length - 3];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 3] = arr[2];
    arr[arr.length - 1] = temp1;
    arr[2] = temp2;
}
console.log(swapCenter([1, 2, 3, 4, 5, 6]));

function scaleTheArray(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= num;
    }
    return arr;
}
console.log(scaleTheArray([1, 2, 3], 3));