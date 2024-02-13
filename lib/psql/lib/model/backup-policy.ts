/**
 * PGSQL Control Plane API
 * Use the OCI Database with PostgreSQL API to manage resources such as database systems, database nodes, backups, and configurations. 
For information, see the user guide documentation for the [service](/iaas/Content/postgresql/home.htm).

 * OpenAPI spec version: 20220915
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
 * PostgreSQL database system backup policy.
 */
export interface BackupPolicy {
  /**
   * How many days the data should be stored after the database system deletion. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "retentionDays"?: number;

  "kind": string;
}

export namespace BackupPolicy {
  export function getJsonObj(obj: BackupPolicy): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "DAILY":
          return model.DailyBackupPolicy.getJsonObj(
            <model.DailyBackupPolicy>(<object>jsonObj),
            true
          );
        case "WEEKLY":
          return model.WeeklyBackupPolicy.getJsonObj(
            <model.WeeklyBackupPolicy>(<object>jsonObj),
            true
          );
        case "NONE":
          return model.NoneBackupPolicy.getJsonObj(<model.NoneBackupPolicy>(<object>jsonObj), true);
        case "MONTHLY":
          return model.MonthlyBackupPolicy.getJsonObj(
            <model.MonthlyBackupPolicy>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.kind}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BackupPolicy): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "DAILY":
          return model.DailyBackupPolicy.getDeserializedJsonObj(
            <model.DailyBackupPolicy>(<object>jsonObj),
            true
          );
        case "WEEKLY":
          return model.WeeklyBackupPolicy.getDeserializedJsonObj(
            <model.WeeklyBackupPolicy>(<object>jsonObj),
            true
          );
        case "NONE":
          return model.NoneBackupPolicy.getDeserializedJsonObj(
            <model.NoneBackupPolicy>(<object>jsonObj),
            true
          );
        case "MONTHLY":
          return model.MonthlyBackupPolicy.getDeserializedJsonObj(
            <model.MonthlyBackupPolicy>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.kind}`);
      }
    }
    return jsonObj;
  }
}
