// getMonth soal callback

const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = ['January', 'February', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error('Sorry Data Not Found'), []);
    }
    // saya persingkat
  }, 1000);
};

function showMonth(check, month) {
  return (
    new Promise((resolve, reject) => {
      // check parameter callback pertama harus null
      if (check == null) {
        resolve(month);
      } else {
        reject(check);
      }
    })
      // nampilin data variabel month
      .then((result) => {
        result.map((data) => {
          console.log(data);
        });
      })
      .catch((error) => {
        console.log(error.message);
      })
  );
}

getMonth(showMonth);

// getMonth soal promise

// const getMonth = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let error = false;
//       let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//       if (!error) {
//         resolve(month);
//       } else {
//         reject(new Error('Sorry Data Not Found'));
//       }
//     }, 1500);
//   });
// };

// getMonth()
// .then((result) => {
//   result.map((data) => {
//     console.log(data);
//   })
// })
// .catch((error) => {
//   // Handle error
//   console.error(error);
// });
