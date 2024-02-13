/**
 * Exadata Fleet Update service API
 * Use the Exadata Fleet Update service to patch large collections of components directly,
as a single entity, orchestrating the maintenance actions to update all chosen components in the stack in a single cycle.

 * OpenAPI spec version: 20220528
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
 * Exadata Fleet Update Cycle resource details.
 *
 */
export interface FsuCycle {
  /**
   * OCID identifier for the Exadata Fleet Update Cycle.
   *
   */
  "id": string;
  /**
   * Exadata Fleet Update Cycle display name.
   *
   */
  "displayName"?: string;
  /**
   * Compartment Identifier.
   *
   */
  "compartmentId": string;
  /**
   * OCID identifier for the Collection ID the Exadata Fleet Update Cycle is assigned to.
   *
   */
  "fsuCollectionId": string;
  /**
   * Type of Collection this Exadata Fleet Update Cycle belongs to.
   *
   */
  "collectionType"?: model.CollectionTypes;
  /**
   * OCID identifier for the Action that is currently in execution, if applicable.
   *
   */
  "executingFsuActionId"?: string;
  /**
   * In this array all the possible actions will be listed. The first element is the suggested Action.
   *
   */
  "nextActionToExecute"?: Array<model.NextActionToExecuteDetails>;
  /**
   * The latest Action type that was completed in the Exadata Fleet Update Cycle.
   * No value would indicate that the Cycle has not completed any Action yet.
   *
   */
  "lastCompletedAction"?: model.DetailedActionTypes;
  "goalVersionDetails"?: model.VersionFsuTargetDetails | model.ImageIdFsuTargetDetails;
  "batchingStrategy"?:
    | model.NonRollingBatchingStrategyDetails
    | model.ServiceAvailabilityFactorBatchingStrategyDetails
    | model.SequentialBatchingStrategyDetails
    | model.FiftyFiftyBatchingStrategyDetails;
  "stageActionSchedule"?: model.StartTimeScheduleDetails;
  "applyActionSchedule"?: model.StartTimeScheduleDetails;
  /**
   * The date and time the Exadata Fleet Update Cycle was created, as described in
   * [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   *
   */
  "timeCreated": Date;
  /**
   * The date and time the Exadata Fleet Update Cycle was updated,
   * as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339),
   * section 14.29.
   *
   */
  "timeUpdated"?: Date;
  /**
   * The date and time the Exadata Fleet Update Cycle was finished,
   * as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   *
   */
  "timeFinished"?: Date;
  /**
   * The current state of the Exadata Fleet Update Cycle.
   */
  "lifecycleState": model.CycleLifecycleStates;
  /**
   * A message describing the current state in more detail.
   * For example, can be used to provide actionable information for a resource in Failed state.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };

  "type": string;
}

export namespace FsuCycle {
  export function getJsonObj(obj: FsuCycle): object {
    const jsonObj = {
      ...obj,
      ...{
        "nextActionToExecute": obj.nextActionToExecute
          ? obj.nextActionToExecute.map(item => {
              return model.NextActionToExecuteDetails.getJsonObj(item);
            })
          : undefined,

        "goalVersionDetails": obj.goalVersionDetails
          ? model.FsuGoalVersionDetails.getJsonObj(obj.goalVersionDetails)
          : undefined,
        "batchingStrategy": obj.batchingStrategy
          ? model.BatchingStrategyDetails.getJsonObj(obj.batchingStrategy)
          : undefined,
        "stageActionSchedule": obj.stageActionSchedule
          ? model.ScheduleDetails.getJsonObj(obj.stageActionSchedule)
          : undefined,
        "applyActionSchedule": obj.applyActionSchedule
          ? model.ScheduleDetails.getJsonObj(obj.applyActionSchedule)
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "PATCH":
          return model.PatchFsuCycle.getJsonObj(<model.PatchFsuCycle>(<object>jsonObj), true);
        default:
          common.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FsuCycle): object {
    const jsonObj = {
      ...obj,
      ...{
        "nextActionToExecute": obj.nextActionToExecute
          ? obj.nextActionToExecute.map(item => {
              return model.NextActionToExecuteDetails.getDeserializedJsonObj(item);
            })
          : undefined,

        "goalVersionDetails": obj.goalVersionDetails
          ? model.FsuGoalVersionDetails.getDeserializedJsonObj(obj.goalVersionDetails)
          : undefined,
        "batchingStrategy": obj.batchingStrategy
          ? model.BatchingStrategyDetails.getDeserializedJsonObj(obj.batchingStrategy)
          : undefined,
        "stageActionSchedule": obj.stageActionSchedule
          ? model.ScheduleDetails.getDeserializedJsonObj(obj.stageActionSchedule)
          : undefined,
        "applyActionSchedule": obj.applyActionSchedule
          ? model.ScheduleDetails.getDeserializedJsonObj(obj.applyActionSchedule)
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "PATCH":
          return model.PatchFsuCycle.getDeserializedJsonObj(
            <model.PatchFsuCycle>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
