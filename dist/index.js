"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.akerman = void 0;
const akerman = (m, n) => {
    if (m == 0) {
        return n + 1;
    }
    else if (n == 0) {
        return (0, exports.akerman)(m - 1, 1);
    }
    return (0, exports.akerman)(m - 1, (0, exports.akerman)(m, n - 1));
};
exports.akerman = akerman;
