
import { StyleSheet, Text, View, Image, Pressable, Span } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function checkOutScreen({ route, navigation }) {
  console.log(route)
  const [image, setImage] = useState();

  useEffect(() => {
    setImage(route.params);
  }, [route.params])

  return (
    <View style={styles.container}>
      <Image source={route.params || require('./assets/vs_red.png')} style={{ width: '265px', height: '324px', }} resizeMode='contain' />
      <Text style={{ fontWeight: 700, fontSize: '1rem' }}>Điện Thoại Vsmart Joy 3</Text>

      <View style={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row', width: '90%', gap: 10 }}>
        <View style={{ justifyContent: 'space-around', display: 'flex', flexDirection: 'row' }}>
          <Image source={require('./assets/Star 2.png')} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
          <Image source={require('./assets/Star 2.png')} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
          <Image source={require('./assets/Star 2.png')} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
          <Image source={require('./assets/Star 2.png')} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
          <Image source={require('./assets/Star 2.png')} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
        </View>
        <Text style={{ fontWeight: 500, fontSize: '0.8rem' }} >(Xem 828 đánh giá)</Text>
      </View>
      <View style={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row', width: '90%', }}>
        <Text style={{ fontWeight: 700, fontSize: '1.2rem' }} >1.790.000đ</Text>
        <Text style={{ fontWeight: 500, fontSize: '1rem', textDecoration: 'line-through' }} >1.790.000đ</Text>
      </View>
      <View style={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row', width: '90%', }}>
        <Text style={{ fontWeight: 700, color: 'red', fontSize: '1rem' }} > xem </Text>
        <Image source={require('./assets/Group 1.png')} style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
      </View>
      <View style={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row', width: '90%', }} >
        <Pressable style={styles.btnn} onPress={() => {
          console.log('it pressed'),
            navigation.navigate('ColorScreen');
        }}>
          <Text style={{ fontWeight: 600, fontSize: '1rem', textAlign: 'center' }}>Chọn màu</Text>

        </Pressable>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', width: '90%', }} >
        <Pressable style={{ backgroundColor: 'red', width: '100%', borderRadius: 5, }} onPress={() => { }}>
          <Text style={{ fontWeight: 700, fontSize: '1.8rem', textAlign: 'center', color: 'white' }}>CHỌN MUA</Text>

        </Pressable>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    gap: 10,
    padding: '1rem',
  },
  imgsss: {
    height: '270px'

  },
  btnn: {
    justifyContent: 'center',
    border: '5px solid gray ',
    width: '100%',
    padding: 10,
    borderRadius: 5,

  },
  btnnhover: {

  },
  spn: {
    fontWeight: 600, fontSize: '2rem'
  }

});
