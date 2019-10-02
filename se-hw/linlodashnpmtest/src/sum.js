const _ = module.exports = {}

//_.sum([4, 2, 8, 6]) => 20
_.sum = function (list) {
    const slist = []
    var sum = 0
    for (let i=0; i<list.length; i++) {
        sum += list[i]
    }
    return sum
}