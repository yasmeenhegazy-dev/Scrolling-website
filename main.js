let stars1 = document.getElementById('stars');
let moon2 = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river');
let boat6 = document.getElementById('boat6');
let camp = document.querySelector('.camp');


window.onscroll = function(){
    let value = scrollY;
    stars1.style.left = value + 'px';
    moon2.style.top = value * 4 +'px';
    mountains3.style.top = value * 2 +'px';
    mountains4.style.top = value * 1.5 +'px';
    river5.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    camp.style.fontSize = value +'px';
    if(scrollY >= 70){
        camp.style.fontSize =70 +'px';
        camp.style.position = 'fixed';

        if(scrollY >= 480){
            camp.style.display = 'none';

        }else{
            camp.style.display = 'block';

        }
        if(scrollY >=127){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
        }else{
             document.querySelector('.main').style.background = 'linear-gradient((#200016,#10001f)';
        }

    }


}