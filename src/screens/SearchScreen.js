import React from 'react';
import { View, StyleSheet, Text } from 'react-native' ;
import { SafeAreaView } from 'react-navigation';
const SearchScreen = () => {
    return ( 
        <SafeAreaView forceInset = {{top: 'always'  }}>
            <Text style = {{ fontSize: 36 }}>Search Screen</Text>
        </SafeAreaView>
        );
};

const styles = StyleSheet.create({});

export default SearchScreen;