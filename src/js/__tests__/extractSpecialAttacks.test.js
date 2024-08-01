import extractSpecialAttacks from '../extractSpecialAttacks';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // описание "засекречено"
    },
  ],
};

test('should extract special attacks with default description', () => {
  const expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ];

  const result = extractSpecialAttacks(character);
  expect(result).toEqual(expected);
});

test('should handle empty special array', () => {
  const emptyCharacter = {
    ...character,
    special: [],
  };
  const expected = [];
  const result = extractSpecialAttacks(emptyCharacter);
  expect(result).toEqual(expected);
});
