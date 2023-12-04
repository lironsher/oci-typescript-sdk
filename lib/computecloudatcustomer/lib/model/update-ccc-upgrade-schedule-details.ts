/**
 * Compute Cloud@Customer API
 * Use the Compute Cloud@Customer API to manage Compute Cloud@Customer infrastructures and upgrade schedules.
For more information see [Compute Cloud@Customer documentation](/iaas/compute-cloud-at-customer/home.htm).

 * OpenAPI spec version: 20221208
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Updates the schedule details, all schedule information must be entered, similar to an
 * initial schedule create. Include all events in the update.
 *
 */
export interface UpdateCccUpgradeScheduleDetails {
  /**
   * Compute Cloud@Customer upgrade schedule display name.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * An optional description of the Compute Cloud@Customer upgrade schedule.
   * Avoid entering confidential information.
   *
   */
  "description"?: string;
  /**
   * List of preferred times for a Compute Cloud@Customer infrastructure to be upgraded.
   *
   */
  "events"?: Array<model.UpdateCccScheduleEvent>;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateCccUpgradeScheduleDetails {
  export function getJsonObj(obj: UpdateCccUpgradeScheduleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "events": obj.events
          ? obj.events.map(item => {
              return model.UpdateCccScheduleEvent.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateCccUpgradeScheduleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "events": obj.events
          ? obj.events.map(item => {
              return model.UpdateCccScheduleEvent.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
