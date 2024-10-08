/**
 * Kubernetes Engine API
 * API for the Kubernetes Engine service (also known as the Container Engine for Kubernetes service). Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Kubernetes Engine](/iaas/Content/ContEng/Concepts/contengoverview.htm).

 * OpenAPI spec version: 20180222
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
 * The properties that define addon summary.
 */
export interface AddonOptionSummary {
  /**
   * Name of the addon and it would be unique.
   */
  "name": string;
  /**
   * Addon definition schema version to validate addon.
   */
  "addonSchemaVersion"?: string;
  /**
   * Addon group info, a namespace concept that groups addons with similar functionalities.
   */
  "addonGroup"?: string;
  /**
   * The life cycle state of the addon.
   */
  "lifecycleState": AddonOptionSummary.LifecycleState;
  /**
   * Description on the addon.
   */
  "description"?: string;
  /**
   * Is it an essential addon for cluster operation or not.
   */
  "isEssential": boolean;
  /**
   * The resources this work request affects.
   */
  "versions": Array<model.AddonVersions>;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
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
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The time the work request was created.
   */
  "timeCreated"?: Date;
}

export namespace AddonOptionSummary {
  export enum LifecycleState {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AddonOptionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "versions": obj.versions
          ? obj.versions.map(item => {
              return model.AddonVersions.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AddonOptionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "versions": obj.versions
          ? obj.versions.map(item => {
              return model.AddonVersions.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
