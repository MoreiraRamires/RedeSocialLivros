/**
 * Arquivo: server.js
 * Descrição: arquivo responsável por toda a configuração e execução da aplicação.
 * Data: 10/05/2023
 */
const app = require('./src/app');
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Aplicação executando na porta ', port);
});