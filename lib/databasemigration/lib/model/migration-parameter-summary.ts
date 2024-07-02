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
 * Migration parameter response object.
 */
export interface MigrationParameterSummary {
  /**
   * The combination of source and target databases participating in a migration.
   * Example: ORACLE means the migration is meant for migrating Oracle source and target databases.
   *
   */
  "databaseCombination": model.DatabaseCombination;
  /**
   * Parameter display name.
   */
  "displayName": string;
  /**
   * Parameter documentation URL link.
   */
  "docUrlLink"?: string;
  /**
   * Parameter name description.
   */
  "description": string;
  /**
   * Parameter category name.
   */
  "categoryName": string;
  /**
   * Parameter category display name.
   */
  "categoryDisplayName": string;
  /**
   * Migration Stage.
   */
  "migrationType": model.MigrationTypes;
  /**
   * Default value for a parameter.
   */
  "defaultValue"?: string;
  /**
   * Parameter minimum value. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minValue"?: number;
  /**
   * Parameter maximum value. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxValue"?: number;
  /**
   * Hint text for parameter value.
   */
  "hintText"?: string;
  /**
   * Parameter name.
   */
  "name": string;
  /**
   * Parameter data type.
   */
  "dataType": model.AdvancedParameterDataTypes;
}

export namespace MigrationParameterSummary {
  export function getJsonObj(obj: MigrationParameterSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MigrationParameterSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
