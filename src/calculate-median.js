function calculate_median(arr) {
    var evenArray = buildEvenMiddleNum(arr);
    var middleNum = buildMiddleNum(evenArray);

    return middleNum;
}

function buildEvenMiddleNum(arr) {
    var evenArray = [];

    arr.forEach(function (element) {
        if (element % 2 === 0) {
            evenArray.push(element);
        }
    });

    return evenArray;
}

function buildMiddleNum(evenArray) {
    if (evenArray.length % 2 === 0) {
        var middle = evenArray.length / 2;
        var middleNum = (evenArray[middle - 1] + evenArray[middle]) / 2;
    }
    else {
        middleNum = evenArray[(evenArray.length - 1) / 2];
    }

    return middleNum;
}
module.exports = calculate_median;
