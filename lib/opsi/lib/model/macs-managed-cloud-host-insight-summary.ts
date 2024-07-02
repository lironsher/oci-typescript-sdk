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
 * Summary of a MACS-managed cloud host insight resource.
 */
export interface MacsManagedCloudHostInsightSummary extends model.HostInsightSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Compute Instance
   */
  "computeId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Management Agent
   */
  "managementAgentId": string;
  /**
   * Platform type.
   * Supported platformType(s) for MACS-managed external host insight: [LINUX, SOLARIS, WINDOWS].
   * Supported platformType(s) for MACS-managed cloud host insight: [LINUX].
   * Supported platformType(s) for EM-managed external host insight: [LINUX, SOLARIS, SUNOS, ZLINUX, WINDOWS, AIX, HP-UX].
   *
   */
  "platformType"?: MacsManagedCloudHostInsightSummary.PlatformType;

  "entitySource": string;
}

export namespace MacsManagedCloudHostInsightSummary {
  export enum PlatformType {
    Linux = "LINUX",
    Solaris = "SOLARIS",
    Sunos = "SUNOS",
    Zlinux = "ZLINUX",
    Windows = "WINDOWS",
    Aix = "AIX",
    HpUx = "HP_UX",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(
    obj: MacsManagedCloudHostInsightSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostInsightSummary.getJsonObj(obj) as MacsManagedCloudHostInsightSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const entitySource = "MACS_MANAGED_CLOUD_HOST";
  export function getDeserializedJsonObj(
    obj: MacsManagedCloudHostInsightSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostInsightSummary.getDeserializedJsonObj(
            obj
          ) as MacsManagedCloudHostInsightSummary)),
      ...{}
    };

    return jsonObj;
  }
}
