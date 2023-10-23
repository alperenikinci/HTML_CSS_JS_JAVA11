/*
user nesnesi yaratalim. json obje


user=>
name:
surname:
age:
username:
password:
interests: 1'den fazla ilgi alanı olacak
expenses: 1'den fazla harcaması olacak

address = >>ismine bir nesne içerecek
country:
city:
*/

let user = {
    name:"Alperen",
    surname: "İkinci",
    age: 27,
    username: "alp",
    password: "123",
    interests: ["Müzik","Spor","Kodlama"],
    expenses: [100,50,300,10,60,850,159],
    address: {
        country: "Turkey",
        city: "Ankara"
    }
};

//console.log(user.address.city)
//console.log(user)

//1- harcamalar toplamını getiren fonksiyonu yazalım;

function getExpenses(){
    let sum = 0;
    user.expenses.forEach((x) => {
        sum +=x;
    });
    return sum;
}
const sumExpenses = () => {
    let sum = user.expenses.reduce((x,y) => x+y);
    return sum;
}
console.log(getExpenses());
console.log(sumExpenses());

const sumExpenses2 = (array) => {
    let sum = array.reduce ((x,y) => x+y);
    return sum;
}

console.log(sumExpenses2(user.expenses));

// son 2 harcama

function getLastTwoExp(){
    let index = user.expenses.length-2;
    return user.expenses.slice(index);
}

function getLastTwoExp2(){
    return user.expenses.slice(-2);
}

function getLastTwoExp3(){
    return user.expenses.reverse().slice(0,2).reverse();
}
console.log(getLastTwoExp());
console.log(getLastTwoExp2());
console.log(getLastTwoExp3());


//interest listesine 1.elemandan itibaren dışarıdan girdiğim 2 ilgi alanını eklemek istiyorum

function addInterests(interest1,interest2){
    user.interests.splice(1,0,interest1,interest2);
}
console.log(user.interests);
addInterests("Sinema","Boks");
console.log(user.interests);


function login(){
    let username = document.getElementById("myusername").value;
    console.log(username);
    let password = document.getElementById("mypassword").value;

    if(username === user.username && password === user.password){
        setTimeout(getHomePage,3000);
    //  setTimeout(() =>{
    //        window.location.href = "/javascript_ornek/ornekler/home.html"
    //    },3000);
    } else {
        alert("Giriş Başarısız!!!")
    }
}

const getHomePage = () => {
    window.location.href = "/javascript_ornek/ornekler/home.html";
};

function login2(){
    let form = document.querySelector("form");
    console.log(form);
    if(
     form.username.value   === user.username &&
     form.password.value   === user.password
    ){
        alert("Giriş Başarılı!!!");
        setTimeout(getHomePage,5000);
    }else{
        alert("Giriş Başarısız!!!")
    }
}

