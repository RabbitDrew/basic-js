const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  // Проверка на тип даты и корректность
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date!');
  }

  // Проверка на "трудные моменты" — объект, который выглядит как дата
  if (Object.prototype.toString.call(date) !== '[object Date]' || isNaN(date.getTime())) {
    throw new Error('Invalid date!');
  }

  // Проверка на "очень трудные моменты"
  try {
    date.getUTCFullYear();
  } catch (e) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();

  // Месяцы для сезонов
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  const seasonMapping = [
    [11, 0, 1], // winter
    [2, 3, 4],  // spring
    [5, 6, 7],  // summer
    [8, 9, 10], // autumn
  ];

  for (let i = 0; i < seasonMapping.length; i++) {
    if (seasonMapping[i].includes(month)) {
      return seasons[i];
    }
  }
  throw new Error('Invalid date!');
}



module.exports = {
  getSeason,
};
