import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Image, StyleSheet } from 'react-native'
import { Card, Tile, List, ListItem, Icon, Button, Divider } from 'react-native-elements';


import me from '../json/me.json'; 
/*以上有改*/

class Me extends Component {
  state = { me: [] };

  static navigationOptions = ({ navigation }) => {
    return {
      title: '首頁',
      // tabBarLabel: '首頁',
      // tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />,
      // drawerLabel: '首頁',
      // drawerIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />,
    };
  }
  componentWillMount() {
    this.setState({ me });
  }

  render() {
    return (
      <ScrollView>
        <Tile
          imageSrc={require('../assets/home.jpg')}
          contentContainerStyle={{ height: 70 }}
          title="辰元太極拳"
        >
        <View
        style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}
        >
        <Text> </Text>
        <Text>太極不要太急</Text>
        </View>
        </Tile>
        <Card>
        <Text style={{marginbottom: 20, margintop: 60}}>上課時間：每週三、週五晚上7:00-9:00</Text>
        <Text style={{marginbottom: 20}}>上課地點：新北市新莊區公園一路91號</Text>
        <Text style={{marginbottom: 20}}>                   新泰國小川堂</Text>
        <Text style={{marginbottom: 60}}>練習班別:初級班/常態班</Text>
        <Text style={{marginbottom: 60}}>費用：三個月1,100元</Text>
        <Text style={{marginbottom: 60}}>報名方式：(一) 電話報名</Text>
        <Text style={{marginbottom: 20}}>                   (二) 星期三、五晚上</Text>
        <Text style={{marginbottom: 60}}>報名聯絡人：麗玲師姐 0935577737</Text>
        </Card>
        {this.state.me.map((me) => (
            <Card>
            <Text style={{marginbottom: 20}}>{me.name}</Text>
            </Card>
          ))}

      </ScrollView>
    );
  }
}
/*以上有改*/
export default Me;
