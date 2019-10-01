const string = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum recusandae ex quas fuga atque modi omnis tempora fugit iste inventore? Sunt aut neque obcaecati. Nam corrupti eaque, tempora amet repudiandae laboriosam esse cupiditate, placeat, asperiores veniam accusantium nostrum dolor dolore!';

const matchLettersToWords = function (string) {
  const reportObject = {};
  const words = string.split(' ');
  words.forEach((element) => {
    const firstLetter = element[0].toLowerCase();
    if (!reportObject[firstLetter]) {
      reportObject[firstLetter] = [element];
    } else if (!reportObject[firstLetter].includes(element)) {
      reportObject[firstLetter].push(element);
    }
  });

  return reportObject;
};

matchLettersToWords(string);
