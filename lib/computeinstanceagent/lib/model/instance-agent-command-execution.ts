/**
 * Oracle Cloud Agent API
 * API for the Oracle Cloud Agent software running on compute instances. Oracle Cloud Agent
is a lightweight process that monitors and manages compute instances.

 * OpenAPI spec version: 20180530
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
 * A command's execution summary.
 */
export interface InstanceAgentCommandExecution {
  /**
   * The OCID of the command
   */
  "instanceAgentCommandId": string;
  /**
   * The OCID of the instance
   */
  "instanceId": string;
  /**
   * Specifies the command delivery state.
   *  * {@code VISIBLE} - The command is visible to instance.
   *  * {@code PENDING} - The command is pending ack from the instance.
   *  * {@code ACKED} - The command has been received and acked by the instance.
   *  * {@code ACKED_CANCELED} - The canceled command has been received and acked by the instance.
   *  * {@code EXPIRED} - The instance has not requested for commands and its delivery has expired.
   *
   */
  "deliveryState": InstanceAgentCommandExecution.DeliveryState;
  /**
   * command execution life cycle state.
   * * {@code ACCEPTED} - The command execution has been accepted to run.
   * * {@code IN_PROGRESS} - The command execution is in progress.
   * * {@code SUCCEEDED} - The command execution is successful.
   * * {@code FAILED} - The command execution has failed.
   * * {@code TIMED_OUT} - The command execution has timedout.
   * * {@code CANCELED} - The command execution has canceled.
   *
   */
  "lifecycleState": InstanceAgentCommandExecution.LifecycleState;
  /**
   * The command creation date
   */
  "timeCreated": Date;
  /**
   * The command last updated at date.
   */
  "timeUpdated": Date;
  /**
   * The large non-consecutive number that Run Command Service assigns to each created command. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sequenceNumber": number;
  /**
   * The user friendly display name of the command.
   */
  "displayName"?: string;
  "content":
    | model.InstanceAgentCommandExecutionOutputViaTextDetails
    | model.InstanceAgentCommandExecutionOutputViaObjectStorageUriDetails
    | model.InstanceAgentCommandExecutionOutputViaObjectStorageTupleDetails;
}

export namespace InstanceAgentCommandExecution {
  export enum DeliveryState {
    Visible = "VISIBLE",
    Pending = "PENDING",
    Acked = "ACKED",
    AckedCanceled = "ACKED_CANCELED",
    Expired = "EXPIRED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    TimedOut = "TIMED_OUT",
    Canceled = "CANCELED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: InstanceAgentCommandExecution): object {
    const jsonObj = {
      ...obj,
      ...{
        "content": obj.content
          ? model.InstanceAgentCommandExecutionOutputContent.getJsonObj(obj.content)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstanceAgentCommandExecution): object {
    const jsonObj = {
      ...obj,
      ...{
        "content": obj.content
          ? model.InstanceAgentCommandExecutionOutputContent.getDeserializedJsonObj(obj.content)
          : undefined
      }
    };

    return jsonObj;
  }
}
