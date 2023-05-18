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
  const response = await db.query('SELECT * FROM autores ORDER BY Nome ASC');
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Product' pelo 'Id':
exports.findAutorById = async (req, res) => {
  const autorId = req.params.id;
   // Verificar se o ID é um UUID válido antes de executar a consulta
 
  const response = await db.query('SELECT * FROM autores WHERE id = $1', [autorId]);
  res.status(200).send(response.rows);
}