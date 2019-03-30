import {NavigationScreenProp} from "react-navigation";
import AppProps from "../../framework/interfaces/AppProps";

export class MyProp extends AppProps {
    public constructor(
        public readonly name: string,
        public readonly navigation: NavigationScreenProp<any, any>
    ) {
        super(navigation);
    }
}
export class MyState {
    public constructor() {}
}
