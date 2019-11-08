import { useState, useEffect } from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
//custom hook makes logic and variables reusable, 
//shouldTrack = true means track, false means dont record
export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);
    
    

    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            
            try {
                await requestPermissionsAsync();
                subscriber = await watchPositionAsync(
                    {
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 1000, //once every second
                        distanceInterval: 10, //once every 10 meters
                    }, 
                    callback
                ); 
            } catch(err) {
                setErr(err);
            }
        };

        if (shouldTrack) {
            startWatching();
        } else {
            if(subscriber) {
                subscriber.remove(); 
            }

            subscriber = null ; 
        }
        return () => {
            if(subscriber) {
                subscriber.remove();
            }
        };
    }, [shouldTrack, callback] ); 
    //empty array means run exactly one time
    //passing in shouldTrack is telling react we might want to run this component more than once 
    //in particular, every time our hook is executed, (remember, our hook is executed every time trackCreateScreen rerenders), 
    //every time our hook is executed react is going to look at that value of shouldTrack and its going to compare that value to the 
    //last time our hook ran
    //between these two times of our hook running, if our value of shouldTrack changes, react is going to run that function an additional time

    return [err]; //returns error, could return multiple different errors, array by convention
};