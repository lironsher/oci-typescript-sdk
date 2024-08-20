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
 * A SchedulerJob resource.
 */
export interface SchedulerJob {
  /**
   * The OCID of the resource.
   */
  "id": string;
  /**
    * A user-friendly name. Does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
Example: {@code My new resource}
* 
    */
  "displayName": string;
  /**
   * Tenancy OCID
   */
  "compartmentId": string;
  /**
   * The time this resource was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time this resource was last updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * Scheduled date for the Job.
   */
  "timeScheduled"?: Date;
  /**
   * Actual Start time for the Job
   */
  "timeStarted"?: Date;
  /**
   * Actual End time for the Job
   */
  "timeEnded"?: Date;
  /**
   * Count of ActionGroups affected by the Schedule. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "countOfAffectedActionGroups"?: number;
  /**
   * Count of Resources affected by the Schedule Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "countOfAffectedResources"?: number;
  /**
   * Count of Targets affected by the Schedule Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "countOfAffectedTargets"?: number;
  /**
   * All ActionGroup Types part of the schedule.
   */
  "actionGroupTypes"?: Array<SchedulerJob.ActionGroupTypes>;
  /**
   * All application types part of the schedule for ENVIRONMENT ActionGroup Type.
   */
  "applicationTypes"?: Array<string>;
  /**
   * All products part of the schedule for PRODUCT AcionGroup Type.
   */
  "products"?: Array<string>;
  /**
   * All LifeCycle Operations part of the schedule
   */
  "lifecycleOperations"?: Array<string>;
  /**
   * Action Groups associated with the Schedule.
   */
  "actionGroups"?: Array<model.ActionGroupDetails>;
  "associatedScheduleDefinition"?: model.AssociatedSchedulerDefinition;
  /**
   * The current state of the SchedulerJob.
   */
  "lifecycleState": SchedulerJob.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags": { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace SchedulerJob {
  export enum ActionGroupTypes {
    Product = "PRODUCT",
    Environment = "ENVIRONMENT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Active = "ACTIVE",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SchedulerJob): object {
    const jsonObj = {
      ...obj,
      ...{
        "actionGroups": obj.actionGroups
          ? obj.actionGroups.map(item => {
              return model.ActionGroupDetails.getJsonObj(item);
            })
          : undefined,
        "associatedScheduleDefinition": obj.associatedScheduleDefinition
          ? model.AssociatedSchedulerDefinition.getJsonObj(obj.associatedScheduleDefinition)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SchedulerJob): object {
    const jsonObj = {
      ...obj,
      ...{
        "actionGroups": obj.actionGroups
          ? obj.actionGroups.map(item => {
              return model.ActionGroupDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "associatedScheduleDefinition": obj.associatedScheduleDefinition
          ? model.AssociatedSchedulerDefinition.getDeserializedJsonObj(
              obj.associatedScheduleDefinition
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
