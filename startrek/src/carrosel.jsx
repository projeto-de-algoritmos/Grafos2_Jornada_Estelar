// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import TypingEffect from './functionTest'; // Importe o componente TypingEffect



// const Carousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//   };
  
//   const dialogData = require('./dialogo.json'); // Carrega o arquivo JSON

//   return (
//     <div>
//       <h2>Meu Carrossel</h2>
//       <Slider {...settings}>
//         <div>
//           <h3>Item 1</h3>
//           {dialogData.items.map((item, index) => (
//             <div key={index}>
//               <h3>{item.personagem}</h3>
//               <TypingEffect text={item.fala} />
//             </div>
//           ))}
//         </div>
//         <div>
//           <p>skakaaaaaaaaaaaaaaaaaaaa</p>
//           <h3>Item 2</h3>
//         </div>
//         <div>
//           <h3>Item 3</h3>
//         </div>
//         {/* Adicione mais slides conforme necessário */}
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;


import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import TypingEffect from './TypingEffect';


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const dialogData = require('./dialogo.json');
  const [currentDialogIndex, setCurrentDialogIndex] = useState(0);

  useEffect(() => {
    const startNextDialog = (index) => {
      setTimeout(() => {
        setCurrentDialogIndex(index + 1);
      }, index === 0 ? 0 : 8000); // Comece imediatamente o primeiro diálogo e espere 5 segundos para os diálogos subsequentes
    };

    if (currentDialogIndex < dialogData.items.length) {
      startNextDialog(currentDialogIndex);
    }
  }, [currentDialogIndex, dialogData.items]);

  return (
    <div>
      <Slider {...settings}>
        {dialogData.items.slice(0, currentDialogIndex).map((item, index) => (
          <div key={index}>
            <h3>{item.personagem}</h3>
            {item.falas.map((fala, i) => (
              <div key={i}>
                <TypingEffect text={fala} />
              </div>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;


// const Carousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//   };

//   const dialogData = require('./dialogo.json');
//   const [currentDialogIndex, setCurrentDialogIndex] = useState(0);

//   useEffect(() => {
//     if (currentDialogIndex < dialogData.items.length) {
//       setTimeout(() => {
//         setCurrentDialogIndex(currentDialogIndex + 1);
//       }, 10000); // Intervalo de 2 segundos entre diálogos
//     }
//   }, [currentDialogIndex, dialogData.items]);

//   return (
//     <div>
//       <h2>Meu Carrossel</h2>
//       <Slider {...settings}>
//         {dialogData.items.slice(0, currentDialogIndex).map((item, index) => (
//           <div key={index}>
//             <h3>{item.personagem}</h3>
//             {item.falas.map((fala, i) => (
//               <div key={i}>
//                 <TypingEffect text={fala} />
//               </div>
//             ))}
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;