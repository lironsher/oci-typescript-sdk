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
 * Product metric for the host
 *
 */
export interface HostProduct extends model.HostConfigurationMetricGroup {
  /**
   * Vendor of the product
   */
  "vendor"?: string;
  /**
   * Name of the product
   */
  "name"?: string;
  /**
   * Version of the product
   */
  "version"?: string;

  "metricName": string;
}

export namespace HostProduct {
  export function getJsonObj(obj: HostProduct, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostConfigurationMetricGroup.getJsonObj(obj) as HostProduct)),
      ...{}
    };

    return jsonObj;
  }
  export const metricName = "HOST_PRODUCT";
  export function getDeserializedJsonObj(obj: HostProduct, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostConfigurationMetricGroup.getDeserializedJsonObj(obj) as HostProduct)),
      ...{}
    };

    return jsonObj;
  }
}
