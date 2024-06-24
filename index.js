function changeStyles(style) {
    var blocks = document.querySelectorAll('.block');

    blocks.forEach(function(block) {
        block.style.backgroundColor = getComputedStyle(document.body).getPropertyValue('--' + style);
    });
}

let button_primary =  document.querySelector('.button_primary');
let button_secondary = document.querySelector('.button_secondary');
let button_tertiary = document.querySelector('.button_tertiary');

let container = document.querySelector('.container');

let block1 = document.querySelector('#block1');
let block2 = document.querySelector('#block2');
let block3 = document.querySelector('#block3');
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
button_primary.addEventListener("click", function(){
   console.log(container);
container.style.backgroundColor ='blue';
container.style.maxWidth ='1500px'


});

button_primary.addEventListener("click", function (){
    block1.style.backgroundColor = 'red';
    });

button_primary.addEventListener("click", function (){
block2.style.backgroundColor = 'yellow';
img1.setAttribute('src' ,'https://avatars.mds.yandex.net/get-altay/1903890/2a0000016dbb5492d8b91146874c339e2444/orig')
img2.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJCrixA-mamnfUaBX1GD3BUTXx3Gh4kAJu1O8gW5aqiMIM21ryZtGyPGgE_A8px1UEssc&usqp=CAU')
img3.setAttribute('src', 'https://avatars.mds.yandex.net/get-altay/4381564/2a000001825b3925231202f691e891600626/L_height')
});

button_primary.addEventListener("click", function (){
    block3.style.backgroundColor = 'green';
    });

button_secondary.addEventListener("click", function(){
container.style.backgroundColor = 'orange';
container.style.maxWidth ='1200px'
});

button_secondary.addEventListener("click", function (){
    block1.style.backgroundColor = ' yellow';
    });

button_secondary.addEventListener("click", function (){
block2.style.backgroundColor = 'red';
});

button_secondary.addEventListener("click", function (){
    block3.style.backgroundColor = 'blue';
    block3.style.color = 'white'
    img1.setAttribute('src' ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzHOcIIr6eMfrCfsYZDQ1mawJ3Q6A7hq3HO-3FxFKjA6Mp5oXB5JrAX559ksFpQnelZ4&usqp=CAU')
    img2.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkDKdUvnbSQ9J4yxa4HCCR62bT33hiAtEEhB8Bhxxn3ExTx34GPz5yQAC3lLJYYSOAH0&usqp=CAU')
    img3.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcM4d4WWF9VLPuuL5zcouo37CgK7FOjJdoBXnZyikOPdae2L0vPXU_rYKJDa8VsMsjJKA&usqp=CAU')
    });

button_tertiary.addEventListener("click", function(){
container.style.backgroundColor ='red';
container.style.maxWidth ='1000px'
});

button_tertiary.addEventListener("click", function (){
    block1.style.backgroundColor = ' yellow';
    });

button_tertiary.addEventListener("click", function (){
block2.style.backgroundColor = 'white';
});

button_tertiary.addEventListener("click", function (){
    block3.style.backgroundColor = 'blue';
    block3.style.color = 'white'
    img1.setAttribute('src' ,'https://avatars.mds.yandex.net/get-altay/7179902/2a00000183843d93da1be2d01ef83204daf2/orig')
    img2.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuVfuGfub-C3VZUuE1_Y2JcdDp3QI_uiPI4tWUBpLODbZVb8biDAL37igPpwqtWoPCu0&usqp=CAU')
    img2.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTOP4C1PsoNQBsRjW-ZuYOU-uFqqEjSAPOba32z_EDIE9BWRSLlvwm5aKLAy0EC1K2a3U&usqp=CAU')
    });