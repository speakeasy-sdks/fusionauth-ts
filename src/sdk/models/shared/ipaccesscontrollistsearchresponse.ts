/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IPAccessControlList } from "./ipaccesscontrollist";
import { Expose, Type } from "class-transformer";

export class IPAccessControlListSearchResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: IPAccessControlList })
    @Expose({ name: "ipAccessControlLists" })
    @Type(() => IPAccessControlList)
    ipAccessControlLists?: IPAccessControlList[];

    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    total?: number;
}
