const guacamole = {
  id: 4321,
  name: 'Guacamole',
  price: 349,
  infoUrl: 'https://en.wikipedia.org/wiki/Guacamole',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Guacomole.jpg/800px-Guacomole.jpg',
};

const hoisin = {
  id: 1234,
  name: 'Hoisin sauce',
  price: 189,
  infoUrl: 'https://en.wikipedia.org/wiki/Hoisin_sauce',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/3/3f/Hoisin_sauce.jpg',
};

const hummus = {
  id: 9876,
  name: 'Hummus',
  price: 299,
  stock: 4,
  description:
    'Hummus is a Levantine dip or spread made from cooked, mashed chickpeas or other beans, blended with tahini, olive oil, lemon juice, salt and garlic. It is popular in the Middle East and Mediterranean, as well as in Middle Eastern cuisine around the globe.',
  infoUrl: 'https://en.wikipedia.org/wiki/Hummus',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Hummus_from_The_Nile.jpg/1200px-Hummus_from_The_Nile.jpg',
  related: [guacamole, hoisin],
};

export default hummus;
