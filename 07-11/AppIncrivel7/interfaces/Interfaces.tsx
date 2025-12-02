import { ParamListBase } from '@react-navigation/native';
import { MaterialTopTabNavigationProp} from "@react-navigation/material-top-tabs"
export interface ParamList extends ParamListBase{
    Soma: undefined,
    Sub:undefined,
    mult:undefined,
    div:undefined
}

export interface SomaScreenProps {
    navigation:MaterialTopTabNavigationProp<ParamList, "Soma">;
}
export interface SubScreenProps{
    navigation:MaterialTopTabNavigationProp<ParamList,"Sub">
}
export interface MultScreenProps{
    navigation:MaterialTopTabNavigationProp<ParamList,"Mult">
}
export interface DivScreenProps{
    navigation:MaterialTopTabNavigationProp<ParamList,"Div">
}