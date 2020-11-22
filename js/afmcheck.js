/* Ο Αλγόριθμος εγκυρότητας είναι αθροίσματα γινομένων των ψηφίων του ΑΦΜ
με 256, 128, 64, 32, 16, 8, 4 και 2.
Το υπόλοιπο του αθροίσματος με το 11 πρέπει να είναι ίσο με το τελευταίο ψηφίο του ΑΦΜ.
(Το τελευταίο ψηφίο δεν αποτελεί παράγοντας στον υπολογισμό του αθροίσματος) */
 

function afmcheck() {
    let uservalue = null; 
    let sum = 0;
    let multiplier = 256;

    var userinput = $('#input_afm').val();
    //$('#alert').html('The user input is: ' + userinput);
    uservalue= userinput;

    let afm = uservalue.split(",");
    afm = afm.join(",")
    for (let i=0;i<afm.length-1;i++){
        sum += afm[i] * multiplier;
        multiplier /= 2;  
    }
    var result = sum % 11;
    if((afm.length<9) || (sum == 0)){ // αν ο αριθμός είναι μικρότερος του 0 ή αν το όλα τα ψηφία είναι 0
        return false;
    }
    else if (result == afm.split("").pop()){ // ελέγχει αν το αποτέλεσμα είναι ίσο με το τελευταίο ψηφίο του ΑΦΜ
        return true;
    }
  }



