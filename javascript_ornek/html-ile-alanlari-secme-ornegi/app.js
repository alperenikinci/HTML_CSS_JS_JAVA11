let value;

value = document.getElementsByTagName("p");
console.log(value);
value = document.getElementsByTagName("div");
console.log(value);
value = document.getElementsByTagName("a");
console.log(value[0].href);
console.log(value[1].href);
value = document.getElementById("patates");
console.log(value);
value = document.getElementsByClassName("kutu");
console.log(value);
value = document.getElementsByClassName("container");
console.log(value);
value = document.querySelector(".kutu"); 
console.log(value);
value = document.querySelector("p"); //ilk buldugu degeri getirir
console.log(value.innerText);
value = document.querySelectorAll("p");
value.forEach((x)=> console.log(x.innerText));
console.log(value.innerText);
value = document.querySelectorAll("a");
value[1].setAttribute("href", "https://www.youtube.com");
console.log(value[1]);

value = document.querySelector(".kutu");
value.textContent += "yeni deger";
//value.innerText = "en yeni deger";
console.log(value.innerHTML);

let dersNo = 101;

value.innerHTML = `<ul>
<li>React ${dersNo}</li>
<li>Java ${dersNo+1}</li>
<li>.Net ${dersNo+2}</li>
</ul>
`;

function elemanYarat(){
    let kutu = document.querySelector(".kutu");
    let newLink = document.createElement("a");
    newLink.id = "newlink";
    newLink.className= "myLink";
    newLink.href = "https://www.instagram.com";
    newLink.target = "_blank";
    newLink.textContent = "instagram linki";
    newLink.setAttribute("style","color:red;");
    newLink.classList.add("yeni_sinif");
    newLink.classList.remove("myLink");
    console.log(newLink);
    kutu.appendChild(newLink);
}

function toplama(){
    console.log("sonuc = " + (5+7));
    return 5+7;
}

function toplama2(a,b){
    a = a+2;
    b = b+5;
    return a+b;
}
console.log(toplama2(5,7));

const toplama3 = function(){
    return 5+10;
}
console.log(toplama3());

const toplama4 = (a,b)=>{
    console.log(a+b);
    return a+b;
};
console.log(toplama4(25,40));

