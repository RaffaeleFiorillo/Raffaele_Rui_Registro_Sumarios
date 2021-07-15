import './Card.css'

function Card(props){
    const classes = 'card'+ props.className
    return <div className={classes}></div>
}

export default Card