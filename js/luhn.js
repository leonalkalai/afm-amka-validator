/* Αλγόριθμος του Λουν για έλεγχο εγκυρότητας αριθμών */
const luhnCheck = (number) => {
    number = String(number);

    let sum = parseInt(number.charAt(number.length - 1));

    for (let i = 0; i < number.length - 1; i++) {
        let value = parseInt(number.charAt(i));

        if (i % 2 === 0) {
            value *= 2;
        }

        if (value > 9) {
            value -= 9;
        }

        sum += value;
    }

    return sum % 10 === 0;
}

