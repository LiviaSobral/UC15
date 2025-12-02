import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AboutScreen from './screens/AboutScreen';
import { BottomParamList, StackParamList, TopParamList } from './interfaces/NavigationInterfaces';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//const Stack = createNativeStackNavigator<StackParamList>();


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//         <Stack.Screen name='About' component={AboutScreen}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const Tab = createBottomTabNavigator<BottomParamList>()
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ color, size }) => {
//             let iconName;
//             if (route.name === 'Home') iconName = 'home-outline';
//             if (route.name === 'About') iconName = 'help-outline';
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor:"blue",
//           tabBarInactiveTintColor:"gray",
//           tabBarStyle:{height: 60},
//           tabBarLabelStyle:{fontSize:14},
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="About" component={AboutScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const Drawer = createDrawerNavigator<BottomParamList>();
// export default function App(){
//   return(
//     <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen name={"Home"} component={HomeScreen}/>
//         <Drawer.Screen name={"About"} component={AboutScreen}/>
//       </Drawer.Navigator>
//     </NavigationContainer>
//   )
// }

const TopTab = createMaterialTopTabNavigator<TopParamList>();

export default function App(){
  return(
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <NavigationContainer>
          <TopTab.Navigator screenOptions={{ tabBarActiveTintColor: "blue", tabBarInactiveTintColor:"gray", tabBarLabelStyle:{fontSize:14}, tabBarStyle:{height:60}}}>
            <TopTab.Screen name={"Home"} component={HomeScreen}/>
            <TopTab.Screen name={"About"} component={AboutScreen}/>
          </TopTab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}