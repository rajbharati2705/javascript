// const buttons=document.querySelectorAll('.button');
// const bod=document.querySelector('body')


// buttons.forEach( function(btn) {
//     btn.addEventListener('click',function(e)
//     {
//         if(e.target.id==='grey')
//         {
//             bod.style.backgroundColor=e.target.id;   
//         }
//         if(e.target.id==='red')
//         {
//             bod.style.backgroundColor=e.target.id;   
//         }
//         if(e.target.id==='blue')
//         {
//             bod.style.backgroundColor=e.target.id;   
//         }
//         if(e.target.id==='yellow')
//         {
//             bod.style.backgroundColor=e.target.id;   
//         }
//     });
// });


//using arrow function
const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach( (element) => {
    
    element.addEventListener('click', (e)=>{
        if(e.target.id==='grey')
        {
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='red')
        {
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='blue')
        {
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='yellow')
        {
            body.style.backgroundColor=e.target.id
        }

    });
    
});


