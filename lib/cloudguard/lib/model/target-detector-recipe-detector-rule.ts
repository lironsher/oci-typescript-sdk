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
* A TargetDetectorRecipeDetectorRule resource contains a specific instance of a
* single detector rule in one of the supported detector types (for example,
* activity, configuration, or threat).
* <p>
A TargetDetectorRecipeDetectorRule resource:
* * Is effectively a copy of a DetectorRecipeRule resource (made when
* a detector recipe is attached to a target) in which users can make
* certain changes if it\u2019s Oracle-managed, and other changes if it\u2019s user-managed.
* * Is visible on the Cloud Guard Targets, Target Details page.
* * Is effectively located in a specific OCI compartment, through the
* ThreatDetectorRecipe resource to which it belongs.
* * Can be modified by users, programmatically or through the UI.
* * Changes that can be made here apply locally, to resources in OCI compartments
* mapped to the target that attaches the associated detector recipe
* (in a TargetDetectorRecipe resource), and override any changes made in rules
* associated with the corresponding DetectorRecipe resource.
* 
*/
export interface TargetDetectorRecipeDetectorRule {
  /**
   * The unique identifier of the detector rule
   */
  "detectorRuleId": string;
  /**
   * Display name for TargetDetectorRecipeDetectorRule resource
   */
  "displayName"?: string;
  /**
   * Description for TargetDetectorRecipeDetectorRule resource
   */
  "description"?: string;
  /**
   * Recommendation for TargetDetectorRecipeDetectorRule resource
   */
  "recommendation"?: string;
  /**
   * Detector type for the rule
   */
  "detector": model.DetectorEnum;
  /**
   * Service type of the configuration to which the rule is applied
   */
  "serviceType": string;
  /**
    * The type of resource which is monitored by the detector rule.
* For example, Instance, Database, VCN, Policy. To find the resource type for a
* particular rule, see [Detector Recipe Reference]
* (/iaas/cloud-guard/using/detect-recipes.htm#detect-recipes-reference).
* <p>
Or try [Detector Recipe Reference]
* (/cloud-guard/using/detect-recipes.htm#detect-recipes-reference).
* 
    */
  "resourceType": string;
  "details"?: model.TargetDetectorDetails;
  /**
   * List of managed list types related to this rule
   */
  "managedListTypes"?: Array<TargetDetectorRecipeDetectorRule.ManagedListTypes>;
  /**
   * The date and time the target detector recipe rule was created. Format defined by RFC3339.
   */
  "timeCreated"?: Date;
  /**
   * The date and time the target detector recipe rule was last updated. Format defined by RFC3339.
   */
  "timeUpdated"?: Date;
  /**
   * The current lifecycle state of the detector rule
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * The ID of the attached data source
   */
  "dataSourceId"?: string;
  /**
   * Data source entities mapping for a detector rule
   */
  "entitiesMappings"?: Array<model.EntitiesMapping>;
  /**
   * Locks associated with this resource.
   */
  "locks"?: Array<model.ResourceLock>;
}

export namespace TargetDetectorRecipeDetectorRule {
  export enum ManagedListTypes {
    CidrBlock = "CIDR_BLOCK",
    Users = "USERS",
    Groups = "GROUPS",
    Ipv4Address = "IPV4ADDRESS",
    Ipv6Address = "IPV6ADDRESS",
    ResourceOcid = "RESOURCE_OCID",
    Region = "REGION",
    Country = "COUNTRY",
    State = "STATE",
    City = "CITY",
    Tags = "TAGS",
    Generic = "GENERIC",
    FusionAppsRole = "FUSION_APPS_ROLE",
    FusionAppsPermission = "FUSION_APPS_PERMISSION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TargetDetectorRecipeDetectorRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "details": obj.details ? model.TargetDetectorDetails.getJsonObj(obj.details) : undefined,

        "entitiesMappings": obj.entitiesMappings
          ? obj.entitiesMappings.map(item => {
              return model.EntitiesMapping.getJsonObj(item);
            })
          : undefined,
        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.ResourceLock.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TargetDetectorRecipeDetectorRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "details": obj.details
          ? model.TargetDetectorDetails.getDeserializedJsonObj(obj.details)
          : undefined,

        "entitiesMappings": obj.entitiesMappings
          ? obj.entitiesMappings.map(item => {
              return model.EntitiesMapping.getDeserializedJsonObj(item);
            })
          : undefined,
        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.ResourceLock.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
