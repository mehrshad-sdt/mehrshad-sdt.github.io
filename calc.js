var button = document.querySelector('#btn');

button.addEventListener('click', () => {
    var number = document.querySelector('#num').value;
    var percent = document.querySelector('#perc').value;
    alert(parseFloat( number) * (parseFloat(percent) / 100));
})