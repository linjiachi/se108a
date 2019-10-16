//不用遞迴

function cal(n) 
{
    if (n < 0) throw Error('cal:n < 0')
    if (n === 0) return 0
    if (n === 1) return 1 

    var sum
    var cal1 = 1
    var cal0 = 0
    for(var i=2; i<=n; i++)
    {
        sum = 3*cal1 + 2*cal0
        cal0 = cal1
        cal1 = sum
    }
    return sum
}

var startTime = Date.now()
console.log('cal(5)=',cal(5))
var endTime = Date.now()
var milliSeconds = endTime - startTime
console.log('time:%dms', milliSeconds)


/*把值存入陣列裡面

function cal(n)
{
    var caltable = [0, 1]

    for(var i=0; i<n-1; i++)
    {
        len = caltable.length //len = 2
        caltable.push(3*caltable[len-1]+2*caltable[len-2])
    }
    return caltable[len]
}
*/
