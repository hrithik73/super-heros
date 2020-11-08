import React from 'react'
import { View, StyleSheet } from 'react-native';

import GlobleStyle from '../config/GlobleStyle'
import Text from './Text'

const AppearanceCard = ({ appearance }) => {
    return (
        <View style={[GlobleStyle.container, styles.container]} >
            <View style={GlobleStyle.header} >
                <Text style={GlobleStyle.headerText} >Appearance</Text>
            </View>

            <View style={GlobleStyle.detailsContainer} >
                <Text>Gender:-  {appearance.gender}</Text>
                <Text>Race:-    {appearance.race}</Text>
                <Text>Height:-  {appearance.height.join(" ,")}</Text>
                <Text>Weight:-  {appearance.weight.join(" ,")}</Text>
                <Text>Eye-Color:-   {appearance["eye-color"]}</Text>
                <Text>Hair-Color:-  {appearance["hair-color"]}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 240
    }
})
export default AppearanceCard