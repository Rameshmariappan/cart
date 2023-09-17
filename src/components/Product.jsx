import React from 'react'

const Product = ({ state, dispatch }) => {

    const addToCart = (res) => {
        console.log(res)
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                title: res.title,
                price: res.price,
                id: res.id,
                qty: 1,
                img:res.image
            }
        })
    }

    const removefromCart = (res) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                id: res.id,
            }
        })
    }
    return (
        <>
            {
                state.products && state.products.length > 0 && state.products.map((res) => {
                    return (
                        <div style={{ backgroundColor: "#dfdfdf", display: "flex", flexDirection: "column", padding: "10px" }}>

                            <div style={{ display: "grid", gridTemplateColumns: "min-content 1fr", padding: "10px", gap: "2rem" }}>
                                <img src={res.image} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                                    <div>{res.title}</div>
                                    <div>{res.price}</div>
                                    <div>{res.rating.rate} *</div>
                                </div>
                            </div>
                            {state.cart.some((cartItem) => cartItem.id === res.id) ? (
                                <button style={{ padding: '10px', backgroundColor: "red", color: "white", border: "2px solid red" }} onClick={() => removefromCart(res)}>
                                    Remove from cart
                                </button>
                            ) : (
                                <button style={{ padding: '10px', backgroundColor: "green", color: "white", border: "2px solid green" }} onClick={() => addToCart(res)}>
                                    Add to cart
                                </button>
                            )}

                        </div>
                    )
                })
            }
        </>

    )
}

export default Product