/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Specifies the canary approval stage.
 */
export interface ComputeInstanceGroupCanaryApprovalDeployStage extends model.DeployStage {
  /**
   * A compute instance group canary traffic shift stage OCID for load balancer.
   */
  "computeInstanceGroupCanaryTrafficShiftDeployStageId": string;
  "approvalPolicy": model.CountBasedApprovalPolicy;

  "deployStageType": string;
}

export namespace ComputeInstanceGroupCanaryApprovalDeployStage {
  export function getJsonObj(
    obj: ComputeInstanceGroupCanaryApprovalDeployStage,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeployStage.getJsonObj(obj) as ComputeInstanceGroupCanaryApprovalDeployStage)),
      ...{
        "approvalPolicy": obj.approvalPolicy
          ? model.ApprovalPolicy.getJsonObj(obj.approvalPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
  export const deployStageType = "COMPUTE_INSTANCE_GROUP_CANARY_APPROVAL";
  export function getDeserializedJsonObj(
    obj: ComputeInstanceGroupCanaryApprovalDeployStage,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DeployStage.getDeserializedJsonObj(
            obj
          ) as ComputeInstanceGroupCanaryApprovalDeployStage)),
      ...{
        "approvalPolicy": obj.approvalPolicy
          ? model.ApprovalPolicy.getDeserializedJsonObj(obj.approvalPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
}
