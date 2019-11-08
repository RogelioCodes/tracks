import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native' ;
import { SafeAreaView } from 'react-navigation';
import { Button, Avatar, Text} from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

//react navigation drawer

const AccountScreen = ( { navigation } ) => {
    const { signout } = useContext(AuthContext);

    return ( 
    <SafeAreaView forceInset = {{top: 'always'  }}>
        <View style = {styles.header}> 
            <Text style = {styles.headerText}>Luis Mendoza</Text>
        </View>
        <View style = {styles.container}>
            <Avatar
                rounded
                size="large"
                source={{
                    uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
                containerStyle={{marginLeft: 20, marginTop: 10}}
            />
            <View style = {{flexDirection: "row",justifyContent: "flex-end"}}>
                <Text style = {styles.stats}>1</Text> 
                <Text style = {styles.stats}>2</Text>
                <Text style = {styles.stats}>3</Text>
            </View>
            <View style = {{flexDirection: "row", justifyContent: "flex-end"}} >
                <Text style = {styles.stats}>Posts</Text> 
                <Text style = {styles.stats}>Followers</Text>
                <Text style = {styles.stats}>Following</Text>
            </View>
        </View>
        <Spacer>
            <Button title = "Sign Out" onPress = {signout} />
        </Spacer>
        <Spacer>
            <Button title = "Edit Profile" 
            onPress = {() => navigation.navigate('EditProfile')}  />
        </Spacer>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        borderColor: "black",
        borderBottomWidth: 1,
        padding: 5,
        borderWidth: 5,
        borderColor: 'red',
        
    },
    headerText:
    {
        fontSize: 20,
        justifyContent: "center",
        marginLeft: 120,
        borderWidth: 5,
        borderColor: 'red',
    },
    container: {
        //flexDirection: "column",
        //alignItems: "center",
        padding: 5,
        borderWidth: 5,
        borderColor: 'red',
    },
    stats: {
        //paddingHorizontal: 20,
        fontSize: 10,
        borderWidth: 5,
        borderColor: 'red',
       // marginLeft:30,
    },
    stats2: {
        
    },


});

export default AccountScreen;