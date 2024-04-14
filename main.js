var tl = gsap.timeline();
tl.from(".loader_x",{
  duration:1,
  rotate:180+'deg',
   //stagger:1,
   stagger:3,
   ease: "power4.inOut",
})

tl.to(".loader",{
  top:1000+"vh",
  duration:3,
  rotate:180+'deg',
   //stagger:1,
   ease: "power4.inOut",
})


/*gsap.from(".loader_x", {
  duration: 1,
  //scale: 0.1,
  x: 1000,
  y:1000,
  ease: "power1.inOut",
  //stagger:2.2,
  stagger: {
    grid: [7, 15],
    from: "start",
    ease: "power2.in",
    amount: 2
  }
  
});*/
/*

var text = document.getElementById("___");
var text_ = Array.from(text.textContent);
var x = text_.map((e, i) => {
  return `<span>${e}</span>`

})
text.innerHTML = x.join("");


*/
var tex=document.querySelector(".span")
var text__ = gsap.timeline();

text__.from(".text h1",1.8,{
  y:300,
 // x:33,
   delay:1,
   stagger:2.2,
   //stagger:1.4,

   skewY:7,
   ease: "power1.out",
/*
     stagger: {
    amount: 4
  }
*/

})
