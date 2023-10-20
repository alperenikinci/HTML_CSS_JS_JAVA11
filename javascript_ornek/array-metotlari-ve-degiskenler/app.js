console.log("İçerideyiz");

let sayi1 = 5;
const sayi2 = 10;

// sayi2= sayi1 + 5;

console.log(sayi1);
console.log(sayi2);

let sayilar = [1, 5, 7, 9, 15, 20];
let sayilar2 = new Array();

sayilar2.push(10); //sondan ekleme yapar
sayilar2.push(18);
sayilar2.push(70);

sayilar2.unshift(100); // bastan ekleme yapar
sayilar2.pop(); // sondan veri siler
sayilar2.shift(); // bastan veri siler
let sayilar3 = [];

console.log(sayilar);
console.log(sayilar2);
console.log(sayilar3);

for(let i = 0; i<sayilar.length;i++){
    console.log(sayilar[i]+5);
}
console.log("######################");
sayilar2.forEach((x) => console.log(x+5));
console.log("######################");

sayilar3 = sayilar.map((y) => y+5);
console.log(sayilar3);

console.log("######################");

let sayilar4= [1,5,7,9,15,20,"30"];
console.log(sayilar4);

//Splice
//sayilar4.splice(1,2); // 1. indexten itibaren 2 veri siler ve array'i degistirir.
//sayilar4.splice(2,2); // 2. indexten itibaren 2 veri siler ve array'i degistirir.
//console.log(sayilar4.splice(0,2)); // sildigi degerleri doner.
console.log(sayilar4);

//Slice
console.log("##### Slice #####"); // Slice orjinal array'i degistirmez.
console.log(sayilar4.slice(1,3)); // substring gibi calisir. aradan veri cekmek icin kullanilir. ilk girilen index dahil, son girilen index dahil degildir.
console.log("######")
console.log(sayilar4.slice(2));
console.log(sayilar3);
sayilar3 = sayilar4.slice(2);
console.log(sayilar3);


//sayilar 4 array'inden 15'den buyuk olanlari yeni bir array'e aktaralim;
let sayilar5 = sayilar4.filter((y) => y>15);
console.log(sayilar5);
console.log("sayilar5");

// cift "==" sadece deger kontrolü yapar.
// üc "===" hem deger kontrolü yapar. Hemde tur/type kontrolu yapar.
let id = sayilar4.find((x) => x == 30);
let id2 = sayilar4.find((x) => x === 30);
console.log(id);
console.log(id2);

sayilar4 = [1,5,9,15,24,36,"30"];
//sayilar4'de herhangi bir eleman 24'den buyuk mudur?
let sonuc = sayilar4.some((x) => x>24); // herhangi bir deger bu kosulu sagliyor ise true doner.
console.log(sonuc);

//sayilar 4'de her elemanın 5'den buyuk olup olmadıgını gosterelim;
let sonuc2 = sayilar4.every((x) => x >5); // butun degerler bu kosulu sagliyor ise true doner.
console.log(sonuc2);

let sayilar6 =[120,5,90,15,1,24,26,30]; //basic sorting algorithms
console.log(sayilar6.sort((a,b) => b-a));

//120,5,90,15,1,24,26,30
//120,90,5,15,1,24,26,30
//120,90,15,5,1,24,26,30
//120,90,15,5,24,1,26,30
//120,90,15,5,24,26,30,1
//120,90,15,24,26,30,5,1