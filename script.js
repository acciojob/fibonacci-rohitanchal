function fibonacci(num) {
    if (num <= 0) {
        return "Invalid input. Please provide a positive integer greater than 0.";
    } else if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    } else {
        let fibSequence = [0, 1];
        for (let i = 2; i < num; i++) {
            let nextFib = fibSequence[i - 1] + fibSequence[i - 2];
            fibSequence.push(nextFib);
        }
        return fibSequence[fibSequence.length - 1];
    }
}

module.exports = fibonacci;
