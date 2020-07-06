import {AppleAPI, BasketAPI, DescriptionAPI, FeedBackAPI, XiaomiAPI} from "../API/API";

const SET_APPLE = "SET_APPLE"
const SET_XIAOMI = "SET_XIAOMI"
const SET_ONE_APPLE = "SET_ONE_APPLE"
const SET_ONE_XIAOMI = "SET_ONE_XIAOMI"
const SET_DESCRIPTION = "SET_DESCRIPTION"
const SET_BASKET = "SET_BASKET"
const ADD_IN_BASKET = "ADD_IN_BASKET"
const DELETE_IN_BASKET = "DELETE_IN_BASKET"
const COUNT_BASKET = "COUNT_BASKET"
const SEARCH = "SEARCH"
const SEARCH_BOX = "SEARCH_BOX"
const COUNT_BASKET_PRODUCTS = "COUNT_BASKET_PRODUCTS"
const SET_FEEDBACK = "SETFEEDBACK"
const ADD_FEEDBACK = "ADD_FEEDBACK"
const INITIALIZE_FEEDBACK = "INITIALIZE_FEEDBACK"
const INITIALIZE = "INITIALIZE"


let initState = {
    apple: [],
    xiaomi: [],
    oneApple: [],
    oneXiaomi: [],
    description: [],
    basket: [],
    search: "",
    searchBox: "",
    countBasketProducts: 0,
    feedback: [],
    initializeFeedback: true,
    initialize: true

}


const Reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_APPLE: {
            return {
                ...state,
                apple: action.apple
            }
        }
        case SET_XIAOMI: {
            return {
                ...state,
                xiaomi: action.xiaomi
            }
        }
        case SET_ONE_APPLE: {
            return {
                ...state,
                oneXiaomi: [],
                oneApple: action.oneApple,

            }
        }
        case SET_ONE_XIAOMI: {
            return {
                ...state,
                oneApple: [],
                oneXiaomi: action.oneXiaomi
            }
        }
        case SET_DESCRIPTION: {
            return {
                ...state,
                description: action.description
            }
        }
        case SET_BASKET: {
            return {
                ...state,
                basket: action.basket
            }
        }
        case ADD_IN_BASKET: {
            return {
                ...state,
                basket: [{
                    name: action.name,
                    photo: action.photo,
                    price: action.price,
                    count: 1
                }]
            }
        }
        case DELETE_IN_BASKET: {
            return {
                ...state,
                basket: [...action.id]
            }
        }
        case COUNT_BASKET: {
            return {
                ...state,
                basket: [...state.basket]
            }
        }
        case SEARCH: {
            return {
                ...state,
                search: action.search
            }
        }
        case SEARCH_BOX: {
            return {
                ...state,
                searchBox: action.searchBox
            }
        }
        case COUNT_BASKET_PRODUCTS: {
            return {
                ...state,
                countBasketProducts: action.countBasketProducts
            }
        }
        case SET_FEEDBACK: {
            return {
                ...state,
                feedback: action.feedback
            }
        }
        case ADD_FEEDBACK: {
            return {
                ...state,
                feedback: [ ...state.feedback,{
                    name: action.name,
                    productId: action.id,
                    feedBack: action.feedBack,
                    rating: action.rating,
                    date:action.date
                }]
            }
        }
        case INITIALIZE_FEEDBACK:
            return {
                ...state,
                initializeFeedback: action.isInit
            }
        case INITIALIZE:
            return {
                ...state,
                initialize: action.isInitialize
            }
        default:
            return state;

    }
}

export const setApple = (apple) => ({type: SET_APPLE, apple})
export const setXiaomi = (xiaomi) => ({type: SET_XIAOMI, xiaomi})
export const setOneApple = (oneApple) => ({type: SET_ONE_APPLE, oneApple})
export const setOneXiaomi = (oneXiaomi) => ({type: SET_ONE_XIAOMI, oneXiaomi})
export const setDescription = (description) => ({type: SET_DESCRIPTION, description})
export const setBasket = (basket) => ({type: SET_BASKET, basket})
export const addInBasket = (name, photo, price) => ({type: ADD_IN_BASKET, name, photo, price})
export const deleteInBasket = (id) => ({type: DELETE_IN_BASKET, id})
export const countBasket = (basket) => ({type: COUNT_BASKET, basket})
export const searchAC = (search) => ({type: SEARCH, search})
export const searchBoxAC = (searchBox) => ({type: SEARCH_BOX, searchBox})
export const CountBasketProducts = (countBasketProducts) => ({type: COUNT_BASKET_PRODUCTS, countBasketProducts})
export const setFeedBack = (feedback) => ({type: SET_FEEDBACK, feedback})
export const addFeedBack = (name, id, feedBack, rating,date) => ({type: ADD_FEEDBACK, name, id, feedBack, rating,date})
export const initializeFeedbackAC = (isInit) => ({type: INITIALIZE_FEEDBACK, isInit})
export const initializeAC = (isInitialize) => ({type: INITIALIZE, isInitialize})


