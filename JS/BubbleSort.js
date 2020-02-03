function bubbleSort(arr){
    var x = arr.length;
    for(var i = 0; i < x-1; i++){
        for(var j = 0; j < x-i-1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1]; 
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

var sortedArray = bubbleSort([5, 6, 3, 1, 4, 7, 2]);
console.log(sortedArray);

