
//שאלה 1
var x = parseInt(prompt("enter num" , 0))
var y = parseInt(prompt("enter num" , 0))
if(x > y)
  {
    console.log(x)
  }
else if(y > x)
  {
    console.log(y)
  }
//שאלה 1
 
//שאלה 2
var fir = parseInt(prompt("enter num" , 0))
var sec = parseInt(prompt("enter num" , 0))
if(sec == 0)
  {
    console.log("אין לחלק באפס")
  }
else
  {
    console.log(fir/sec)
    console.log(fir%sec)
  }
//שאלה 2


// שאלה 3
var sum = 0
var x = parseInt(prompt("enter num" , 0))
while(x > 0)
  {
    sum = sum + x
    var x = parseInt(prompt("enter num" , 0))
  }
console.log(sum)
// שאלה 3


// שאלה 4
var arr = []
var sum = 0
for(var i = 0 ; i < 10 ; i++)
  {
    x = parseInt(prompt("enter num" , 0))
    arr[i] = x
  }
for(var i = 0 ; i < 10 ; i++)
  {
    sum = sum + arr[i]
  }
console.log(sum/10)
// שאלה 4
