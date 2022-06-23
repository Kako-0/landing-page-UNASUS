import Card from './Card';
import './styles.css';

function Projetos(){
    return(
        <section className='projetosContainer'>
            <h3>Nossos Projetos</h3>
            <div className='projetosCards'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
}

export default Projetos;