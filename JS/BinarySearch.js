function binarySearch(arr, n){
    var left = 0;
    var right = arr.length - 1;
    while(left <= right) {
        var middle = Math.floor((left + right) /2);
        if(arr[middle] == n){
            console.log(middle);
            return true;
        } else if(n > arr[middle]) {
            left = middle + 1;
        } else {
            high = middle - 1;
        }
    }
    return false;
}