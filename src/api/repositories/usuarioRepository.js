const db = require("../../config/database");
class usuarioRepository {

  createOld() {
    const { nome, email, password } = req;

    db.query(
      "CALL  sp_usuarios_ins($1,$2,$3);", [nome, email, password]
    )
    try {
      res.status(201).send({
        message: "Usuario criado com sucesso",
        body: {
          usuario: {
            nome,
            email,
            password
          }
        }
      })
    }
    catch (error) {
      return res.status(500).send({
        message: 'Error ao criar usuario.'
      });
    }



  }


  create(nome, email, senha) {
    const sql = "insert into usuarios (id,nome,email,password ) values (uuid_generate_v4(),$1,$2,$3)";
    const values = [nome, email, senha];

    return new Promise((resolve, reject) => {
      db.query(sql, values, (erro, resultado) => {
        if (erro) {
          reject("Mensagem de erro");
        } else {
          const row = JSON.parse(JSON.stringify(resultado));
          resolve(row);
        }
      });
    });
  }

  findAll() {
     const sql = 'SELECT * FROM usuarios ORDER BY Nome ASC';
      return new Promise((resolve,reject) => {
        db.query(sql,(erro,resultado)=> {
          if(erro){
            reject("error",error)
            return
          }
          const row = JSON.parse(JSON.stringify(resultado));
          resolve(row);
        })
      } )

  }
  
  findById(id) {
    const sql = 'SELECT * FROM Usuarios WHERE id = $1';
    const values = [id];


    return new Promise((resolve,reject) => {
      db.query(sql,values,(erro,resultado) => {
        if(erro){
          reject("error",error)
          return
        }
        const row = JSON.parse(JSON.stringify(resultado));
        resolve(row);

      })
    })
  }
  
  update(){
    throw new Error("Method not implemented.");
  }
  
  delete() {
    throw new Error("Method not implemented.");
  }
}



module.exports = new usuarioRepository();
