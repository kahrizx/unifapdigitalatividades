const musicas = {
  'Shape of You': 3,
  'Bohemian Rhapsody': 5,
  'Despacito': 0,
};

for (let musica in musicas) {
  if (musicas[musica] === 0) {
    console.log("Música com valor 0 encontrado: " + musica);
    break;
  }
}
