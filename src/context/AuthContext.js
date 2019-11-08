import { AsyncStorage } from 'react-native' ; 
import createDataContext from './createDataContext' ;
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

//this function is called only by react directly whenever we call the dispatch function
//this function must return a state value
const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
                return { ...state, errorMessage: action.payload };
        case 'signin':
                return { errorMessage: '', token: action.payload };
        case 'clear_error_Message':
                return {...state, errorMessage: '' };
        case 'signout':
                return {token: null, errorMessage: ''};
        default:
            return state;
    }
};

const tryLocalSignIn = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch( { type: 'sign_in', payload: token });
        navigate('Home');
    } else {
        navigate('loginFlow') ;
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_Message' });
};

//here we will have action functions that modify state
//action functions are always called with dispatch and return a function
//this inner function is the one called inside of our component
//the only reason we have this set up is because inside of our createDataContext
//we need to get access to the dispatch that is only given to us at const[state, DISPATCH] = ...
//to get that variable inside of our actions, we need to go through our boundActions process
//call each one of those action functions with dispatch and that will give 
//our inner function right below us, access to the dispatch function that we really care about
const signup = dispatch => async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password }) ;
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token});
            //Navigate to mainflow
            navigate('TrackList');
        } catch (err) {
            dispatch({ 
                type: 'add_error', 
                payload: 'Something went wrong with sign up!' 
            });
        }
};

const signin = (dispatch) => async ({ email, password }) => {
        try { 
            const response = await trackerApi.post('/signin', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token });
            navigate('TrackList');
        } catch (err) {
            console.log(err);
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with sign in!'
            });
        }
};


const signout = (dispatch) => async() => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    navigate('loginFlow');
};

//exports the provider and context to be used throughout our application
export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignIn },
    { token: null, errorMessage: '' }
);