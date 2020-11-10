import React from 'react'
import { View, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import * as Linking from 'expo-linking';

import Text from "../components/Text"


const profileUrls = {
    github: "https://github.com/hrithik73",
    facebook: "https://www.facebook.com/profile.php?id=100009368827172",
    instagram: "https://www.instagram.com/hrithik._singh/",
    twitter: "https://twitter.com/_hrithiksingh",
    linkdin: 'https://www.linkedin.com/in/hrithik-singh-a8547b198/'
}

const SocialIcons = () => {
    return (
        <View style={styles.container} >

            <View style={styles.iconStyle}>
                <SocialIcon
                    type="github"
                    onPress={() => {
                        Linking.openURL(profileUrls.github)
                    }}
                />
                <Text style={styles.textStyle}>Github</Text>
            </View>



            <View style={styles.iconStyle}>
                <SocialIcon
                    type="facebook"
                    onPress={() => {
                        Linking.openURL(profileUrls.facebook)
                    }}
                />
                <Text style={styles.textStyle}>Facebook</Text>
            </View>



            <View style={styles.iconStyle}>
                <SocialIcon
                    type="instagram"
                    onPress={() => {
                        Linking.openURL(profileUrls.instagram)
                    }}
                />
                <Text style={styles.textStyle}>Instagram</Text>
            </View>


            <View style={styles.iconStyle}>
                <SocialIcon
                    type="twitter"
                    onPress={() => {
                        Linking.openURL(profileUrls.twitter)
                    }}
                />
                <Text style={styles.textStyle}>Twitter</Text>
            </View>


        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    iconStyle: {
        flexDirection: 'column',
        padding: 5
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16
    }
})
export default SocialIcons