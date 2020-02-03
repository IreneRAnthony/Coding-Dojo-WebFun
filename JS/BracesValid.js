function bracesValid(string) {
    if (string.length < 1) {
        return false;
    }
    var emptyArr = [];
    var opening = ['(', '[', '{'];
    var closing = [')', ']', '}'];

    for (var i = 0; i < string.length; i++) {
        currentBracket = arr[i];
        if (closing.indexOf(currentBracket) > -1) {
            matchingBracketOpening = opening[closing.indexOf(currentBracket)]
            if(emptyArr == 0 || (emptyArr.pop != matchingBracketOpening)){
                return false;
            } else {
                emptyArr.push(currentBracket);
            }
        }
    }
    return (emptyArr.length == 0);
}