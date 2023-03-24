const hero = (heroName, heroPower, heroEnemy) => {
  let name = "Mein:e Lieblingsheld:in ist:" + heroName;
  let power = "Er/sie hat die Fähigkeit:" + heroPower;
  let enemy = "Sein/ihr größter Gegner ist:" + heroEnemy;
  console.log(name + "   " + power + "   " + enemy);
};
hero("Spider-Man", "Spinnennetz schießen und klettern", "Green Goblin");
