var gForecast = {
    '01': 'You will get a lot of money!',
    '02': 'You will find love next week!',
    '03': 'You will change work!',
    '04': 'Corona will gone!',
    '05': 'BlO',
    '06': 'JFHF',
    '07': 'Bla',
    '08': 'BlO',
    '09': 'JFHF',
    '10': 'Bla',
    '11': 'BlO',
    '12': 'JFHF',
}

function saveUserPrefs() {
    var bgColor = document.getElementById('bg-color').value;
    var txtColor = document.getElementById('txt-color').value;
    var birthDate = document.getElementById('birth-date').value;
    var userData = { bgColor: bgColor, txtColor: txtColor, birthDate: birthDate };
    saveToStorage('userData', userData);
    event.preventDefault();
}

function loadUserPrefs() {
    var userData = loadFromStorage('userData');
    document.body.style.backgroundColor = userData.bgColor;
    document.body.style.color = userData.txtColor;
    loadForecast(userData.birthDate);
}

function loadForecast(birthDate) {
    var birthDateArr = birthDate.split('-');
    var birthMonth = birthDateArr[1];
    console.log(birthMonth);
    document.querySelector('.forecast').innerText = gForecast[birthMonth];
}

function displayAge(el){
    document.querySelector('.age').innerText = el;
}

function checkValid(){
    elConfirmPass.setCustomValidity("")
}
// function loadUserPrefsToForm(){
//     document.getElementById('bg-color').setAttribute('value', bgColor);
//     document.getElementById('txt-color').setAttribute('value', txtColor);
//     document.getElementById('birth-date').setAttribute('value', birthDate);
// }
