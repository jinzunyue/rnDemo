import {ErrorHandlerCallback} from "react-native";
import {Bind} from "./framework/utils/Annotations";

export default class CrashReporter {
    private rnErrorHandler?: ErrorHandlerCallback;

    public constructor() {
        this.rnErrorHandler = ErrorUtils.getGlobalHandler && ErrorUtils.getGlobalHandler();
        ErrorUtils.setGlobalHandler(this.customeErrorHandler);
    }

    @Bind
    public customeErrorHandler(error: any, isFatal?: boolean): void {
        console.log("customeErrorHandler:" + JSON.stringify(error));
        console.log("customeErrorHandler: isFatal" + JSON.stringify(isFatal));

        if (this.rnErrorHandler) {
            setTimeout(() => this.rnErrorHandler!(error, isFatal), 3000);
        }
    }
}
