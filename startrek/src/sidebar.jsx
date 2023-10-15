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
          <li>mapa 1</li>
          <li>mapa 2</li>
          <li>mapa 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
