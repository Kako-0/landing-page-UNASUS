import './styles.css';
import '../../common/global.css';

function Card({nome, cor}) {
    return (
        <div className="cardInfo">
            <div className={`icon ${cor}`}></div>
            <p>{nome}</p>
        </div>
    )
}

export default Card;