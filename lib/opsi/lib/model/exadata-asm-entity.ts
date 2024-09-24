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
 * ASM entitie for an exadata
 *
 */
export interface ExadataAsmEntity extends model.DatabaseConfigurationMetricGroup {
  /**
   * Instance name of ASM
   */
  "instanceName"?: string;
  /**
   * Cluster name of ASM
   */
  "clusterName"?: string;
  /**
   * Software version
   */
  "softwareVersion"?: string;

  "metricName": string;
}

export namespace ExadataAsmEntity {
  export function getJsonObj(obj: ExadataAsmEntity, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseConfigurationMetricGroup.getJsonObj(obj) as ExadataAsmEntity)),
      ...{}
    };

    return jsonObj;
  }
  export const metricName = "ASM_ENTITY";
  export function getDeserializedJsonObj(obj: ExadataAsmEntity, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseConfigurationMetricGroup.getDeserializedJsonObj(obj) as ExadataAsmEntity)),
      ...{}
    };

    return jsonObj;
  }
}
