import axios from 'axios';

const locationInstance = axios.create({
	baseURL: 'https://eu1.locationiq.com/v1/reverse.php'
});

export default locationInstance;
