const credits = 23580;
const priceDroid = 3000;
let totalPrice = 0;
const countBuyDroids = prompt('Введите количество');


if (countBuyDroids !== null) {
  totalPrice = priceDroid * countBuyDroids;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(
      `Вы купили ${countBuyDroids} дроидов, на счету осталось ${credits
                  - totalPrice} кредитов.'`,
    );
  }
} else {
  console.log('Отменено пользователем!');
}
