import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useEffect } from 'react';
import TypingEffect from './functionTest';
import dialogo from './dialogo.json';
import './style/carousel.css';

const Carousel = () => {
  const [dialog, setDialog] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [isOnPage2, setIsOnPage2] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    // Carregue o diálogo do seu arquivo JSON
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

  return (
    <div className='carousel'>
      <Slider {...settings} className='slider'>
        <div>
          <h2>Bem vindo à Jornada Estelar</h2>
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
          <h1>Resultado do algoritmo</h1>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

