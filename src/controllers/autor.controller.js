const db = require("../config/database");
// ==> Método responsável por criar um novo 'Autor':
exports.createAutor = async (req, res) => {
  const { nome } = req.body;
  const { rows } = await db.query(
    "INSERT INTO autores (Nome) VALUES ($1)",
    [nome]
  );
  res.status(201).send({
    message: "Autor adicionado com sucesso!",
    body: {
      autor: { nome }
    },
  });
};

// ==> Método responsável por listar todos os 'Products':
exports.listAllAutores = async (req, res) => {
  const response  = await db.query('SELECT * FROM autores ORDER BY Nome ASC');
  res.status(200).send(response .rows);
};

// ==> Método responsável por selecionar 'Product' pelo 'Id':
exports.findAutorById = async (req, res) => {

  const autorId = req.params.id; 
  const response  = await db.query('SELECT * FROM autores WHERE id = $1', [autorId]);
  res.status(200).send(response .rows);
}


// ==> Método responsável por selecionar 'Product' pelo 'Id':
exports.deleteAutor = async (req, res) => {
  const autorId = req.params.id; 
  const response  = await db.query('DELETE FROM autores WHERE id = $1', [autorId]);
  res.status(200).send({ 
    message: 'Autor deletado com sucesso!',
    autorId ,
    body:{
      autor:{nome}
  }})
}

exports.updateAutor = async (req, res) => {
  const autorId = req.params.id; 
  const {nome} = req.body;
  const response  = await db.query('UPDATE autores set Nome = $1 WHERE id = $2',[nome,autorId]);
  res.status(200).send({ 
    message: 'Autor atualizado com sucesso!', 
    autorId,
    body: {
      autor: {
        nome
      }
    }


  })
}

