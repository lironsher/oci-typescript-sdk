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
 * The CNI type and relevant network details potentially applicable to the node pools of the cluster
 */
export interface ClusterPodNetworkOptionDetails {
  "cniType": string;
}

export namespace ClusterPodNetworkOptionDetails {
  export function getJsonObj(obj: ClusterPodNetworkOptionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "cniType" in obj && obj.cniType) {
      switch (obj.cniType) {
        case "FLANNEL_OVERLAY":
          return model.FlannelOverlayClusterPodNetworkOptionDetails.getJsonObj(
            <model.FlannelOverlayClusterPodNetworkOptionDetails>(<object>jsonObj),
            true
          );
        case "OCI_VCN_IP_NATIVE":
          return model.OciVcnIpNativeClusterPodNetworkOptionDetails.getJsonObj(
            <model.OciVcnIpNativeClusterPodNetworkOptionDetails>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.cniType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ClusterPodNetworkOptionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "cniType" in obj && obj.cniType) {
      switch (obj.cniType) {
        case "FLANNEL_OVERLAY":
          return model.FlannelOverlayClusterPodNetworkOptionDetails.getDeserializedJsonObj(
            <model.FlannelOverlayClusterPodNetworkOptionDetails>(<object>jsonObj),
            true
          );
        case "OCI_VCN_IP_NATIVE":
          return model.OciVcnIpNativeClusterPodNetworkOptionDetails.getDeserializedJsonObj(
            <model.OciVcnIpNativeClusterPodNetworkOptionDetails>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.cniType}`);
      }
    }
    return jsonObj;
  }
}
