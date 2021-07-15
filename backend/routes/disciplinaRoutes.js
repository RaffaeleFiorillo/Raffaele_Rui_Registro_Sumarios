const express = require('express')
const router = express.Router()
router.use(express.json());

const Regsumar = require('../db/regsumar');
// const siglaDetermination = require('../src/sigla');


// ver todas as disciplinas
router.get('/edicao', express.json(), async (req, res) => {
	const disciplinas = await Regsumar.GetDisciplinas()
	const edicaoDisciplinas = await Regsumar.GetEdicaoDisciplinas()

	if (!disciplinas) return res.sendStatus(500) // internal error
	if (!edicaoDisciplinas) return res.sendStatus(500) // internal error
	return res.json(
		disciplinas.map((disciplina) => ({
			id:disciplina.id,
			codigo:disciplina.codigo,
            nome:disciplina.nome,
            sinopse:disciplina.sinopse,
			edicaoInfo:edicaoDisciplinas.filter(edicao => {
                if (edicao.idDisciplina === disciplina.id){
					return edicao.idEdicao
				}
			}),
			idcurso:disciplina.idcurso,
		}))
	)
});

// ver todas as disciplinas
router.get('/', express.json(), async (req, res) => {
	const disciplinas = await Regsumar.GetDisciplinas()

	if (!disciplinas) return res.sendStatus(500) // internal error
	return res.json(
		disciplinas.map((disciplina) => ({
			id:disciplina.id,
			codigo:disciplina.codigo,
            nome:disciplina.nome,
            sinopse:disciplina.sinopse,
		}))
	)
});

// ver uma Disciplina em expecifico
router.get('/:id', express.json(), async (req, res) => {

	const { id } = req.params;
	const disciplina = await Regsumar.GetDisciplinas(id)

	if (!disciplina) return res.sendStatus(404) // internal error
	return res.json(disciplina)

});

module.exports = router;
