import {NavigationScreenProp} from "react-navigation";

export default class AppProps {
    constructor(
        // react-navigatioin 的每个界面都有这个属性；ts 定义一下类型方便使用
        public readonly navigation: NavigationScreenProp<any, any>
    ) {}
}
