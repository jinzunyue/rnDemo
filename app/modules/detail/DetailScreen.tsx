import * as React from "react";
import {Text, View} from "react-native";
import {Bind} from "../../framework/utils/Annotations";

export interface DetailState {
    showModal: boolean;
    isOuterEnable: boolean;
}
export default class DetailScreen extends React.Component<any, DetailState> {

    public constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            showModal: false,
            isOuterEnable: true
        };
    }

    @Bind
    public componentWillMount(): void {
        console.log("componentWillMount DetailScreen" + JSON.stringify(this.props));
    }

    @Bind
    public componentDidMount(): void {
        console.log("componentDidMount DetailScreen" + JSON.stringify(this.props));
        console.log(this.props.aa.cc);
    }

    @Bind
    public componentWillUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void {
        console.log("componentWillUpdate DetailScreen" + JSON.stringify(this.props));
    }

    @Bind
    public componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        console.log("componentDidUpdate DetailScreen" + JSON.stringify(this.props));
    }

    @Bind
    public componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any): void {
        console.log("componentWillReceiveProps DetailScreen" + JSON.stringify(this.props));
    }

    @Bind
    public componentWillUnmount(): void {
        console.log("componentWillUnmount DetailScreen" + JSON.stringify(this.props));
    }

    @Bind
    public goToSetting(): void {
        this.props.navigation.navigate("Setting");
    }

    @Bind
    public goBack(): void {
        this.props.navigation.goBack();
    }

    @Bind
    public render(): React.ReactNode {
        return (
            <View>
                <Text>详情页</Text>
            </View>
        );
    }
}
