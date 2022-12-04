
function fibonacci(num) {
    let a = 1;
    let b = 1;

    for (let i = 3; i <= num; i++) {
        [a,b] = [b,a + b];
    }
    return b;
}
console.log(fibonacci(15));

