// ==========================================
// TUGAS MINGGU 06: LIMA SOAL LOGIKA JAVASCRIPT
// ==========================================

// Soal 1: Ganjil atau Genap
function ganjilGenap(angka) {
  if (angka % 2 === 0) {
    return "genap";
  } else {
    return "ganjil";
  }
}

console.log("Soal 1: ganjil atau genap");
console.log(`ganjilGenap(7) = ${ganjilGenap(7)}`);   // ganjil[span_2](start_span)[span_2](end_span)
console.log(`ganjilGenap(12) = ${ganjilGenap(12)}`); // genap[span_3](start_span)[span_3](end_span)
console.log(`ganjilGenap(0) = ${ganjilGenap(0)}`);   // genap[span_4](start_span)[span_4](end_span)


// Soal 2: Konversi Suhu (Celsius ke Fahrenheit menggunakan Arrow Function)
const celsiusKeFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

console.log("\nSoal 2: konversi suhu");
console.log(`celsiusKeFahrenheit(0) = ${celsiusKeFahrenheit(0)}`);     // 32[span_5](start_span)[span_5](end_span)
console.log(`celsiusKeFahrenheit(100) = ${celsiusKeFahrenheit(100)}`); // 212[span_6](start_span)[span_6](end_span)
console.log(`celsiusKeFahrenheit(-40) = ${celsiusKeFahrenheit(-40)}`); // -40[span_7](start_span)[span_7](end_span)


// Soal 3: Nilai Terbesar dari Tiga Angka
function nilaiTerbesar(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log("\nSoal 3: nilai terbesar");
console.log(`nilaiTerbesar(5, 9, 2) = ${nilaiTerbesar(5, 9, 2)}`);     // 9[span_8](start_span)[span_8](end_span)
console.log(`nilaiTerbesar(80, 75, 80) = ${nilaiTerbesar(80, 75, 80)}`); // 80[span_9](start_span)[span_9](end_span)
console.log(`nilaiTerbesar(-3, -7, -1) = ${nilaiTerbesar(-3, -7, -1)}`); // -1[span_10](start_span)[span_10](end_span)


// Soal 4: Tahun Kabisat
function tahunKabisat(tahun) {
  if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log("\nSoal 4: tahun kabisat");
console.log(`tahunKabisat(2024) = ${tahunKabisat(2024)}`); // true[span_11](start_span)[span_11](end_span)
console.log(`tahunKabisat(2026) = ${tahunKabisat(2026)}`); // false[span_12](start_span)[span_12](end_span)
console.log(`tahunKabisat(1900) = ${tahunKabisat(1900)}`); // false[span_13](start_span)[span_13](end_span)
console.log(`tahunKabisat(2000) = ${tahunKabisat(2000)}`); // true[span_14](start_span)[span_14](end_span)


// Soal 5: Diskon Belanja
function hargaSetelahDiskon(total) {
  if (total >= 200000) {
    return total - (total * 0.2); // Diskon 20%
  } else if (total >= 100000) {
    return total - (total * 0.1); // Diskon 10%
  } else {
    return total; // Tanpa diskon
  }
}

console.log("\nSoal 5: diskon belanja");
console.log(`hargaSetelahDiskon(250000) = ${hargaSetelahDiskon(250000)}`); // 200000[span_15](start_span)[span_15](end_span)
console.log(`hargaSetelahDiskon(100000) = ${hargaSetelahDiskon(100000)}`); // 90000[span_16](start_span)[span_16](end_span)
console.log(`hargaSetelahDiskon(75000) = ${hargaSetelahDiskon(75000)}`);   // 75000[span_17](start_span)[span_17](end_span)