import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Image, StyleSheet } from 'react-native'
import { List, ListItem, Icon, Tile, Card, Button } from 'react-native-elements';

// Make a component
class Contact extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: '介紹',
      // tabBarLabel: '介紹',
      // tabBarIcon: ({ tintColor }) => <Icon name="build" size={35} color={tintColor} />,
      // drawerLabel: '介紹',
      // drawerIcon: ({ tintColor }) => <Icon name="build" size={25} color={tintColor} />,
      // headerLeft: (
      //   <Icon
      //     name='menu'
      //     iconStyle={{ marginLeft: 10 }}
      //     onPress={() => navigation.navigate('DrawerOpen')}
      //   />
      // ),
    };
  }

  render() {
    return (
      
      <ScrollView>
       <Tile
          imageSrc={require('../assets/introduce.jpg')}
          title="太極拳"
        />
        <Card>
        <Text style={{ fontWeight:'bold',marginBottom: 15 }}>習練太極拳，鬆筋養氣，強身修心</Text>
        <Text style={{ fontWeight:'bold',marginBottom: 15 }}>筋長一寸命長一年，氣養一分長壽十載</Text>
        <Text style={{ fontWeight:'bold',marginBottom: 15 }}>養生有到在於伸展，養氣之道深層呼吸</Text>
        <Text style={{ fontWeight:'bold',marginBottom: 15 }}>屈深呼吸陰陽調和，陰陽調和強身健體</Text>
        <Text style={{ fontWeight:'bold',marginBottom: 15 }}>氣旺血足專氣致柔，筋柔氣壯精神飽滿</Text>
        <Text style={{ fontWeight:'bold',marginBottom: 15 }}>內練氣血修身養性，外練筋骨剛柔並濟</Text>
        <Text style={{ fontWeight:'bold',marginBottom: 15 }}>虛實分明鬆沉穩健，陰陽虛實太極展現</Text>
        <Text style={{ fontWeight:'bold',marginBottom: 15 }}>教拳認真，耐心帶領，解拳清楚，</Text>
        <Text style={{ fontWeight:'bold',marginBottom: 15 }}>循序漸進，易學易練</Text>
      </Card>
      </ScrollView>
      
    );
  };
}


export default Contact;
