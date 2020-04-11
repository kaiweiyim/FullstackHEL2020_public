import React from 'react';

const Total =({parts}) => (
    <p>
        <strong>
            Total of {parts.reduce( (s, p) => s + p.exercises,0)} exercises
        </strong>
            
    </p>
)


export default Total;
    


