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
 * The percentage distribution of waits in the AWR wait event buckets.
 */
export interface AwrDatabaseWaitEventBucketCollection extends model.AwrQueryResult {
  /**
   * The total waits of the database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalWaits"?: number;
  /**
   * A list of AWR wait event buckets.
   */
  "items"?: Array<model.AwrDatabaseWaitEventBucketSummary>;

  "awrResultType": string;
}

export namespace AwrDatabaseWaitEventBucketCollection {
  export function getJsonObj(
    obj: AwrDatabaseWaitEventBucketCollection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AwrQueryResult.getJsonObj(obj) as AwrDatabaseWaitEventBucketCollection)),
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.AwrDatabaseWaitEventBucketSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const awrResultType = "AWRDB_EVENT_HISTOGRAM_SET";
  export function getDeserializedJsonObj(
    obj: AwrDatabaseWaitEventBucketCollection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AwrQueryResult.getDeserializedJsonObj(
            obj
          ) as AwrDatabaseWaitEventBucketCollection)),
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.AwrDatabaseWaitEventBucketSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
