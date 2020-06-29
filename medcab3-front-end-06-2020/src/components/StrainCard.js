import React from 'react';

const Strains = (props) => {
    return (
            
              props.strainsData.map(strains => {
                return (
                        <h2>{strains.name}</h2>                
                )
            })
    )
}
export default Strains;