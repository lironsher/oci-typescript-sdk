/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * The count of resources for specified dimension.
 */
export interface MonitoredResourcesCountAggregation {
  /**
    * Qualifiers provided in a metric definition. 
* Available dimensions vary based on groupBy parameter.
* Each dimension takes the form of a key-value pair.
* <p>
Example: {@code \"resourceType\": \"oci_autonomous_database\"}
* 
    */
  "dimensions": { [key: string]: string };
  /**
   * the value of this metric Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "count": number;
}

export namespace MonitoredResourcesCountAggregation {
  export function getJsonObj(obj: MonitoredResourcesCountAggregation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MonitoredResourcesCountAggregation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
