import { Header } from "./components/Header";
import './App.css';
import { Title } from "./components/Title";
import { Logo } from "./components/Logo";
import { MediaContainer } from './components/MediaContainer';
import { MediaContainer2 } from "./components/MediaContainer2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Media } from './components/Media.js'
import { faInstagram, faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { PagesList } from "./components/PagesList";
import { PageItem } from "./components/PageItem";
import { PageText } from "./components/PageText";

function App() {

  const testAction = async () => {
    const response = await fetch('https://cristo-page.herokuapp.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        test: 'abc'
      })
    })
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="todo">
      <Header >
        <a href="./" style={{marginLeft: '20px'}}>
          <Logo src="logo cole.png" />
        </a>
        <PagesList>
          <PageItem><PageText>Sobre Nosotros</PageText></PageItem>
          <PageItem><PageText>Institución</PageText></PageItem>
          <PageItem><PageText>Publicaciones</PageText></PageItem>
          <PageItem><PageText>Consulta Estudiantes</PageText></PageItem>
          <PageItem><PageText>Acceso Docente</PageText></PageItem>
          <PageItem><PageText>Contacto</PageText></PageItem>
          <PageItem><PageText>RRHH</PageText></PageItem>
        </PagesList>
        <MediaContainer>
          <MediaContainer2>
            <Media target="_blank" href="https://www.instagram.com/pastoralcristo/"><FontAwesomeIcon icon={faInstagram} /></Media>
            <Media target="_blank" href="https://www.facebook.com/pastoralcristo/"><FontAwesomeIcon icon={faFacebook} /></Media>
            <Media target="_blank" href="https://www.youtube.com/channel/UCHEPDNC4fOicQ0svOE4f2WA/videos?app=desktop"><FontAwesomeIcon icon={faYoutube} /></Media>
          </MediaContainer2>
          <Title>INSTITUTO PARROQUIAL CRISTO REDENTOR</Title>
        </MediaContainer>
      </Header>
      
      <button onClick={() => {testAction()}} style={{marginTop: '50px'}}>TEST</button>
    </div>
  );
}

export default App;
