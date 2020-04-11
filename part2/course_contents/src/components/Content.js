import React from 'react';
import Total from './Total';


const Content = ({parts}) =>(
    <>
        {parts.map( part =>
            <p key = {part.id}>
                {part.name} {part.exercises}
            </p>
        )}
        <Total parts = {parts}/>
    </>

)


export default Content;