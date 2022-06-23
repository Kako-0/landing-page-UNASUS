import './styles.css';

function Equipe() {
    return (
        <section className='equipeContainer'>
            <h3>Nossa Equipe</h3>
            <div className='equipeCards'>
                <div className='equipeCard'>
                    <img src="https://joeschmoe.io/api/v1/jai" alt="integranteEquipe" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className='equipeCard'>
                    <img src="https://joeschmoe.io/api/v1/jake" alt="integranteEquipe" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className='equipeCard'>
                    <img src="https://joeschmoe.io/api/v1/jess" alt="integranteEquipe" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
            </div>
        </section>
    );
}

export default Equipe;