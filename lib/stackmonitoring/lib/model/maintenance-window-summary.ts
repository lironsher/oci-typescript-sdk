/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * General information of a Maintenance Window
 */
export interface MaintenanceWindowSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of maintenance window.
   *
   */
  "id": string;
  /**
   * Maintenance Window name.
   */
  "name": string;
  /**
   * Compartment Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   *
   */
  "compartmentId"?: string;
  /**
   * Number of resources of the Maintenance window.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numberOfResources"?: number;
  /**
   * Lifecycle state of the monitored resource.
   */
  "lifecycleState"?: model.MaintenanceWindowLifecycleState;
  /**
   * Lifecycle Details of the Maintenance Window.
   */
  "lifecycleDetails"?: model.MaintenanceWindowLifecycleDetails;
  /**
   * The name of the most recent operation of the Maintenance window.
   *
   */
  "operationType"?: model.MaintenanceWindowOperationType;
  /**
   * Status of the most recent operation of the Maintenance Window.
   *
   */
  "operationStatus"?: model.MaintenanceWindowOperationStatus;
  "schedule"?: model.RecurrentMaintenanceWindowSchedule | model.OneTimeMaintenanceWindowSchedule;
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
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace MaintenanceWindowSummary {
  export function getJsonObj(obj: MaintenanceWindowSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "schedule": obj.schedule
          ? model.MaintenanceWindowSchedule.getJsonObj(obj.schedule)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MaintenanceWindowSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "schedule": obj.schedule
          ? model.MaintenanceWindowSchedule.getDeserializedJsonObj(obj.schedule)
          : undefined
      }
    };

    return jsonObj;
  }
}
