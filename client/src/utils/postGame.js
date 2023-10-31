import axios from 'axios';

//const URL = 'http://localhost:3001/'
const URL = 'https://videogames-pi-hqh4.onrender.com/'

export const postGame = async (newGame) => {
    try {
       const resp = await axios.post(`${URL}videogames`, newGame);
        alert(resp.data);
    } catch (error) {
        console.error(error.message);

    }
};