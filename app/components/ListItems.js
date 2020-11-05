import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'


const ListItems = ({ image, title, IconComponents, subtitle, onPress, renderRightActions }) => {

    console.log(image, title)

    return (
        <Swipeable renderRightActions={renderRightActions} >
            <TouchableHighlight underlayColor={colors.light} onPress={onPress} >
                <View style={styles.container} >
                    {IconComponents}
                    {image && <Image style={styles.image} source={{ uri: image }} />}
                    <View style={styles.detailContainer} >
                        <Text style={styles.title} numberOfLines={1} >{title}</Text>
                        {subtitle && <Text style={styles.subtitle} numberOfLines={2} >{subtitle}</Text>}

                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium} />

                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white
    },
    detailContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,

    },
    title: {
        fontWeight: '500',

    },
    subtitle: {
        color: colors.medium,
        fontSize: 16
    }

})
export default ListItems;
