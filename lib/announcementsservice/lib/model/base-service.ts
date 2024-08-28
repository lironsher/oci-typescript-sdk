/**
 * Announcements Service API
 * Manage Oracle Cloud Infrastructure console announcements.
 * OpenAPI spec version: 0.0.1
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
 * Object representing a single service.
 */
export interface BaseService {
  /**
   * ID of the service object.
   */
  "id": string;
  /**
   * Name of the service represented by this object.
   */
  "serviceName": string;
  /**
   * Short name of the team to whom this service object is related.
   */
  "shortName": string;
  /**
   * Team name to which this service object is related.
   */
  "teamName": string;
  /**
   * The platform type this service object is related to.
   */
  "platformType": model.PlatformType;
  /**
   * Name of the comms manager team that manages Notifications to this service.
   */
  "commsManagerName": model.CommsManagerName;
  /**
   * The list of realms where this service is not available to be used.
   */
  "excludedRealms": Array<string>;
  /**
   * The list of previously used names for this service object.
   */
  "previousServiceNames": Array<string>;
  /**
   * The date and time when the service object was created.
   */
  "timeCreated"?: Date;
  /**
   * The date and time when the service object was updated.
   */
  "timeUpdated"?: Date;
  /**
   * Current state of the service object.
   */
  "lifecycleState"?: BaseService.LifecycleState;

  "type": string;
}

export namespace BaseService {
  export enum LifecycleState {
    Active = "ACTIVE",
    Deleted = "DELETED"
  }

  export function getJsonObj(obj: BaseService): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "Service":
          return model.Service.getJsonObj(<model.Service>(<object>jsonObj), true);
        case "ServiceSummary":
          return model.ServiceSummary.getJsonObj(<model.ServiceSummary>(<object>jsonObj), true);
        case "NotificationsSummary":
          return model.NotificationsSummary.getJsonObj(
            <model.NotificationsSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BaseService): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "Service":
          return model.Service.getDeserializedJsonObj(<model.Service>(<object>jsonObj), true);
        case "ServiceSummary":
          return model.ServiceSummary.getDeserializedJsonObj(
            <model.ServiceSummary>(<object>jsonObj),
            true
          );
        case "NotificationsSummary":
          return model.NotificationsSummary.getDeserializedJsonObj(
            <model.NotificationsSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
