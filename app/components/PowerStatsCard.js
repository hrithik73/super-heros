import React from 'react'
import { View, StyleSheet } from 'react-native';

import GlobleStyle from '../config/GlobleStyle'
import PowerContainer from '../components/PowerComponents'
import Text from "../components/Text"


const PowerStatsCard = ({ powerState }) => {
    // console.log(powerState)
    return (
        <View style={[GlobleStyle.container, styles.container]} >
            <View style={GlobleStyle.header} >
                <Text style={GlobleStyle.headerText} >PowerStats</Text>
            </View>

            <View style={GlobleStyle.detailsContainer} >

                <PowerContainer
                    title={powerState.intelligence}
                    placeHolder="Intelligence"
                />

                <PowerContainer
                    title={powerState.combat}
                    placeHolder="Combat"
                />

                <PowerContainer
                    title={powerState.power}
                    placeHolder="Power"
                />

                <PowerContainer
                    title={powerState.speed}
                    placeHolder="Speed"
                />

                <PowerContainer
                    title={powerState.strength}
                    placeHolder="Strength"
                />
                <PowerContainer
                    title={powerState.durability}
                    placeHolder="Durability"
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 250,
    }
})

export default PowerStatsCard