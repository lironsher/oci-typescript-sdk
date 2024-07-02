/**
 * Ops Insights API
 * Use the Ops Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Ops Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * The summary of the AWR wait event time series data for one event.
 */
export interface AwrDatabaseWaitEventSummary {
  /**
   * The name of the event.
   */
  "name": string;
  /**
   * The begin time of the wait event.
   */
  "timeBegin"?: Date;
  /**
   * The end time of the wait event.
   */
  "timeEnd"?: Date;
  /**
   * The wait count per second. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "waitsPerSec"?: number;
  /**
   * The average wait time per second. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "avgWaitTimePerSec"?: number;
  /**
   * The ID of the snapshot. The snapshot identifier is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   * It can be retrieved from the following endpoint:
   * /awrHubs/{awrHubId}/awrDatabaseSnapshots
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "snapshotIdentifier"?: number;
}

export namespace AwrDatabaseWaitEventSummary {
  export function getJsonObj(obj: AwrDatabaseWaitEventSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AwrDatabaseWaitEventSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
