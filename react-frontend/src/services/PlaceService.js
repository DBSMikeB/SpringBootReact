import axios from 'axios';

const PLACE_API_BASE_URL = "http://localhost:8080/api/v1/places";

class PlaceService {

    getPlaces(){
        return axios.get(PLACE_API_BASE_URL);
    }

    createPlace(place){
        return axios.post(PLACE_API_BASE_URL, place);
    }

    getPlaceById(placeId){
        return axios.get(PLACE_API_BASE_URL + '/' + placeId);
    }

    updatePlace(place, placeId){
        return axios.put(PLACE_API_BASE_URL + '/' + placeId, place);
    }

    deletePlace(placeId){
        return axios.delete(PLACE_API_BASE_URL + '/' + placeId);
    }
}

export default new PlaceService()