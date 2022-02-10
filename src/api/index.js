// keep all the api calls
import axios from 'axios'; // lib that helps make the calls

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export default async function getPlacesData( type, sw, ne){
    try {
        // request, if req successful try code will run, else if error, error code will run
                
      const options = {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': 'ca8beb209dmshfec4c943a73ec8dp147a17jsnc39549761161'
        }
      };

        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, options); 
        return data;
    } catch (error) {
        console.log(error);
    }
}
