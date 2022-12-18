const body = document.querySelector(".main");
const btn = document.querySelectorAll('.btn');
const please = document.querySelector('.please');
const catgif = document.querySelector('.catgif');
const text = document.querySelector('.text p');


function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 100)+"vw";
    heart.style.animationDuration = (Math.random()*3)+2+"s"
    body.appendChild(heart);
}


let count = 0;
btn.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.classList.contains('yes')){
            catgif.src = './img/success.gif';
            btn.forEach(i => {
                i.style.display = 'none'
            })
            text.innerText = 'Ayieeee gusto ako ni Aira!! mwaa'
            please.style.display = 'none';

            setInterval(createHeart,100);
            setInterval(function name(params) {
                var heartArr = document.querySelectorAll(".fa-heart")
                if (heartArr.length > 200) {
                heartArr[0].remove()
                }
                //console.log(heartArr);
            },100)
            count = 0;                   
        }else if(e.target.classList.contains('no')){
            e.target.style.position = "fixed"
            e.target.style.bottom = Math.floor(Math.random()*100)+'%';
            e.target.style.left = Math.floor(Math.random()*100)+'%';

            count++

            if(count == 2){
                please.style.display = 'flex';
            }else if(count == 3){
                catgif.src = './img/peachandgoma.gif'
            }
            else if(count == 4){
                catgif.src = './img/mochi-mochimochi (2).gif'
            }
        }
    })
});

