/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let a = preferences.length;
    let count = 0;
    for (let i = 0; i < a; i++) {
        let b = preferences[i] - 1;
        if (b == i) continue;
        let c = preferences[b] - 1;
        if (b == c) continue;
        let k = preferences[c] - 1;
        if (k == c) continue;
        if (k == i) {
            count++;
        }
    }
    return count / 3;
}