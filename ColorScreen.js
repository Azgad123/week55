
import { StyleSheet, Text, View, Image, Pressable, Span } from 'react-native';
import React, { useState } from 'react';
export default function ColorScreen({ navigation }) {
    const [image, setImage] = useState(require('./assets/vs_red.png'));

    return (
        <View style={styles.container}>

            <View style={{ justifyContent: 'space-around', display: 'flex', flex: 2, flexDirection: 'row', gap: '2rem' }}>
                <Image source={image} style={{ width: '114px', height: '138px', objectFit: 'contain' }} />
                <Text style={{ fontWeight: 500, fontSize: '1rem' }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            </View>
            <View style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'flex', flex: 8, flexDirection: 'column', width: '90%', gap: 10 }}>

                <Text style={{ fontWeight: 500, fontSize: '1rem' }} >Chọn một màu bên dưới:</Text>
                <Pressable style={styles.btnn1} onPress={() => { setImage(require('./assets/vs_red.png')) }}></Pressable>
                <Pressable style={styles.btnn2} onPress={() => { setImage(require('./assets/vs_black.png')) }}></Pressable>
                <Pressable style={styles.btnn3} onPress={() => { setImage(require('./assets/vs_silver.png')) }}></Pressable>
                <Pressable style={styles.btnn4} onPress={() => { setImage(require('./assets/vs_blue.png')) }}></Pressable>
                <Pressable style={{ backgroundColor: 'red', width: '100%', borderRadius: 5, }} onPress={() => { navigation.navigate('checkOutScreen', image) }}>
                    <Text style={{ fontWeight: 700, fontSize: '1.8rem', textAlign: 'center', color: 'white' }}>Xong</Text>

                </Pressable>
            </View>


        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
        gap: '2rem',
        padding: '1rem',
    },
    imgsss: {
        height: '270px'

    },
    btnn1: {
        justifyContent: 'center',
        backgroundColor: 'red',
        width: '100px',
        height: '100px',
        padding: 10,
        borderRadius: 5,

    },
    btnn2: {
        justifyContent: 'center',
        backgroundColor: 'black',
        width: '100px',
        height: '100px',
        padding: 10,
        borderRadius: 5,

    },
    btnn3: {
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        width: '100px',
        height: '100px',
        padding: 10,
        borderRadius: 5,

    },
    btnn4: {
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        width: '100px',
        height: '100px',
        padding: 10,
        borderRadius: 5,

    },
    spn: {
        fontWeight: 600, fontSize: '2rem'
    }

});
