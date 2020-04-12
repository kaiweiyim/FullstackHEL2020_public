import React from 'react';

const Filter =({findCountry,handleFind}) =>(
    <p>
      find countries <input value = {findCountry} onChange = {handleFind}/>
    </p>
  )


export default Filter;