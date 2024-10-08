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
 * The properties that define a work request resource.
 */
export interface AddonVersions {
  /**
   * Current state of the addon, only active will be visible to customer, visibility of versions in other status will be filtered  based on limits property.
   */
  "status"?: AddonVersions.Status;
  /**
   * Version number, need be comparable within an addon.
   */
  "versionNumber"?: string;
  /**
   * Information about the addon version.
   */
  "description"?: string;
  /**
   * The range of kubernetes versions an addon can be configured.
   */
  "kubernetesVersionFilters"?: model.KubernetesVersionsFilters;
  /**
   * Addon version configuration details.
   */
  "configurations"?: Array<model.AddonVersionConfiguration>;
}

export namespace AddonVersions {
  export enum Status {
    Active = "ACTIVE",
    Deprecated = "DEPRECATED",
    Preview = "PREVIEW",
    Recalled = "RECALLED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AddonVersions): object {
    const jsonObj = {
      ...obj,
      ...{
        "kubernetesVersionFilters": obj.kubernetesVersionFilters
          ? model.KubernetesVersionsFilters.getJsonObj(obj.kubernetesVersionFilters)
          : undefined,
        "configurations": obj.configurations
          ? obj.configurations.map(item => {
              return model.AddonVersionConfiguration.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AddonVersions): object {
    const jsonObj = {
      ...obj,
      ...{
        "kubernetesVersionFilters": obj.kubernetesVersionFilters
          ? model.KubernetesVersionsFilters.getDeserializedJsonObj(obj.kubernetesVersionFilters)
          : undefined,
        "configurations": obj.configurations
          ? obj.configurations.map(item => {
              return model.AddonVersionConfiguration.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
