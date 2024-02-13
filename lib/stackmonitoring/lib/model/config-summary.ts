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
 * Summary of the configuration.
 */
export interface ConfigSummary {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Compartment Identifier.
   */
  "compartmentId": string;
  /**
   * Config Identifier, can be renamed.
   */
  "displayName"?: string;
  /**
   * The time the the configuration was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time the configuration was updated.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the configuration.
   */
  "lifecycleState": string;
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

  "configType": string;
}

export namespace ConfigSummary {
  export function getJsonObj(obj: ConfigSummary): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "configType" in obj && obj.configType) {
      switch (obj.configType) {
        case "AUTO_PROMOTE":
          return model.AutoPromoteConfigSummary.getJsonObj(
            <model.AutoPromoteConfigSummary>(<object>jsonObj),
            true
          );
        case "LICENSE_AUTO_ASSIGN":
          return model.LicenseAutoAssignConfigSummary.getJsonObj(
            <model.LicenseAutoAssignConfigSummary>(<object>jsonObj),
            true
          );
        case "LICENSE_ENTERPRISE_EXTENSIBILITY":
          return model.LicenseEnterpriseExtensibilityConfigSummary.getJsonObj(
            <model.LicenseEnterpriseExtensibilityConfigSummary>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.configType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConfigSummary): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "configType" in obj && obj.configType) {
      switch (obj.configType) {
        case "AUTO_PROMOTE":
          return model.AutoPromoteConfigSummary.getDeserializedJsonObj(
            <model.AutoPromoteConfigSummary>(<object>jsonObj),
            true
          );
        case "LICENSE_AUTO_ASSIGN":
          return model.LicenseAutoAssignConfigSummary.getDeserializedJsonObj(
            <model.LicenseAutoAssignConfigSummary>(<object>jsonObj),
            true
          );
        case "LICENSE_ENTERPRISE_EXTENSIBILITY":
          return model.LicenseEnterpriseExtensibilityConfigSummary.getDeserializedJsonObj(
            <model.LicenseEnterpriseExtensibilityConfigSummary>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.configType}`);
      }
    }
    return jsonObj;
  }
}
