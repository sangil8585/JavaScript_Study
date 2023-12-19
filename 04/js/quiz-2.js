function number(num1, num2) {
    let num3;
    while (num2 != 0) {
        num3 = num1 % num2;
        num1 = num2;
        num2 = num3;
    }
    return num1;
}

console.log(`308, 20의 최대 공약수 : ${number(308, 20)}`);
console.log(`45, 38의 최대 공약수 : ${number(45, 38)}`);