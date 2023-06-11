const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(Error('Hari ini bukan hari kerja'));
      }
    }, 1000);
  });
};

// then(), catch()
// then = menangkap dan menampilkan dataDay di promise jika kondisi sukses (resolve)
// catch = menangkap dan menampilkan dataDay di promise jika kondisi gagal (reject)
function cekThen(day) {
  cekHariKerja(day)
    .then((result) => {
      console.log(`${result} merupakan hari kerja`);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
cekThen('sabtu');
cekThen('senin');

// try catch
// try = mengecek dan menampilkan code javascript yang mungkin terjadi error
// catch = mengecek error yang terjadi di blok try
async function cekTry(day) {
  try {
    const result = await cekHariKerja(day);
    console.log(`${result} merupakan hari kerja`);
  } catch (error) {
    console.log(error.message);
  }
}
cekTry('minggu');
cekTry('jumat');
