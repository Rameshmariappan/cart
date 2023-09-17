import { useEffect, useReducer, useState } from 'react'
import { cartReducer } from './Reducers/cartReducer'
import axios from 'axios'
import Product from './components/Product'
function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: []
  })

  const fetchProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products")
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data
    })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const changeQuantity = (id, qty) => {
    dispatch({
      type: "CHANGE_QTY",
      payload: {
        qty: qty,
        id: id
      }
    })
  }


  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr min-content  ", gap: "1rem" }}>

      <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1>Products</h1>
        <div style={{ width: "100%", height: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem" }}>
          <>
            <Product state={state} dispatch={dispatch} />
          </>
        </div>

      </div>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1>Cart</h1>
        <h3>Price : 50$</h3>
        <div style={{ width: "100%", height: "100vh", display: "grid", gridTemplateColumns: "1fr ", gap: "1rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {state.cart && state.cart.length > 0 && state.cart.map((res) => {
              return (
                <div style={{ display: "flex", flexDirection: "row", width: "250px", gap: "1rem" }}>
                  <img src={res.img} style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start" }}>
                    <div> {res.title}</div>
                    <div> <span style={{ padding: "10px" }} onClick={() => changeQuantity(res.id, res.qty + 1)}>+</span> {" "} {res.qty}{" "} <span onClick={() => changeQuantity(res.id, res.qty - 1)} style={{ padding: "10px" }}>-</span></div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>

    </div>
  )
}

export default App
