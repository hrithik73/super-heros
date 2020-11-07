import React from 'react'
import { View, StyleSheet } from 'react-native';

import GlobleStyle from '../config/GlobleStyle'
import Text from './Text'

const ConnectionCard = ({connection}) => {
    return (
        <View style={[GlobleStyle.container,styles.container]}>
            <View style={GlobleStyle.header}>
                <Text style={GlobleStyle.headerText}>Connection</Text>
            </View>
                <Text><Text style={styles.boldText} >Group-Affiliation:-</Text> {connection["group-affiliation"]}</Text>
                <Text><Text style={styles.boldText} >Relatives:-</Text> {connection.relatives}</Text>
        </View>
);
}


const styles = StyleSheet.create({
    container: {
        height:500,
        padding:10
    },
    boldText:{
    fontWeight:"bold"
    }
})
export default ConnectionCard