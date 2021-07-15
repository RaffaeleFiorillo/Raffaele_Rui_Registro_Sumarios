const express = require('express')
const router = express.Router()
router.use(express.json());

const Regsumar = require('../db/regsumar')


// ver todos os sumarios
router.get('/', express.json(), async (req, res) => {
	const classes = await Regsumar.GetClass()

	if (!classes) return res.sendStatus(500) // internal error
	return res.json(
		classes.map((classInfo) => ({
            id: classInfo.idaula,
            numero:classInfo.numero,
            diaSemana:classInfo.diaSemana, 
            hora:classInfo.hora, 
			tipo:classInfo.tipo,
            local:classInfo.local, 
            duracao:classInfo.duracao, 
            data:classInfo.data, 
            disciplina:classInfo.disciplina,
		}))
	)
});

// criar um sumario
router.post('/create', express.json(), async (req, res) => {

	const { numero,tipo,diaSemana, local, duracao,disciplina } = req.body;
	const newClass = await Regsumar.PostClass(numero,tipo,diaSemana, local, duracao,disciplina);
	const lastClass = await Regsumar.GetClass()

	if(!newClass) return res.sendStatus(500);
	
	return res.json(
		lastClass.filter((classInfo, i) => {
			if(i === lastClass.length-1){
				return classInfo
			}
		})
	)
});

// ver um sumario em expecifico
router.get('/:id', express.json(), async (req, res) => {

	const { id } = req.params;
	const sumario = await Regsumar.GetClass(id)

	if (!sumario) return res.sendStatus(404) // internal error
	return res.json(sumario)

});

// editar um sumario em expecifico
router.put('/edit/:id', express.json(), async (req, res) => {

	const { id } = req.params;
	const { numero,tipo,diaSemana, local, duracao,disciplina } = req.body;
	const putClass = await Regsumar.PutClass(id,numero,tipo,diaSemana, local, duracao,disciplina);

	if(!putClass) return res.sendStatus(500);
	
	return res.json("Elemento alterado com sucesso.");
});

// deletar um sumario em expecifico
router.delete('/delete/:id', express.json(), async (req, res) => {
	const { id } = req.params;
	const deletedClass = await Regsumar.DeleteClass(id)

	if (!deletedClass) return res.sendStatus(404) // internal error
	return res.json("Elemento deletado com sucesso.")
});

module.exports = router