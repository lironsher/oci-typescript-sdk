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
 * Summary of a Operation Insights private endpoint.
 */
export interface OperationsInsightsPrivateEndpointSummary {
  /**
   * The OCID of the Private service accessed database.
   */
  "id": string;
  /**
   * The display name of the private endpoint.
   */
  "displayName": string;
  /**
   * The compartment OCID of the Private service accessed database.
   */
  "compartmentId": string;
  /**
   * The OCID of the VCN.
   */
  "vcnId": string;
  /**
   * The OCID of the subnet.
   */
  "subnetId": string;
  /**
   * The flag to identify if private endpoint is used for rac database or not. This flag is deprecated and no longer is used.
   */
  "isUsedForRacDbs"?: boolean;
  /**
   * The description of the private endpoint.
   */
  "description"?: string;
  /**
   * The date and time the private endpoint was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeCreated": Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Private endpoint lifecycle states
   */
  "lifecycleState": model.OperationsInsightsPrivateEndpointLifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * A message describing the status of the private endpoint connection of this resource. For example, it can be used to provide actionable information about the validity of the private endpoint connection.
   */
  "privateEndpointStatusDetails"?: string;
}

export namespace OperationsInsightsPrivateEndpointSummary {
  export function getJsonObj(obj: OperationsInsightsPrivateEndpointSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OperationsInsightsPrivateEndpointSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
