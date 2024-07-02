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
 * GPU configuration metrics
 *
 */
export interface HostGpuConfiguration extends model.HostConfigurationMetricGroup {
  /**
   * GPU Identifier Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "gpuId": number;
  /**
   * GPU Product Name
   */
  "productName": string;
  /**
   * GPU Vendor
   */
  "vendor": string;
  /**
   * Bus Identifier
   */
  "busId": string;
  /**
   * Bus Width Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "busWidth": number;
  /**
   * GPU Capabilities
   */
  "gpuCapabilities"?: string;
  /**
   * Power Capacity Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalPower": number;
  /**
   * Total Memory Allocated to GPU Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalMemory": number;
  /**
   * Max Video Clock Speed Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalVideoClockSpeed": number;
  /**
   * Max SM (Streaming Multiprocessor) Clock Speed Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalSmClockSpeed": number;
  /**
   * Max Graphics Clock Speed Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalGraphicsClockSpeed": number;
  /**
   * Max Memory Clock Speed Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalMemoryClockSpeed": number;
  /**
   * CUDA library version
   */
  "cudaVersion": string;
  /**
   * GPU Driver version
   */
  "driverVersion": string;

  "metricName": string;
}

export namespace HostGpuConfiguration {
  export function getJsonObj(obj: HostGpuConfiguration, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostConfigurationMetricGroup.getJsonObj(obj) as HostGpuConfiguration)),
      ...{}
    };

    return jsonObj;
  }
  export const metricName = "HOST_GPU_CONFIGURATION";
  export function getDeserializedJsonObj(
    obj: HostGpuConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostConfigurationMetricGroup.getDeserializedJsonObj(obj) as HostGpuConfiguration)),
      ...{}
    };

    return jsonObj;
  }
}
