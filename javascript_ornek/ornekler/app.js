let value = document.querySelector(".result");
let value1 = document.getElementById("result");
function arttir(){
    value1.innerText++;
}

function azalt(){
    value1.innerText--;
}

function ortHesapla(){
    let vize = document.getElementById("vize").value;
    let final = document.getElementById("final").value;

    let ort = vize * 0.4 + final * 0.6;
    let result1 = document.querySelector(".result1");
    let durum = "";

    if(ort > 80){
        durum = "Basarili";
        result1.style.color= "green";
        result1.style.fontSize ="20px";
    } else if(ort >=60){
        durum = "Geçtiniz";
        result1.style.color= "blue";
        result1.style.fontSize ="20px";
    } else if (ort>=50){
        durum = "Ortalama ile geçtiniz"
        result1.style.color= "orange";
        result1.style.fontSize ="20px";
    } else {
        durum = "Kaldınız";
        result1.style.color= "red";
        result1.style.fontSize ="30px";
        result1.style.fontWeight= 700;
    }
    result1.innerHTML = `<p>Ortalamanız:${ort}</p>
    <p>Durumunuz: ${durum}</p>
    `
}