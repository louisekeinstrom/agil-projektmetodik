const nameValue = document.querySelector('#name');

const mail = document.querySelector('#email');

const picture = document.querySelector('#picture');

const inputSubmit = document.querySelector('#submit');

const confirmAction = document.querySelector('#submit-confirmed');

const formContainer = document.querySelector('#form-container');



formContainer.addEventListener('submit', (e) => {

    e.preventDefault();

    console.log('hej');

    confirmAction.innerHTML = `<p>

    You have sent in this information: <br>

    Name:${nameValue.value} <br>

    Mail:${email.value} <br>

    Image: <img height="200px" id="output" src= />

    </p>`

    }

);

var loadFile = function (event) {

    var reader = new FileReader();

    reader.onload = function () {

        var output = document.getElementById('output');

        output.src = reader.result;

    };

    reader.readAsDataURL(event.target.files[0]);

};
