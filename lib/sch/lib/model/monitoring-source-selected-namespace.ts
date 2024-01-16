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
 * A metric namespace for the compartment-specific list.
 *
 */
export interface MonitoringSourceSelectedNamespace {
  /**
    * The source service or application to use when querying for metric data points. Must begin with {@code oci_}.
* <p>
Example: {@code oci_computeagent}
* 
    */
  "namespace": string;
  "metrics": model.MonitoringSourceAllMetrics;
}

export namespace MonitoringSourceSelectedNamespace {
  export function getJsonObj(obj: MonitoringSourceSelectedNamespace): object {
    const jsonObj = {
      ...obj,
      ...{
        "metrics": obj.metrics
          ? model.MonitoringSourceMetricDetails.getJsonObj(obj.metrics)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MonitoringSourceSelectedNamespace): object {
    const jsonObj = {
      ...obj,
      ...{
        "metrics": obj.metrics
          ? model.MonitoringSourceMetricDetails.getDeserializedJsonObj(obj.metrics)
          : undefined
      }
    };

    return jsonObj;
  }
}
