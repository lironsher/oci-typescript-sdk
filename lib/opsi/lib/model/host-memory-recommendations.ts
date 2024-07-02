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
 * Contains memory recommendation.
 *
 */
export interface HostMemoryRecommendations extends model.HostInsightHostRecommendations {
  /**
   * Identify unused instances based on cpu, memory and network metrics.
   */
  "unusedInstance"?: HostMemoryRecommendations.UnusedInstance;
  /**
   * Identify if an instance is abandoned.
   */
  "isAbandonedInstance"?: boolean;
  /**
   * Show if OPSI recommends to change memory capacity based on Memory utilization and current shape.
   */
  "memoryOptimization"?: string;

  "metricRecommendationName": string;
}

export namespace HostMemoryRecommendations {
  export enum UnusedInstance {
    InUse = "IN_USE",
    NotInUse = "NOT_IN_USE",
    IsNotDetermined = "IS_NOT_DETERMINED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: HostMemoryRecommendations, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostInsightHostRecommendations.getJsonObj(obj) as HostMemoryRecommendations)),
      ...{}
    };

    return jsonObj;
  }
  export const metricRecommendationName = "HOST_MEMORY_RECOMMENDATIONS";
  export function getDeserializedJsonObj(
    obj: HostMemoryRecommendations,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostInsightHostRecommendations.getDeserializedJsonObj(
            obj
          ) as HostMemoryRecommendations)),
      ...{}
    };

    return jsonObj;
  }
}
