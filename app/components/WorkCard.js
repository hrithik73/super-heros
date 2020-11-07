import React from 'react'
import { View, StyleSheet } from 'react-native';

import GlobleStyle from '../config/GlobleStyle'
import Text from './Text'

const WorkCard = ({work}) => {
    return (
        <View style={[GlobleStyle.container,styles.container]} >
            <View style={GlobleStyle.header}>
                <Text style={GlobleStyle.headerText}>Work</Text>
            </View>
            <View style={GlobleStyle.detailsContainer}>
                <Text>Occupation:-  {work.occupation}</Text>
                <Text>Base:- {work.base}</Text>
            </View>
        </View>
);
}

const styles = StyleSheet.create({
    container: {
        height:200,
        paddingBottom:100
    }
})
export default WorkCard