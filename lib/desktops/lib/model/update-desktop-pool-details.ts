/**
 * Secure Desktops API
 * Create and manage cloud-hosted desktops which can be accessed from a web browser or installed client.

 * OpenAPI spec version: 20220618
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
 * Provides the details of a request to update the desktop pool.
 */
export interface UpdateDesktopPoolDetails {
  /**
   * A user friendly display name. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * A user friendly description providing additional information about the resource.
   * Avoid entering confidential information.
   *
   */
  "description"?: string;
  /**
   * The maximum number of desktops permitted in the desktop pool. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maximumSize"?: number;
  /**
   * The maximum number of standby desktops available in the desktop pool. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "standbySize"?: number;
  "devicePolicy"?: model.DesktopDevicePolicy;
  "availabilityPolicy"?: model.DesktopAvailabilityPolicy;
  /**
   * Contact information of the desktop pool administrator.
   * Avoid entering confidential information.
   *
   */
  "contactDetails"?: string;
  /**
   * The start time of the desktop pool.
   */
  "timeStartScheduled"?: Date;
  /**
   * The stop time of the desktop pool.
   */
  "timeStopScheduled"?: Date;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  "sessionLifecycleActions"?: model.UpdateDesktopPoolDesktopSessionLifecycleActions;
}

export namespace UpdateDesktopPoolDetails {
  export function getJsonObj(obj: UpdateDesktopPoolDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "devicePolicy": obj.devicePolicy
          ? model.DesktopDevicePolicy.getJsonObj(obj.devicePolicy)
          : undefined,
        "availabilityPolicy": obj.availabilityPolicy
          ? model.DesktopAvailabilityPolicy.getJsonObj(obj.availabilityPolicy)
          : undefined,

        "sessionLifecycleActions": obj.sessionLifecycleActions
          ? model.UpdateDesktopPoolDesktopSessionLifecycleActions.getJsonObj(
              obj.sessionLifecycleActions
            )
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateDesktopPoolDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "devicePolicy": obj.devicePolicy
          ? model.DesktopDevicePolicy.getDeserializedJsonObj(obj.devicePolicy)
          : undefined,
        "availabilityPolicy": obj.availabilityPolicy
          ? model.DesktopAvailabilityPolicy.getDeserializedJsonObj(obj.availabilityPolicy)
          : undefined,

        "sessionLifecycleActions": obj.sessionLifecycleActions
          ? model.UpdateDesktopPoolDesktopSessionLifecycleActions.getDeserializedJsonObj(
              obj.sessionLifecycleActions
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
