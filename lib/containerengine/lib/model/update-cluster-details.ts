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
 * The properties that define a request to update a cluster.
 */
export interface UpdateClusterDetails {
  /**
   * The new name for the cluster. Avoid entering confidential information.
   */
  "name"?: string;
  /**
   * The version of Kubernetes to which the cluster masters should be upgraded.
   */
  "kubernetesVersion"?: string;
  "options"?: model.UpdateClusterOptionsDetails;
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
   * The image verification policy for signature validation. Once a policy is created and enabled with
   * one or more kms keys, the policy will ensure all images deployed has been signed with the key(s)
   * attached to the policy.
   *
   */
  "imagePolicyConfig"?: model.UpdateImagePolicyConfigDetails;
  /**
   * Type of cluster
   */
  "type"?: model.ClusterType;
}

export namespace UpdateClusterDetails {
  export function getJsonObj(obj: UpdateClusterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "options": obj.options
          ? model.UpdateClusterOptionsDetails.getJsonObj(obj.options)
          : undefined,

        "imagePolicyConfig": obj.imagePolicyConfig
          ? model.UpdateImagePolicyConfigDetails.getJsonObj(obj.imagePolicyConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateClusterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "options": obj.options
          ? model.UpdateClusterOptionsDetails.getDeserializedJsonObj(obj.options)
          : undefined,

        "imagePolicyConfig": obj.imagePolicyConfig
          ? model.UpdateImagePolicyConfigDetails.getDeserializedJsonObj(obj.imagePolicyConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
