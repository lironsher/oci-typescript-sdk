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
 * The properties that define a request to create a node pool.
 */
export interface CreateNodePoolDetails {
  /**
   * The OCID of the compartment in which the node pool exists.
   */
  "compartmentId": string;
  /**
   * The OCID of the cluster to which this node pool is attached.
   */
  "clusterId": string;
  /**
   * The name of the node pool. Avoid entering confidential information.
   */
  "name": string;
  /**
   * The version of Kubernetes to install on the nodes in the node pool.
   */
  "kubernetesVersion"?: string;
  /**
   * A list of key/value pairs to add to each underlying OCI instance in the node pool on launch.
   */
  "nodeMetadata"?: { [key: string]: string };
  /**
   * Deprecated. Use {@code nodeSourceDetails} instead.
   * If you specify values for both, this value is ignored.
   * The name of the image running on the nodes in the node pool.
   *
   */
  "nodeImageName"?: string;
  /**
   * Specify the source to use to launch nodes in the node pool. Currently, image is the only supported source.
   *
   */
  "nodeSourceDetails"?: model.NodeSourceViaImageDetails;
  /**
   * The name of the node shape of the nodes in the node pool.
   */
  "nodeShape": string;
  /**
   * Specify the configuration of the shape to launch nodes in the node pool.
   *
   */
  "nodeShapeConfig"?: model.CreateNodeShapeConfigDetails;
  /**
   * A list of key/value pairs to add to nodes after they join the Kubernetes cluster.
   */
  "initialNodeLabels"?: Array<model.KeyValue>;
  /**
   * The SSH public key on each node in the node pool on launch.
   */
  "sshPublicKey"?: string;
  /**
   * Optional, default to 1. The number of nodes to create in each subnet specified in subnetIds property.
   * When used, subnetIds is required. This property is deprecated, use nodeConfigDetails instead.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "quantityPerSubnet"?: number;
  /**
   * The OCIDs of the subnets in which to place nodes for this node pool. When used, quantityPerSubnet
   * can be provided. This property is deprecated, use nodeConfigDetails. Exactly one of the
   * subnetIds or nodeConfigDetails properties must be specified.
   *
   */
  "subnetIds"?: Array<string>;
  /**
   * The configuration of nodes in the node pool. Exactly one of the
   * subnetIds or nodeConfigDetails properties must be specified.
   *
   */
  "nodeConfigDetails"?: model.CreateNodePoolNodeConfigDetails;
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
  "nodeEvictionNodePoolSettings"?: model.NodeEvictionNodePoolSettings;
  "nodePoolCyclingDetails"?: model.NodePoolCyclingDetails;
}

export namespace CreateNodePoolDetails {
  export function getJsonObj(obj: CreateNodePoolDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "nodeSourceDetails": obj.nodeSourceDetails
          ? model.NodeSourceDetails.getJsonObj(obj.nodeSourceDetails)
          : undefined,

        "nodeShapeConfig": obj.nodeShapeConfig
          ? model.CreateNodeShapeConfigDetails.getJsonObj(obj.nodeShapeConfig)
          : undefined,
        "initialNodeLabels": obj.initialNodeLabels
          ? obj.initialNodeLabels.map(item => {
              return model.KeyValue.getJsonObj(item);
            })
          : undefined,

        "nodeConfigDetails": obj.nodeConfigDetails
          ? model.CreateNodePoolNodeConfigDetails.getJsonObj(obj.nodeConfigDetails)
          : undefined,

        "nodeEvictionNodePoolSettings": obj.nodeEvictionNodePoolSettings
          ? model.NodeEvictionNodePoolSettings.getJsonObj(obj.nodeEvictionNodePoolSettings)
          : undefined,
        "nodePoolCyclingDetails": obj.nodePoolCyclingDetails
          ? model.NodePoolCyclingDetails.getJsonObj(obj.nodePoolCyclingDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateNodePoolDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "nodeSourceDetails": obj.nodeSourceDetails
          ? model.NodeSourceDetails.getDeserializedJsonObj(obj.nodeSourceDetails)
          : undefined,

        "nodeShapeConfig": obj.nodeShapeConfig
          ? model.CreateNodeShapeConfigDetails.getDeserializedJsonObj(obj.nodeShapeConfig)
          : undefined,
        "initialNodeLabels": obj.initialNodeLabels
          ? obj.initialNodeLabels.map(item => {
              return model.KeyValue.getDeserializedJsonObj(item);
            })
          : undefined,

        "nodeConfigDetails": obj.nodeConfigDetails
          ? model.CreateNodePoolNodeConfigDetails.getDeserializedJsonObj(obj.nodeConfigDetails)
          : undefined,

        "nodeEvictionNodePoolSettings": obj.nodeEvictionNodePoolSettings
          ? model.NodeEvictionNodePoolSettings.getDeserializedJsonObj(
              obj.nodeEvictionNodePoolSettings
            )
          : undefined,
        "nodePoolCyclingDetails": obj.nodePoolCyclingDetails
          ? model.NodePoolCyclingDetails.getDeserializedJsonObj(obj.nodePoolCyclingDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
