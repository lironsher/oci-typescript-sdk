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
 * Summarizes AWR parameter change history over specified time period for specified parameter
 *
 */
export interface AddmDbParameterChangeAggregationCollection {
  /**
   * The start timestamp that was passed into the request.
   */
  "timeIntervalStart": Date;
  /**
   * The end timestamp that was passed into the request.
   */
  "timeIntervalEnd": Date;
  /**
   * List of database details data
   */
  "databaseDetailsItems": Array<model.DatabaseDetails>;
  /**
   * List of AWR parameter changes
   */
  "items": Array<model.AddmDbParameterChangeAggregation>;
}

export namespace AddmDbParameterChangeAggregationCollection {
  export function getJsonObj(obj: AddmDbParameterChangeAggregationCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseDetailsItems": obj.databaseDetailsItems
          ? obj.databaseDetailsItems.map(item => {
              return model.DatabaseDetails.getJsonObj(item);
            })
          : undefined,
        "items": obj.items
          ? obj.items.map(item => {
              return model.AddmDbParameterChangeAggregation.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AddmDbParameterChangeAggregationCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseDetailsItems": obj.databaseDetailsItems
          ? obj.databaseDetailsItems.map(item => {
              return model.DatabaseDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "items": obj.items
          ? obj.items.map(item => {
              return model.AddmDbParameterChangeAggregation.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
