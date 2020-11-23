/* Ο Αλγόριθμος εγκυρότητας είναι αθροίσματα γινομένων των ψηφίων του ΑΦΜ
με 256, 128, 64, 32, 16, 8, 4 και 2.
Το υπόλοιπο του αθροίσματος με το 11 πρέπει να είναι ίσο με το τελευταίο ψηφίο του ΑΦΜ.
(Το τελευταίο ψηφίο δεν αποτελεί παράγοντας στον υπολογισμό του αθροίσματος) */
 
let afm;
 //  function to get user input for afm
 function getafm(){
    afm = $('#input_afm').val();
    return afm;    
}

function afmcheck() { 
    let sum = 0;
    afm = afm.split(",").join(",");
    for (let i=0;i<afm.length-1;++i){
        sum += afm[i] * Math.pow(2, 8-i);
    }
    var result = sum % 11;
    if((afm.length<9) || (sum == 0)){ // αν ο αριθμός είναι μικρότερος του 0 ή αν το όλα τα ψηφία είναι 0
        return false;
    }
    else if ((result == afm.split("").pop())||((result == 0 || result == 10) && afm.split("").pop() == 0)){ // ελέγχει αν το αποτέλεσμα είναι ίσο με το τελευταίο ψηφίο του ΑΦΜ
        return true;
    }
  }



