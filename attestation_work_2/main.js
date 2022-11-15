let firstAdvise = document.querySelector('.first-input__advise'),
    secondAdvise = document.querySelector('.second-input__advise'),
    thirdAdvise = document.querySelector('.third-input__advise'),
    button = document.querySelector('.button'),
    firstInp = document.querySelector('.email-input'),
    secondInp = document.querySelector('.password-input'),
    thirdInp = document.querySelector('.password-repeat'),
    genderMan = document.querySelector('#man'),
    genderWoman = document.querySelector('#woman'),
    labelMan = document.querySelector('.form-checkbox__gender-label[for="man"]'),
    labelWoman = document.querySelector('.form-checkbox__gender-label[for="woman"]'),
    acceptance = document.querySelector('#check-box');

let userInfo = [{
    'Email': '',
    'Пароль': '',
    'Пол': '',
    'Согласие': ''

}]

button.addEventListener('click', (e) => {
    e.preventDefault();

    if (secondInp.value == '') {
        secondAdvise.textContent = 'Поле обязательно для заполнения';
        secondAdvise.style.display = 'block';
        secondInp.style.border = '2px solid red';
    } else if (secondInp.value.length < 8) {
        secondAdvise.textContent = 'Пароль должен содержать не менее 8 символов';
        secondAdvise.style.display = 'block';
        secondInp.style.border = '2px solid red';
    } else {
        secondAdvise.style.display = 'none';
        secondInp.style.border = '2px solid #787878';
    }
    if (thirdInp.value == '' || thirdInp.value != secondInp.value) {
        thirdAdvise.style.display = 'block';
        thirdInp.style.border = '2px solid red';
    } else {
        thirdAdvise.style.display = 'none';
        thirdInp.style.border = '2px solid #787878';
    }
    if (validateEmail(firstInp.value) && firstInp.value != '') {
        firstAdvise.style.display = 'none';
        firstInp.style.border = '2px solid #787878';
    } else if (firstInp.value == '') {
        firstAdvise.textContent = 'Поле обязательно для заполнения';
        firstAdvise.style.display = 'block';
        firstInp.style.border = '2px solid red'; 
    } else {
        firstAdvise.textContent = 'Email введён некорректно';
        firstAdvise.style.display = 'block';
        firstInp.style.border = '2px solid red';
    }
    //console.log(firstInp.value, secondInp.value, thirdInp.value)
    if (genderMan.checked) {
        userInfo['Пол'] = labelMan.innerHTML;
    }
    if (genderWoman.checked) {
        userInfo['Пол'] = labelWoman.innerHTML;   
    }
    if (acceptance.checked) {
        userInfo['Согласие'] = 'Согласен';
    } else {
        userInfo['Согласие'] = 'Не согласен';
    }
    userInfo['Email'] = firstInp.value;
    userInfo['Пароль'] = secondInp.value;
    console.log(userInfo);
});
function validateEmail(email) { const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; return re.test(String(email).toLowerCase()); }

