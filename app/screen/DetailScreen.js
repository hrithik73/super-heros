import React from 'react'
import { View, StyleSheet, Image, ScrollView } from 'react-native';

import AppearanceCard from '../components/AppearanceCard';
import BioCard from '../components/BioCard';
import ConnectionCard from '../components/ConnectionCard';
import PowerStatsCard from '../components/PowerStatsCard';
import WorkCard from '../components/WorkCard';

const DetailScreen = ({ route }) => {
    // console.log(route.params)

    return (
        <View style={styles.container} >
            <View style={styles.imageContainer}  >
                <Image source={{ uri: route.params.image.url }} style={styles.image} />
            </View>
            <View style={styles.detailsContainer} >
                <ScrollView contentContainerStyle={styles.contentContainer}  >
                    <View style={styles.bioContainer}  >
                        <BioCard bioData={route.params.biography} name={route.params.name} />
                    </View>

                    <View style={styles.powerStateContainer} >
                        <PowerStatsCard powerState={route.params.powerstats} />
                    </View>

                    <View style={styles.appearanceCardContainer} >
                        <AppearanceCard appearance={route.params.appearance} />
                    </View>

                    <View style={styles.workContainer}  >
                        <WorkCard work={route.params.work} />
                    </View>

                    <View style={styles.connectionCardContainer}>
                        <ConnectionCard connection={route.params.connections} />
                    </View>
                </ScrollView>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 400,
        // width: "100%",
    },
    imageContainer: {
        height: 300,
        // flex: 1,
        borderRadius: 10,
        // backgroundColor: "black"
    },
    bioContainer: {
        // paddingTop:10,
        paddingBottom: 10,
    },
    detailsContainer: {
        flex: 1,
        // backgroundColor: "black",
        padding: 5,
        borderRadius: 100
        // backgroundColor: "black"
    },
    powerStateContainer: {
        paddingBottom: 10,
    },
    appearanceCardContainer: {
        paddingBottom: 10
    },
    workContainer: {
        paddingBottom: 10
    },
    connectionCardContainer: {
        paddingBottom: 10
    },
    contentContainer: {
        // padding: 10
        // borderRadius: 1,
        // backgroundColor: "black"
    }
})
export default DetailScreen