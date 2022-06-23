import "./styles.css";
import "../../common/global.css"

function Contato() {
    return (
        <section className="contatoContainer">
            <h3>Fale Conosco</h3>
            <div className="contatoDescribeContainer">
                <div className="contatoDescribe">
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    </p>
                    <div className="contatoDescribeBtns">
                        <button className="red">Liga para gente</button>
                        <button className="blue">Enviar mensagem</button>
                    </div>
                </div>
                <div className="contatoMapa"><p>Mapa</p></div>    
            </div>
        </section>
    );
}

export default Contato;