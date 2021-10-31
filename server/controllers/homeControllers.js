const index = (req, res) => {
  res.render('home/index', {
    title: 'ProjNotes',
    Student: 'Lissete',
  });
};

const hola = (req, res) => {
  res.status(200).json({
    message: '¡Hola!',
  });
};

//About
const about = (req, res) => {
  res.render('home/about', { title: 'Acerca de ProjNotes' });
};

export default {
  index,
  hola,
  about,
};
