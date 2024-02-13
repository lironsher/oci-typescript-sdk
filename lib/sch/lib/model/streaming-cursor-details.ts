/**
 * Service Connector Hub API
 * Use the Service Connector Hub API to transfer data between services in Oracle Cloud Infrastructure.
For more information about Service Connector Hub, see
[Service Connector Hub Overview](/iaas/Content/service-connector-hub/overview.htm).

 * OpenAPI spec version: 20200909
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The type of [cursor](https://docs.cloud.oracle.com/iaas/Content/Streaming/Tasks/using_a_single_consumer.htm#usingcursors), which determines the starting point from which the stream will be consumed.
 *
 */
export interface StreamingCursorDetails {
  "kind": string;
}

export namespace StreamingCursorDetails {
  export function getJsonObj(obj: StreamingCursorDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "TRIM_HORIZON":
          return model.TrimHorizonStreamingCursor.getJsonObj(
            <model.TrimHorizonStreamingCursor>(<object>jsonObj),
            true
          );
        case "LATEST":
          return model.LatestStreamingCursor.getJsonObj(
            <model.LatestStreamingCursor>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.kind}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: StreamingCursorDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "TRIM_HORIZON":
          return model.TrimHorizonStreamingCursor.getDeserializedJsonObj(
            <model.TrimHorizonStreamingCursor>(<object>jsonObj),
            true
          );
        case "LATEST":
          return model.LatestStreamingCursor.getDeserializedJsonObj(
            <model.LatestStreamingCursor>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.kind}`);
      }
    }
    return jsonObj;
  }
}
