import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native' ;
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(Context);

    return (
        <View style = {styles.container}>
            <NavigationEvents 
                onWillBlur={clearErrorMessage}
            />
            <AuthForm 
                headerText = "Sign In to MiChef"
                errorMessage = {state.errorMessage}
                onSubmit = {signin}
                submitButtonText = "Sign In"
            />
            <NavLink 
                text = "Dont have an account? Sign up instead"
                routeName = "Signup"
            />
        </View>
    );
};

SigninScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SigninScreen;