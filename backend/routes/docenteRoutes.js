const express = require('express')
const router = express.Router()

const Regsumar = require('../db/regsumar')

router.use(express.json());

router.get("/", express.json(), async (req, res) => {

	const docentes = await Regsumar.GetDocentes()

	if (!docentes) return res.sendStatus(500) // internal error
	return res.json(
		docentes.map((docente) => ({
			id: docente.idDocente,
			sigla: docente.sigla,
			nome: docente.nome,
			nomeCompleto: docente.nomeCompleto,
			grau: docente.grau,
		}))
	)
}); 

//  pegar um docente em expecifico
router.get("/:id", express.json(), async (req, res) => {
	
	const { id } = req.params

	const docente = await Regsumar.GetDocentes(id)

	if (!docente) return res.sendStatus(500) // internal error
	return res.json(docente)
});


module.exports = router

