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





  const graph = {
      start: {A: 5, B: 2},
      A: {start: 1, C: 4, D: 2},
      B: {A: 8, D: 7},
      C: {D: 6, finish: 3},
      D: {finish: 1},
      finish: {}
  };

  function heap(no, custo) {

  }

  const menorNo = (custo, S) => { //possui os nos candidatos que nao entraram no S (mancha) e retorna o menor 
      return Object.keys(custo).reduce((menorCusto, node) => {
          if (menorCusto === null || custo[node] < custo[menorCusto]) {
              if (!S.includes(node)) {
                  menorCusto = node;
              }
          }
          return menorCusto;
      }, null);
  };


  function dijkstra(graph, endNodeName) {

      // rastreie o custo menorCusto para chegar a cada nó
      let custo = {};
      custo[endNodeName] = "Infinity"; //o ultimo com custo infinito
      custo = Object.assign(custo, graph.start); //colocou os parentes do start

      // rastrear caminhos
      const parents = {endNodeName: null};
      for (let child in graph.start) {
          parents[child] = 'start'; //colocando o pai como start nos filhos do start
      }

      // rastrear nós que já foram processados
      const S = [];

      let node = menorNo(custo, S); //o menor no

      while (node) {
          let cost = custo[node]; // add custo do menor no ate o momento
          let children = graph[node]; // add filhos do menor em children
          for (let n in children) { // percorre os filhos do menor no ate o momento
              if (String(n) === String('start')) { //checando se nao é igual ao pai do no ate o momento
                  
              } else {
                  let newCost = cost + children[n]; //soma o custo antigo com o atual
                  if (!custo[n] || custo[n] > newCost) { //se nao tiver valor no custo ou se o custo for maior que o novo entra no loop
                      custo[n] = newCost; //atualiza o custo para o novo sendo o menor entre os filhos do no menor pegado ate o momento
                      parents[n] = node; // coloca o menor no atual como pai do no de menor custo

                      //Custo atualizado e pais
                  } else {
                      //Já existe um caminho mais curto
                  }
              }
          }
          S.push(node); //adiciona o novo no com o menor custo
          node = menorNo(custo, S); //atualiza o node para o menor no ate o momento
      }

      let caminhoIdeal = [endNodeName]; // add o ultimo
      let parent = parents[endNodeName]; // add parente anterior
      while (parent) { // enquanto houver parentes
          caminhoIdeal.push(parent); //vai add no caminhoIdeal
          parent = parents[parent]; // add apenas o pai anterior
      }
      caminhoIdeal.reverse(); //reverte pois é add ao contrario

      const results = {
          distancia: custo[endNodeName], // resultado final do custo
          caminho: caminhoIdeal // resultado final do caminho
      };

      return results;
  };

  console.log(dijkstra(graph, "C"));






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