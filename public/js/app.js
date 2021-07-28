const label = document.querySelector('#label');
const input = document.querySelector('#input');


input.addEventListener('input', function (){
    if (input.value.length < 1){

        label.classList.add('auth--label-active');

    }else {
        label.classList.remove('auth--label-active');

    }

})
