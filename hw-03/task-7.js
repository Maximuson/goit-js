const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

/**
 * Метод отвечающий за создание UUID
 */
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    let r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /**
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {
    const _Transaction = {};
    _Transaction.id = uuidv4();
    _Transaction.type = Transaction.DEPOSIT;
    _Transaction.amount = amount;

    this.balance += amount;
    this.addTransaction(_Transaction);
  },

  /**
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      alert("что снятие такой суммы не возможно, недостаточно средств.");
    } else {
      const _Transaction = {};
      _Transaction.id = uuidv4();
      _Transaction.type = Transaction.WITHDRAW;
      _Transaction.amount = amount;

      this.balance -= amount;
      this.addTransaction(_Transaction);
    }
  },

  /**
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект трназкции
   */
  addTransaction(transaction) {
    this.transactions.push(transaction);
  },

  /**
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /**
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    return this.transactions.find(e => {
      if ((e.id = id)) return e;
    });
  },

  /**
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    return this.transactions.reduce((result, elem) => {
      if (elem.type === type) {
        result += elem.amount;
      }
      return result;
    }, 0);
  }
};
