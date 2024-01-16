/**
 * OS Management API
 * API for the OS Management service. Use these API operations for working
with Managed instances and Managed instance groups.

 * OpenAPI spec version: 20190801
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
 * Information for updating a Scheduled Job
 */
export interface UpdateScheduledJobDetails {
  /**
   * Scheduled Job name
   */
  "displayName"?: string;
  /**
   * Details describing the Scheduled Job.
   */
  "description"?: string;
  /**
   * the type of scheduling this Scheduled Job follows
   */
  "scheduleType"?: model.ScheduleTypes;
  /**
   * the desired time for the next execution of this Scheduled Job
   */
  "timeNextExecution"?: Date;
  /**
   * the interval period for a recurring Scheduled Job (only if schedule type is RECURRING)
   */
  "intervalType"?: model.IntervalTypes;
  /**
   * the value for the interval period for a recurring Scheduled Job (only if schedule type is RECURRING)
   */
  "intervalValue"?: string;
  /**
   * the type of operation this Scheduled Job performs
   */
  "operationType"?: model.OperationTypes;
  /**
   * Type of the update (only if operation type is UPDATEALL)
   */
  "updateType"?: model.PackageUpdateTypes;
  /**
   * the id of the package (only if operation type is INSTALL/UPDATE/REMOVE)
   */
  "packageNames"?: Array<model.PackageName>;
  /**
   * The unique names of the Windows Updates (only if operation type is INSTALL).
   * This is only applicable when the osFamily is for Windows managed instances.
   *
   */
  "updateNames"?: Array<string>;
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
}

export namespace UpdateScheduledJobDetails {
  export function getJsonObj(obj: UpdateScheduledJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "packageNames": obj.packageNames
          ? obj.packageNames.map(item => {
              return model.PackageName.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateScheduledJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "packageNames": obj.packageNames
          ? obj.packageNames.map(item => {
              return model.PackageName.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
