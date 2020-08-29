import React, { useState } from 'react';
import ResourceList from './ResourceList'

const App =()=> {
// array destructuring --resource is like state, setRecourse is like setState-resource = 'post' or default state 
const [resource , setResource ] = useState('posts');
 
    return (
      <div className="ui container">
        <div>
          <button onClick={()=>setResource('Posts')}>Posts</button>
          <button onClick={()=>setResource('Todos')}>Todos</button>
        </div>
        <ResourceList resource = { resource}/>
      </div>
    )
  
}

export default App
