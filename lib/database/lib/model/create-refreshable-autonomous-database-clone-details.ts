/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Details to create an Oracle Autonomous Database refreshable clone.
 *
 */
export interface CreateRefreshableAutonomousDatabaseCloneDetails
  extends model.CreateAutonomousDatabaseBase {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the source Autonomous Database that you will clone to create a new Autonomous Database.
   */
  "sourceId": string;
  /**
   * The refresh mode of the clone. AUTOMATIC indicates that the clone is automatically being refreshed with data from the source Autonomous Database.
   */
  "refreshableMode"?: CreateRefreshableAutonomousDatabaseCloneDetails.RefreshableMode;
  /**
   * The frequency a refreshable clone is refreshed after auto-refresh is enabled. The minimum is 1 hour. The maximum is 7 days. The date and time that auto-refresh is enabled is controlled by the {@code timeOfAutoRefreshStart} parameter. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "autoRefreshFrequencyInSeconds"?: number;
  /**
   * The time, in seconds, the data of the refreshable clone lags the primary database at the point of refresh. The minimum is 0 minutes (0 mins means refresh to the latest available timestamp). The maximum is 7 days. The lag time increases after refreshing until the next data refresh happens. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "autoRefreshPointLagInSeconds"?: number;
  /**
   * The the date and time that auto-refreshing will begin for an Autonomous Database refreshable clone. This value controls only the start time for the first refresh operation. Subsequent (ongoing) refresh operations have start times controlled by the value of the {@code autoRefreshFrequencyInSeconds} parameter.
   */
  "timeOfAutoRefreshStart"?: Date;
  /**
    * Indicates the Autonomous Database mode. The database can be opened in {@code READ_ONLY} or {@code READ_WRITE} mode.
* <p>
This cannot be updated in parallel with any of the following: cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.
* 
    */
  "openMode"?: CreateRefreshableAutonomousDatabaseCloneDetails.OpenMode;

  "source": string;
}

export namespace CreateRefreshableAutonomousDatabaseCloneDetails {
  export enum RefreshableMode {
    Automatic = "AUTOMATIC",
    Manual = "MANUAL"
  }

  export enum OpenMode {
    ReadOnly = "READ_ONLY",
    ReadWrite = "READ_WRITE"
  }

  export function getJsonObj(
    obj: CreateRefreshableAutonomousDatabaseCloneDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateAutonomousDatabaseBase.getJsonObj(
            obj
          ) as CreateRefreshableAutonomousDatabaseCloneDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const source = "CLONE_TO_REFRESHABLE";
  export function getDeserializedJsonObj(
    obj: CreateRefreshableAutonomousDatabaseCloneDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateAutonomousDatabaseBase.getDeserializedJsonObj(
            obj
          ) as CreateRefreshableAutonomousDatabaseCloneDetails)),
      ...{}
    };

    return jsonObj;
  }
}
