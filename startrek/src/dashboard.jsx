import galaxy from './assets/galaxy.mp4';
import Carousel from './carrosel';
import './style/dashboard.css';

function Dashboard() {
  
  return (
   <div className="container">
    <div className="videoTag">
      <video autoPlay loop muted>
        <source src={galaxy} type='video/mp4' />
      </video>
      <div className="aplication">
        <h1>ola capitao kirk</h1>
          <Carousel />
      </div>
    </div>
   </div>
  )
}

export default Dashboard;