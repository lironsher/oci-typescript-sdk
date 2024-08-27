/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (DR) API to manage disaster recovery for business applications.
Full Stack DR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster 
recovery capabilities for all layers of an application stack, including infrastructure, middleware, database, 
and application.

 * OpenAPI spec version: 20220125
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
 * This specifies the mechanism used to create a temporary Autonomous Database instance for DR Drills.
 * See https://docs.oracle.com/en/cloud/paas/autonomous-database/serverless/adbsb/autonomous-clone-about.html for information about these clone types.
 * See https://docs.oracle.com/en/cloud/paas/autonomous-database/serverless/adbsb/autonomous-data-guard-snapshot-standby.html for information about snapshot standby.
 * - FULL_CLONE - Creates a full clone of the source Autonomous Database with read-write access for DR Drill operations.
 * - REFRESHABLE_CLONE - Creates a full clone of the source Autonomous Database with read-only access for DR Drill operations.
 * - SNAPSHOT_STANDBY - Converts the existing standby Autonomous Database to a snapshot standby for DR Drill operations.
 *
 **/
export enum AutonomousDatabaseStandbyTypeForDrDrills {
  FullClone = "FULL_CLONE",
  RefreshableClone = "REFRESHABLE_CLONE",
  SnapshotStandby = "SNAPSHOT_STANDBY",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace AutonomousDatabaseStandbyTypeForDrDrills {
  export function getJsonObj(
    obj: AutonomousDatabaseStandbyTypeForDrDrills
  ): AutonomousDatabaseStandbyTypeForDrDrills {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: AutonomousDatabaseStandbyTypeForDrDrills
  ): AutonomousDatabaseStandbyTypeForDrDrills {
    return obj;
  }
}
