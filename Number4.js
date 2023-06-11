// const axios = require('axios');
axios
  .get('https://jsonplaceholder.typicode.com/users/')
  // berhasil GET
  .then((response) => {
    response.data.map((item) => {
      console.log(item.name);
    });
  })
  // gagal GET
  .catch(function (error) {
    console.log(error);
  });

// }).then(...)
// fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     res.map((item) => {
//       console.log(`nama = ${item.name}`);
//     });
//   });
