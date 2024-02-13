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
 * Summary of an Exadata insight resource.
 */
export interface ExadataInsightSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Exadata insight resource.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The Exadata system name. If the Exadata systems managed by Enterprise Manager, the name is unique amongst the Exadata systems managed by the same Enterprise Manager.
   */
  "exadataName": string;
  /**
   * The user-friendly name for the Exadata system. The name does not have to be unique.
   */
  "exadataDisplayName"?: string;
  /**
   * Operations Insights internal representation of the the Exadata system type.
   */
  "exadataType"?: model.ExadataType;
  /**
   * Operations Insights internal representation of the the Exadata system rack type.
   */
  "exadataRackType"?: model.ExadataRackType;
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
   * Indicates the status of an Exadata insight in Operations Insights
   */
  "status": model.ResourceStatus;
  /**
   * The time the the Exadata insight was first enabled. An RFC3339 formatted datetime string
   */
  "timeCreated": Date;
  /**
   * The time the Exadata insight was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the Exadata insight.
   */
  "lifecycleState": model.ExadataInsightLifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;

  "entitySource": string;
}

export namespace ExadataInsightSummary {
  export function getJsonObj(obj: ExadataInsightSummary): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entitySource" in obj && obj.entitySource) {
      switch (obj.entitySource) {
        case "EM_MANAGED_EXTERNAL_EXADATA":
          return model.EmManagedExternalExadataInsightSummary.getJsonObj(
            <model.EmManagedExternalExadataInsightSummary>(<object>jsonObj),
            true
          );
        case "PE_COMANAGED_EXADATA":
          return model.PeComanagedExadataInsightSummary.getJsonObj(
            <model.PeComanagedExadataInsightSummary>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.entitySource}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExadataInsightSummary): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entitySource" in obj && obj.entitySource) {
      switch (obj.entitySource) {
        case "EM_MANAGED_EXTERNAL_EXADATA":
          return model.EmManagedExternalExadataInsightSummary.getDeserializedJsonObj(
            <model.EmManagedExternalExadataInsightSummary>(<object>jsonObj),
            true
          );
        case "PE_COMANAGED_EXADATA":
          return model.PeComanagedExadataInsightSummary.getDeserializedJsonObj(
            <model.PeComanagedExadataInsightSummary>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.entitySource}`);
      }
    }
    return jsonObj;
  }
}
