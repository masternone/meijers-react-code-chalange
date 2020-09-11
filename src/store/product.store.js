export const getProducts = async() => {
  // console.log('in function getProducts');
  // There is a cross origin site error so I cannot access the response even when I apply to the no cors mode
  // let response = await fetch(
  //   'https://meijerdigital.azurewebsites.net/api/interview',
  //   {mode: 'no-cors'});
  // return await response.json();
  return new Promise((resolve) => resolve([{
      'name': 'Banana',
      'price': '$.30',
      'image': 'https://www.meijer.com/content/dam/meijer/product/0000/00/0004/01/0000000004011_2_A1C1_1200.png',
      'code': 4011
    }, {
      'name': 'Strawberries',
      'price': '$3.00',
      'image': 'https://www.meijer.com/content/dam/meijer/product/0780/35/3784/03/0780353784030_a1c1_1200.png',
      'code': 78035378403
    }, {
      'name': 'Clementine Mandarins',
      'price': '$3.00',
      'image': 'https://www.meijer.com/content/dam/meijer/product/0033/38/3146/05/0033383146058_a1c1_1200.png',
      'code': 3338314605
    }])
  );
};
