
const randomColor= function (){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(i=0;i<6;i++){
        let random= Math.floor(Math.random()*16);

        color+= random.toString(16)
    }
   console.log(color);
   return color;
}

/* 
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
*/

function changeBGcolor(){
    document.body.style.backgroundColor= randomColor()
}
let IntervalID;
function startChangingColor(){
    if (!IntervalID) {
        IntervalID = setInterval(changeBGcolor, 1000);
      }
}

function stopChangingColor(){
    clearInterval(IntervalID)
    IntervalID= null;

}

document.querySelector('#start').addEventListener('click', startChangingColor)




document.querySelector('#stop').addEventListener('click', stopChangingColor)