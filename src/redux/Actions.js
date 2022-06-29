export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

export const increment = data => dispatch =>{
    dispatch({
        type:INCREMENT,
        payload:{
            IncrementData:data
        }
    })
}

export const decrement = data => dispatch =>{
    dispatch({
        type:DECREMENT,
        payload:{
            DecrementData:data
        }
    })
}