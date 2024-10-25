
function hideElementById(event){
    const hideElement=document.getElementById(event);
    hideElement.classList.add('hidden');
}

function showElementById(event){
    const showElement=document.getElementById(event);
    showElement.classList.remove('hidden');
}

function getRandomAlphabet(){
    const getAlphabet='abcdefghijklmnpqrstuvwxyz';
    const strToArr=getAlphabet.split('');
    const randomAlhabet=Math.round(Math.random()*strToArr.length);
    const alphabet=strToArr[randomAlhabet]; 
    return alphabet;
}


function continueGame(){
    const output=getRandomAlphabet(); 
    setKeyBg(output);
    const setAlphabet=document.getElementById('setText');
    setAlphabet.innerText=output; 
}

function keybords(key){
    const keys=key.key;
    const setAlphabet=document.getElementById('setText');
    if(setAlphabet.innerText.toLowerCase()===keys){
        const bg=setAlphabet.innerText.toLowerCase(); 
        const tex=document.getElementById(bg);
        tex.classList.remove('bg-red-500')
        const deletebg=continueGame();
        currentScore();  
    } else{
        currentLife();
    }
}

document.addEventListener('keyup',keybords);


function setKeyBg(bgId){
    const setBg=document.getElementById(bgId);
    setBg.classList.add('bg-red-500');
}


function currentScore(){
    let getp=document.getElementById('current-score');
    const step2=getp.innerText;
    let parse=parseFloat(step2); 
    parse+=1;
    getp.innerText=parse; 
    const setPoint=document.getElementById('set-score');
    setPoint.innerText=getp.innerText;
   
}
function currentLife(){
    let getp=document.getElementById('current-life');
    const step2=getp.innerText;
    let parse=parseFloat(step2); 
    parse-=1; 
    getp.innerText=parse; 
    if(parse===0){
        scores()
    }
}

function playAgain(){
    hideElementById('main-score'); 
    let getp=document.getElementById('current-life');
    getp.innerText=5; 
    let getp2=document.getElementById('current-score');
    getp2.innerText=0; 
    showElementById('playGround');
}

function scores(){
    hideElementById('playGround');
    showElementById('main-score');

}

function callMe(){
    hideElementById('home');
    showElementById('playGround');
     continueGame();
   
}
 