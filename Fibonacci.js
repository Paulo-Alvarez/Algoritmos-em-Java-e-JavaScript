function fibonacci(n) {
    if (n <= 1) return "o número deve ser maior que 1"; 

    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}
