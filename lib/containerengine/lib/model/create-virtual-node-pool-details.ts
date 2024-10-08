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
 * The properties that define a request to create a virtual node pool.
 */
export interface CreateVirtualNodePoolDetails {
  /**
   * Compartment of the virtual node pool.
   */
  "compartmentId": string;
  /**
   * The cluster the virtual node pool is associated with. A virtual node pool can only be associated with one cluster.
   */
  "clusterId": string;
  /**
   * Display name of the virtual node pool. This is a non-unique value.
   */
  "displayName": string;
  /**
   * Initial labels that will be added to the Kubernetes Virtual Node object when it registers.
   */
  "initialVirtualNodeLabels"?: Array<model.InitialVirtualNodeLabel>;
  /**
   * A taint is a collection of <key, value, effect>. These taints will be applied to the Virtual Nodes of this Virtual Node Pool for Kubernetes scheduling.
   */
  "taints"?: Array<model.Taint>;
  /**
   * The number of Virtual Nodes that should be in the Virtual Node Pool. The placement configurations determine where these virtual nodes are placed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "size"?: number;
  /**
   * The list of placement configurations which determines where Virtual Nodes will be provisioned across as it relates to the subnet and availability domains. The size attribute determines how many we evenly spread across these placement configurations
   */
  "placementConfigurations": Array<model.PlacementConfiguration>;
  /**
   * List of network security group id's applied to the Virtual Node VNIC.
   */
  "nsgIds"?: Array<string>;
  /**
   * The pod configuration for pods run on virtual nodes of this virtual node pool.
   */
  "podConfiguration"?: model.PodConfiguration;
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
  "virtualNodeTags"?: model.VirtualNodeTags;
}

export namespace CreateVirtualNodePoolDetails {
  export function getJsonObj(obj: CreateVirtualNodePoolDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "initialVirtualNodeLabels": obj.initialVirtualNodeLabels
          ? obj.initialVirtualNodeLabels.map(item => {
              return model.InitialVirtualNodeLabel.getJsonObj(item);
            })
          : undefined,
        "taints": obj.taints
          ? obj.taints.map(item => {
              return model.Taint.getJsonObj(item);
            })
          : undefined,

        "placementConfigurations": obj.placementConfigurations
          ? obj.placementConfigurations.map(item => {
              return model.PlacementConfiguration.getJsonObj(item);
            })
          : undefined,

        "podConfiguration": obj.podConfiguration
          ? model.PodConfiguration.getJsonObj(obj.podConfiguration)
          : undefined,

        "virtualNodeTags": obj.virtualNodeTags
          ? model.VirtualNodeTags.getJsonObj(obj.virtualNodeTags)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateVirtualNodePoolDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "initialVirtualNodeLabels": obj.initialVirtualNodeLabels
          ? obj.initialVirtualNodeLabels.map(item => {
              return model.InitialVirtualNodeLabel.getDeserializedJsonObj(item);
            })
          : undefined,
        "taints": obj.taints
          ? obj.taints.map(item => {
              return model.Taint.getDeserializedJsonObj(item);
            })
          : undefined,

        "placementConfigurations": obj.placementConfigurations
          ? obj.placementConfigurations.map(item => {
              return model.PlacementConfiguration.getDeserializedJsonObj(item);
            })
          : undefined,

        "podConfiguration": obj.podConfiguration
          ? model.PodConfiguration.getDeserializedJsonObj(obj.podConfiguration)
          : undefined,

        "virtualNodeTags": obj.virtualNodeTags
          ? model.VirtualNodeTags.getDeserializedJsonObj(obj.virtualNodeTags)
          : undefined
      }
    };

    return jsonObj;
  }
}
