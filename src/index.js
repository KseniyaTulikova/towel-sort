
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
	let sortedArr = new Array();
    matrix.forEach((element, index) => {
        if (index % 2 != 0) {
            element.reverse();
		}
		sortedArr = sortedArr.concat(element);
    })

    return sortedArr;
}
