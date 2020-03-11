import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
    {name:'photosshop',price:'$90.99'},
    {name:'Illustrator',price:'$60.99'},
    {name:'PDF Reader',price:'$6.99'}
  ]

  const productNames=products.map(product=>product.name)
  return (
    <div className="App">
      <header className="App-header">
        
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        
      </header>
    </div>
  );
}


  
function Counter(){
  const [count,setCount]= useState(10);
  const handleIncrease = () =>setCount(count+ 1);
    

  return(
    <div>
    <h1>Count:{count}</h1>
    <button onClick={ () => setCount(count-1)}>Decrease</button>
    <button onClick={  () =>setCount(count+ 1)}>Increase</button>
    </div>
  )
}
  

function Users(){
  const [users,setUsers] = useState([]);

  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data =>setUsers(data));

  })


  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
     <ul>

       {
         users.map(users => <li>{users.name}</li>)

       }
     </ul>
      </div>
  )
}


function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name,price}=props.product
  return (
  <div style={productStyle}>
   <h3>{name}</h3>
  <h5>{price}</h5>
   <button>Buy Now</button>
   </div>
  )
}

export default App;
