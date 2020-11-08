import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList, Alert, Keyboard } from 'react-native';



import ActivityIndicator from '../components/ActivityIndicator';
import Card from '../components/Card';
import Input from "../components/Input";
import Screen from '../components/Screen';
import { API_TOKEN, API_URL } from "../config/api"


const HomeScreen = ({ navigation }) => {
    const [Data, setData] = useState([])
    const [finalInput, setFinalInput] = useState("batman");
    const [isLoading, setIsLoading] = useState()

    const submitHandler = (input, setInput) => {
        if (input.length < 5) {
            Alert.alert(
                "Opps",
                "Name Mustbe of 5 Charater Long",
                [{ text: "Ok", style: "cancel" }]
            )
            return;
        }
        setFinalInput(input)
        setInput("")//Clearing The InputBox After Search
        Keyboard.dismiss()

    }

    const getData = async () => {
        setIsLoading(true)
        const response = await fetch(API_URL + API_TOKEN + "/search/" + finalInput);
        const data = await response.json();
        setData(data.results)
        setIsLoading(false)
        // console.log(data.results)
        // console.log(Data)
    }
    useEffect(() => {
        getData()
    }, [finalInput])

    return (
        <Screen style={styles.container}>
            <Input onPress={submitHandler} />

            <ActivityIndicator visible={isLoading} />

            <FlatList
                data={Data}
                keyExtractor={(item) => item.id}
                renderItem={(items) =>
                    <Card
                        data={items.item}
                        imageUrl={items.item.image.url}
                        title={items.item.name}
                        subtitle={items.item.work.base}
                        onPress={() => navigation.navigate("DetailScreen", items.item)}
                    />
                }
            />

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 7
    }
})
export default HomeScreen