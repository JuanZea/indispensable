"use strict";
exports.__esModule = true;
exports.akerman = exports.sayHello = exports.getHeroInfo = exports.fibonacci = void 0;
var fibonacci = function (n) {
    if (n < 2) {
        return n;
    }
    return (0, exports.fibonacci)(n - 1) + (0, exports.fibonacci)(n - 2);
};
exports.fibonacci = fibonacci;
var getHeroInfo = function (name) {
    if (name == 'Batman') {
        return {
            name: 'Batman',
            age: 35,
            powers: ['money', 'intelligence']
        };
    }
    else if (name == 'Superman') {
        return {
            name: 'Superman',
            age: 100,
            powers: ['flight', 'strength']
        };
    }
    else {
        throw new Error('Hero not found');
    }
};
exports.getHeroInfo = getHeroInfo;
var sayHello = function (name) { return console.log('Hello ', name); };
exports.sayHello = sayHello;
var akerman = function (m, n) {
    if (m == 0) {
        return n + 1;
    }
    else if (n == 0) {
        return (0, exports.akerman)(m - 1, 1);
    }
    return (0, exports.akerman)(m - 1, (0, exports.akerman)(m, n - 1));
};
exports.akerman = akerman;
