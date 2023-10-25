/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IPAccessControlList } from "./ipaccesscontrollist";
import { Expose, Type } from "class-transformer";

export class IPAccessControlListResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "ipAccessControlList" })
    @Type(() => IPAccessControlList)
    ipAccessControlList?: IPAccessControlList;

    @SpeakeasyMetadata({ elemType: IPAccessControlList })
    @Expose({ name: "ipAccessControlLists" })
    @Type(() => IPAccessControlList)
    ipAccessControlLists?: IPAccessControlList[];
}
