const animationDiv = document.querySelector(".index-animation-div");
const animImgsArr = ["images/Peppered snail.jpeg","images/snail-peper-sauce.jpeg","images/Peppered.jpeg","images/Peppered Snails.jpeg","images/dry-sauce.jpg","images/oil-sauce.jpg","images/large-dry-sauce.jpg"];

setInterval(()=>{
    let i= Math.floor(Math.random()*7);
animationDiv.innerHTML = `<img src="${animImgsArr[i]}" alt="" class="img-fluid card-img-top" ">`;
},2000);