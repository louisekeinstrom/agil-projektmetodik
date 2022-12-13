const nameValue = document.querySelector('#name');

const mail = document.querySelector('#mail');

const picture = document.querySelector('#picture');

const inputSubmit = document.querySelector('#submit');

const comfirmAction = document.querySelector('#submit-comfirmed');





inputSubmit.addEventListener('click', (e) => {

    console.log('hej');

e.preventDefault()



comfirmAction.innerHTML= `<p>

You have sent in this information; <br>

Name:${nameValue.value} <br>

Mail:${mail.value}</p> <br>

Image:${picture.value}

</p>`

}

);
