import {Dimensions, Platform, StatusBar} from "react-native";
import IsIphoneX from "../framework/utils/IsIphoneX";

/**
 *  项目中的静态常量值
 */

// 整个屏幕的高度。全面屏手机上，这个值才是真实的屏幕高度
export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCREEN_HEIGHT = Dimensions.get("screen").height;
// 可显示内容的宽度
export const DEVICE_WIDTH = SCREEN_HEIGHT / SCREEN_WIDTH > 16 / 9 ? Dimensions.get("screen").width : Dimensions.get("window").width;
export const DEVICE_HEIGHT = SCREEN_HEIGHT / SCREEN_WIDTH > 16 / 9 ? Dimensions.get("screen").height : Dimensions.get("window").height;
export const STATUS_HEIGHT: number = Platform.OS === "android" ? StatusBar.currentHeight! : IsIphoneX() ? 44 : 20;
