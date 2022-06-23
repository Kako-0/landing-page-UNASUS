import './styles.css';
import '../../common/global.css';

function Numeros() {
    return (
        <section className='numeroContainer'>
            <h3>Nossos Números</h3>
            <div className='bolasContainer'>
                <div className='bola red'></div>
                <div className='bola blue'></div>
                <div className='bola red'></div>
                <div className='bola blue'></div>
            </div>
        </section>
    );
}

export default Numeros;
