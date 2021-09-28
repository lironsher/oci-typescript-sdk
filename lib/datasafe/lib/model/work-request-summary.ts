/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Summary of a work request.
 */
export interface WorkRequestSummary {
  /**
   * The asynchronous operation tracked by this work request.
   */
  "operationType": WorkRequestSummary.OperationType;
  /**
   * The current status of the work request.
   */
  "status": WorkRequestSummary.Status;
  /**
   * The OCID of the work request.
   */
  "id": string;
  /**
   * The OCID of the compartment that contains the work request.
   *
   */
  "compartmentId": string;
  /**
   * The resources that are affected by the work request.
   */
  "resources": Array<model.WorkRequestResource>;
  /**
   * Progress of the work request in percentage. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete": number;
  /**
   * The date and time the work request was accepted, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeAccepted": Date;
  /**
   * The date and time the work request transitioned from ACCEPTED to IN_PROGRESS, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeStarted"?: Date;
  /**
   * The date and time the work request reached a terminal state, either FAILED or SUCCEEDED, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeFinished"?: Date;
}

export namespace WorkRequestSummary {
  export enum OperationType {
    EnableDataSafeConfiguration = "ENABLE_DATA_SAFE_CONFIGURATION",
    CreatePrivateEndpoint = "CREATE_PRIVATE_ENDPOINT",
    UpdatePrivateEndpoint = "UPDATE_PRIVATE_ENDPOINT",
    DeletePrivateEndpoint = "DELETE_PRIVATE_ENDPOINT",
    ChangePrivateEndpointCompartment = "CHANGE_PRIVATE_ENDPOINT_COMPARTMENT",
    CreateOnpremConnector = "CREATE_ONPREM_CONNECTOR",
    UpdateOnpremConnector = "UPDATE_ONPREM_CONNECTOR",
    DeleteOnpremConnector = "DELETE_ONPREM_CONNECTOR",
    UpdateOnpremConnectorWallet = "UPDATE_ONPREM_CONNECTOR_WALLET",
    ChangeOnpremConnectorCompartment = "CHANGE_ONPREM_CONNECTOR_COMPARTMENT",
    CreateTargetDatabase = "CREATE_TARGET_DATABASE",
    UpdateTargetDatabase = "UPDATE_TARGET_DATABASE",
    ActivateTargetDatabase = "ACTIVATE_TARGET_DATABASE",
    DeactivateTargetDatabase = "DEACTIVATE_TARGET_DATABASE",
    DeleteTargetDatabase = "DELETE_TARGET_DATABASE",
    ChangeTargetDatabaseCompartment = "CHANGE_TARGET_DATABASE_COMPARTMENT",
    CreateUserAssessment = "CREATE_USER_ASSESSMENT",
    AssessUserAssessment = "ASSESS_USER_ASSESSMENT",
    CreateSnapshotUserAssessment = "CREATE_SNAPSHOT_USER_ASSESSMENT",
    CreateScheduleUserAssessment = "CREATE_SCHEDULE_USER_ASSESSMENT",
    CompareWithBaselineUserAssessment = "COMPARE_WITH_BASELINE_USER_ASSESSMENT",
    DeleteUserAssessment = "DELETE_USER_ASSESSMENT",
    UpdateUserAssessment = "UPDATE_USER_ASSESSMENT",
    ChangeUserAssessmentCompartment = "CHANGE_USER_ASSESSMENT_COMPARTMENT",
    SetUserAssessmentBaseline = "SET_USER_ASSESSMENT_BASELINE",
    UnsetUserAssessmentBaseline = "UNSET_USER_ASSESSMENT_BASELINE",
    GenerateUserAssessmentReport = "GENERATE_USER_ASSESSMENT_REPORT",
    CreateSecurityAssessment = "CREATE_SECURITY_ASSESSMENT",
    CreateSecurityAssessmentNow = "CREATE_SECURITY_ASSESSMENT_NOW",
    AssessSecurityAssessment = "ASSESS_SECURITY_ASSESSMENT",
    CreateSnapshotSecurityAssessment = "CREATE_SNAPSHOT_SECURITY_ASSESSMENT",
    CreateScheduleSecurityAssessment = "CREATE_SCHEDULE_SECURITY_ASSESSMENT",
    CompareWithBaselineSecurityAssessment = "COMPARE_WITH_BASELINE_SECURITY_ASSESSMENT",
    DeleteSecurityAssessment = "DELETE_SECURITY_ASSESSMENT",
    UpdateSecurityAssessment = "UPDATE_SECURITY_ASSESSMENT",
    ChangeSecurityAssessmentCompartment = "CHANGE_SECURITY_ASSESSMENT_COMPARTMENT",
    SetSecurityAssessmentBaseline = "SET_SECURITY_ASSESSMENT_BASELINE",
    UnsetSecurityAssessmentBaseline = "UNSET_SECURITY_ASSESSMENT_BASELINE",
    GenerateSecurityAssessmentReport = "GENERATE_SECURITY_ASSESSMENT_REPORT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Status {
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
