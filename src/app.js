console.log('hi......');

const age = document.querySelector('#age');
const submitAge = document.querySelector('#submit-age');
const inputGroup = document.querySelector('.input-group');

const findBirthYear = () => {
    const now = new Date().getFullYear();
    const birthYear = now - age.value;
    const h3 = document.createElement('h3');
    h3.className = 'bold';
    h3.appendChild(document.createTextNode(`You are born in - ${birthYear}`))
    inputGroup.insertAdjacentElement('afterend', h3);
}



// Event

submitAge.addEventListener('click', findBirthYear)



//Calculator ....

const numbers = document.querySelectorAll('.calc-num'); 
const evaluate = document.querySelector('#evaluate');
const cancel = document.querySelector('#cancel');

const getNumber = (e) =>{
    const result = document.getElementById('result');
     result.value +=  e.target.value;
}
Array.from(numbers).forEach(el => {
    el.addEventListener('click', getNumber)
})

const getResult = () =>{
    const resultOperation = document.getElementById('result').value;
    const endResult = eval(resultOperation);
    console.log(endResult);
    document.getElementById('result').value = endResult;
}



evaluate.addEventListener('click', getResult)
cancel.addEventListener('click', ()=>{
    document.getElementById('result').value = '';
})

// Slider

let images = [
    'https://source.unsplash.com/user/erondu/1600x900',
    'https://source.unsplash.com/user/erondu/1603x900',
    'https://source.unsplash.com/user/erondu/1602x900'
];

let i =0 ;

const slider = () => {

        document.getElementById('images').src = images[i]; 

        if(i<images.length-1){
           i++; 
        }
        else{
           i=0; 
        }
    
    }

setInterval(slider, 1500);




// Slider

// let images = [
//     'http://localhost:8080/img/1.jpeg',
//     'http://localhost:8080/img/2.jpeg',
//     'http://localhost:8080/img/3.jpeg',
// ];


// const slider = () => {


//     for(let i=0; i<images.length; i++){
//       // console.log(images[i]);
//       //console.log(document.getElementById('images').src);
//         document.getElementById('images').src = images[i]; 
    
//     }

// }


// setInterval(slider, 1000);



