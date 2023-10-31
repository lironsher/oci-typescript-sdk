/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
* A configuration item that, for example defines whether resources of a specific type 
* should be discovered automatically. 
* <p>
In this case, the 'configType' is set to 'AUTO_PROMOTE' and additional fields like
* 'resourceType' and 'isEnabled' determine if such resources are to be discovered
* automatically (also referred to as 'Automatic Promotion').
* 
*/
export interface Config {
  /**
   * The Unique Oracle ID (OCID) that is immutable on creation.
   */
  "id": string;
  /**
   * The OCID of the compartment containing the configuration.
   */
  "compartmentId": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The time the configuration was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time the Config was updated.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the configuration.
   */
  "lifecycleState": Config.LifecycleState;
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
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };

  "configType": string;
}

export namespace Config {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Config): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "configType" in obj && obj.configType) {
      switch (obj.configType) {
        case "LICENSE_ENTERPRISE_EXTENSIBILITY":
          return model.LicenseEnterpriseExtensibilityConfigDetails.getJsonObj(
            <model.LicenseEnterpriseExtensibilityConfigDetails>(<object>jsonObj),
            true
          );
        case "LICENSE_AUTO_ASSIGN":
          return model.LicenseAutoAssignConfigDetails.getJsonObj(
            <model.LicenseAutoAssignConfigDetails>(<object>jsonObj),
            true
          );
        case "AUTO_PROMOTE":
          return model.AutoPromoteConfigDetails.getJsonObj(
            <model.AutoPromoteConfigDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.configType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Config): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "configType" in obj && obj.configType) {
      switch (obj.configType) {
        case "LICENSE_ENTERPRISE_EXTENSIBILITY":
          return model.LicenseEnterpriseExtensibilityConfigDetails.getDeserializedJsonObj(
            <model.LicenseEnterpriseExtensibilityConfigDetails>(<object>jsonObj),
            true
          );
        case "LICENSE_AUTO_ASSIGN":
          return model.LicenseAutoAssignConfigDetails.getDeserializedJsonObj(
            <model.LicenseAutoAssignConfigDetails>(<object>jsonObj),
            true
          );
        case "AUTO_PROMOTE":
          return model.AutoPromoteConfigDetails.getDeserializedJsonObj(
            <model.AutoPromoteConfigDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.configType}`);
      }
    }
    return jsonObj;
  }
}
