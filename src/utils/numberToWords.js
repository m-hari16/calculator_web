export const numberToWords = (number) => {
  const words = {
    0: 'nol',
    1: 'satu',
    2: 'dua',
    3: 'tiga',
    4: 'empat',
    5: 'lima',
    6: 'enam',
    7: 'tujuh',
    8: 'delapan',
    9: 'sembilan',
    10: 'sepuluh',
    11: 'sebelas',
    100: 'seratus'
  };

  if (number < 0) {
      return 'minus ' + numberToWords(-number);
  } else if (number < 12) {
      return words[number];
  } else if (number < 20) {
      return numberToWords(number - 10) + ' belas';
  } else if (number < 100) {
      return numberToWords(Math.floor(number / 10)) + ' puluh ' + numberToWords(number % 10);
  } else if (number < 1000) {
      return numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords(number % 100);
  } else if (number < 1000000) {
      return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000);
  } else if (number < 1000000000) {
      return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number % 1000000);
  } else if (number < 1000000000000) {
      return numberToWords(Math.floor(number / 1000000000)) + ' milyar ' + numberToWords(number % 1000000000);
  } else {
      return 'Angka terlalu besar untuk diolah';
  }
}