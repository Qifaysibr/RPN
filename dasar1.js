// cara membuat variabel

var a = "a";
let b = "b";
const c = 'c';

// variabel bisa menampung tipe data string, integer/ number, boolean, array, object,

let nama = "ibrahim"; //string
let umur = 22; // number
let isHandsome = true; // boolean
let uang = 5000.5 // number tapi ada koma

let angka1 = 10;
let angka2 = 20;


console.log(angka1 + angka2, "pertambahan");
console.log(angka1 - angka2, "pengurangan");
console.log(angka1 / angka2, "pembagian");
console.log(angka1 * angka2, "perkalian");
console.log(angka1 % angka2, "modulo");


// disini kita belajar mengisi variabel

let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log("hasil operator pertambahan: " + penampungHasilOperatorAritmatika)//30

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log("hasil operator pengurangan : " + penampungHasilOperatorAritmatika)// -10

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log("hasil operator pembagian : " + penampungHasilOperatorAritmatika)//0.5

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log("hasil operator perkalian : " + penampungHasilOperatorAritmatika)//200
penampungHasilOperatorAritmatika = angka1 % angka2;
console.log("hasil operator modulo : " + penampungHasilOperatorAritmatika)//10

// string juga bisa ditambah namun string ga bisa dikurang dengan operator aritmatika

let firstName = "Syafiq";
let lastName = "Ibrahim";

let fullname = firstName + " " + lastName;
console.log(fullname)

console.log(firstName + " " + lastName);
console.log(firstName - lastName); // NaN


// alur pembacaan code
// untuk membaca code harus membacanya dari kiri ke kanan dan atas kebawah
// contoh

let number = 20;
console.log(number + 10); // 30

number = 10;
console.log(number + 10); //20

number = false;
console.log(number + 10); //10 


console.log(true + 10); //11