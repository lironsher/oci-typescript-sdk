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
 * Create properties for an Autonomous Database Serverless member.
 */
export interface CreateDrProtectionGroupMemberAutonomousDatabaseDetails
  extends model.CreateDrProtectionGroupMemberDetails {
  /**
   * This specifies the mechanism used to create a temporary Autonomous Database instance for DR Drills.
   * See https://docs.oracle.com/en/cloud/paas/autonomous-database/serverless/adbsb/autonomous-clone-about.html for information about these clone types.
   * See https://docs.oracle.com/en/cloud/paas/autonomous-database/serverless/adbsb/autonomous-data-guard-snapshot-standby.html for information about snapshot standby.
   *
   */
  "autonomousDatabaseStandbyTypeForDrDrills"?: model.AutonomousDatabaseStandbyTypeForDrDrills;
  /**
    * The OCID of the vault secret where the database SYSDBA password is stored.
* This password is required and used for performing database DR Drill operations when using full clone.
* <p>
Example: {@code ocid1.vaultsecret.oc1..uniqueID}
* 
    */
  "passwordVaultSecretId"?: string;

  "memberType": string;
}

export namespace CreateDrProtectionGroupMemberAutonomousDatabaseDetails {
  export function getJsonObj(
    obj: CreateDrProtectionGroupMemberAutonomousDatabaseDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDrProtectionGroupMemberDetails.getJsonObj(
            obj
          ) as CreateDrProtectionGroupMemberAutonomousDatabaseDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const memberType = "AUTONOMOUS_DATABASE";
  export function getDeserializedJsonObj(
    obj: CreateDrProtectionGroupMemberAutonomousDatabaseDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDrProtectionGroupMemberDetails.getDeserializedJsonObj(
            obj
          ) as CreateDrProtectionGroupMemberAutonomousDatabaseDetails)),
      ...{}
    };

    return jsonObj;
  }
}
