import React, { useReducer } from 'react' ; 

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext() ; 

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);

        const boundActions = {}; //the functions we use to change our state
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value = {{ state, ...boundActions }}>
              {children}
            </Context.Provider>   
        ) ;
    };

    return { Context, Provider };
    //Context: The context object we are going to use to get access to that information from one of our child components
    //child components: signup screen, signin screen, tracklist screen, track creatr screen, account screen, track detail screen
    //Provider: Component that makes all of our data available to everything else inside of our application
};