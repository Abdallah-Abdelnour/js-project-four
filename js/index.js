let myInputOne = document.querySelector('.inp-one');
let myInputTwo = document.querySelector('.inp-two');
let myInputThree = document.querySelector('.inp-three');
let myInputFour = document.querySelector('.inp-four');

let myPOne = document.querySelector('.fisrt-name');
let myPTwo = document.querySelector('.last-name');
let myPThree = document.querySelector('.email');
let myPFour = document.querySelector('.password');

let myImgOne = document.querySelector('.img-fisrt-name');
let myImgTwo = document.querySelector('.img-last-name');
let myImgThree = document.querySelector('.img-email');
let myImgFour = document.querySelector('.img-password');

let myBtn = document.querySelector('button');



myBtn.onclick = function(){

    if(myInputOne.value === ""){
        myInputOne.style.cssText = 'border: 2px solid #f19193;';
        myPOne.style.cssText = 'opacity: 1;';
        myImgOne.style.cssText = 'opacity: 1;';
    }else{
        myInputOne.style.cssText = 'border: 1px solid #333333;';
        myPOne.style.cssText = 'opacity: 0;';
        myImgOne.style.cssText = 'opacity: 0;';
    }

    if(myInputTwo.value === ""){
        myInputTwo.style.cssText = 'border: 2px solid #f19193;';
        myPTwo.style.cssText = 'opacity: 1;';
        myImgTwo.style.cssText = 'opacity: 1;';
    }else{
        myInputTwo.style.cssText = 'border: 1px solid #333333;';
        myPTwo.style.cssText = 'opacity: 0;';
        myImgTwo.style.cssText = 'opacity: 0;';
    }

    if(myInputThree.value === ''){
        myInputThree.style.cssText = 'border: 2px solid #f19193;';
        myImgThree.style.cssText =  'opacity: 1;';
        myPThree.style.cssText =  'opacity: 1;';
    }else if(myInputThree.value.search('@email.com')===-1){
        myInputThree.style.cssText = 'border: 2px solid #f19193;';
        myImgThree.style.cssText =  'opacity: 1;';
        myPThree.style.cssText =  'opacity: 1;';
    }else{
        myInputThree.style.cssText = 'border: 1px solid #cccccc;';
        myImgThree.style.cssText =  'opacity: 0;';
        myPThree.style.cssText =  'opacity: 0;';
    }

    if(myInputFour.value === ""){
        myInputFour.style.cssText = 'border: 2px solid #f19193;';
        myPFour.style.cssText = 'opacity: 1;';
        myImgFour.style.cssText = 'opacity: 1;';
    }else{
        myInputFour.style.cssText = 'border: 1px solid #333333;';
        myPFour.style.cssText = 'opacity: 0;';
        myImgFour.style.cssText = 'opacity: 0;';
    }

};


