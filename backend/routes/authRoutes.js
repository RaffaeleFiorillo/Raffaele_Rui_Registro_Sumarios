const express = require('express')
const router = express.Router()
router.use(express.json());

const Regsumar = require('../db/regsumar')


// ver todos os sumarios
router.post('/', express.json(), async (req, res) => {
	const users = await Regsumar.GetUsers()
	const roles = await Regsumar.GetRole()
    let validated = false;

    const { email, password } = req.body;
	if (!users) return res.sendStatus(500) // internal error
    
    users.forEach(user => {
        if (user.email === email && user.password === password){
            roles.forEach(role => {
                if (role.id === user.idrole){
                    validated = true;
                    return res.json({
                        id:user.iduser,
                        role: role.name,
                        name: user.name,
                        email: user.email,
                        password: user.password
                    })
                }
            })
        }
    });
    if(!validated)
        return res.json({})
});

router.get('/:id', express.json(), async (req, res) => {

	const { id } = req.params;
	const user = await Regsumar.GetUsers(id)

	if (!user) return res.sendStatus(404) // internal error
	return res.json(user)
});

// editar um user em expecifico
router.put('/edit/:id', express.json(), async (req, res) => {

	const { id } = req.params;
	const { password } = req.body;
	const putUser = await Regsumar.PutUser(id,password);

	if(!putUser) return res.sendStatus(500);
	
	return res.json("Elemento alterado com sucesso.");
});

module.exports = router