const credits = 23580;
const priceDroid = 3000;
let totalPrice = 0;
let countBuyDroids = prompt('Введите количество');

countBuyDroids == null
  ? (countBuyDroids = 'Отменено пользователем!')
  : (totalPrice = priceDroid * countBuyDroids);

if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  console.log(
    `Вы купили ${countBuyDroids} дроидов, на счету осталось ${credits
            - totalPrice} кредитов.'`,
  );
}
