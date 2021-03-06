/*include other js files */
$.getScript("js/afmcheck.js", function() {});
$.getScript("js/amkacheck.js", function() {});

let afmbutton,amkabutton;
let afm_button_needs_Update = true;
let amka_button_needs_Update = true;

$('#app,#home').hide(); 

setTimeout(() => {
    $('.square').addClass('squarevisible');
}, 300); 

function gohome() {
    amka_button_needs_Update = true;
    afm_button_needs_Update = true;
    $('#cardheader h2').text('Έλεγχος ΑΦΜ - ΑΜΚΑ');
    $('#info').html(
        `<h4>Εισάγετε</h4>
        <p class="aligncenter">-όνομα-επίθετο-ΑΦΜ για έλεγχο ΑΦΜ</p>
        <p class="aligncenter">-όνομα-επίθετο-φύλο-ημερομηνία γέννησης-ΑΜΚΑ για έλεγχο ΑΜΚΑ</p>
        <p class="aligncenter">Οριστική υποβολή για τελικό έλεγχο</p>`
    );
    $('.card-body').fadeOut(600, function() { 
        $(this).fadeIn(600);
    });
    $('body').addClass('mask').fadeOut(600, function() { 
        $(this).removeClass('mask').fadeIn(600);
    }); 
    $('#app,#home').hide();
    $('#squares').fadeIn(800);   
    setTimeout(() => {
        $('.square').addClass('squarevisible');
    }, 800); 
    $('span#firstname,span#lastname,span#input_afm,span#input_amka').remove();
    $(afmbutton).remove();
    $(amkabutton).remove();
    clearall();
  
}

function chooseafm(){ 
    $('#cardheader h2').text('Έλεγχος ΑΦΜ');
    $('#info').html(
        `<h4>Εισάγετε</h4>
        <p class="aligncenter">-όνομα-επίθετο-ΑΦΜ για έλεγχο ΑΦΜ</p>
        <p class="aligncenter">Οριστική υποβολή για τελικό έλεγχο</p>`
    );
    $('input#firstname,input#lastname,input#input_afm,#afmbutton,#cbutton').show();
    $('#squares,.dategroup,.genderdiv ').hide();
    $('.square').removeClass('squarevisible');
    $('.card-body').fadeOut(600, function() { 
        $(this).fadeIn(600);
    }); 
    $('body').addClass('mask').fadeOut(600, function() { 
        $(this).removeClass('mask').fadeIn(600);
    }); 
    $('#input_afm').parent('.input-group').show();
    $('#home').show(); 
    $('#datepicker,#selectgender,#amkabutton').hide();
    $('#input_amka').parent('.input-group').hide();
    $('#input_afm').parent('.input-group').parent('.col-2').removeClass().addClass('col-1');
    $('#app').show();  
}

function chooseamka(){
    $('#cardheader h2').text('Έλεγχος ΑΜΚΑ');
    $('#info').html(
        `<h4>Εισάγετε</h4>
        <p class="aligncenter">-όνομα-επίθετο-φύλο-ημερομηνία γέννησης-ΑΜΚΑ για έλεγχο ΑΜΚΑ</p>
        <p class="aligncenter">Οριστική υποβολή για τελικό έλεγχο</p>`
    );
    $('input#firstname,input#lastname,input#input_amka,#amkabutton,#cbutton').show();
    $('.card-body').fadeOut(600, function() { 
        $(this).fadeIn(600);
    }); 
    $('body').addClass('mask').fadeOut(600, function() { 
        $(this).removeClass('mask').fadeIn(600);
    }); 
    $('#squares,#afmbutton').hide();
    $('#input_afm').parent('.input-group').hide();
    $('#input_amka').parent('.input-group').show();
    $('.dategroup,.genderdiv,#datepicker,#selectgender').show();
    $('#input_amka').parent('.input-group').parent('.col-2').removeClass().addClass('col-1'); 
    $('#home').show();  
    $('#app').show();  
}

//information button for app (i)
$(".open").on("click", function() {
    $(".popup-overlay, .popup-content").toggleClass("active");
    $('#info').toggle(); 
});
  
/* Όταν ο χρήστης πληκτρολογεί ελέγχει και αντικαθιστά την τιμή χρήστη και δεν επιτρέπει στον χρήστη να πληκτρολογεί κείμενο */
(function (){
    $('#firstname,#lastname').on('change keyup', function() {
        var nospecialcharacters = $(this).val().replace(/[^\u0370-\u03FF\w\s]/mg, '\n','');
        $(this).val(nospecialcharacters);
    });
    $('#input_afm,#input_amka').on('change keyup', function() {
        var onlynumbers = $(this).val().replace(/[^0-9]/g, '');
        $(this).val(onlynumbers);
      });   
})();

