const primaryTestSource = `/static/media/primary-test-img`;
const testObject = [
  {
    key: 1,
    id: 1,
    question: 'Five',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/01-Five.a.PNG`,
      `${primaryTestSource}/01-Five.c.PNG`,
      `${primaryTestSource}/01-Five.b.PNG`,
    ],
  },
  {
    key: 2,
    id: 2,
    question: 'Pencil',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/02-Pencil.b.PNG`,
      `${primaryTestSource}/02-Pencil.a.PNG`,
      `${primaryTestSource}/02-Pencil.c.PNG`,
    ],
  },
  {
    key: 3,
    id: 3,
    question: 'Ball',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/03-Ball.a.PNG`,
      `${primaryTestSource}/03-Ball.b.PNG`,
      `${primaryTestSource}/03-Ball.c.PNG`,
    ],
  },
  {
    key: 4,
    id: 4,
    question: 'A big dog',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/04-BigDog.a.PNG`,
      `${primaryTestSource}/04-BigDog.b.PNG`,
      `${primaryTestSource}/04-BigDog.c.PNG`,
    ],
  },
  {
    key: 5,
    id: 5,
    question: 'Eyes',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/05-Eyes.a.PNG`,
      `${primaryTestSource}/05-Eyes.b.PNG`,
      `${primaryTestSource}/05-Eyes.c.PNG`,
    ],
  },
  {
    key: 6,
    id: 6,
    question: 'I have a long tail',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/6.LongTail.a.PNG`,
      `${primaryTestSource}/6.LongTail.b.PNG`,
      `${primaryTestSource}/6.LongTail.c.PNG`,
    ],
  },
  {
    key: 7,
    id: 7,
    question: 'Socks',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/07-Socks.b.PNG`,
      `${primaryTestSource}/07-Socks.c.PNG`,
      `${primaryTestSource}/07-Socks.a.PNG`,
    ],
  },
  {
    key: 8,
    id: 8,
    question: 'I cannot ride a bike',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/08-CantRide.a.PNG`,
      `${primaryTestSource}/08-CantRide.b.PNG`,
      `${primaryTestSource}/08-CantRide.c.PNG`,
    ],
  },
  {
    key: 9,
    id: 9,
    question: 'Bedroom',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/09-Bedroom.a.PNG`,
      `${primaryTestSource}/09-Bedroom.b.PNG`,
      `${primaryTestSource}/09-Bedroom.c.PNG`,
    ],
  },
  {
    key: 10,
    id: 10,
    question: 'I like ice cream',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/10-LikeIceCream.a.PNG`,
      `${primaryTestSource}/10-LikeIceCream.b.PNG`,
      `${primaryTestSource}/10-LikeIceCream.c.PNG`,
    ],
  },
  {
    key: 11,
    id: 11,
    question: 'Eighteen',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/11-Eighteen.a.PNG`,
      `${primaryTestSource}/11-Eighteen.b.PNG`,
      `${primaryTestSource}/11-Eighteen.c.PNG`,
    ],
  },
  {
    key: 12,
    id: 12,
    question: 'These are kites',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/12-Kites.a.PNG`,
      `${primaryTestSource}/12-Kites.b.PNG`,
      `${primaryTestSource}/12-Kites.c.PNG`,
    ],
  },
  {
    key: 13,
    id: 13,
    question: 'Lamp',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/13-Lamp.a.PNG`,
      `${primaryTestSource}/13-Lamp.b.PNG`,
      `${primaryTestSource}/13-Lamp.c.PNG`,
    ],
  },
  {
    key: 14,
    id: 14,
    question: 'They are eating cake',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/14-TheyreEatingCake.a.PNG`,
      `${primaryTestSource}/14-TheyreEatingCake.b.PNG`,
      `${primaryTestSource}/14-TheyreEatingCake.c.PNG`,
    ],
  },
  {
    key: 15,
    id: 15,
    question: 'Juice',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/15-Juice.a.PNG`,
      `${primaryTestSource}/15-Juice.b.PNG`,
      `${primaryTestSource}/15-Juice.c.PNG`,
    ],
  },
  {
    key: 16,
    id: 16,
    question: 'It can swim and jump',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/16-SwimAndJump.a.PNG`,
      `${primaryTestSource}/16-SwimAndJump.b.PNG`,
      `${primaryTestSource}/16-SwimAndJump.c.PNG`,
    ],
  },
  {
    key: 17,
    id: 17,
    question: 'Basketball',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/17-Basketball.b.PNG`,
      `${primaryTestSource}/17-Basketball.a.PNG`,
      `${primaryTestSource}/17-Basketball.c.PNG`,
    ],
  },
  {
    key: 18,
    id: 18,
    question: 'The carrots are between the tomatoes and plums',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/18-CarrotsBetween.b.PNG`,
      `${primaryTestSource}/18-CarrotsBetween.c.PNG`,
      `${primaryTestSource}/18-CarrotsBetween.a.PNG`,
    ],
  },
  {
    key: 19,
    id: 19,
    question: 'Grandparents',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/19-Grandparents.a.PNG`,
      `${primaryTestSource}/19-Grandparents.b.PNG`,
      `${primaryTestSource}/19-Grandparents.c.PNG`,
    ],
  },
  {
    key: 20,
    id: 20,
    question: 'She is getting dressed',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/20-ShesGettingDressed.a.PNG`,
      `${primaryTestSource}/20-ShesGettingDressed.b.PNG`,
      `${primaryTestSource}/20-ShesGettingDressed.c.PNG`,
    ],
  },
  {
    key: 21,
    id: 21,
    question: 'Fifty',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/21-Fifty.a.PNG`,
      `${primaryTestSource}/21-Fifty.b.PNG`,
      `${primaryTestSource}/21-Fifty.c.PNG`,
    ],
  },
  {
    key: 22,
    id: 22,
    question: 'He works on a farm',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/22-HeWorksOnAFarm.a.PNG`,
      `${primaryTestSource}/22-HeWorksOnAFarm.b.PNG`,
      `${primaryTestSource}/22-HeWorksOnAFarm.c.PNG`,
    ],
  },
  {
    key: 23,
    id: 23,
    question: 'Backache',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/23-Backache.a.PNG`,
      `${primaryTestSource}/23-Backache.b.PNG`,
      `${primaryTestSource}/23-Backache.c.PNG`,
    ],
  },
  {
    key: 24,
    id: 24,
    question: 'He is very strong',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/24-HesVeryStrong.a.PNG`,
      `${primaryTestSource}/24-HesVeryStrong.b.PNG`,
      `${primaryTestSource}/24-HesVeryStrong.c.PNG`,
    ],
  },
  {
    key: 25,
    id: 25,
    question: 'Snow',
    option: ['a', 'b', 'c'],
    images: [
      `${primaryTestSource}/25-Snow.a.PNG`,
      `${primaryTestSource}/25-Snow.b.PNG`,
      `${primaryTestSource}/25-Snow.c.PNG`,
    ],
  },
  {
    key: 26,
    id: 26,
    question: '',
    option: ['a', 'b', 'c'],
    choices: ["She's exciting.", "She's difficult.", "She's busy."],
    images: [`${primaryTestSource}/26.PNG`],
  },
  {
    key: 27,
    id: 27,
    question: '',
    option: ['a', 'b', 'c'],
    choices: ["He's running quickly.", "He's running good.", "He's running quick."],
    images: [`${primaryTestSource}/27.PNG`],
  },
  {
    key: 28,
    id: 28,
    question: '',
    option: ['a', 'b', 'c'],
    choices: [
      'He go to the doctor yesterday.',
      'He goed to the doctor yesterday.',
      'He went to the doctor yesterday.',
    ],
    images: [`${primaryTestSource}/28.PNG`],
  },
  {
    key: 29,
    id: 29,
    question: '12th',
    option: ['a', 'b', 'c'],
    choices: ['Twelve', 'Twelfth', 'Twelveth'],
    images: [
      // EMPTY
    ],
  },
  {
    key: 30,
    id: 30,
    question: '',
    option: ['a', 'b', 'c'],
    choices: [
      'I could read when I was six.',
      "I couldn't read when I am six.",
      'I can read when I was six.',
    ],
    images: [`${primaryTestSource}/30.PNG`],
  },
  {
    key: 31,
    id: 31,
    question: '',
    option: ['a', 'b', 'c'],
    choices: [
      'The horse is thirsty than the dog.',
      'The horse is thirster than the dog.',
      'The horse is thirstier than the dog.',
    ],
    images: [`${primaryTestSource}/31.PNG`],
  },
  {
    key: 32,
    id: 32,
    question: '',
    option: ['a', 'b', 'c'],
    choices: [
      'Giraffes are the taller animals in the world.',
      'Giraffes are the tallest animals in the world.',
      'Giraffes are the tallest than animals in the world.',
    ],
    images: [`${primaryTestSource}/32.PNG`],
  },
  {
    key: 33,
    id: 33,
    question: '',
    option: ['a', 'b', 'c'],
    choices: [
      "He didn't ate sandwiches for lunch.",
      'He not eat sandwiches for lunch.',
      "He didn't eat sandwiches for lunch.",
    ],
    images: [`${primaryTestSource}/33.PNG`],
  },
  {
    key: 34,
    id: 34,
    question: '',
    option: ['a', 'b', 'c'],
    choices: [
      'The man walked under the library.',
      'The man walked into the library.',
      'The man walked on the library.',
    ],
    images: [`${primaryTestSource}/34.PNG`],
  },
  {
    key: 35,
    id: 35,
    question: '',
    option: ['a', 'b', 'c'],
    choices: ["It's half past two.", "It's quarter past two.", "It's quarter to two."],
    images: [`${primaryTestSource}/35.PNG`],
  },
  {
    key: 36,
    id: 36,
    question: '',
    option: ['a', 'b', 'c'],
    choices: [
      "They're going to catch the bus.",
      'They going to catch the bus.',
      'They go to catch the bus.',
    ],
    images: [`${primaryTestSource}/36.PNG`],
  },
  {
    key: 37,
    id: 37,
    question: '',
    option: ['a', 'b', 'c'],
    choices: [
      'This is the room which you brush your teeth.',
      'This is the room where you brush your teeth.',
      'This is the room who you brush your teeth.',
    ],
    images: [`${primaryTestSource}/37.PNG`],
  },
  {
    key: 38,
    id: 38,
    question: '',
    option: ['a', 'b', 'c'],
    choices: [
      "He was eat dinner at 8 o' clock.",
      "He was ate dinner at 8 o' clock.",
      "He was eating dinner at 8 o' clock.",
    ],
    images: [`${primaryTestSource}/38.PNG`],
  },
  {
    key: 39,
    id: 39,
    question: '',
    option: ['a', 'b', 'c'],
    choices: [
      'The first month of the year is January.',
      'The first month of the year is July.',
      'The first month of the year is June.',
    ],
    images: [`${primaryTestSource}/39.PNG`],
  },
  {
    key: 40,
    id: 40,
    question: '',
    option: ['a', 'b', 'c'],
    choices: ['Is paper made to wood?', 'Is paper made of wood?', 'Is paper made in wood?'],
    images: [`${primaryTestSource}/40.PNG`],
  },
  {
    key: 41,
    id: 41,
    question: '',
    option: ['a', 'b', 'c'],
    choices: ['The tea looks like hot.', 'The tea look hot.', 'The tea looks hot.'],
    images: [`${primaryTestSource}/41.PNG`],
  },
  {
    key: 42,
    id: 42,
    question: '',
    option: ['a', 'b', 'c'],
    choices: [
      "You shouldn't to carry heavy bags.",
      "You shouldn't carried heavy bags.",
      "You shouldn't carry heavy bags.",
    ],
    images: [`${primaryTestSource}/42.PNG`],
  },
  {
    key: 43,
    id: 43,
    question: '',
    option: ['a', 'b', 'c'],
    choices: ['She win the match.', "She's won the match.", "She's winned the match."],
    images: [`${primaryTestSource}/43.PNG`],
  },
  {
    key: 44,
    id: 44,
    question: '',
    option: ['a', 'b', 'c'],
    choices: [
      'Will the rocket go to the moon?',
      'Will the rocket goes to the moon?',
      'Will the rocket going to the moon?',
    ],
    images: [`${primaryTestSource}/44.PNG`],
  },
  {
    key: 45,
    id: 45,
    question: '',
    option: ['a', 'b', 'c'],
    choices: [
      'They were walked in the forest when they seeing an owl.',
      'They???re walking in the forest when they???re seeing an owl.',
      'They were walking in the forest when they saw an owl.',
    ],
    images: [`${primaryTestSource}/45.PNG`],
  },
  {
    key: 46,
    id: 46,
    question: '',
    option: ['a', 'b', 'c'],
    choices: [
      'There are enough foods to eat.',
      'There is enough food to eat.',
      'There are enough food to eat.',
    ],
    images: [`${primaryTestSource}/46.PNG`],
  },
  {
    key: 47,
    id: 47,
    question: '',
    option: ['a', 'b', 'c'],
    choices: [
      'The door bell rang but no-one was at the door.',
      'The door bell rang but anyone was at the door.',
      'The door bell rang but everyone was at the door.',
    ],
    images: [`${primaryTestSource}/47.PNG`],
  },
  {
    key: 48,
    id: 48,
    question: '',
    option: ['a', 'b', 'c'],
    choices: [
      'They might need their coats.',
      'They might to need their coats.',
      'They may to need their coats.',
    ],
    images: [`${primaryTestSource}/48.PNG`],
  },
  {
    key: 49,
    id: 49,
    question: '',
    option: ['a', 'b', 'c'],
    choices: ["He's excited.", "He's afraid.", "He's brave."],
    images: [`${primaryTestSource}/49.PNG`],
  },
  {
    key: 50,
    id: 50,
    question: '',
    option: ['a', 'b', 'c'],
    choices: [
      'I???m never eating Italian food before.',
      'I never eat Italian food before.',
      'I???ve never eaten Italian food before.',
    ],
    images: [`${primaryTestSource}/50.PNG`],
  },
];
export default testObject;
