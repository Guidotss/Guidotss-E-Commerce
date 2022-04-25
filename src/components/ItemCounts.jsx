import {useState} from 'react'

const ItemCounts = () => {

    const addButton = {
        position:'fixed',
        margin: '50px',
        left: '43%',
        fontSize: '20px',
        padding: '8px',
        border: 'solid',
        borderRadius:'10px',
        marginTop:'70px'
    }
    const countSyle ={
        fontSize: '20px',
        padding: '20px'
    }

    const [count, setCount] = useState(0); 

    const addHandler =() => {
        setCount(count + 1)
    }
    const subtractHandler = () => {
        setCount(count -1);

        if(count <  0){
           setCount(count - count)
        }
    }


  return (
    <>
        <button className='btn' onClick={subtractHandler}> - </button>
        <strong style={countSyle}>{count}</strong>
        <button className='btn' onClick={addHandler}> + </button>
        <button style={addButton}>Agregar al carrito</button>
    </>
  )
}
export default ItemCounts