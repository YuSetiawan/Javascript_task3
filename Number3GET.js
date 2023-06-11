// Web API 1
const axios = require('axios');
axios
  .get('https://dummyjson.com/quotes')
  // berhasil GET
  .then((results) => {
    let data = results.data.quotes;
    let quote = data.map((item) => {
      return item.quote;
    });
    let author = data.map((item) => {
      return item.author;
    });
    console.log(`name: ${author} quote: ${quote}`);
  })
  // gagal GET
  .catch(function (error) {
    console.log(error);
  });

// Web API 2
// const axios = require('axios');
// axios
//   .get('https://dummyjson.com/products')
//   // berhasil GET
//   .then((res) => {
//     let data = res.data.products;
//     let title = data.map((item) => {
//       return item.title;
//     });
//     let category = data.map((item) => {
//       return item.category;
//     });
//     let price = data.map((item) => {
//       return item.price;
//     });
//     console.log(`product name: ${title}, category: ${category}, price: ${price}`);
//   })
//   // gagal GET
//   .catch(function (error) {
//     console.log(error);
//   });
