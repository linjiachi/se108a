const _ = module.exports = {}

// _.dropRight([1, 2, 3]) => [1, 2]
// _.dropRight([1, 2, 3], 2) => [1]
_.dropRight = function(list, n=1) {
    const rlist = []
    for (let i=0; i<list.length-n; i++) {
        rlist.push(list[i])
    }
    return rlist
}