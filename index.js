const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.license = document.getElementById('licenseCheckbox').checked;
    console.log(data);
    validate(data);
});
