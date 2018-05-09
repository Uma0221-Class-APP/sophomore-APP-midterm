import React from 'react';
import { DrawerNavigator, TabNavigator, StackNavigator, DrawerItems } from 'react-navigation';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements';

import Login from './components/Login';
import Albums from './components/Albums';
import Details from './components/Details';
import Me from './components/Me';
import Setting from './components/Setting';
import Teachers from './components/Teachers';
import Videos from './components/Videos';
import Data from './components/Data';

const AlbumStack = StackNavigator({
  Albums: {
    screen: Albums,
  },
  Details: {
    screen: Details,
  }
});

const MeStack = StackNavigator({
  Me: {
    screen: Me,
  }
});

const SettingStack = StackNavigator({
  Setting: {
    screen: Setting,
  }
});

const TeacherStack = StackNavigator({
  Teachers: {
    screen: Teachers,
  },
  Data:{
    screen:Data,
  }
});

const VideoStack = StackNavigator({
  Videos: {
    screen: Videos,
  }
});


export const TabRouter = TabNavigator(
  {
    介紹: {
      screen: SettingStack,
      navigationOptions: {
        tabBarLabel: '介紹',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./image/介紹.png')}
                style={[{tintColor: tintColor},styles.icon]}
            />
        )
      }
    },
    師資: {
      screen: TeacherStack,
      navigationOptions: {
        tabBarLabel: '師資',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./image/師資.png')}
                style={[{tintColor: tintColor},styles.icon]}
            />
        )
      }
    },
    首頁: {
      screen: MeStack,
      navigationOptions: {
        tabBarLabel: '首頁',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./image/首頁.png')}
                style={[{tintColor: tintColor},styles.icon]}
            />
        )
      }
    },
    招式: {
      screen: AlbumStack,
      navigationOptions: {
        tabBarLabel: '招式',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./image/招式.png')}
                style={[{tintColor: tintColor},styles.icon]}
            />
        )
      }
    },
    影片: {
      screen: VideoStack,
      navigationOptions: {
        tabBarLabel: '影片',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./image/影片.png')}
                style={[{tintColor: tintColor},styles.icon]}
            />
        )
      }
    }
  },
  {
      tabBarOptions: {
        activeTintColor: '#AAA',
        inactiveTintColor: '#aaa', // 文字和图片未选中颜色
        showIcon: true,
      style: {
        backgroundColor: '#FFF', // TabBar 背景色
      }
    }
  }
);


  const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});
  

// export const DrawerRouter = DrawerNavigator(
//   {
//     Albums: {
//       screen: AlbumStack,
//     },
//     Me: {
//       screen: MeStack,
//     },
//     Setting: {
//       screen: SettingStack,
//     },
//   },
//   {
//     initialRouteName: 'Albums',
//     contentOptions: {
//       activeTintColor: '#e91e63',
//     },
//     // drawerWidth: 200,
//     // drawerPosition: 'right',
//     contentComponent:
//       props => (
//         <ScrollView>
//           <Tile
//             imageSrc={require('./assets/ntue.jpg')}
//             featured
//           />
//           <DrawerItems {...props} />
//         </ScrollView>
//       )
//   }
// );

export const LoginStack = StackNavigator({
  Login: {
    screen: Login,
  },
  TabRouter: {
    screen: TabRouter,
  },
},
  {
    headerMode: 'none',
  }
);


