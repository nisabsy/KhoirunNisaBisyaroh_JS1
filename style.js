// IF ELSE, NESTED IF
// Program untuk mengecek apakah sebuah angka positif, negatif, atau nol.
// Menggunakan if else 
let angka = 5;

if (angka > 0) {
  console.log("Angka ini positif");
} else if (angka < 0) {
  console.log("Angka ini negatif");
} else {
  console.log("Angka ini adalah nol");
}

// Menggunakan nested if untuk menentukan jenis bilangan positif
let bilangan = 10;

if (bilangan > 0) {
  console.log("Angka ini positif");
  
  if (bilangan % 2 === 0) {
    console.log("Angka ini juga genap");
  } else {
    console.log("Angka ini ganjil");
  }
} else if (bilangan < 0) {
  console.log("Angka ini negatif");
} else {
  console.log("Angka ini adalah nol");
}


// SWITCH CASE
// Program untuk menentukan hari berdasarkan angka
let angkaHari = 3; 

switch (angkaHari) {
  case 1:
    console.log("Hari ini adalah Senin");
    break;
  case 2:
    console.log("Hari ini adalah Selasa");
    break;
  case 3:
    console.log("Hari ini adalah Rabu");
    break;
  case 4:
    console.log("Hari ini adalah Kamis");
    break;
  case 5:
    console.log("Hari ini adalah Jumat");
    break;
  case 6:
    console.log("Hari ini adalah Sabtu");
    break;
  case 7:
    console.log("Hari ini adalah Minggu");
    break;
  default:
    console.log("Angka yang Anda masukkan tidak valid. Masukkan angka dari 1 hingga 7.");
}


// FOR STATEMENT
// Program untuk mencetak deret bilangan dari 1 hingga 10 menggunakan for statement
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


// WHILE, DO WHILE
// Program untuk mencetak deret bilangan dari 1 hingga 5 menggunakan while statement
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

// Program untuk mencetak deret bilangan dari 1 hingga 5 menggunakan do...while statement
let j = 1;

do {
  console.log(j);
  j++;
} while (j <= 5);


// FUNCTION
// Program untuk menghitung luas segitiga menggunakan function
// Mendefinisikan fungsi untuk menghitung luas segitiga
function hitungLuasSegitiga(alas, tinggi) {
  // Rumus luas segitiga: (1/2) * alas * tinggi
  let luas = (1/2) * alas * tinggi;
  return luas;
}

// Menggunakan fungsi untuk menghitung luas segitiga
let alasSegitiga = 5;
let tinggiSegitiga = 8;

let luasSegitiga = hitungLuasSegitiga(alasSegitiga, tinggiSegitiga);

console.log("Luas segitiga dengan alas", alasSegitiga, "dan tinggi", tinggiSegitiga, "adalah", luasSegitiga);