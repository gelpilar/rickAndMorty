import React, { useEffect, useState } from 'react'
import "../../assets/styles/components/second.css"
import fetchCharacters from '../../services/personajesService';
import Card from '../shared/Card';
const Second = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
          try {
            const result = await fetchCharacters('endpoint');
            setData(result);
          } catch (err) {
            setError(err.message);
          }
        };
        getData();
    }, []);

    const groupByThree = (array) => {
      return array.reduce((acc, item, index) => {
          const groupIndex = Math.floor(index / 5);
          if (!acc[groupIndex]) {
              acc[groupIndex] = [];
          }
          acc[groupIndex].push(item);
          return acc;
      }, []);
  };
  return (
    <div className='fondo_second'>
        {error ? <h1>{error}</h1> : null}
        {data !== null ? groupByThree(data).map((group, groupIndex) => (
            <div className="row" key={groupIndex}>
                {group.map((element, index) => (
                    <Card key={index} character={element} />
                ))}
            </div>
        )) : <h1>No hay data</h1>}
    </div>
);
}
export default Second
