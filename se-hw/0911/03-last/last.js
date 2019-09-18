const _ = module.exports = {}

//_.last([1, 2, 3]) => 3
_.last = function (list) {
    const llist = []
    llist.push(list[list.length-1])
    return llist
}