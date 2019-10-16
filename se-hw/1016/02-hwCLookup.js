//遞迴要查表
var array = [0, 1]

function cal(n)
{
    if (n < 0) throw Error('cal:n < 0')
    if (array[n] != null) return array[n]

    array[n] = cal(n-1)*3 + cal(n-2)*2
    return array[n]
}

var startTime = Date.now()
console.log('cal(5)=', cal(5))
var endTime = Date.now()
var milliSeconds = endTime - startTime
console.log('time:%dms', milliSeconds)