var elList = document.querySelector('.proect__list')
var count = 0
function left(){
    count = count -1 
    elList.style.transform = `translateX(-${600 * count}px)`
}

function right(){
    count = count + 1
    if(count < 3){
        elList.style.transform = `translateX(-${600 * count}px)`
    }else{
        count = 3   
    }
}

var elText = document.querySelector('.question__text')
var elBtn = document.querySelector('.question__btn')
var count = 0

function btn(){
    count = count + 1 
    elText.style.display = 'block'
    elBtn.textContent = '-'
    console.log(count);

    if(count == 2){
        elText.style.display = 'none'
    elBtn.textContent = '+'
    }if(count ==2   ){
        count = 0
    }
}



