/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The details of SQL statements and plans to be loaded from cursor cache. You can specify
 * the plans to load using SQL ID, plan identifier, or filterName and filterValue pair.
 * You can also control the SQL plan baseline into which the plans are loaded using either
 * SQL text or SQL handle.
 *
 */
export interface LoadSqlPlanBaselinesFromCursorCacheDetails {
  /**
   * The name of the database job used for loading SQL plan baselines.
   */
  "jobName": string;
  /**
   * The description of the job.
   */
  "jobDescription"?: string;
  /**
   * The SQL statement identifier. Identifies a SQL statement in the cursor cache.
   */
  "sqlId"?: string;
  /**
   * The plan identifier. By default, all plans present in the cursor cache
   * for the SQL statement identified by {@code sqlId} are captured.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "planHash"?: number;
  /**
   * The SQL text to use in identifying the SQL plan baseline into which the plans
   * are loaded. If the SQL plan baseline does not exist, it is created.
   *
   */
  "sqlText"?: string;
  /**
   * The SQL handle to use in identifying the SQL plan baseline into which
   * the plans are loaded.
   *
   */
  "sqlHandle"?: string;
  /**
    * The name of the filter.
* <p>
- SQL_TEXT: Search pattern to apply to SQL text.
* - PARSING_SCHEMA_NAME: Name of the parsing schema.
* - MODULE: Name of the module.
* - ACTION: Name of the action.
* 
    */
  "filterName"?: LoadSqlPlanBaselinesFromCursorCacheDetails.FilterName;
  /**
   * The filter value. It is upper-cased except when it is enclosed in
   * double quotes or filter name is {@code SQL_TEXT}.
   *
   */
  "filterValue"?: string;
  /**
   * Indicates whether the plans are loaded as fixed plans ({@code true}) or non-fixed plans ({@code false}).
   * By default, they are loaded as non-fixed plans.
   *
   */
  "isFixed"?: boolean;
  /**
   * Indicates whether the loaded plans are enabled ({@code true}) or not ({@code false}).
   * By default, they are enabled.
   *
   */
  "isEnabled"?: boolean;
  "credentials": model.ManagedDatabasePasswordCredential | model.ManagedDatabaseSecretCredential;
}

export namespace LoadSqlPlanBaselinesFromCursorCacheDetails {
  export enum FilterName {
    SqlText = "SQL_TEXT",
    ParsingSchemaName = "PARSING_SCHEMA_NAME",
    Module = "MODULE",
    Action = "ACTION"
  }

  export function getJsonObj(obj: LoadSqlPlanBaselinesFromCursorCacheDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentials": obj.credentials
          ? model.ManagedDatabaseCredential.getJsonObj(obj.credentials)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LoadSqlPlanBaselinesFromCursorCacheDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentials": obj.credentials
          ? model.ManagedDatabaseCredential.getDeserializedJsonObj(obj.credentials)
          : undefined
      }
    };

    return jsonObj;
  }
}
