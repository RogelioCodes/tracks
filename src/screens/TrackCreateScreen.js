import '../_mockLocation';//mock location is used for testing purposes, simulates movement
import React, { useContext, useCallback } from 'react';
import { StyleSheet} from 'react-native' ;
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
//navigation focused isFocused lets us check if were focusing on a certain screen, will need this later

const TrackCreateScreen = ({ isFocused }) => {
    const { state: {recording}, addLocation } = useContext(LocationContext);
    const callback = useCallback(location => {
        addLocation(location, recording);
        }, 
        [recording]
    );//only give me a new callback function whenever recording

    const [err] = useLocation(isFocused || recording, callback );//if focused = true, record, else dont record

    return (
        
        <SafeAreaView forceInset  = {{ top: 'always' }}>
            <Text h2 style = {{ marginLeft: 60}}>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null }
            <TrackForm />
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);