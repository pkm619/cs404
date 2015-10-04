var b = require('bonescript');
var state = 0;

b.pinMode('P8_11', b.INPUT);
b.pinMode('P8_13', b.INPUT);

b.pinMode('P9_11', b.OUTPUT);

setInterval(check,100);

function check(){
	b.digitalRead('P8_11', fun1);
	b.digitalRead('P8_13', fun2);
}

function fun1(x) {
  if(x.value == 1){
    state = 1;
    b.digitalWrite('P9_11', state);
  }
}

function fun2(x) {
  if(x.value == 1){
    state = 0;
    b.digitalWrite('P9_11', state);
  }
}