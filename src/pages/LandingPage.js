import '../common/global.css';
import Contato from '../components/contato/Contato';
import Equipe from '../components/equipe/Equipe';
import Info from '../components/info/Info';
import Numeros from '../components/numeros/Numeros';
import Parceiros from '../components/parceiros/Parceiros';
import Projetos from '../components/projetos/Projetos';

function LandingPage() {
  return (
    <>
      <Info />
      <Projetos />
      <Numeros />
      <Equipe />
      <Contato />
      <Parceiros />
    </>
  );
}

export default LandingPage;