function validate({ login, password, confirmPassword, license, firstName, gender}) {
    console.log(gender);
    const buseLogins = [ 'bee', 'beeline', 'beeinterns'];
    let coincidence = false;
    for (let buseLogin of buseLogins) {
        if (buseLogin === login) {
        coincidence = true;
        }
    }
    if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (coincidence) {
        alert( 'Данный логин уже занят!');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if(!firstName) {
        alert('Введите имя');
    } else if (!license) {
        alert('Необходимо согласие');
    } else {
        alert(gender === 'male' ? `Уважаемый ${firstName}, заявка создана` : `Уважаемая ${firstName}, заявка создана`);
    }
}
