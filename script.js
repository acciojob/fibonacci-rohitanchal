function fibonacci(num) {
// your code here
	if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        let a = 0;
        let b = 1;
        for (let i = 2; i < num; i++) {
            const temp = b;
            b = a + b;
            a = temp;
        }
        return b;
	}
}

module.exports = fibonacci;
