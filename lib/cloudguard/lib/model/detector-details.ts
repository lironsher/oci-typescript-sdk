/**
 * Cloud Guard and Security Zones API
 * Use the Cloud Guard and Security Zones API to automate processes that you would otherwise perform through the Cloud Guard Console or the Security Zones Console. For more information on these services, see the [Cloud Guard](/iaas/cloud-guard/home.htm) and [Security Zones](/iaas/security-zone/home.htm) documentation.

**Note:** For Cloud Guard, you can perform Create, Update, and Delete operations only from the reporting region of your Cloud Guard tenancy. You can perform Read operations from any region.

 * OpenAPI spec version: 20200131
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
 * Detailed information for a detector.
 */
export interface DetectorDetails {
  /**
   * Enablement status for the rule
   */
  "isEnabled": boolean;
  /**
   * The risk level for the rule
   */
  "riskLevel"?: model.RiskLevel;
  /**
   * List of detector rule configurations
   */
  "configurations"?: Array<model.DetectorConfiguration>;
  "condition"?: model.SimpleCondition | model.CompositeCondition;
  /**
   * User-defined labels for a detector rule
   */
  "labels"?: Array<string>;
  /**
   * Can the rule be configured?
   */
  "isConfigurationAllowed"?: boolean;
  /**
   * The point at which an elevated resource risk score creates a problem Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "problemThreshold"?: number;
  /**
   * List of target types for which the detector rule is applicable
   */
  "targetTypes"?: Array<string>;
  /**
   * List of sighting types
   */
  "sightingTypes"?: Array<model.SightingType>;
  /**
   * Description for detector recipe detector rule
   */
  "description"?: string;
  /**
   * Recommendation for detector recipe detector rule
   */
  "recommendation"?: string;
  /**
   * The ID of the attached data source
   */
  "dataSourceId"?: string;
  /**
   * Data source entities mapping for a detector rule
   */
  "entitiesMappings"?: Array<model.EntitiesMapping>;
}

export namespace DetectorDetails {
  export function getJsonObj(obj: DetectorDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configurations": obj.configurations
          ? obj.configurations.map(item => {
              return model.DetectorConfiguration.getJsonObj(item);
            })
          : undefined,
        "condition": obj.condition ? model.Condition.getJsonObj(obj.condition) : undefined,

        "sightingTypes": obj.sightingTypes
          ? obj.sightingTypes.map(item => {
              return model.SightingType.getJsonObj(item);
            })
          : undefined,

        "entitiesMappings": obj.entitiesMappings
          ? obj.entitiesMappings.map(item => {
              return model.EntitiesMapping.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DetectorDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configurations": obj.configurations
          ? obj.configurations.map(item => {
              return model.DetectorConfiguration.getDeserializedJsonObj(item);
            })
          : undefined,
        "condition": obj.condition
          ? model.Condition.getDeserializedJsonObj(obj.condition)
          : undefined,

        "sightingTypes": obj.sightingTypes
          ? obj.sightingTypes.map(item => {
              return model.SightingType.getDeserializedJsonObj(item);
            })
          : undefined,

        "entitiesMappings": obj.entitiesMappings
          ? obj.entitiesMappings.map(item => {
              return model.EntitiesMapping.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
