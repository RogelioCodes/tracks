import React from 'react';
import { View, StyleSheet, Text } from 'react-native' ;
import { SafeAreaView } from 'react-navigation';

const EditProfileScreen = () => {
    return ( 
        <SafeAreaView forceInset = {{top: 'always'  }}>
            <Text style = {{ fontSize: 36 }}>Edit Profile Screen</Text>
        </SafeAreaView>
        );
};

const styles = StyleSheet.create({});

export default EditProfileScreen;