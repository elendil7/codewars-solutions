function fizzbuzz(n){
  return [...Array(n)].map((v,i)=>++i).map(v=>v%3==0&&v%5==0?`FizzBuzz`:v%3==0?`Fizz`:v%5==0?`Buzz`:v)
}
