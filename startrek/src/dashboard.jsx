import galaxy from './assets/galaxy.mp4';
//import Carousel from './carrosel';
import './style/dashboard.css';

function Dashboard() {
  const graphTest = {
    A: {
      vizinhos: {
        B: 4,
        C: 1,
      },
    },
    B: {
      vizinhos: {
        F: 10,
      },
    },
    C: {
      vizinhos: {
        F: 20,
        G: 17,
      },
    },
    D: {
      vizinhos: {
        B: 20,
      },
    },
    E: {
      vizinhos: {
        D: 3,
      },
    },
    F: {
      vizinhos: {
        E: 5,
        G: 30,
      },
    },
    G: {
      vizinhos: {
        I: 20,
      },
    },
    H: {
      vizinhos: {
        F: 7,
        I: 10,
      },
    },
  };

  /*
    arrey S armazena todos os nos ja explorados com o menor caminho
    var S = []

    arrey heap armazena os nos candidatos
    var heap = []

    heap:
      pega menor(
        swap primeiro do array(raiz) com o ultimo
        apaga ultimo do array
        heapify primeiro(raiz)
      )

      acessa cada vizinho(
        insere(shiftUp), atualiza(shiftUp) ou descarta
      )

    Dijkstra:
      inicia S com o no inicial no custo 0 (mancha)
      explora os nos fora da mancha(os nos candidatos que chegam ate no destino)
      add o custo e no pai do no
      so para ate quando o no de destino estiver na mancha
  */

  function heap(){

  }
  
  function Dijkstra() {

  } 

  return (
   <div className="container">
    <div className="videoTag">
      <video autoPlay loop muted>
        <source src={galaxy} type='video/mp4' />
      </video>
      <div className="aplication">
        <h1>ola capitao kirk</h1>
          
      </div>
    </div>
   </div>
  )
}

export default Dashboard;