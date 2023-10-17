// import React, { useState } from 'react';
// import './style/sidebar.css';

// function Sidebar() {
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
//       <button className="toggle-button" onClick={toggleSidebar}>
//         Toggle Sid
//       </button>
//       <div>

//       <ul>
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//       </ul>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;


import React, { useState } from 'react';
import './style/sidebar.css';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="container">
      <button className="toggle-button" onClick={toggleSidebar}>
        {collapsed ? 'visualizar mapas da galaxia' : '<<'}
      </button>
      <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <ul>
      <h1>MAPAS DA GALAXIA</h1>
          <li><a href='https://cdn.obsidianportal.com/map_images/363685/spaceView1.jpg'>Mapa Geral</a></li>
          <li><a href='https://www.ussventure.eng.br/LCARS-Terminal_net_arquivos/nave/NewMaps/klingon2.jpg'>Empério Klingon</a></li>
          <li><a href='https://www.ussventure.eng.br/LCARS-Terminal_net_arquivos/nave/NewMaps/ufp03.jpg'>Federação</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
