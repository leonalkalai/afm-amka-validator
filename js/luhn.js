/* Αλγόριθμος του Λουν για έλεγχο εγκυρότητας αριθμών */
const luhnCheck = (number) => {
    var numberlength = number.length;
    var parity = numberlength % 2;
    var sum = 0;
    for (var i = numberlength-1; i >= 0; i--) {
        var value = parseInt(number.charAt(i));
        if (i % 2 == parity) { value *= 2; }
        if (value > 9) { value -= 9;}
        sum += value;
    }
    return sum % 10  === 0;
}