export const getAppleThunk = () => async (dispatch) => {
    let data = await AppleAPI.getApple();
    dispatch(setApple(data))
}
export const getOneAppleThunk = (id) => async (dispatch) => {
    let data = await AppleAPI.getOneApple(id);
    dispatch(setOneApple(data))
}
export const getXiaomiThunk = () => async (dispatch) => {
    let data = await XiaomiAPI.getXiaomi();
    dispatch(setXiaomi(data))
}
export const getOneXiaomiThunk = (id) => async (dispatch) => {
    let data = await XiaomiAPI.getOneXiaomi(id);
    dispatch(setOneXiaomi(data))
}
export const getDescriptionThunk = () => async (dispatch) => {
    let data = await DescriptionAPI.getDescription();
    dispatch(setDescription(data))
}
export const getBasketThunk = () => async (dispatch) => {
    let data = await BasketAPI.getBasket();
    dispatch(setBasket(data));
}
export const addInBasketThunk = (name, photo, price, id) => async (dispatch) => {
    let data = await BasketAPI.addInBasket(name, photo, price, id);
    dispatch(addInBasket(data.name, data.photo, data.price, data.id))
}
export const deleteInBasketThunk = (id, delSmart) => async (dispatch) => {
    await BasketAPI.deleteInBasket(id);
    dispatch(deleteInBasket(delSmart.filter(d => d.id !== id)))
}
export const countBasketThunk = (id, count) => async (dispatch) => {
    let data = await BasketAPI.countBasket(id, count);
    dispatch(countBasket(data))
}
export const getFeedBackThunk = () => async (dispatch) => {
    let data = await FeedBackAPI.getFeedBack();
    dispatch(setFeedBack(data))
}
export const addFeedBackThunk = (name, id, feedBack, rating,date) => async (dispatch) => {
    let data = await FeedBackAPI.addFeedBack(name, id, feedBack, rating,date);
    dispatch(addFeedBack(data.name, data.id, data.feedBack, data.rating,data.date))
}


export const initializeFeedbackThunk = (name, id, feedBack, rating,date) => (dispatch) => {
    let promise = dispatch(addFeedBackThunk(name, id, feedBack, rating,date));

    Promise.all([promise])
        .then(() => {
            dispatch(getFeedBackThunk());
            dispatch(initializeFeedbackAC(true))
        });
}
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAppleThunk());
    let promise2 = dispatch(getXiaomiThunk())

    Promise.all([promise, promise2])
        .then(() => {
            dispatch(initializeAC(true))
        });
}
export const initializeApple = () => (dispatch) => {
    let promise = dispatch(getAppleThunk());

    Promise.all([promise])
        .then(() => {
            dispatch(initializeAC(true))
        });
}
export const initializeXiaomi = () => (dispatch) => {

    let promise = dispatch(getXiaomiThunk());

    Promise.all([promise])
        .then(() => {
            dispatch(initializeAC(true))
        });
}
export const initializeOneXiaomi = (id) => (dispatch) => {

    let promise = dispatch(getOneXiaomiThunk(id));

    Promise.all([promise])
        .then(() => {
            dispatch(initializeAC(true))
        });
}
export const initializeOneApple = (id) => (dispatch) => {

    let promise = dispatch(getOneAppleThunk(id));

    Promise.all([promise])
        .then(() => {
            dispatch(initializeAC(true))
        });
}
export const initializeCounter = (id,count) => (dispatch) => {

    let promise = dispatch(countBasketThunk(id,count))

    Promise.all([promise])
        .then(() => {
            dispatch(getBasketThunk())
        });
}




export default Reducer;