// ==========================================
// LATIHAN JAVASCRIPT DASAR - MINGGU 06
// Kalkulator Nilai Rapor di Console
// ==========================================

// 1. Pesan Pertama ke Console (KP 1)
console.log("Halo, saya Adit!");
console.log("Ini latihan JavaScript pertamaku.");


// 2. Data Siswa & Variabel (KP 2 & KP 3)
const nama = "aditya pratama";
const kelas = "X PLG 1";
const kkm = 75;

let nilaiTugas = 85;
let nilaiUts = 78;
let nilaiUas = 89;
let kehadiran = 90;

console.log(`Nama: ${nama}, kelas ${kelas}`);
console.log(`Nilai tugas ${nilaiTugas}, UTS ${nilaiUts}, UAS ${nilaiUas}`);


// 3. Fungsi-Fungsi Pendukung (KP 5)
// Fungsi menghitung rata-rata menggunakan Arrow Function
const hitungRataRata = (tugas, uts, uas) => (tugas + uts + uas) / 3;

// Fungsi menentukan predikat nilai menggunakan if, else if, dan else
function predikat(nilai) {
  if (nilai >= 90) {
    return "A";
  } else if (nilai >= 80) {
    return "B";
  } else if (nilai >= 70) {
    return "C";
  } else {
    return "D";
  }
}

// Fungsi membuat rapor gabungan
function rapor(namaSiswa, tugas, uts, uas) {
  const rata = hitungRataRata(tugas, uts, uas);
  return `${namaSiswa}: rata-rata ${rata}, predikat ${predikat(rata)}`;
}


// 4. Hasil Nilai dan Syarat Kelulusan Andi (KP 3, 4, & 5)
const rataRata = hitungRataRata(nilaiTugas, nilaiUts, nilaiUas);
const lulus = rataRata >= kkm;
const dapatSertifikat = lulus && kehadiran >= 80;

console.log(`Rata-rata nilai: ${rataRata}`);
console.log(`Predikat: ${predikat(rataRata)}`);
console.log(`Lulus KKM: ${lulus}`);
console.log(`Dapat sertifikat: ${dapatSertifikat}`);

// Pesan kelulusan dengan percabangan if-else
if (lulus) {
  console.log("Selamat, kamu lulus KKM!");
} else {
  console.log("Tetap semangat, ikuti remedial ya.");
}


// 5. Menguji Fungsi Predikat dengan Beberapa Nilai Batas (KP 5)
console.log(`predikat(95) = ${predikat(95)}`); // A
console.log(`predikat(90) = ${predikat(90)}`); // A, tepat di batas
console.log(`predikat(84) = ${predikat(84)}`); // B
console.log(`predikat(70) = ${predikat(70)}`); // C
console.log(`predikat(69) = ${predikat(69)}`); // D


// 6. Rapor Beberapa Siswa (KP 5)
console.log(rapor("Andi", 85, 78, 89));
console.log(rapor("Sinta", 92, 88, 96));
console.log(rapor("Budi", 70, 65, 72));