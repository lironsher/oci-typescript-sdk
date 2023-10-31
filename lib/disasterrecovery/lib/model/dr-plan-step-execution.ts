/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (DR) API to manage disaster recovery for business applications.
Full Stack DR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster 
recovery capabilities for all layers of an application stack, including infrastructure, middleware, database, 
and application.

 * OpenAPI spec version: 20220125
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The details of a step execution in a DR plan execution.
 */
export interface DrPlanStepExecution {
  /**
    * The unique id of the step. Must not be modified by user.
* <p>
Example: `sgid1.step..uniqueID`
* 
    */
  "stepId": string;
  /**
   * The step type.
   *
   */
  "type": model.DrPlanStepType;
  /**
    * The unique id of the group to which this step belongs. Must not be modified by user.
* <p>
Example: `sgid1.group..uniqueID`
* 
    */
  "groupId": string;
  /**
    * The display name of the step execution.
* <p>
Example: `DATABASE_SWITCHOVER`
* 
    */
  "displayName": string;
  "logLocation": model.ObjectStorageLogLocation;
  /**
   * The status of the step execution.
   *
   */
  "status": model.DrPlanStepExecutionStatus;
  /**
    * Additional details on the step execution status.
* <p>
Example: `This step failed to complete due to a timeout`
* 
    */
  "statusDetails"?: string;
  /**
    * The time when step execution began. An RFC3339 formatted datetime string.
* <p>
Example: `2019-03-29T09:36:42Z`
* 
    */
  "timeStarted"?: Date;
  /**
    * The time when execution ended. An RFC3339 formatted datetime string.
* <p>
Example: `2019-03-29T09:36:42Z`
* 
    */
  "timeEnded"?: Date;
  /**
    * The total duration in seconds taken to complete the step execution.
* <p>
Example: `35`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "executionDurationInSec"?: number;
}

export namespace DrPlanStepExecution {
  export function getJsonObj(obj: DrPlanStepExecution): object {
    const jsonObj = {
      ...obj,
      ...{
        "logLocation": obj.logLocation
          ? model.ObjectStorageLogLocation.getJsonObj(obj.logLocation)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DrPlanStepExecution): object {
    const jsonObj = {
      ...obj,
      ...{
        "logLocation": obj.logLocation
          ? model.ObjectStorageLogLocation.getDeserializedJsonObj(obj.logLocation)
          : undefined
      }
    };

    return jsonObj;
  }
}
