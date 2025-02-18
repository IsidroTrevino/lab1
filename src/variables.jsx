import React from 'react'

const Variables = () => {
    const nombre = 'Isidro';
    const edad = 19;

    const pais = 'Mexico';

    const nombreEdadyPais = `${nombre} tiene ${edad} años y es de ${pais}`;

  return (
    <div>
        <h3>{nombreEdadyPais}</h3>
    </div>
  )
}

export default Variables
