const inputGroup = document.getElementById('input-group');
const line = document.getElementById('line');
const progressBar = document.getElementById('progress-bar');
const nxtBtn = document.getElementById('nxt-btn');
const inputField = document.getElementById('input-field');
const inputLabel = document.getElementById('input-label');
const formGroup = document.getElementById('form-box');
const perBtn = document.getElementById('pre-btn');
const container = document.getElementById('container');
const questions=[{question:'Enter your Name'},{question:'Enter email',pattern:/\S+@\S+\.\S+/},{question:'Enter Password',type:'password'}];
let position=1;
let ans=[];
//onload event
window.addEventListener('DOMContentLoaded',()=>{
    inputGroup.style.opacity='1';
    line.style.width='100%';
});

nxtBtn.addEventListener('click',()=>{
 if(inputField.value===null||inputField.value===''){
    inputFail(); 
 }
 else{
     
    pass(); 
 }
});

function inputFail(){
    line.style.borderColor='red';
    nxtBtn.style.color='red'
    formGroup.classList.add('shake');
}
function pass(){
    if(!questions[position]){
        formGroup.classList.add('close');
        appendMsg();
    }
    else{
        
        ans.push(inputField.value)
        inputField.type=questions[position].type||'text'; //get input type
        inputLabel.innerText=questions[position++].question;
        
        inputField.value="";
        line.style.borderColor='#ca4286';
        nxtBtn.style.color='#ca4286';
        formGroup.classList.remove('shake');
        
    }
}

function appendMsg(){
  const div = document.createElement('div');
  setTimeout(()=>{
    div.innerHTML=`<h2>Thankyou ${ans[0]} for submiting from you will get email shortly<h2>`;
  container.appendChild(div);
  },900)
  
}