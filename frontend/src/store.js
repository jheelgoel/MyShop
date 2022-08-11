import {configureStore , combineReducers} from '@reduxjs/toolkit'

const rootReducer = combineReducers ({
    productList : productListReducer
})
const store = configureStore({

    reducer: rootReducer

})
export default store