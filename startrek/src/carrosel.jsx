
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TypingEffect from './functionTest';
import dialogo from './dialogo.json';
import './style/carousel.css';

const Carousel = () => {
  const findShortestPath = () => {
    const path = dijkstra(graph, startPlanet, endPlanet);
    setShortestPath(path);
  };
  const graph = {
    Coridan: { RuraPenthe: 10, QuVat: 15, Vulcan: 20 },
    RuraPenthe: { Vulcan: 10, Yaraka: 12, Trill: 10 },
    Vulcan: { QuVat: 8, Trill: 20, RuraPenthe: 10 },
    QuVat: { Yaraka: 8, Regulus: 11, Trill: 15 },
    Yaraka: { Suliban: 10, Trill: 8, RuraPenthe: 12, QuVat: 8 },
    Suliban: { Orion: 10, Regulus: 9, Yaraka: 10 },
    Trill: { Regulus: 8, Sona: 6, Yaraka: 8 },
    Regulus: { Orion: 7, Qonos: 6, Suliban: 9, Trill: 8 },
    Orion: { Sona: 5, Qonos: 7, Regulus: 7, Suliban: 10 },
    Sona: { Qonos: 5, Orion: 5, Regulus: 6 },
    Qonos: { Sona: 5, Orion: 7, Regulus: 6 }
  };

  const [startPlanet, setStartPlanet] = useState("Vulcan");
  const [endPlanet, setEndPlanet] = useState("Qonos");
  const [shortestPath, setShortestPath] = useState([]);

  const [dialog, setDialog] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [isOnPage2, setIsOnPage2] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    setDialog(dialogo.items);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current, next) => {
      if (next === 1) {
        setIsOnPage2(true);
        setTimeout(() => {
          setStartTyping(true);
        }, 1000);
      }
    },
  };

  function dijkstra(graph, startNode, endNode) {
    const distances = {};
    const previousNodes = {};
    const visitedNodes = [];

    for (let node in graph) {
      distances[node] = Infinity;
    }

    distances[startNode] = 0;

    while (visitedNodes.length < Object.keys(graph).length) {
      const unvisitedNodes = Object.keys(graph).filter(node => !visitedNodes.includes(node));
      const currentNode = unvisitedNodes.reduce((minNode, node) => {
        return distances[node] < distances[minNode] ? node : minNode;
      }, unvisitedNodes[0]);

      const neighbors = graph[currentNode];

      for (let neighbor in neighbors) {
        const tentativeDistance = distances[currentNode] + neighbors[neighbor];
        if (tentativeDistance < distances[neighbor]) {
          distances[neighbor] = tentativeDistance;
          previousNodes[neighbor] = currentNode;
        }
      }

      visitedNodes.push(currentNode);

      if (currentNode === endNode) {
        break;
      }
    }

    if (!previousNodes[endNode]) {
      return [];
    }

    const path = [];
    let currentNode = endNode;
    while (currentNode !== startNode) {
      path.unshift(currentNode);
      currentNode = previousNodes[currentNode];
    }
    path.unshift(startNode);

    return path;
  }

  return (
    <div className='carousel'>
      <Slider {...settings} className='slider'>
        <div>
          <h2>Bem vindo à Jornada Estelar</h2>
          <p>Nossa história começa na vastidão da Via Láctea, onde a Federação dos Planetas Unidos enfrenta uma ameaça iminente. O Capitão Kirk, corajoso líder da USS Enterprise, recebe uma missão de suma importância: entregar um artefato estelar que detém a chave da paz entre a Federação e o Império Klingon. O Capitão Kirk convoca seu confiável oficial, Spock, renomado por sua lógica inabalável e habilidades únicas para realizar essa missão.</p>
        </div>
        <div>
          {isOnPage2 && startTyping && (
            <div className='teste'>
              {dialog[currentCharacter] && (
                <div className='dialog'>
                  <strong>{dialog[currentCharacter].personagem}:</strong>
                  <TypingEffect text={dialog[currentCharacter].falas[0]} />
                </div>
              )}
              <button className='next'
                onClick={() => {
                  if (currentCharacter < dialog.length - 1) {
                    setCurrentCharacter(currentCharacter + 1);
                  }
                }}
              >
                avançar
              </button>
            </div>
          )}
        </div>
        <div>
            <h2>Escolha os planetas de início e destino</h2>
          <div className='options'>
            <label>Planeta de Início:</label>
            <select className='form-field' value={startPlanet} onChange={(e) => setStartPlanet(e.target.value)}>
              {Object.keys(graph).map((planet) => (
                <option key={planet} value={planet}>
                  {planet}
                </option>
              ))}
            </select>
            <br />
            <label>Planeta de Destino:</label>
            <select className='form-field' value={endPlanet} onChange={(e) => setEndPlanet(e.target.value)}>
              {Object.keys(graph).map((planet) => (
                <option key={planet} value={planet}>
                  {planet}
                </option>
              ))}
            </select>
            <br />
          </div>
            <button className='button-visit' onClick={findShortestPath}>Encontrar Menor Caminho</button>

          {shortestPath.length > 0 && (
            <div>
              <p className='result'>{shortestPath.join(" -> ")}</p>
            </div>
          )}
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
