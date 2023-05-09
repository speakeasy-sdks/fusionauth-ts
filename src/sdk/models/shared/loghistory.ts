/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { HistoryItem } from "./historyitem";
import { Expose, Type } from "class-transformer";

/**
 * A historical state of a user log event. Since events can be modified, this stores the historical state.
 */
export class LogHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: HistoryItem })
  @Expose({ name: "historyItems" })
  @Type(() => HistoryItem)
  historyItems?: HistoryItem[];
}
