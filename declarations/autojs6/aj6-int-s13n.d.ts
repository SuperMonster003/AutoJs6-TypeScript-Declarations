// Type definitions for AutoJs6 internal module console
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.8.4
//
// Last modified: Apr 9, 2023

/// <reference path="../index.d.ts" />
/// <reference no-default-lib="true" />

/**
 * @Source %AutoJs6Assets%/modules/__s13n__.js
 */

import ColorHex = Colors.ColorHex;
import ColorName = Colors.ColorName;
import ColorInt = Colors.ColorInt;

declare namespace Internal {

    interface S13n {

        color(o: OmniColor): ColorInt;

        throwable(o: OmniThrowable): java.lang.Throwable;

    }

}

declare type OmniColor = ColorHex | ColorInt | ColorName | Internal.Color | org.autojs.autojs.theme.ThemeColor;

declare type OmniRegion = [X?, Y?, Width?, Height?] | org.opencv.core.Rect | android.graphics.Rect;

declare type OmniThrowable = java.lang.Throwable | string | AutoJsError | Error;

declare type OmniVibrationPattern = number[] | string;