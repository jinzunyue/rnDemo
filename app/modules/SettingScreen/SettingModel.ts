import AppProps from "../../framework/interfaces/AppProps";

export class SettingProp extends AppProps {
    public constructor(
        public readonly name: string,
        public readonly navigation: any,
    ) {
        super(navigation);
    }
}
export class SettingState {
    public constructor() {}
}
