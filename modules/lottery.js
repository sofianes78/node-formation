const loto = function (min, max, count) {
  const draw = new Set();

  while (draw.size < count) {
    const random = Math.floor(Math.random() * (max - min) + 1);
    draw.add(random);
  }
  return Array.from(draw);
};

const gagnant = function (players) {
    const randomIndex = Math.floor(Math.random() * (players.length));
    return players[randomIndex]
}; 

loto({min: 20, max: 20, count: 5});


//loto(1, 8, 5);

module.exports = { loto, gagnant };
