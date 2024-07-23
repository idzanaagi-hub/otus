const kolobok = (name) => {
  let str;
  switch (name) {
    case 'дедушка':
      str = 'Я от дедушки ушёл';
      break;
    case 'заяц':
      str = 'Я от зайца ушёл';
      break;
    case 'лиса':
      str = 'Меня съели';
      break;
    default:
      throw new Error('Нет такого значения');
  }
  return str;
};

const newYear = (name) => {
  if (name === 'Дед Мороз' || name === 'Снегурочка') {
    return `${name}! ${name}! ${name}!`;
  }

  throw new Error('Нет такого имени');
};
