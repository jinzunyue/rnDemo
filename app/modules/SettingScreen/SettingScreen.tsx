// import {Component} from 'react';
import * as React from "react";
import {SettingProp, SettingState} from "./SettingModel";
import {Animated, Text, TouchableOpacity, View} from "react-native";
import {Bind} from "../../framework/utils/Annotations";
import Images from "../../Images";

export default class SettingScreen extends React.Component<any, any> {
    private time: number = 0;

    public constructor(props: any) {
        super(props);
        this.state = {
            opacityFirst: new Animated.Value(0),
            opacitySecond: new Animated.Value(1)
        };
    }

    @Bind
    public componentWillMount(): void {
        console.log("componentWillMount");
    }

    @Bind
    public componentDidMount(): void {
        console.log("componentDidMount" + JSON.stringify(this.props));
    }

    @Bind
    public componentWillReceiveProps(nextProps: Readonly<SettingProp>, nextContext: any): void {
        console.log("componentWillReceiveProps" + JSON.stringify(this.props.navigation.getParam("name")));
    }

    @Bind
    public componentWillUpdate(nextProps: Readonly<SettingProp>, nextState: Readonly<SettingState>, nextContext: any): void {
        console.log("componentWillUpdate" + JSON.stringify(this.props.navigation.getParam("name")));
    }

    @Bind
    public componentDidUpdate(prevProps: Readonly<SettingProp>, prevState: Readonly<SettingState>, snapshot?: any): void {
        console.log("componentDidUpdate" + JSON.stringify(this.props.navigation.getParam("name")));
    }

    @Bind
    public goBack(): void {
        this.props.navigation.goBack();
    }

    @Bind
    public goHome(): void {
        console.log("goHome:" + JSON.stringify(this.props));
        this.props.navigation.navigate("Home");
    }

    @Bind
    public switch(): void {
        Animated.timing(this.state.opacityFirst, {
            toValue: this.time % 2 === 0 ? 1 : 0,
            duration: 1000
        }).start();
        Animated.timing(this.state.opacitySecond, {
            toValue: this.time % 2 === 0 ? 0 : 1,
            duration: 1000
        }).start(() => this.time++);
    }

    @Bind
    public render(): React.ReactNode {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Animated.Image
                    style={{position: "absolute", left: 0, top: 0, width: "100%", height: "100%", opacity: this.state.opacityFirst}}
                    source={Images.blueBg}
                />
                <Animated.Image
                    style={{position: "absolute", left: 0, top: 0, width: "100%", height: "100%", opacity: this.state.opacitySecond}}
                    source={Images.grayBg}
                />
                <View style={{position: "absolute", left: 0, top: 0, width: "100%", height: "100%", zIndex: 100, alignItems: "center", justifyContent: "center"}}>
                    <TouchableOpacity
                        style={{width: 100, height: 50, backgroundColor: "red"}}
                        onPress={this.switch}
                    >
                        <Text>换</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    @Bind
    public render1(): React.ReactNode {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>我是 Setting</Text>
                <TouchableOpacity
                    style={{marginTop: 50}}
                    onPress={this.goHome}
                >
                    <Text>跳转到 home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{marginTop: 50}}
                    onPress={this.goBack}
                >
                    <Text>返回按钮</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
