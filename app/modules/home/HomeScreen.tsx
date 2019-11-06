import * as React from "react";
import {HomeProp, HomeState} from "./HomeModel";
import {View, Text, TouchableOpacity} from "react-native";
import {Bind} from "../../framework/utils/Annotations";

export const HomeContext: React.Context<number> = React.createContext(5);

export default class HomeScreen extends React.Component<HomeProp, HomeState> {

    public static contextType: React.Context<number> = HomeContext;

    constructor(props: Readonly<HomeProp>) {
        super(props);
        console.log("constructor");
    }

    public componentWillMount(): void {
        console.log("componentWillMount");

        ErrorUtils.setGlobalHandler(((error, isFatal) => alert("我错了" + error.name)));
    }

    @Bind
    public render(): React.ReactNode {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", overflow: "hidden"}}>
                <TouchableOpacity
                    onPress={this.goAnimatedScreen}
                >
                    <Text>Go animated screen</Text>
                </TouchableOpacity>
            </View>
        );
    }

    @Bind
    public goAnimatedScreen(): void {
        this.props.navigation.navigate("Animated");
    }
}
