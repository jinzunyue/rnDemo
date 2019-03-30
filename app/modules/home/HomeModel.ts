import AppProps from "../../framework/interfaces/AppProps";

export class HomeProp extends AppProps {
    public constructor(
        public readonly name: string,
        public readonly navigation: any
    ) {
        super(navigation);
    }
}
export class HomeState {
    public constructor() {}
}
