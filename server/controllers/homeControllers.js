const index = (req, res) => {
  res.render('index', {
    title: 'ProjNotes',
    Student: 'Lissete',
  });
};

const hola = (req, res) => {
  res.status(200).json({
    message: '¡Hola!',
  });
};

export default {
  index,
  hola,
};
