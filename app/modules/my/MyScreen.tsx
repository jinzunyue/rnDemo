// import {Component} from 'react';
import * as React from "react";
import {MyProp, MyState} from "./MyModel";
import {View, Text, TouchableOpacity} from "react-native";
import {Bind} from "../../framework/utils/Annotations";

export default class MyScreen extends React.Component<MyProp, MyState> {

    public constructor(props: Readonly<MyProp>) {
        super(props);
        console.log("constructor");
    }

    public componentWillMount(): void {
        console.log("componentWillMount");
    }

    public componentDidMount(): void {
        console.log("componentDidMount");
    }

    @Bind
    public toSetting(): void {
        this.props.navigation.navigate("Setting");
    }

    @Bind
    public render(): React.ReactNode {
        return (
            <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
                <TouchableOpacity
                    onPress={this.toSetting}
                >
                    <Text>设置</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
