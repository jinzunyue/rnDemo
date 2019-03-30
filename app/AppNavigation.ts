import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
    NavigationContainer
} from "react-navigation";
import HomeScreen from "./modules/home/HomeScreen";
import SettingScreen from "./modules/SettingScreen/SettingScreen";
import MyScreen from "./modules/my/MyScreen";

const TabContainer: NavigationContainer = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: (navigation) => {
                console.log("路由：" + JSON.stringify(navigation));
                return (
                    {
                        title: "首页"
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
                        title: "我的"
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
        Main: TabContainer,
        Setting: SettingScreen
    },
    {
        headerMode: "none"
    }
);

export default createAppContainer(App);
