/**
 * Fleet Application Management Service API
 * Fleet Application Management Service API. Use this API to for all FAMS related activities.
To manage fleets,view complaince report for the Fleet,scedule patches and other lifecycle activities

 * OpenAPI spec version: 20230831
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
 * The information about new Fleet.
 */
export interface CreateFleetDetails {
  /**
    * A user-friendly name. Does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
Example: {@code My new resource}
* 
    */
  "displayName"?: string;
  /**
   * A user-friendly description. To provide some insight about the resource.
   * Avoid entering confidential information.
   *
   */
  "description"?: string;
  /**
   * Tenancy OCID
   */
  "compartmentId": string;
  /**
   * Type of the Fleet
   */
  "fleetType": string;
  /**
   * Products associated with the Fleet
   */
  "products"?: Array<string>;
  /**
   * Application Type associated with the Fleet.Applicable for Environment fleet types.
   */
  "applicationType"?: string;
  /**
   * Environment Type associated with the Fleet.Applicable for Environment fleet types.
   */
  "environmentType"?: string;
  /**
   * Group Type associated with Group Fleet.Applicable for Group fleet types.
   */
  "groupType"?: string;
  /**
   * Type of resource selection in a fleet
   */
  "resourceSelectionType"?: string;
  "ruleSelectionCriteria"?: model.SelectionCriteria;
  "notificationPreferences"?: model.NotificationPreferences;
  /**
   * Resources to be added during fleet creation when Resource selection type is Manual.
   */
  "resources"?: Array<model.AssociatedFleetResourceDetails>;
  /**
   * A value which represents if auto confirming of the targets can be enabled
   */
  "isTargetAutoConfirm"?: boolean;
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

export namespace CreateFleetDetails {
  export function getJsonObj(obj: CreateFleetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "ruleSelectionCriteria": obj.ruleSelectionCriteria
          ? model.SelectionCriteria.getJsonObj(obj.ruleSelectionCriteria)
          : undefined,
        "notificationPreferences": obj.notificationPreferences
          ? model.NotificationPreferences.getJsonObj(obj.notificationPreferences)
          : undefined,
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.AssociatedFleetResourceDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateFleetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "ruleSelectionCriteria": obj.ruleSelectionCriteria
          ? model.SelectionCriteria.getDeserializedJsonObj(obj.ruleSelectionCriteria)
          : undefined,
        "notificationPreferences": obj.notificationPreferences
          ? model.NotificationPreferences.getDeserializedJsonObj(obj.notificationPreferences)
          : undefined,
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.AssociatedFleetResourceDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
