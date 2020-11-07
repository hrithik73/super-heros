import React from 'react'
import { View, StyleSheet } from 'react-native';

import Text from './Text';
import ProgressBar from "../components/ProgressBar"
import { color } from 'react-native-reanimated';

const PowerComponents = ({title,placeHolder}) => {
    return (
        <View style={{ flexDirection: "row" }} >
                <View style={{ flexDirection: "row",flex:1 }} >
                    <Text>{placeHolder}</Text>
                    <View style={{alignItems:"flex-end",flex:1}} >
                    <Text style={styles.titleText} >{title}</Text>
                    </View>
                </View>
               <ProgressBar title={title} />

            </View>
);
}

const styles = StyleSheet.create({
   
    titleText:{
            paddingLeft: 20,
            paddingRight: 10,
            fontSize: 20,
            fontWeight:"bold",
            color:"red",
            // alignItems:"flex-end"
    }

})
export default PowerComponents