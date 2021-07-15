import './DataDespesa.css';

function DataDespesa(props) {
    const dia = props.data.toLocaleString("pt-PT", { day: "2-digit" });
    const mes = props.data.toLocaleString("pt-PT", { month: "long" });
    const ano = props.data.getFullYear();

    return (
    <div className="expense-date">
        <div className="expense-date__day">{dia}</div>
        <div className="expense-date__month">{mes}</div>
        <div className="expense-date__year">{ano}</div>
    </div>
    );
}
export default DataDespesa