const express = require('express')
const router = express.Router()
const Regsumar = require('../db/regsumar')

// const siglaDetermination = require('../src/sigla');
router.use(express.json());

// ver todos os cursos
router.get('/', express.json(), async (req, res) => {
	
	const cursos = await Regsumar.GetCursos()

	if (!cursos) return res.sendStatus(500) // internal error
	return res.json(
		cursos.map((curso) => ({
			id: curso.id,
			nome: curso.nome,
			sigla:curso.sigla,
			conferegrau: curso.conferegrau,
		}))
	)
});

// ver um  curso em expecifico
router.get('/:id', express.json(), async (req, res) => {
	const { id } = req.params;
	const curso = await Regsumar.GetCursos(id)

	if (!curso) return res.sendStatus(404) // internal error
	
	return res.json(curso)
});


module.exports = router
