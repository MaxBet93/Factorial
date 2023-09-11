let a = prompt("First number");
let b = prompt("Secon number");
let c = prompt("step");
if(b>a&&c!=0){
function sumFactorials(start, finish, step) {
  let sum = 0;
  let factorial = 1;
  for (let i = 1; i < start; i++) {
      factorial *= i;
  }
  for (let i = start; i <= finish; i ++) {
      factorial *= i;
console.log(factorial)
      // считаем сумму
      if ((i - start) % step == 0) {
          sum += factorial;
      }
   }

   return sum;
}
}
else{
  alert("ERROR")
}
alert(sumFactorials(a,b,c))
