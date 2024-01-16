/**
 * Container Engine for Kubernetes API
 * API for the Container Engine for Kubernetes service. Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Container Engine for Kubernetes](/iaas/Content/ContEng/Concepts/contengoverview.htm).

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
 * The properties that define a request to update a node pool.
 */
export interface UpdateNodePoolDetails {
  /**
   * The new name for the cluster. Avoid entering confidential information.
   */
  "name"?: string;
  /**
   * The version of Kubernetes to which the nodes in the node pool should be upgraded.
   */
  "kubernetesVersion"?: string;
  /**
   * A list of key/value pairs to add to nodes after they join the Kubernetes cluster.
   */
  "initialNodeLabels"?: Array<model.KeyValue>;
  /**
   * The number of nodes to have in each subnet specified in the subnetIds property. This property is deprecated,
   * use nodeConfigDetails instead. If the current value of quantityPerSubnet is greater than 0, you can only
   * use quantityPerSubnet to scale the node pool. If the current value of quantityPerSubnet is equal to 0 and
   * the current value of size in nodeConfigDetails is greater than 0, before you can use quantityPerSubnet,
   * you must first scale the node pool to 0 nodes using nodeConfigDetails.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "quantityPerSubnet"?: number;
  /**
   * The OCIDs of the subnets in which to place nodes for this node pool. This property is deprecated,
   * use nodeConfigDetails instead. Only one of the subnetIds or nodeConfigDetails
   * properties can be specified.
   *
   */
  "subnetIds"?: Array<string>;
  /**
   * The configuration of nodes in the node pool. Only one of the subnetIds or nodeConfigDetails
   * properties should be specified. If the current value of quantityPerSubnet is greater than 0, the node
   * pool may still be scaled using quantityPerSubnet. Before you can use nodeConfigDetails,
   * you must first scale the node pool to 0 nodes using quantityPerSubnet.
   *
   */
  "nodeConfigDetails"?: model.UpdateNodePoolNodeConfigDetails;
  /**
   * A list of key/value pairs to add to each underlying OCI instance in the node pool on launch.
   */
  "nodeMetadata"?: { [key: string]: string };
  /**
   * Specify the source to use to launch nodes in the node pool. Currently, image is the only supported source.
   *
   */
  "nodeSourceDetails"?: model.NodeSourceViaImageDetails;
  /**
   * The SSH public key to add to each node in the node pool on launch.
   */
  "sshPublicKey"?: string;
  /**
   * The name of the node shape of the nodes in the node pool used on launch.
   */
  "nodeShape"?: string;
  /**
   * Specify the configuration of the shape to launch nodes in the node pool.
   *
   */
  "nodeShapeConfig"?: model.UpdateNodeShapeConfigDetails;
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

export namespace UpdateNodePoolDetails {
  export function getJsonObj(obj: UpdateNodePoolDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "initialNodeLabels": obj.initialNodeLabels
          ? obj.initialNodeLabels.map(item => {
              return model.KeyValue.getJsonObj(item);
            })
          : undefined,

        "nodeConfigDetails": obj.nodeConfigDetails
          ? model.UpdateNodePoolNodeConfigDetails.getJsonObj(obj.nodeConfigDetails)
          : undefined,

        "nodeSourceDetails": obj.nodeSourceDetails
          ? model.NodeSourceDetails.getJsonObj(obj.nodeSourceDetails)
          : undefined,

        "nodeShapeConfig": obj.nodeShapeConfig
          ? model.UpdateNodeShapeConfigDetails.getJsonObj(obj.nodeShapeConfig)
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
  export function getDeserializedJsonObj(obj: UpdateNodePoolDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "initialNodeLabels": obj.initialNodeLabels
          ? obj.initialNodeLabels.map(item => {
              return model.KeyValue.getDeserializedJsonObj(item);
            })
          : undefined,

        "nodeConfigDetails": obj.nodeConfigDetails
          ? model.UpdateNodePoolNodeConfigDetails.getDeserializedJsonObj(obj.nodeConfigDetails)
          : undefined,

        "nodeSourceDetails": obj.nodeSourceDetails
          ? model.NodeSourceDetails.getDeserializedJsonObj(obj.nodeSourceDetails)
          : undefined,

        "nodeShapeConfig": obj.nodeShapeConfig
          ? model.UpdateNodeShapeConfigDetails.getDeserializedJsonObj(obj.nodeShapeConfig)
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
