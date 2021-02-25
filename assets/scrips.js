const manuImg = document.getElementById('manu-img');
const manu = document.getElementById('manu');

manuImg.addEventListener('click', function(){
    manu.classList.toggle('show');       
})

const absolut1 = document.getElementById('absolut-1');
const page3 = document.getElementById('page-3');
console.log(page3.display);
if(absolut1.style.right < 0){
    page3.style.display = 'block';
    console.log(page3.style.display);
}