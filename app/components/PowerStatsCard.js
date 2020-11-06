import React from 'react'
import { View, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

import Text from "../components/Text"


const PowerStatsCard = ({ powerState }) => {
    // console.log(powerState)
    return (
        <View style={styles.container} >

            <View style={{ flexDirection: "row" }} >
                <View style={{ flexDirection: "row" }} >
                    <Text>Intelligence</Text>
                    <Text style={
                        {
                            paddingLeft: 10,
                            paddingRight: 10,
                            fontSize: 20
                        }} >{powerState.intelligence}</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }} >
                    <Progress.Bar
                        progress={powerState.intelligence / 100}
                        color="blue"
                        height={20}
                    />
                </View>
            </View>


            <View style={{ flexDirection: "row" }} >
                <Text>Combat</Text>
                <Text style={
                    {
                        paddingLeft: 10,
                        paddingRight: 10,
                        fontSize: 20
                    }} >{powerState.intelligence}</Text>

                <View style={{ flex: 1, alignItems: "flex-end" }} >
                    <Progress.Bar
                        progress={powerState.combat / 100}
                        color="blue"
                        height={20}
                    />
                </View>


            </View>

            <Progress.Bar
                progress={powerState.power / 100}
                color="red"
                height={20}
            />
            <Progress.Bar
                progress={powerState.speed / 100}
                color="blue"
                height={20}
            />
            <Progress.Bar
                progress={powerState.strength / 100}
                color="blue"
                height={20}

            />
            <Progress.Bar
                progress={powerState.durability / 100}
                color="blue"
                height={20}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "black",
        height: 400,
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#FD151B",
        // justifyContent: "center",
        // alignItems: "center"
        justifyContent: "center",
        alignItems: "stretch"
    }
})
export default PowerStatsCard