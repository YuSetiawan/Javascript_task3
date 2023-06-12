// Web API 1
// console.log('=== aplikasi quotes dari dummy json ===');
// const axios = require('axios');
// axios
//   .get('https://dummyjson.com/quotes')
//   // berhasil GET
//   .then((results) => {
//     let data = results.data.quotes;
//     data.map((item) => {
//       console.log(`quote: ${item.quote}`);
//       console.log(`author: ${item.author}`);
//       console.log(`======================`);
//     });
//   })
//   // gagal GET
//   .catch(function (error) {
//     console.log(error);
//   });

// Web API 2
console.log('=== aplikasi products dari dummy json ===');
const axios = require('axios');
axios
  .get('https://dummyjson.com/products')
  // berhasil GET
  .then((res) => {
    let data = res.data.products;
    data.map((item) => {
      console.log(`product name: ${item.title}`);
      console.log(`category: ${item.category}`);
      console.log(`price: ${item.price}`);
      console.log(`======================`);
    });
  })
  // gagal GET
  .catch(function (error) {
    console.log(error);
  });
