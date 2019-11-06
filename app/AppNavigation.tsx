import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
    NavigationContainer
} from "react-navigation";
import HomeScreen from "./modules/home/HomeScreen";
import SettingScreen from "./modules/SettingScreen/SettingScreen";
import MyScreen from "./modules/my/MyScreen";
import DetailScreen from "./modules/detail/DetailScreen";
import {SimpleAnimatedScreen} from "./modules/animated/SimpleAnimatedScreen";

const TabContainer: NavigationContainer = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: (navigation) => {
                console.log("路由：" + JSON.stringify(navigation));
                return (
                    {
                        title: "首页",
                    }
                );
            }
        },
        My: {
            screen: MyScreen,
            navigationOptions: (navigation) => {
                console.log("路由：" + JSON.stringify(navigation));
                return (
                    {
                        title: "我的",
                    }
                );
            }
        }
    },
    {
        lazy: true,
        animationEnabled: false,
        tabBarPosition: "bottom",
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: "#3375EF", // label和icon的前景色 活跃状态下（选中）
            inactiveTintColor: "black", // label和icon的前景色 活跃状态下（未选中）
        }
    }

);

const App: NavigationContainer = createStackNavigator(
    {
        Animated: SimpleAnimatedScreen,
        Main: {
            screen: TabContainer,
            navigationOptions: {

            },
        },
        Setting: SettingScreen,
        Detail: DetailScreen
    },
    {
        headerMode: "none",
        mode: "modal",
    }
);

export default createAppContainer(App);
