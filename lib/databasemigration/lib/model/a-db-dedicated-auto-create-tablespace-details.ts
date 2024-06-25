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
 * Auto create tablespace settings that are valid for Dedicated Autonomous Databases.
 *
 */
export interface ADBDedicatedAutoCreateTablespaceDetails extends model.TargetTypeTablespaceDetails {
  /**
   * Set this property to true to auto-create tablespaces in the target Database.
   * Note: This is not applicable for Autonomous Database Serverless databases.
   *
   */
  "isAutoCreate"?: boolean;
  /**
   * Set this property to true to enable tablespace of the type big file.
   *
   */
  "isBigFile"?: boolean;
  /**
   * Size to extend the tablespace in MB.
   * Note: Only applicable if 'isBigFile' property is set to true.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "extendSizeInMBs"?: number;
  /**
   * Size of Oracle database blocks in KB.
   *
   */
  "blockSizeInKBs"?: model.DataPumpTablespaceBlockSizesInKb;

  "targetType": string;
}

export namespace ADBDedicatedAutoCreateTablespaceDetails {
  export function getJsonObj(
    obj: ADBDedicatedAutoCreateTablespaceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TargetTypeTablespaceDetails.getJsonObj(
            obj
          ) as ADBDedicatedAutoCreateTablespaceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const targetType = "ADB_D_AUTOCREATE";
  export function getDeserializedJsonObj(
    obj: ADBDedicatedAutoCreateTablespaceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TargetTypeTablespaceDetails.getDeserializedJsonObj(
            obj
          ) as ADBDedicatedAutoCreateTablespaceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
