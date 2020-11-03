import axios from 'axios';

const getGoats = () => new Promise((resolve, reject) => {
  axios
    .get('https://fir-cows-958ae.firebaseio.com/react-goats.json')
    .then((response) => {
      const goats = response.data;
      const goatArray = [];
      if (goats) {
        Object.keys(goats).forEach((goatId) => {
          goatArray.push(goats[goatId]);
        });
      }
      console.warn(goatArray);
      resolve(goatArray);
    })
    .catch((error) => reject(error));
});

export default getGoats;
