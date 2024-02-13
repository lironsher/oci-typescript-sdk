/**
 * Resource Manager API
 * Use the Resource Manager API to automate deployment and operations for all Oracle Cloud Infrastructure resources.
Using the infrastructure-as-code (IaC) model, the service is based on Terraform, an open source industry standard that lets DevOps engineers develop and deploy their infrastructure anywhere.
For more information, see
[the Resource Manager documentation](/iaas/Content/ResourceManager/home.htm).

 * OpenAPI spec version: 20180917
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
 * Job details that are specific to the operation type.
 *
 */
export interface JobOperationDetails {
  "operation": string;
}

export namespace JobOperationDetails {
  export function getJsonObj(obj: JobOperationDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "operation" in obj && obj.operation) {
      switch (obj.operation) {
        case "IMPORT_TF_STATE":
          return model.ImportTfStateJobOperationDetails.getJsonObj(
            <model.ImportTfStateJobOperationDetails>(<object>jsonObj),
            true
          );
        case "PLAN":
          return model.PlanJobOperationDetails.getJsonObj(
            <model.PlanJobOperationDetails>(<object>jsonObj),
            true
          );
        case "APPLY_ROLLBACK":
          return model.ApplyRollbackJobOperationDetails.getJsonObj(
            <model.ApplyRollbackJobOperationDetails>(<object>jsonObj),
            true
          );
        case "PLAN_ROLLBACK":
          return model.PlanRollbackJobOperationDetails.getJsonObj(
            <model.PlanRollbackJobOperationDetails>(<object>jsonObj),
            true
          );
        case "APPLY":
          return model.ApplyJobOperationDetails.getJsonObj(
            <model.ApplyJobOperationDetails>(<object>jsonObj),
            true
          );
        case "DESTROY":
          return model.DestroyJobOperationDetails.getJsonObj(
            <model.DestroyJobOperationDetails>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.operation}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JobOperationDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "operation" in obj && obj.operation) {
      switch (obj.operation) {
        case "IMPORT_TF_STATE":
          return model.ImportTfStateJobOperationDetails.getDeserializedJsonObj(
            <model.ImportTfStateJobOperationDetails>(<object>jsonObj),
            true
          );
        case "PLAN":
          return model.PlanJobOperationDetails.getDeserializedJsonObj(
            <model.PlanJobOperationDetails>(<object>jsonObj),
            true
          );
        case "APPLY_ROLLBACK":
          return model.ApplyRollbackJobOperationDetails.getDeserializedJsonObj(
            <model.ApplyRollbackJobOperationDetails>(<object>jsonObj),
            true
          );
        case "PLAN_ROLLBACK":
          return model.PlanRollbackJobOperationDetails.getDeserializedJsonObj(
            <model.PlanRollbackJobOperationDetails>(<object>jsonObj),
            true
          );
        case "APPLY":
          return model.ApplyJobOperationDetails.getDeserializedJsonObj(
            <model.ApplyJobOperationDetails>(<object>jsonObj),
            true
          );
        case "DESTROY":
          return model.DestroyJobOperationDetails.getDeserializedJsonObj(
            <model.DestroyJobOperationDetails>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.operation}`);
      }
    }
    return jsonObj;
  }
}
