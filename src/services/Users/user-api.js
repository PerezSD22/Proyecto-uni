import axios from 'axios';



export const getUserProfile = async (userId) => {
    try {
        const response = await axios.get(`https://future-vine-plier.glitch.me/obtener/${userId}`);
        const userProfile = response.data[0];
        console.log(userProfile)
        return userProfile;
      } catch (error) {
        console.error('Error al obtener el Pokémon:', error.message);
        return null;
      }
};