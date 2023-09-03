// dont give this here
// const height=document.querySelector('#height')
// const weight=document.querySelector('#weight')
// const btnclk=document.querySelector('.cal')
const form = document.querySelector('form');
form.addEventListener('submit',function (e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('.result')

    if(height===' ' || height<0 || isNaN(height))
    {
        results.innerHTML=`Please enter a valid number,you entered ${height}`
    }
    else  if(weight===' ' || weight<0 || isNaN(weight))
    {
        results.innerHTML=`Please enter a valid number,you entered ${weight}`
    }
    else
    {
        const bmi=(weight/((height*height)/1000)).toFixed(2);
        if(bmi<18.6)
        results.innerHTML=`<span>Your BMI is ${bmi} and you are Under Weight </span>`
        else if(18.6<bmi>24.9)
        results.innerHTML=`<span>Your BMI is ${bmi} and you are Normal Weight </span>`
        else if(bmi>24.9)
        results.innerHTML=`<span>Your BMI is ${bmi} and you are over Weight </span>`
    }
});