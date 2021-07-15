const express = require('express')
const router = express.Router()
router.use(express.json());

const Regsumar = require('../db/regsumar');
// const siglaDetermination = require('../src/sigla');


// ver todas as disciplinas
router.get('/search', express.json(), async (req, res) => {
	const tables = await Regsumar.GetSumarioClassDisciplina()

	if (!tables) return res.sendStatus(500) // internal error
	return res.json(
		tables.map((colum) => ({
			sumario:{
                conteudo:colum.conteudo, 
                biblio:colum.biblio, 
                presenca:colum.presenca,
            },
            aula:{
                diaSemana:colum.diaSemana, 
                hora:colum.hora, 
                local:colum.local,
                duracao:colum.duracao,
                data:colum.data,
            },
            disciplina:{
                codigo:colum.codigo, 
                nome:colum.nome, 
                sinopse:colum.sinopse,
            }
		}))
	)
});


module.exports = router;