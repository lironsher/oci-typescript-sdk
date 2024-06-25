/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20230518
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
 * Common Migration details.
 */
export interface CreateMigrationDetails {
  /**
   * A user-friendly description. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "description"?: string;
  /**
   * The OCID of the resource being referenced.
   */
  "compartmentId": string;
  /**
   * The type of the migration to be performed.
   * Example: ONLINE if no downtime is preferred for a migration. This method uses Oracle GoldenGate for replication.
   *
   */
  "type": model.MigrationTypes;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The OCID of the resource being referenced.
   */
  "sourceDatabaseConnectionId": string;
  /**
   * The OCID of the resource being referenced.
   */
  "targetDatabaseConnectionId": string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see Resource Tags. Example: {\"Department\": \"Finance\"}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "databaseCombination": string;
}

export namespace CreateMigrationDetails {
  export function getJsonObj(obj: CreateMigrationDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "databaseCombination" in obj && obj.databaseCombination) {
      switch (obj.databaseCombination) {
        case "MYSQL":
          return model.CreateMySqlMigrationDetails.getJsonObj(
            <model.CreateMySqlMigrationDetails>(<object>jsonObj),
            true
          );
        case "ORACLE":
          return model.CreateOracleMigrationDetails.getJsonObj(
            <model.CreateOracleMigrationDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.databaseCombination}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateMigrationDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "databaseCombination" in obj && obj.databaseCombination) {
      switch (obj.databaseCombination) {
        case "MYSQL":
          return model.CreateMySqlMigrationDetails.getDeserializedJsonObj(
            <model.CreateMySqlMigrationDetails>(<object>jsonObj),
            true
          );
        case "ORACLE":
          return model.CreateOracleMigrationDetails.getDeserializedJsonObj(
            <model.CreateOracleMigrationDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.databaseCombination}`);
      }
    }
    return jsonObj;
  }
}
