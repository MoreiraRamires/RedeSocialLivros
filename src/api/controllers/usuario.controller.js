
const usuarioRepository = require('../repositories/usuarioRepository');

const db = require("../../config/database");
//const usuarioRepository = require( "../repositories/usuarioRepository")
// no controller smp trabalhamos com metodos async await pq vc precisa esperar uma acao concluir para poder fazer o crud

exports.createUsuario = async (req, res) => {
    try {
        const { nome, email, password } = req.body;

        // Verifica se o nome de usuário está preenchido
        if (!nome) {
            throw new Error("Nome de usuário não fornecido");
        }
        if (!email) {
            throw new Error("Email de usuário não fornecido");
        }
        if (!password) {
            throw new Error("Senha de usuário não fornecido");
        }


        // Chama o método create para criar o usuário
        const row = await usuarioRepository.create(nome, email, password);

        res.json(row);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


exports.findAllUsuarios = async (req, res) => {
    

    try {
        const row = await usuarioRepository.findAll();

        res.json(row);

    }
    catch (error) {
        
        res.status(500).send({
            message: "Ocorreu um erro ao buscar as editoras.",

        })
    }



}



exports.findUsuarioById = async (req, res) => {

    const {id} =req.params.id

    if (!isUUID(id)) {
        return res.status(400).send({
            message: 'ID de editora inválido.'
        });
    }


    try {
        const row = await usuarioRepository.findById(id)
        res.status(200).send(row);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }


}


exports.updateUsuario = async (req, res) => {
    const usuarioId = req.params.id


    if (!isUUID(usuarioId)) {
        return res.status(400).send({ message: 'Esse não é um ID válido' })
    }

    try {
        const { nome, email, password } = req.body;
        const response = await db.query(
            'sp_usuarios_upd($1,$2,$3,$4)', [nome, email, password, usuarioId]
        )

        return res.status(200).send({
            message: 'usuario atualizada com sucesso!',
            usuarioId,
            body: {
                usuario: {
                    nome,
                    email,
                    password
                }
            }
        })
    } catch (error) {
        console.log('Erro ao buscar a usuario', error)
        return res.status(500).send({
            message: 'Erro ao buscar a usuario',
            error: error
        })
    }
}


exports.deleteUsuario = async (req, res) => {


    try {
        throw new Error("Method not implemented.");

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }


} 
