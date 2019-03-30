// import {Component} from 'react';
import * as React from "react";
import {SettingProp, SettingState} from "./SettingModel";
import {View, Text, TouchableOpacity} from "react-native";
import {Bind} from "../../framework/utils/Annotations";

export default class SettingScreen extends React.Component<SettingProp, SettingState> {

    public constructor(props: Readonly<SettingProp>) {
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
    public goBack(): void {
        this.props.navigation.goBack();
    }

    @Bind
    public render(): React.ReactNode {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>我是 Setting</Text>
                <TouchableOpacity
                    style={{marginTop: 50}}
                    onPress={this.goBack}
                >
                    <Text>返回</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
