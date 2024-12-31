function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); //This will work correctly

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    return; //This return statement will cause the function to exit after the first iteration
  }
}

printNumbers2(5); //This will only print 1