import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';

// Make a component
class Login extends Component {

   goToTab = () => {
      this.props.navigation.navigate('TabRouter');
   };

   render() {
      return (
         <Card
            title='辰元太極拳'
            image={require('../assets/login.jpg')}
         >
            <Text style={{ marginBottom: 10 }}>
               點選下方按鈕進入app畫面 ....
            </Text>
            <Button
               raised
               title='按鈕'
               onPress={this.goToTab}
            />
         </Card>

      );
   }
}

export default Login;
