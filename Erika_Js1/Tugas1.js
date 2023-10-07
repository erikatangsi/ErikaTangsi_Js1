// contoh program if, else, nested if
var nilai = 90;

if (nilai >= 90) {
    console.log("Anda mendapatkan nilai A");
} else if (nilai >= 80) {
    console.log("Anda mendapatkan nilai B");
} else if (nilai >= 70) {
    console.log("Anda mendapatkan nilai C");
} else {
    console.log("Anda mendapatkan nilai D");
    
    if (nilai < 50) {
        console.log("Anda perlu meningkatkan nilai Anda secara signifikan.");
    } else {
        console.log("Anda dapat mencoba lebih keras untuk mendapatkan nilai yang lebih baik.");
    }
}


// contoh program switch case
var hari = "Selasa";
var aktivitas = "";

switch (hari) {
    case "Senin":
        aktivitas = "Kerja";
        break;
    case "Selasa":
        aktivitas = "Belajar JavaScript";
        break;
    case "Rabu":
        aktivitas = "Olahraga";
        break;
    case "Kamis":
        aktivitas = "Meeting";
        break;
    case "Jumat":
        aktivitas = "Bersantai";
        break;
    default:
        aktivitas = "Libur";
}

console.log("Hari ini adalah " + hari + ". Aktivitas hari ini: " + aktivitas);



// contoh program for statement
for (var i = 1; i <= 5; i++) {
    console.log("Angka: " + i);
}



// contoh program while, do while 
var angka = 1;

while (angka <= 5) {
    console.log("Angka: " + angka);
    angka++;
}


var angka2 = 1;

do {
    console.log("Angka2: " + angka2);
    angka2++;
} while (angka2 <= 5);



// contoh program function
function tambah(a, b) {
    return a + b;
}

var hasil = tambah(5, 3);
console.log("Hasil penambahan: " + hasil);