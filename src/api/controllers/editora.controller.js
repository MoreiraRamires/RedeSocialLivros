const db = require("../../config/database");
const isUUID = require('uuid-validate');



exports.createEditora = async (req, res) => {
    const { nome } = req.body;
    const { rows } = await db.query(
        "INSERT INTO EDITORAS (nome) VALUES ($1)", [nome]
    )
    res.status(201).send({
        message: "Editora criada com sucesso",
        body: {
            editora: {
                nome
            }
        }
    })
}

exports.findAllEditoras = async (req, res) => {
    // console.log("Find All",JSON.stringify(req.query.id))

    try {


        const response = await db.query('SELECT * FROM editoras ORDER BY Nome ASC');

        if (response.rows.length === 0) {
            return res.status(200).send({
                message: "Não há editoras"
            })
        }

        res.status(200).send({
            message: "Aqui está a lista de editoras",
            body: response.rows
        });
    }
    catch (error) {
        res.status(500).send({
            message: "Ocorreu um erro ao buscar as editoras.",

        })
    }


}

exports.findEditoraById = async (req, res) => {
    const {editoraId} =req.params.id

    if (!isUUID(editoraId)) {
        return res.status(400).send({
            message: 'ID de editora inválido.'
        });
    }


    try {
        const response = await db.query('SELECT * FROM EDITORAS WHERE ID = $1', [editoraId])

        console.log("Editora ID", editoraId)
        if (response.rows.length === 0) {
            return res.send(200).send({
                message: 'Não há editora correspondente ao código fornecido'
            })
        }
        return res.status(200).send(response.rows)
    } catch (error) {

        console.error("Error ao buscar a editora", error);
        return res.status(500).send({
            message: 'Ocorreu um erro ao buscar a editora.'
        });
    }



}

exports.updateEditora = async (req, res) => {
    console.log("Find By ID: ",JSON.stringify(req.params.id))
    const editoraId =req.params.id

    // if (!isUUID(editoraId)) {
    //     return res.status(400).send({ message: 'Esse não é um ID válido' })
    // }

    // try {
        const { nome } = req.body;
        const response = await db.query(
            'UPDATE EDITORAS SET NOME = $1 WHERE ID=$2', [nome, editoraId]
        )

        return res.status(200).send({
            message: 'Editora atualizada com sucesso!',
            editoraId,
            body: {
                editora: {
                    nome
                }
            }
        })
    // } catch (error) {
    //     console.log('Erro ao buscar a Editora', error)
    //     return res.status(500).send({
    //         message: 'Erro ao buscar a Editora',
    //         error: error
    //     })
    // }
}

exports.deleteEditora = async (req, res) => {
    // const editoraId = req.query.id;
    console.log("Find All",JSON.stringify(req.params.id))
    const editoraId =req.params.id

    // if (!isUUID(editoraId)) {
    //     return res.status(400).send({ message: 'Esse não é um UUID válido' })
    // }



    // try {
        const response = await db.query(
            'DELETE FROM editoras WHERE id = $1', [editoraId]
        )
        res.status(200).send({ 
            message: 'Editora deletada com sucesso!'
        })
       

    // } catch (error) {
    //     return res.status(500).send({ message: 'Erro ao consultar Editora', error })
    // }

}