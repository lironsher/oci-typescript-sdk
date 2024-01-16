/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

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
 * Summary of a Enterprise Manager bridge resource.
 */
export interface EnterpriseManagerBridgeSummary {
  /**
   * Enterprise Manager bridge identifier
   */
  "id": string;
  /**
   * Compartment identifier of the Enterprise Manager bridge
   */
  "compartmentId": string;
  /**
   * User-friedly name of Enterprise Manager Bridge that does not have to be unique.
   */
  "displayName": string;
  /**
   * Object Storage Namespace Name
   */
  "objectStorageNamespaceName": string;
  /**
   * Object Storage Bucket Name
   */
  "objectStorageBucketName": string;
  /**
   * A message describing status of the object storage bucket of this resource. For example, it can be used to provide actionable information about the permission and content validity of the bucket.
   */
  "objectStorageBucketStatusDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags": { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The time the the Enterprise Manager bridge was first created. An RFC3339 formatted datetime string
   */
  "timeCreated": Date;
  /**
   * The time the Enterprise Manager bridge was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the Enterprise Manager bridge.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
}

export namespace EnterpriseManagerBridgeSummary {
  export function getJsonObj(obj: EnterpriseManagerBridgeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EnterpriseManagerBridgeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
