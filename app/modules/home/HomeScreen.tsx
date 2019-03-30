// import {Component} from 'react';
import * as React from "react";
import {HomeProp, HomeState} from "./HomeModel";
import {View, Text} from "react-native";

export default class HomeScreen extends React.Component<HomeProp, HomeState> {

    static defaultProps = {
        name: "11"
    };

    constructor(props: Readonly<HomeProp>) {
        super(props);
        console.log("constructor");
    }

    public componentWillMount(): void {
        console.log("componentWillMount");
    }

    public componentDidMount(): void {
        console.log("componentDidMount");
    }

    public render(): React.ReactNode {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>我是 Home</Text>
            </View>
        );
    }
}
