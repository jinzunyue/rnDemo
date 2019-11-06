import {
  Dimensions,
  Platform,
} from "react-native";

/**
 * 667 * 375 普通
 * 736 * 414 plus
 * 812 * 375 X, Xs
 * 896 * 414 XR XSmax
 * @returns {boolean}
 */
export default function isIphoneX(): boolean {
  const dimen = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    // !Platform.isPad &&
    // !Platform.isTVOS &&
    ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
  );
}
