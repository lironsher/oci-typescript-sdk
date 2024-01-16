/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](/iaas/Content/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
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
 * The information to be updated.
 */
export interface UpdateFusionEnvironmentDetails {
  /**
   * FusionEnvironment Identifier, can be renamed
   */
  "displayName"?: string;
  /**
   * byok kms keyId
   */
  "kmsKeyId"?: string;
  "maintenancePolicy"?: model.MaintenancePolicy;
  /**
   * Language packs
   */
  "additionalLanguagePacks"?: Array<string>;
  /**
   * Network access control rules to limit internet traffic that can access the environment. For more information, see {@link #allowRule(AllowRuleRequest) allowRule}.
   */
  "rules"?: Array<model.Rule>;
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

export namespace UpdateFusionEnvironmentDetails {
  export function getJsonObj(obj: UpdateFusionEnvironmentDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "maintenancePolicy": obj.maintenancePolicy
          ? model.MaintenancePolicy.getJsonObj(obj.maintenancePolicy)
          : undefined,

        "rules": obj.rules
          ? obj.rules.map(item => {
              return model.Rule.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateFusionEnvironmentDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "maintenancePolicy": obj.maintenancePolicy
          ? model.MaintenancePolicy.getDeserializedJsonObj(obj.maintenancePolicy)
          : undefined,

        "rules": obj.rules
          ? obj.rules.map(item => {
              return model.Rule.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
