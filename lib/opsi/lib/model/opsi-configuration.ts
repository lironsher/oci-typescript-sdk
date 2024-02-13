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
 * OPSI configuration.
 */
export interface OpsiConfiguration {
  /**
   * [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of OPSI configuration resource.
   *
   */
  "id"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId"?: string;
  /**
   * User-friendly display name for the OPSI configuration. The name does not have to be unique.
   */
  "displayName"?: string;
  /**
   * Description of OPSI configuration.
   */
  "description"?: string;
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
   * The time at which the resource was first created. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * The time at which the resource was last updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * OPSI configuration resource lifecycle state.
   */
  "lifecycleState"?: model.OpsiConfigurationLifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * Array of configuration item summary objects.
   */
  "configItems"?: Array<model.OpsiConfigurationConfigurationItemSummary>;

  "opsiConfigType": string;
}

export namespace OpsiConfiguration {
  export function getJsonObj(obj: OpsiConfiguration): object {
    const jsonObj = {
      ...obj,
      ...{
        "configItems": obj.configItems
          ? obj.configItems.map(item => {
              return model.OpsiConfigurationConfigurationItemSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "opsiConfigType" in obj && obj.opsiConfigType) {
      switch (obj.opsiConfigType) {
        case "UX_CONFIGURATION":
          return model.OpsiUxConfiguration.getJsonObj(
            <model.OpsiUxConfiguration>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.opsiConfigType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OpsiConfiguration): object {
    const jsonObj = {
      ...obj,
      ...{
        "configItems": obj.configItems
          ? obj.configItems.map(item => {
              return model.OpsiConfigurationConfigurationItemSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "opsiConfigType" in obj && obj.opsiConfigType) {
      switch (obj.opsiConfigType) {
        case "UX_CONFIGURATION":
          return model.OpsiUxConfiguration.getDeserializedJsonObj(
            <model.OpsiUxConfiguration>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.opsiConfigType}`);
      }
    }
    return jsonObj;
  }
}
