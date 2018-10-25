/////////////////////////////////////////////////////////////////////////////
//registraion page




if (location.pathname == "/C:/Users/piani/Desktop/coding/01-10_181025_collapsible/registration.html"){
    document.forms.sample.onsubmit =
    function (event) {
        return validateSampleForm(event);
};




//today's date

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = dd + '/' + mm + '/' + yyyy;

document.getElementById('inputCurrentDate').value = today;


function findSeason() {
    if(mm<7) {
        return 'Spring';
    }
    if(mm>6) {
        return 'Fall';
    }
}



season = findSeason() + '/' + yyyy;

document.getElementById('season').value = season;



function validateFirstName(userFirstName) {
  if (/^[A-Za-z]+$/.test(userFirstName.value)) {
    return "";
  }
  else {    
    return "The first name field needs a valid name with letters.\n";
  }
}
function validateLastName(userLastName) {
  if (/^[A-Za-z]+$/.test(userLastName.value)) {
    return "";
  }
  else {    
    return "The last name field needs a valid name with letters.\n";
  }
}
function validateAddress(address)  {
  if (address.value === "") {
    return "The street address needs a valid address with letters and numbers.\n";
  }
  else {
    return "";
  }
}
function validateCity(city) {
  if (/^[A-Za-z]+$/.test(city.value)) {
    return "";
  }
  else {    
    return "The city field needs a valid name with letters.\n";
  }
}
function validatePostcode(postcode)  {
  if (postcode.value === "") {
    return "The postcode needs a valid form with letters and numbers.\n";
  }
  else {
    return "";
  }
}
function validateBday(bday) {
  if (/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(\d{4})$/.test(bday.value)) {
    return "";
  }
  else {    
    return "The birthday field needs a valid date (dd/mm/yyyy).\n";
  }
}
function validateParent(parent)  {
  if (parent.value === "") {
    return "The Parent/Gaurdian field needs valid letters.\n";
  }
  else {
    return "";
  }
}

function validatePhone(phone) {
  if (/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}$/.test(phone.value)) {
    return "";
  }
  else {    
    return "The contact phone field needs valid numbers.\n";
  }
}
function validateEmail(email) {
  if (/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/gi.test(email.value)) {
    return "";
  }
  else {    
    return "The email address field needs a valid email form.\n";
  }
}
function validatePermission_sign(signiture)  {
  if (signiture.value === "") {
    return "The signiture field needs valid letters.\n";
  }
  else {
    return "";
  }
}
function validateSigniture_date(signiture_date) {
   if(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(\d{4})$/.test(signiture_date.value) && signiture_date.value === today) {      
       return "";
  }
  else {    
    return "Please enter today's date (dd/mm/yyyy).\n";
  }
}

var checkBox = document.getElementById('chkUniform');

checkBox.addEventListener("change", function () {
     var array = document.getElementsByClassName('uniformCheckbox');
    if(checkBox.checked == true) {
       
        for(var i = 0; i < array.length; i++) {
         array[i].disabled = true
        }
    } else {
        for(var i = 0; i < array.length; i++) {
         array[i].disabled = false
    }
    }
})


function validateSampleForm(event) {
    var form = event.target;
    var messages = validateFirstName(form.first_name) 
    + validateLastName(form.last_name)
    + validateAddress(form.street_address) 
    + validateCity(form.city) 
    + validatePhone(form.phone) 
    + validateEmail(form.email) 
    + validateBday(form.birth_date) 
    + validateParent(form.parent_guardian) 
    + validatePostcode(form.zip_code)
    + validatePermission_sign(form.signiture_name)
    + validateSigniture_date(form.signiture_date);
    if (messages === "") {
        return;
    }
    else {
        alert(messages);
        return false;
    }
}
}









/////////////////////////////////////////////////////////////////////////////////
/////rules accordion
else if(location.pathname == "/C:/Users/piani/Desktop/coding/01-10_181025_collapsible/rules.html"){
    


var accItem = document.getElementsByClassName("accordionItem")
var accHD = document.getElementsByClassName("accordionItemHeading");
//var i = 0;
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem);
}
function toggleItem() {
    var itemClass = this.parentElement.className;
    for (i = 0; i < accItem.length; i++){
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close'){
        this.parentElement.className = 'accordionItem open';
    }
}


}
