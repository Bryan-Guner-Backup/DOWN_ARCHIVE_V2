exports.seed = function (knex) {
  return knex("flashcards").then(function () {
    return knex("flashcards").insert([
      {
        id: 1,
        level_id: 1,
        sign: "A",
        visual: "https://i.postimg.cc/8CfWd09K/A-big.png",
      },
      {
        id: 2,
        level_id: 1,
        sign: "B",
        visual: "https://i.postimg.cc/x14Mz2xN/B-big.png",
      },
      {
        id: 3,
        level_id: 1,
        sign: "C",
        visual: "https://i.postimg.cc/MTkB9Y8W/C-big.png",
      },
      {
        id: 4,
        level_id: 1,
        sign: "D",
        visual: "https://i.postimg.cc/bJQtW2z1/D-big.png",
      },
      {
        id: 5,
        level_id: 1,
        sign: "E",
        visual: "https://i.postimg.cc/gjmZWkJQ/E-big.png",
      },
      {
        id: 6,
        level_id: 2,
        sign: "F",
        visual: "https://i.postimg.cc/1XHxXMKM/F-big.png",
      },
      {
        id: 7,
        level_id: 2,
        sign: "G",
        visual: "https://i.postimg.cc/2jFN08fv/G-big.png",
      },
      {
        id: 8,
        level_id: 2,
        sign: "H",
        visual: "https://i.postimg.cc/P5NGfWvz/H-big.png",
      },
      {
        id: 9,
        level_id: 2,
        sign: "I",
        visual: "https://i.postimg.cc/5N4dTdxr/I-big.png",
      },
      {
        id: 10,
        level_id: 2,
        sign: "J",
        visual: "https://i.postimg.cc/nc3btRrh/J-big.png",
      },
      {
        id: 11,
        level_id: 3,
        sign: "K",
        visual: "https://i.postimg.cc/027gzkVr/K-big.png",
      },
      {
        id: 12,
        level_id: 3,
        sign: "L",
        visual: "https://i.postimg.cc/xdtBZ9fT/L-big.png",
      },
      {
        id: 13,
        level_id: 3,
        sign: "M",
        visual: "https://i.postimg.cc/rms7X7sG/M-big.png",
      },
      {
        id: 14,
        level_id: 3,
        sign: "N",
        visual: "https://i.postimg.cc/s1dLWXcK/N-big.png",
      },
      {
        id: 15,
        level_id: 3,
        sign: "O",
        visual: "https://i.postimg.cc/d3TXDd8L/O-big.png",
      },
      {
        id: 16,
        level_id: 4,
        sign: "P",
        visual: "https://i.postimg.cc/gJ7QY4LC/P-big.png",
      },
      {
        id: 17,
        level_id: 4,
        sign: "Q",
        visual: "https://i.postimg.cc/XY178KCp/Q-big.png",
      },
      {
        id: 18,
        level_id: 4,
        sign: "R",
        visual: "https://i.postimg.cc/nLsVws4T/R-big.png",
      },
      {
        id: 19,
        level_id: 4,
        sign: "S",
        visual: "https://i.postimg.cc/DztfV25h/S-big.png",
      },
      {
        id: 20,
        level_id: 4,
        sign: "T",
        visual: "https://i.postimg.cc/j5PxtGk7/T-big.png",
      },
      {
        id: 21,
        level_id: 5,
        sign: "U",
        visual: "https://i.postimg.cc/SNTHJg91/U-big.png",
      },
      {
        id: 22,
        level_id: 5,
        sign: "V",
        visual: "https://i.postimg.cc/YCvZgQfr/V-big.png",
      },
      {
        id: 23,
        level_id: 5,
        sign: "W",
        visual: "https://i.postimg.cc/W1xK7tXM/W-big.png",
      },
      {
        id: 24,
        level_id: 5,
        sign: "X",
        visual: "https://i.postimg.cc/CKD2rYQ9/X-big.png",
      },
      {
        id: 25,
        level_id: 5,
        sign: "Y",
        visual: "https://i.postimg.cc/JnL29vw0/Y-big.png",
      },
      {
        id: 26,
        level_id: 5,
        sign: "Z",
        visual: "https://i.postimg.cc/Hx9hHzH2/Z-big.png",
      },
    ]);
  });
};