//on click clear input
  function clearinput(){    
  $('input').each(function(index) {
        $(this).on("click", function(){
            $(this).removeClass('red textgrowth verified')
        });
    });
    $('.select2-selection__rendered').each(function(index) {
        $(this).on("click", function(){
            $(this).removeClass('red textgrowth verified')
        });
    });
  }
clearinput()

  let thisid;
  let thisval;
  let thisplaceholder;
  function checkafmentry(){
    $('#input_afm').each(function(){
        if( $(this).val()=== "") {    
            $(this).addClass("red");
            $(this).addClass('textgrowth');
            $('#result').empty().append(`<span class="emptyfield">παρακαλώ συμπληρώστε τα απαραίτητα πεδία</span>`);
        }
        else if( $(this).val().length!==9) {     
            $(this).addClass("red");
            $(this).addClass('textgrowth');
            $('#result').empty().append(`<span class="emptyfield">Μη έγκυρος αριθμός ψηφίων ΑΦΜ, o ΑΦΜ αποτελείται από 9 ψηφία</span>`);
        }
        else{
            $(this).removeClass('red textgrowth').addClass('verified');
        }

    });

}

 /* function to alert user if no value */
function checkamkaentry(){
    $('#input_amka,#datepicker').each(function(){
        if( $(this).val()=== "") {    
            $(this).addClass("red");
            $(this).addClass('textgrowth');
            $('#result').empty().append(`<span class="emptyfield">παρακαλώ συμπληρώστε τα απαραίτητα πεδία</span>`);
        }
        else{
            $(this).removeClass('red textgrowth').addClass('verified'); 
        }
    });
   
    $('.rs-select2 .select2-container .select2-selection--single .select2-selection__rendered').each(function(){
        if( $(this).text() == "Φύλο" ) {    
            $(this).addClass("red");
            $(this).addClass('textgrowth');
        }
        else if( $(this).text() !== "Φύλο" ){
            $('.rs-select2 .select2-container .select2-selection--single .select2-selection__rendered').removeClass().addClass('verified');
            $('select').attr("disabled", "disabled");
            $('.rs-select2 .select2-container .select2-selection--single').addClass('verified');
        }
    });
    
} 

function clearall(){
    $('#app')[0].reset();
    $('#afmbutton, #amkabutton,#fbutton').removeClass('disableclick');
    $('#fbutton').remove();
    $('span#firstname,span#lastname,span#inputafm,span#inputamka').remove();
    $('input#firstname,input#lastname').show();
    $('#input_amka').removeClass('red textgrowth verified');
    $('#input_afm').removeClass('red textgrowth verified');
    $('input').removeClass('red textgrowth verified');
    $('select').removeClass('red textgrowth verified');
    $('span').removeClass('verified');
    $('#selectgender').select2();
    $("#selectgender").select2({}).prop("disabled", false);
      $('#selectgender').select2({
        minimumResultsForSearch: -1
    });
    $('#result').text("Αποτέλεσμα");
}

function clearafm(){
    clearall();
    afmbutton.show();
    $('#afmbutton').show();
}

function clearamka(){
    clearall();
    amkabutton.show();
    $('#amkabutton').show();
}

