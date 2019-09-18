const _ = module.exports = {}

// _.drop([1, 2, 3]) => [2, 3]
// _.drop([1, 2, 3], 2) => [3]
 _.drop = function (list, n=1) {
   const dlist = []
   for (let i=n; i<list.length; i++) {
      dlist.push(list[i])
   }
   return dlist
 }

 