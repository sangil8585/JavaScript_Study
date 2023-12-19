let number = parseInt(prompt("1보다 큰 숫자를 입력하세요."));
let sum = 0;

if (number != null && 1 < number) {3
    for(let i = 1; i <= number; i++){
        if(i % 2 == 1) {
            continue;
        }
        sum += 1;
        document.write(`${i} ----- ${sum} <br>`);
    }
} 