const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result= document.querySelector(".result");
const result_text = document.querySelector(".result-text");


rock.addEventListener('click', () =>{
 
 const show = () => {   
    console.log("oldu");
    html='<img src="./paper.png" alt="">';
    result.innerHTML=html;
    result_text.innerHTML='<h3>Lose</h3>';
    clearInterval(showResult);
}
showResult=setInterval(show,1000);
  
});

paper.addEventListener('click', () =>{
    const show = () => {   
        console.log("oldu");
        html='<img src="./scissors.png" alt="">';
        result.innerHTML=html;
        result_text.innerHTML='<h3>Lose</h3>';
        clearInterval(showResult);
    }
    showResult=setInterval(show,1000);
});
scissors.addEventListener('click', () =>{
    const show = () => {   
        console.log("oldu");
        html='<img src="./rock.png" alt="">';
        result.innerHTML=html;
        result_text.innerHTML='<h3>Lose</h3>';
        clearInterval(showResult);
    }
    showResult=setInterval(show,1000);
});