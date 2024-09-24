/**
 * Monitoring API
 * Use the Monitoring API to manage metric queries and alarms for assessing the health, capacity, and performance of your cloud resources.
Endpoints vary by operation. For PostMetricData, use the `telemetry-ingestion` endpoints; for all other operations, use the `telemetry` endpoints.
For more information, see
[the Monitoring documentation](/iaas/Content/Monitoring/home.htm).

 * OpenAPI spec version: 20180401
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
 * The target of the alarm suppression.
 */
export interface AlarmSuppressionTarget {
  "targetType": string;
}

export namespace AlarmSuppressionTarget {
  export function getJsonObj(obj: AlarmSuppressionTarget): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "targetType" in obj && obj.targetType) {
      switch (obj.targetType) {
        case "ALARM":
          return model.AlarmSuppressionAlarmTarget.getJsonObj(
            <model.AlarmSuppressionAlarmTarget>(<object>jsonObj),
            true
          );
        case "COMPARTMENT":
          return model.AlarmSuppressionCompartmentTarget.getJsonObj(
            <model.AlarmSuppressionCompartmentTarget>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.targetType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AlarmSuppressionTarget): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "targetType" in obj && obj.targetType) {
      switch (obj.targetType) {
        case "ALARM":
          return model.AlarmSuppressionAlarmTarget.getDeserializedJsonObj(
            <model.AlarmSuppressionAlarmTarget>(<object>jsonObj),
            true
          );
        case "COMPARTMENT":
          return model.AlarmSuppressionCompartmentTarget.getDeserializedJsonObj(
            <model.AlarmSuppressionCompartmentTarget>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.targetType}`);
      }
    }
    return jsonObj;
  }
}
