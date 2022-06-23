import Card from './Card';
import './styles.css';

function Info() {
    return (
        <>
        <section className='InfoContainer'>
            <h1>SAITE</h1>
            <div className='InfoDescribe'>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                </p>
                <button>Saiba Mais</button>
            </div>
        </section>
        <section className='cardsSection'>
            <Card nome="Educação a Distância" cor="red" />
            <Card nome="Pesquisa e Inovação" cor="blue" />
            <Card nome="Tecnologia" cor="red" />
        </section>
        </>
    );
}

export default Info;