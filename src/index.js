var x = 10;

function aa(){
    return x * 10;
}

console.log(aa(9));

// jquery
import $ from 'jquery';

import { gsap } from "gsap";

gsap.to('.logo' ,{
   duration:1 ,
x: 300,
y :10,
repeat: -1,
yoyo : true,
rotation:360
});

import './css/style.css';
import './css/header.css';
import './css/footer.css';
import './sass/main.scss';

$('body').css('background-color', "white");