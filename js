const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document . getElementById('lamp');



function lampOn(){ 
     document.getElementById ("lamp").src = './on.jpg';

}

function lampOff(){
     document.getElementById ("lamp").src = './off.jpg';

}

turnOn .addEventListener ( 'click', lampOn );
turnOff .addEventListener( 'click', lampOff);
