import React, {ReactNode} from "react";
import {Animated, StyleSheet, TouchableOpacity, View, Text, Easing} from "react-native";
import {STATUS_HEIGHT} from "../../framework/Constants";
import {Bind} from "../../framework/utils/Annotations";

export interface SimpleAnimatedScreenState {
    opacityAnimation: Animated.Value;
}

export class SimpleAnimatedScreen extends React.Component<any, SimpleAnimatedScreenState> {

    public constructor(props: any) {
        super(props);
        this.state = {
            opacityAnimation: new Animated.Value(0)
        };
    }

    public render(): ReactNode {
        return (
            <View style={{flex: 1, paddingTop: STATUS_HEIGHT}}>
                <Animated.Text
                    style={{
                        marginLeft: this.state.opacityAnimation,
                        transform: [{rotateZ: this.state.opacityAnimation.interpolate({inputRange: [0, 100], outputRange: ["0deg", "360deg"]})}]
                    }}
                >
                    Simple Animated Screen
                </Animated.Text>
                <View style={{width: "100%", height: StyleSheet.hairlineWidth, backgroundColor: "red"}}/>

                <View>
                    <TouchableOpacity
                        onPress={this.horizontalMove}
                    >
                        <Text>左右移动</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    @Bind
    public horizontalMove(): void {
        Animated.timing(this.state.opacityAnimation, {
            toValue: 100,
            duration: 3000,
            easing: Easing.back(0)
        }).start(() => console.log("动画完成了"));
    }
}
