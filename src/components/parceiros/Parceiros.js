import './styles.css';
import '../../common/global.css';
import arrowUP from '../../common/assets/arrow-up.svg';

function Parceiros(){
    return (
        <section className='parceirosContainer'>
            <div className='parceirosUp'>
                <h3>Parceiros</h3>
                <button className='parceirosBtn red'><img src={arrowUP} alt="arrow-up" /></button>
            </div>
            <div className='parceirosDown blue'></div>
        </section>
    )
}

export default Parceiros;