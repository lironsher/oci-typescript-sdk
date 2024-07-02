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
 * The information about database to be analyzed.
 */
export interface CreateDatabaseInsightDetails {
  /**
   * Compartment Identifier of database
   */
  "compartmentId": string;
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

  "entitySource": string;
}

export namespace CreateDatabaseInsightDetails {
  export function getJsonObj(obj: CreateDatabaseInsightDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entitySource" in obj && obj.entitySource) {
      switch (obj.entitySource) {
        case "EM_MANAGED_EXTERNAL_DATABASE":
          return model.CreateEmManagedExternalDatabaseInsightDetails.getJsonObj(
            <model.CreateEmManagedExternalDatabaseInsightDetails>(<object>jsonObj),
            true
          );
        case "PE_COMANAGED_DATABASE":
          return model.CreatePeComanagedDatabaseInsightDetails.getJsonObj(
            <model.CreatePeComanagedDatabaseInsightDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.entitySource}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDatabaseInsightDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entitySource" in obj && obj.entitySource) {
      switch (obj.entitySource) {
        case "EM_MANAGED_EXTERNAL_DATABASE":
          return model.CreateEmManagedExternalDatabaseInsightDetails.getDeserializedJsonObj(
            <model.CreateEmManagedExternalDatabaseInsightDetails>(<object>jsonObj),
            true
          );
        case "PE_COMANAGED_DATABASE":
          return model.CreatePeComanagedDatabaseInsightDetails.getDeserializedJsonObj(
            <model.CreatePeComanagedDatabaseInsightDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.entitySource}`);
      }
    }
    return jsonObj;
  }
}
