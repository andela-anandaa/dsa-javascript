const assert = require('assert');
const bubbleSort = require('../../sorting/bubble-sort.js');

describe('Bubble Sort', function () {

    it('should sort array of 3 elements', function () {
        let list = [10, 5, 6];
        let res = bubbleSort(list);
        assert.deepEqual(res, [5, 6, 10]);
    });

    it('should sort array of 7 elements', function () {
        let list = [10, 5, 6, 11, 23, 45, -1];
        let res = bubbleSort(list);
        assert.deepEqual(res, [-1, 5, 6, 10, 11, 23, 45]);
    });
});

