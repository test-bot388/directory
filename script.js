"use strict";
const background = [
  "http://4.bp.blogspot.com/-lqjR_dc3PRM/U1Tf_UMjjkI/AAAAAAAAOuM/D-grOMb4wMo/s1600/IT_67.jpg",
  "http://4.bp.blogspot.com/-zEvrji5v4Rc/VBfkYxoBAtI/AAAAAAAAZZM/TvQqqNt8fO8/s1600/Beach%2BBunny%2B(6).png",
  "http://2.bp.blogspot.com/-flbUr3GCINw/UmZAmTS0ZhI/AAAAAAAAIOY/8IlddkMcnFY/s1600/827233655_SM_16_123_405lo.jpg",
  "http://3.bp.blogspot.com/-dX4KkIL-8yA/UmZAir_rd7I/AAAAAAAAIN8/teaYfDGzSo4/s1600/827228483_SM_07_123_210lo.jpg",
  "http://3.bp.blogspot.com/-lXcGZuzJ5IE/Ue-hWoxpewI/AAAAAAAAEiA/nhKhP-HmRUk/s1600/a3.jpg",
  "http://1.bp.blogspot.com/-TnDZoRd5dco/UlZmZ5f9JjI/AAAAAAAAHig/XkTMeZddpDQ/s1600/718788512_010_123_195lo.jpg",
  "http://1.bp.blogspot.com/-p5ucRz3edWE/UlZmXT8ZvTI/AAAAAAAAHiU/WHqMJlDAwgI/s1600/718785903_008_123_74lo.jpg",
  "http://2.bp.blogspot.com/-J3fi77BPy70/UlZmG0as2PI/AAAAAAAAHhk/R38UFJcOtWY/s1600/718772721_002_123_252lo.jpg",
  "https://64.media.tumblr.com/6ccc925d2a3dcd9862c28844abbf23f3/tumblr_ngw7ff50W61qlr0abo1_1280.jpg",
  "https://i.pinimg.com/originals/35/c6/20/35c6209c6d2beefff323c03188c6e4c8.jpg",
  "https://jav-fetish.com/wp-content/uploads/2018/02/pppd00618pl-1.jpg",
  "https://javpornpics.com/dmm/hitomi-hitomi-tanaka/pppd00881/hd-hitomi-hitomi-tanaka-0.jpg",
];
let backgroundIndex = Math.round(Math.random() * background.length);

//dynamically set background image
const setBackground = function () {
  const backgroundElements = document.getElementsByClassName("header hero");
  for (let i = 0; i < backgroundElements.length; i++) {
    backgroundElements[i].style.backgroundImage = background[backgroundIndex];
  }
};
setBackground();
