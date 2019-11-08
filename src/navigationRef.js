import { NavigationActions } from 'react-navigation';

let navigator; //reassign variable at some point in the future

export const setNavigator = (nav) => {
    navigator = nav;
};

//this function tells react navigation that we want to change its state
//and show a different screen to the user
export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
};