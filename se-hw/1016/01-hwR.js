//遞迴不查表
function cal(n) 
{
    if (n < 0) throw Error('cal:n < 0')
    if (n === 0) return 0
    if (n === 1) return 1 
    
    var sum
    for(var i=2; i<=n; i++)
    {
        sum = cal(n-1)*3 + cal(n-2)*2 
    }
    return sum
}

var startTime = Date.now()
console.log('cal(5)=',cal(5))
var endTime = Date.now()
var milliSeconds = endTime - startTime
console.log('time:%dms', milliSeconds)