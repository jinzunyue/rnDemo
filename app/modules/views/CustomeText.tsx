import * as React from "react";
import {Text, View} from "react-native";
import {HomeContext} from "../home/HomeScreen";

export default class CustomeText extends React.Component {
    public static contextType: React.Context<number> = HomeContext;

    public componentDidMount(): void {
        console.log("CustomeText: " + HomeContext);
    }

    public render(): React.ReactNode {
        return (
            <View>
               <Text>
                   自定义内容
               </Text>
            </View>
        );
    }
}
