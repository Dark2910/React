import PropTypes from 'prop-types';
import './VehicleView.css'

const VehicleView = (props) => {     
     return <div className='vehicleView'>
          <h1>{props.vehicle.name}</h1>
          <p>{props.vehicle.description}</p>
          <img src={props.vehicle.image} alt={`${props.vehicle.name} image.`} />
     </div>
}

VehicleView.propTypes = {
     vehicle: PropTypes.shape({
          name: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
     }).isRequired,
};

export default VehicleView;