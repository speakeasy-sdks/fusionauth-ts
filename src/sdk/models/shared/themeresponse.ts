/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Theme } from "./theme";
import { Expose, Type } from "class-transformer";

/**
 * Theme API response object.
 */
export class ThemeResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "theme" })
    @Type(() => Theme)
    theme?: Theme;

    @SpeakeasyMetadata({ elemType: Theme })
    @Expose({ name: "themes" })
    @Type(() => Theme)
    themes?: Theme[];
}
