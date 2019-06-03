// import {Component} from 'react';
import * as React from "react";
import {HomeProp, HomeState} from "./HomeModel";
import {View} from "react-native";
import {WebView} from "react-native-webview";

export const HomeContext: React.Context<number> = React.createContext(5);

export default class HomeScreen extends React.Component<HomeProp, HomeState> {

    public static contextType: React.Context<number> = HomeContext;

    constructor(props: Readonly<HomeProp>) {
        super(props);
        console.log("constructor");
    }

    public componentWillMount(): void {
        console.log("componentWillMount");
    }

    public render(): React.ReactNode {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", overflow: "hidden"}}>
                <WebView
                    source={{uri: "https://statics.dapp365.io/appIndex?lang=zn&source=eos"}}
                    style={{flex: 1, width: 320, height: 640}}
                />
            </View>
        );
    }
}
