import galaxy from './assets/galaxy.mp4';
import './style/dashboard.css';

function Dashboard() {

  return (
   <div className="container">
    <div className="videoTag">
      <video autoPlay loop muted>
        <source src={galaxy} type='video/mp4' />
      </video>
    </div>
   </div>
  )
}

export default Dashboard;