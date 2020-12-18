import React from 'react'
import { View, StyleSheet, } from 'react-native';


import GlobleStyle from '../config/GlobleStyle'
import SocialIcon from "../components/SocialIcons"
import Text from "../components/Text"
import Screen from "../components/Screen"
import ProjectCard from '../components/ProjectCard'



const AboutScreen = () => {
    return (
        <Screen style={styles.container} >
            <View style={GlobleStyle.header} >
                <Text style={GlobleStyle.headerText} >About The Project </Text>
            </View>
            <ProjectCard />


            <View style={styles.header} >
                <Text style={styles.headerText} >About The Developer</Text>
            </View>
            <SocialIcon />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

})
export default AboutScreen