
const h1Style = {
    position:'fixed',
    left: '40%',
    fontSize:'50px',
    fontWeight:'bold',
    color:'red'
}
const ItemListContainer = () =>{
  return (
    <section>
       <h2 className="animate__animated animate__hinge" style={h1Style}>Item List Container</h2>
    </section>
  )
}
export default ItemListContainer