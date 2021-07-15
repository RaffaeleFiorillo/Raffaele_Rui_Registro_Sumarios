const express = require('express')
const router = express.Router()
router.use(express.json());

const Regsumar = require('../db/regsumar')


// ver todos os sumarios
router.get('/', express.json(), async (req, res) => {
	const sumarios = await Regsumar.GetSumarios()

	if (!sumarios) return res.sendStatus(500) // internal error
	return res.json(
		sumarios.map((sumario) => ({
			idsumario:sumario.idsumario,
			conteudo:sumario.conteudo,
			biblio:sumario.biblio,
			presenca:sumario.presenca, 
			aula:sumario.aula,
		}))
	)
});

// criar um sumario
router.post('/create', express.json(), async (req, res) => {

	const { conteudo, biblio, presenca, idaula } = req.body;
	const newSum = await Regsumar.PostSumario(conteudo, biblio,presenca, idaula)
	const allSum = await Regsumar.GetSumarios()

	if(!newSum) return res.sendStatus(500);
	
	// to return the last sum registred
	return res.json(
		allSum.filter((sum, i) => {
			if(i === allSum.length-1){
				return sum
			}
		})
	)
});

// ver um sumario em expecifico
router.get('/:id', express.json(), async (req, res) => {

	const { id } = req.params;
	const sumario = await Regsumar.GetSumarios(id)

	if (!sumario) return res.sendStatus(404) // internal error
	return res.json(sumario)

});

// editar um sumario em expecifico
router.put('/edit/:id', express.json(), async (req, res) => {

	const { id } = req.params;
	const { conteudo, biblio,presenca, idaula } = req.body;
	const putSum = await Regsumar.PutSumario(id,conteudo, biblio,presenca, idaula);

	if(!putSum) return res.sendStatus(500);
	
	return res.json("Elemento alterado com sucesso.");
});

// deletar um sumario em expecifico
router.delete('/delete/:id', express.json(), async (req, res) => {
	const { id } = req.params;
	const deletedSumario = await Regsumar.DeleteSumario(id)

	if (!deletedSumario) return res.sendStatus(500) // internal error
	return res.json("Elemento deletado com sucesso.")
});

module.exports = router