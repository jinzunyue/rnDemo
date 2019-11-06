import * as React from "react";
import {Bind} from "../framework/utils/Annotations";
import {View, Text} from "react-native";

export interface TestItemProps {
    text: string;
}
export default class TestItem extends React.Component<TestItemProps, any> {

    private id: number = Math.random();

    @Bind
    public componentWillReceiveProps(nextProps: Readonly<TestItemProps>, nextContext: any): void {
        console.log(this.id + "TestItem this.props" + this.props.text);
        console.log(this.id + "TestItem nextProps" + nextProps.text);
    }

    @Bind
    public shouldComponentUpdate(nextProps: Readonly<TestItemProps>, nextState: Readonly<any>, nextContext: any): boolean {
        if (JSON.stringify(this.props) === JSON.stringify(nextProps) && JSON.stringify(this.state) === JSON.stringify(nextState)) {
            return false;
        } else {
            return true;
        }
    }

    @Bind
    public render(): React.ReactNode {
        console.log("TestItem render");
        return (
            <View>
                <Text>当前属性</Text>
                <Text>{this.props.text}</Text>
            </View>
        );
    }
}
