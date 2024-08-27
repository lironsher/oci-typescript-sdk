/**
 * Fleet Application Management Service API
 * Fleet Application Management Service API. Use this API to for all FAMS related activities.
To manage fleets,view complaince report for the Fleet,scedule patches and other lifecycle activities

 * OpenAPI spec version: 20230831
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
 * The details of the task
 */
export interface Task {
  /**
   * The name of the task step.
   */
  "stepName": string;
  /**
   * The association type of the task
   */
  "associationType": Task.AssociationType;
  "taskRecordDetails": model.AssociatedLocalTaskDetails | model.AssociatedSharedTaskDetails;
  "stepProperties"?: model.ComponentProperties;
  /**
   * Mapping output variables of previous tasks to the input variables of the current task.
   */
  "outputVariableMappings"?: Array<model.OutputVariableMapping>;
}

export namespace Task {
  export enum AssociationType {
    Task = "TASK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Task): object {
    const jsonObj = {
      ...obj,
      ...{
        "taskRecordDetails": obj.taskRecordDetails
          ? model.AssociatedTaskDetails.getJsonObj(obj.taskRecordDetails)
          : undefined,
        "stepProperties": obj.stepProperties
          ? model.ComponentProperties.getJsonObj(obj.stepProperties)
          : undefined,
        "outputVariableMappings": obj.outputVariableMappings
          ? obj.outputVariableMappings.map(item => {
              return model.OutputVariableMapping.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Task): object {
    const jsonObj = {
      ...obj,
      ...{
        "taskRecordDetails": obj.taskRecordDetails
          ? model.AssociatedTaskDetails.getDeserializedJsonObj(obj.taskRecordDetails)
          : undefined,
        "stepProperties": obj.stepProperties
          ? model.ComponentProperties.getDeserializedJsonObj(obj.stepProperties)
          : undefined,
        "outputVariableMappings": obj.outputVariableMappings
          ? obj.outputVariableMappings.map(item => {
              return model.OutputVariableMapping.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
