// import {Component} from 'react';
import * as React from "react";
import {MyProp, MyState} from "./MyModel";
import {Text, TouchableOpacity, View} from "react-native";
import {Bind} from "../../framework/utils/Annotations";

export default class MyScreen extends React.Component<MyProp, MyState> {

    private a: number = 1;
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
    public toDetail(): void {
        this.props.navigation.navigate("Detail", {a: this.a++});
    }

    @Bind
    public toSetting(): void {
        this.props.navigation.navigate("Setting", {a: this.a++});
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
                <TouchableOpacity
                    onPress={this.toDetail}
                >
                    <Text>详情</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
