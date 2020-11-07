import React from 'react'
import { View, StyleSheet } from 'react-native';


import PowerContainer from '../components/PowerComponents'
import Text from "../components/Text"


const PowerStatsCard = ({ powerState }) => {
    // console.log(powerState)
    return (
        <View style={styles.container} >
             <View style={styles.header} >
                  <Text style={styles.headerText} >PowerStats</Text>
            </View>  

        <View style={styles.barContainer} >

            <PowerContainer 
            title={powerState.intelligence}
            placeHolder="Intelligence"
            />

            <PowerContainer 
            title={powerState.combat}
            placeHolder="Combat"
            />

            <PowerContainer 
            title={powerState.power }
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
        padding:1,
        backgroundColor: "#DCDCDC",
        height: 250,
        // width: "100%",
        borderRadius: 10,
        marginBottom: 10,
    },
    header:{
        justifyContent:"center",
        alignItems:"center",    
        marginBottom:20,
        // backgroundColor:"red" 
    },
    headerText:{
        fontSize:30,
        fontWeight:"800"
    },
    barContainer:{
        justifyContent:"center",
        padding:2,
        paddingLeft:10,
    },
    conatenText:{

    }
})
export default PowerStatsCard