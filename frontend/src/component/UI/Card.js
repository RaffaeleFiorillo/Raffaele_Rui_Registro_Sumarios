// para colocar todos as componentes de um conteiner do nosso app
import './card.css'

function Card(props){
    const classes = props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;