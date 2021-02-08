const inputemail = document.querySelector('#email');
const inputpassword = document.querySelector('#Password');
const inputcompass = document.querySelector('#compass');
const error = document.querySelector('.error');
const errorpass = document.querySelector('.errorpass');
const errorcom = document.querySelector('.errorcom');


inputemail.onblur = function () {
if (!inputemail.value.includes('@')) {
    inputemail.classList.add('invalid')
    error.innerHTML = "please enter correct email!"
}
}

inputemail.onfocus = function () {
if (inputemail.classList.contains('invalid')) {
    this.classList.remove('invalid')
    error.innerHTML = ''
}
}


inputpassword.onblur = function () {
    if (inputpassword.value.length < 8 ) {
        inputpassword.classList.add('invalid')
        errorpass.innerHTML = "please check input parameters"
    } 
    if (inputpassword.value.length > 20 ) {
        inputpassword.classList.add('invalid')
        errorpass.innerHTML = "please check input parameters"
    }

    if (inputpassword.value[0].match(/[a-z]/)) {
        inputpassword.classList.add('invalid')
        errorpass.innerHTML = "please check input parameters"
    }

}


inputpassword.onfocus = function () {
if (inputpassword.classList.contains('invalid')) {
    this.classList.remove('invalid')
    errorpass.innerHTML = ''
}
}

inputcompass.onblur = function () {
    if (!(inputcompass.value === inputpassword.value)) {
     inputcompass.classList.add('invalid')
     errorcom.innerHTML = "error"
    }
}

inputcompass.onfocus = function () {
    if (inputcompass.classList.contains('invalid')) {
     this.classList.remove("invalid")
     errorcom.innerHTML = ""
    }
}


/*inputpassword.onblur = function () {
    if ((inputpassword.value.length < 8 && inputpassword.value.length > 20 )
        && inputpassword.value[0].includes(/[a-z]/)) {
        inputpassword.classList.add('invalid')
        errorpass.innerHTML = "please check input parameters"
    }
}

inputpassword.onfocus = function () {
if (inputpassword.classList.contains('invalid')) {
    this.classList.remove('invalid')
    errorpass.innerHTML = ''
}
}*/