let my_date = "";
function getdate(){
    let my_date_val = $("#datepicker").val();
    let my_date_string = my_date_val.replace(/\//g, "");
    my_date = my_date_string.substring(0,4) + my_date_string.substring(6,8);
    return my_date;
}

function checkGender(){
    let selectedoption = $('#selectgender :selected').text();
    if((amka.substring(6,10) % 2 !== 0)&&(selectedoption == "Άρρεν")){
        return true;
    }
    else if((amka.substring(6,10) % 2 == 0)&&(selectedoption == "Θήλυ")){
        return true;
    }
    else{
        return false;
    }
}

function showamka(){
    $('#result > .emptyfield').remove();
    if (!$('#result > span').hasClass('afmspan')) {
        $('#result').empty().append(`<span class="amkaspan">Το ΑΜΚΑ: <span class="verifiedvalue">${amka}</span> είναι έγκυρο</span>`);
        amkabutton = $(`<button id="fbutton" class="btn btn--radius btn--green" type="button" onclick="mainmka()">Οριστική Υποβολή</button>`);
        //$('#cbutton').after(amkabutton); 
        amkabutton.hide();
        if (amka_button_needs_Update) {
            amkabutton.insertAfter("#cbutton").show();
            amka_button_needs_Update = false;
        }
    }
    $('.rs-select2 .select2-container .select2-selection--single .select2-selection__rendered').removeClass().addClass('verified');
    $('select').attr("disabled", "disabled");
    $('.rs-select2 .select2-container .select2-selection--single').addClass('verified'); 
}


function showafm(){ 
    $('#result > .emptyfield').remove();
    if (!$('#result > span').hasClass('afmspan')) {
        $('#result').empty().append(`<span class="afmspan">Το ΑΦΜ: <span class="verifiedvalue">${afm}</span> είναι έγκυρο</span>`);
        afmbutton = $(`<button id="fbutton" class="btn btn--radius btn--green" type="button" onclick="mainafm()">Οριστική Υποβολή</button>`) 
       // $('#cbutton').after(afmbutton);
       afmbutton.hide(); 
       if (afm_button_needs_Update) {
            afmbutton.insertAfter("#cbutton").show();
            afm_button_needs_Update = false;
        }
    }        
}

function afmverify(){
    if(afm.length!==9) {     
        $('#result').empty().append(`<span class="red">Μη έγκυρος αριθμός ψηφίων ΑΦΜ, o ΑΦΜ αποτελείται από 9 ψηφία</span>`);
    }
    else if (afmcheck()) {
        afm_button_needs_Update = true;
        showafm();
    }
    else {
        $('#result').empty().append(`<span class="red">Το ΑΦΜ: ${afm} δεν είναι έγκυρο</span>`);
        $('#input_afm').addClass('red textgrowth').removeClass('verified');   
        $('#input_afm').val(''); 
    }
}

function wronggender(){
    $('#selectgender').select2();
    $("#selectgender").select2({}).prop("disabled", false);
      $('#selectgender').select2({
        minimumResultsForSearch: -1
    });
    $('#result').children('span').remove(); 
    $('#result').empty().append(`<span class="red">Λάθος φύλο</span>`);
    $('#select2-selectgender-container').addClass('red textgrowth');
}

function wrongdate(){
    $('#result').children('span').remove(); 
    $('#result').empty().append(`<span class="red">Λάθος ημερομηνία</span>`);
    $('#datepicker').addClass('red textgrowth').removeClass('verified');
    $('#datepicker').val("");
}

function wrongboth(){
    $('#result').children('span').remove(); 
    $('#result').empty().append(`<span class="red">Λάθος φύλο και ημερομηνία</span>`);
    $('#datepicker').val("");
    $('#selectgender').select2();
    $("#selectgender").select2({}).prop("disabled", false);
      $('#selectgender').select2({
        minimumResultsForSearch: -1
    });
    $('#select2-selectgender-container').addClass('red textgrowth').removeClass('verified');
    $('#datepicker').addClass('red textgrowth').removeClass('verified');
}

function amkaverify(){
    if (amkacheck())         
    {
        if((checkGender()==false)&&(my_date!==amka.substring(0,6))){
            wrongboth()
       }
        else if(checkGender()==false){
            wronggender();
        }
       else if(my_date!==amka.substring(0,6)){
            wrongdate();           
        }
        else if ((my_date==amka.substring(0,6))&&(checkGender())){
           showamka();
        }
    }
    else {
        $('#result').empty().append(`<span class="red">Το ΑΜΚΑ: ${amka} δεν είναι έγκυρο</span>`);
        $('#input_amka').addClass('red textgrowth').removeClass('verified'); 
        $('#input_amka').val(''); 
    } 
}

function verifyafm(){
    $('select').attr("disabled", false);
    $('.zmdi').hide();
    getafm();
    afmcheck();
    checkafmentry();
    if  ((($('#input_afm').val()) !== ""))
    {  
        afmverify();
    } 
}

function verifyamka(){
    $('select').attr("disabled", false);
    $('.zmdi').hide();
    getamka();
    getdate();
    checkamkaentry();
    checkGender()
    if (($('#input_amka').val()) !== "")
    {  
        amkaverify();
    } 
} 

function mainafm(){
        $('#result').empty().append(`
            <span class="afmspan">Το ΑΦΜ: <span class="verifiedvalue">${afm}</span> είναι έγκυρο</span>
        `);
        $('input#firstname,input#lastname,input#input_afm').hide();
        $('#firstname,#lastname,#input_afm').each(function(){
            thisid = $(this).attr('id');
            thisplaceholder = $(this).attr('placeholder');
            thisval = $(this).val();
                $(this).parent().append(`<span id="${thisid}" class="verified">${thisplaceholder}:&emsp;${thisval}</span>`); 
         });
         $('#app').addClass('aligncenter');
         $('#afmbutton,#cbutton,#fbutton').hide();
         $('#fbutton').addClass('disableclick');
         $(afmbutton).remove();
}


function mainmka(){
        $('#result').empty().append(`
            <span class="amkaspan">Το ΑΜΚΑ: <span class="verifiedvalue">${amka}</span> είναι έγκυρο</span>
        `);
        $('input#firstname,input#lastname').hide();
        $('#firstname,#lastname').each(function(){
            thisid = $(this).attr('id');
            thisplaceholder = $(this).attr('placeholder');
            thisval = $(this).val();
                $(this).parent().append(`<span id="${thisid}" class="verified">${thisplaceholder}:&emsp;${thisval}</span>`); 
         });
         $('#app').addClass('aligncenter');
         $('#fbutton').addClass('disableclick');
         $('#amkabutton,#cbutton,#fbutton').hide();
         $(amkabutton).remove();
}




