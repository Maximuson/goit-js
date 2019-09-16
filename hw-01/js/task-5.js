function getUserCountry() {
  let Country = prompt('Введите вашу страну').toLowerCase();
  const FirstLetter = Country.charAt(0).toUpperCase();
  Country = FirstLetter + Country.slice(1);
  return Country;
}

function getDeliveryPrice(Country) {
  let price;
  let isAvable = true;

  switch (Country) {
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

  isAvable
    ? alert(`Доставка в ${Country} будет стоить ${price} кредитов`)
    : alert('В вашей стране доставка не доступна');
}

const UserCountry = getUserCountry();
getDeliveryPrice(UserCountry);
