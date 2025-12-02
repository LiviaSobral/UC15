import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ParamList } from './interfaces/Interfaces';
import { NavigationContainer } from '@react-navigation/native';
import SomaScreen from './screens/SomaScreen';
import SubtracaoScreen from './screens/SubtracaoScreen';
import MultiplicaScreen from './screens/MultiplicaScreen';
import DivisaoScreen from './screens/DivisaoScreen';

const Tab = createMaterialTopTabNavigator<ParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "blue", tabBarInactiveTintColor:"gray", tabBarLabelStyle:{fontSize:16}, tabBarStyle:{height:60}}}>
            <Tab.Screen name={"Soma"} component={SomaScreen}/>
            <Tab.Screen name={"Sub"} component={SubtracaoScreen}/>
            <Tab.Screen name={"Mult"} component={MultiplicaScreen}/>
            <Tab.Screen name={"Div"} component={DivisaoScreen}/>
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


