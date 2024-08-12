const API_URL = 'https://rickandmortyapi.com/api/character';
import CardCharacter from "../models/InfoCharacter"
/**
 * Obtener 6 personajes 
 * Obtener 1 personaje por el ID
 * Obtener personajes para buscador

 */

const fetchCharacters= async(page)=>{
    try
    {
        const response = await fetch(`${API_URL}/?page=${page}`);
        if(!response.ok)
        {        
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        var respo= [];
        data.results.forEach(element => {
            let aux= new CardCharacter(element.name, element.status, element.species, element.gender, element.image)
            respo.push(aux)
        });
        
        return respo;

    }catch(error)
    {
        console.error('Error fetching data:', error);
        throw error;
    }

}

export default fetchCharacters;