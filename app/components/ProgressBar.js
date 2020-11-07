import React from 'react';
import { View } from 'react-native';
import * as Progress from 'react-native-progress';

const ProgressBar = ({title}) => {
    return (
        <View style={{ flex: 1, alignItems: "flex-end" }} >
            <Progress.Bar
                progress={title / 100}
                color="teal"
                height={20}
                width={180}      
            />
     </View>
);
}
export default ProgressBar
