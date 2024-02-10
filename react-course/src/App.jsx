import './App.css'
import Card from './components/Card'
import ShowHide from './components/ShowHide'
import vehicles from './data/vehicles'
function App() {

  const vehicleList = vehicles.map((vehicle) => {
    return <Card key={vehicle.name} title={vehicle.name} description={vehicle.description}/>
  });

  return (
    <div className='app'>
      <h1>Hello React</h1>
      <div className="container">
        {vehicleList}
      </div>

      <ShowHide/>
    </div>
  );
}

export default App;
