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
 * A pool of compute nodes attached to a cluster. Avoid entering confidential information.
 */
export interface NodePool {
  /**
   * The OCID of the node pool.
   */
  "id"?: string;
  /**
   * The state of the nodepool. For more information, see [Monitoring Clusters](https://docs.cloud.oracle.com/Content/ContEng/Tasks/contengmonitoringclusters.htm)
   */
  "lifecycleState"?: model.NodePoolLifecycleState;
  /**
   * Details about the state of the nodepool.
   */
  "lifecycleDetails"?: string;
  /**
   * The OCID of the compartment in which the node pool exists.
   */
  "compartmentId"?: string;
  /**
   * The OCID of the cluster to which this node pool is attached.
   */
  "clusterId"?: string;
  /**
   * The name of the node pool.
   */
  "name"?: string;
  /**
   * The version of Kubernetes running on the nodes in the node pool.
   */
  "kubernetesVersion"?: string;
  /**
   * A list of key/value pairs to add to each underlying OCI instance in the node pool on launch.
   */
  "nodeMetadata"?: { [key: string]: string };
  /**
   * Deprecated. see {@code nodeSource}. The OCID of the image running on the nodes in the node pool.
   *
   */
  "nodeImageId"?: string;
  /**
   * Deprecated. see {@code nodeSource}. The name of the image running on the nodes in the node pool.
   *
   */
  "nodeImageName"?: string;
  /**
   * The shape configuration of the nodes.
   */
  "nodeShapeConfig"?: model.NodeShapeConfig;
  /**
   * Deprecated. see {@code nodeSourceDetails}. Source running on the nodes in the node pool.
   */
  "nodeSource"?: model.NodeSourceViaImageOption;
  /**
   * Source running on the nodes in the node pool.
   */
  "nodeSourceDetails"?: model.NodeSourceViaImageDetails;
  /**
   * The name of the node shape of the nodes in the node pool.
   */
  "nodeShape"?: string;
  /**
   * A list of key/value pairs to add to nodes after they join the Kubernetes cluster.
   */
  "initialNodeLabels"?: Array<model.KeyValue>;
  /**
   * The SSH public key on each node in the node pool on launch.
   */
  "sshPublicKey"?: string;
  /**
   * The number of nodes in each subnet. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "quantityPerSubnet"?: number;
  /**
   * The OCIDs of the subnets in which to place nodes for this node pool.
   */
  "subnetIds"?: Array<string>;
  /**
   * The nodes in the node pool.
   */
  "nodes"?: Array<model.Node>;
  /**
   * The configuration of nodes in the node pool.
   */
  "nodeConfigDetails"?: model.NodePoolNodeConfigDetails;
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
  "nodeEvictionNodePoolSettings"?: model.NodeEvictionNodePoolSettings;
  "nodePoolCyclingDetails"?: model.NodePoolCyclingDetails;
}

export namespace NodePool {
  export function getJsonObj(obj: NodePool): object {
    const jsonObj = {
      ...obj,
      ...{
        "nodeShapeConfig": obj.nodeShapeConfig
          ? model.NodeShapeConfig.getJsonObj(obj.nodeShapeConfig)
          : undefined,
        "nodeSource": obj.nodeSource
          ? model.NodeSourceOption.getJsonObj(obj.nodeSource)
          : undefined,
        "nodeSourceDetails": obj.nodeSourceDetails
          ? model.NodeSourceDetails.getJsonObj(obj.nodeSourceDetails)
          : undefined,

        "initialNodeLabels": obj.initialNodeLabels
          ? obj.initialNodeLabels.map(item => {
              return model.KeyValue.getJsonObj(item);
            })
          : undefined,

        "nodes": obj.nodes
          ? obj.nodes.map(item => {
              return model.Node.getJsonObj(item);
            })
          : undefined,
        "nodeConfigDetails": obj.nodeConfigDetails
          ? model.NodePoolNodeConfigDetails.getJsonObj(obj.nodeConfigDetails)
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
  export function getDeserializedJsonObj(obj: NodePool): object {
    const jsonObj = {
      ...obj,
      ...{
        "nodeShapeConfig": obj.nodeShapeConfig
          ? model.NodeShapeConfig.getDeserializedJsonObj(obj.nodeShapeConfig)
          : undefined,
        "nodeSource": obj.nodeSource
          ? model.NodeSourceOption.getDeserializedJsonObj(obj.nodeSource)
          : undefined,
        "nodeSourceDetails": obj.nodeSourceDetails
          ? model.NodeSourceDetails.getDeserializedJsonObj(obj.nodeSourceDetails)
          : undefined,

        "initialNodeLabels": obj.initialNodeLabels
          ? obj.initialNodeLabels.map(item => {
              return model.KeyValue.getDeserializedJsonObj(item);
            })
          : undefined,

        "nodes": obj.nodes
          ? obj.nodes.map(item => {
              return model.Node.getDeserializedJsonObj(item);
            })
          : undefined,
        "nodeConfigDetails": obj.nodeConfigDetails
          ? model.NodePoolNodeConfigDetails.getDeserializedJsonObj(obj.nodeConfigDetails)
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
