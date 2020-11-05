import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, FlatList } from 'react-native';

import Card from '../components/Card';
import Input from "../components/Input";
import Screen from '../components/Screen';
import { API_TOKEN, API_URL } from "../config/api"


const HomeScreen = () => {
    const [Data, setData] = useState([])
    const [finalInput, setFinalInput] = useState("batman");


    const submitHandler = (input) => {
        setFinalInput(input)
        // console.log(input);
    }

    const getData = async () => {
        const response = await fetch(API_URL + API_TOKEN + "/search/" + finalInput);
        const data = await response.json();
        setData(data.results)
        // console.log(data.results)
        console.log(Data)
    }
    useEffect(() => {
        getData()
    }, [finalInput])

    return (
        <Screen style={styles.container}>
            <Input onPress={submitHandler} />
            <FlatList
                data={Data}
                keyExtractor={(item) => item.id}
                renderItem={(items) =>
                    <Card
                        data={items.item}
                        imageUrl={items.item.image.url}
                        title={items.item.name}
                        subtitle={items.item.work.base}
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