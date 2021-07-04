var button = document.querySelector('#btn');

button.addEventListener('click', () => {
    number = document.querySelector('#num').value;
    percent = document.querySelector('#perc').value;
    console.log(number);
    var result = parseFloat(number) * (parseFloat(percent) / 100)
    var container = document.getElementById('container');
    var my_html = '<h1>';
    my_html += result
    my_html += '</h1>'
    
    container.innerHTML = my_html;
})

