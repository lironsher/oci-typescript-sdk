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
 * The properties that define to install/enable addon on a cluster
 */
export interface InstallAddonDetails {
  /**
   * The name of the addon.
   */
  "addonName": string;
  /**
   * The version of addon to be installed.
   */
  "version"?: string;
  /**
   * Addon configuration details.
   */
  "configurations"?: Array<model.AddonConfiguration>;
}

export namespace InstallAddonDetails {
  export function getJsonObj(obj: InstallAddonDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configurations": obj.configurations
          ? obj.configurations.map(item => {
              return model.AddonConfiguration.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstallAddonDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configurations": obj.configurations
          ? obj.configurations.map(item => {
              return model.AddonConfiguration.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
