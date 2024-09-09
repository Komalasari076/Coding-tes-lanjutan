function menghitungKarakter(arr) {
  let karakter = {};

  arr.forEach((num) => {
    if (karakter.hasOwnProperty(num)) {
      karakter[num] += 1;
    } else {
      karakter[num] = 1;
    }
  });

  return karakter;
}

console.log(menghitungKarakter([]));
