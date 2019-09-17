function getUserCountry() {
  let country = prompt('Введите вашу страну').toLowerCase();
  const firstLetter = country.charAt(0).toUpperCase();
  country = firstLetter + country.slice(1);
  return country;
}

function getDeliveryPrice(country) {
  let price;
  let isAvable = true;
  let result;

  switch (country) {
    case 'Китай':
      price = 100;
      break;

    case 'Чили':
      price = 250;
      break;

    case 'Австралия':
      price = 170;
      break;

    case 'Индия':
      price = 80;
      break;

    case 'Ямайка':
      price = 120;
      break;

    default:
      isAvable = false;
      break;
  }

  // eslint-disable-next-line no-unused-expressions
  isAvable
    ? result = `Доставка в ${country} будет стоить ${price} кредитов`
    : result = 'В вашей стране доставка не доступна';
  alert(result);
}

const UserCountry = getUserCountry();
getDeliveryPrice(UserCountry);
