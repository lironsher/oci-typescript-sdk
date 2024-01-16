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
 * A pluggable database (PDB) is portable collection of schemas, schema objects, and non-schema objects that appears to an Oracle client as a non-container database. To use a PDB, it needs to be plugged into a CDB.
 * To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized, talk to a tenancy administrator. If you are an administrator who needs to write policies to give users access, see [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface PluggableDatabase {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the pluggable database.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the CDB.
   */
  "containerDatabaseId": string;
  /**
   * The name for the pluggable database (PDB). The name is unique in the context of a {@link Database}. The name must begin with an alphabetic character and can contain a maximum of thirty alphanumeric characters. Special characters are not permitted. The pluggable database name should not be same as the container database name.
   */
  "pdbName": string;
  /**
   * The current state of the pluggable database.
   */
  "lifecycleState": PluggableDatabase.LifecycleState;
  /**
   * Detailed message for the lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time the pluggable database was created.
   */
  "timeCreated": Date;
  "connectionStrings"?: model.PluggableDatabaseConnectionStrings;
  /**
   * **Deprecated.** Use {@link #pluggableDatabaseNodeLevelDetails(PluggableDatabaseNodeLevelDetailsRequest) pluggableDatabaseNodeLevelDetails} for OpenMode details.
   * The mode that pluggable database is in. Open mode can only be changed to READ_ONLY or MIGRATE directly from the backend (within the Oracle Database software).
   *
   */
  "openMode": PluggableDatabase.OpenMode;
  /**
   * The restricted mode of the pluggable database. If a pluggable database is opened in restricted mode,
   * the user needs both create a session and have restricted session privileges to connect to it.
   *
   */
  "isRestricted"?: boolean;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  "pluggableDatabaseManagementConfig"?: model.PluggableDatabaseManagementConfig;
  "refreshableCloneConfig"?: model.PluggableDatabaseRefreshableCloneConfig;
  /**
   * Pluggable Database Node Level Details.
   * Example: [{\"nodeName\" : \"node1\", \"openMode\" : \"READ_WRITE\"}, {\"nodeName\" : \"node2\", \"openMode\" : \"READ_ONLY\"}]
   *
   */
  "pdbNodeLevelDetails"?: Array<model.PluggableDatabaseNodeLevelDetails>;
}

export namespace PluggableDatabase {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Updating = "UPDATING",
    Failed = "FAILED",
    Relocating = "RELOCATING",
    Relocated = "RELOCATED",
    Refreshing = "REFRESHING",
    RestoreInProgress = "RESTORE_IN_PROGRESS",
    RestoreFailed = "RESTORE_FAILED",
    BackupInProgress = "BACKUP_IN_PROGRESS",
    Disabled = "DISABLED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum OpenMode {
    ReadOnly = "READ_ONLY",
    ReadWrite = "READ_WRITE",
    Mounted = "MOUNTED",
    Migrate = "MIGRATE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: PluggableDatabase): object {
    const jsonObj = {
      ...obj,
      ...{
        "connectionStrings": obj.connectionStrings
          ? model.PluggableDatabaseConnectionStrings.getJsonObj(obj.connectionStrings)
          : undefined,

        "pluggableDatabaseManagementConfig": obj.pluggableDatabaseManagementConfig
          ? model.PluggableDatabaseManagementConfig.getJsonObj(
              obj.pluggableDatabaseManagementConfig
            )
          : undefined,
        "refreshableCloneConfig": obj.refreshableCloneConfig
          ? model.PluggableDatabaseRefreshableCloneConfig.getJsonObj(obj.refreshableCloneConfig)
          : undefined,
        "pdbNodeLevelDetails": obj.pdbNodeLevelDetails
          ? obj.pdbNodeLevelDetails.map(item => {
              return model.PluggableDatabaseNodeLevelDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PluggableDatabase): object {
    const jsonObj = {
      ...obj,
      ...{
        "connectionStrings": obj.connectionStrings
          ? model.PluggableDatabaseConnectionStrings.getDeserializedJsonObj(obj.connectionStrings)
          : undefined,

        "pluggableDatabaseManagementConfig": obj.pluggableDatabaseManagementConfig
          ? model.PluggableDatabaseManagementConfig.getDeserializedJsonObj(
              obj.pluggableDatabaseManagementConfig
            )
          : undefined,
        "refreshableCloneConfig": obj.refreshableCloneConfig
          ? model.PluggableDatabaseRefreshableCloneConfig.getDeserializedJsonObj(
              obj.refreshableCloneConfig
            )
          : undefined,
        "pdbNodeLevelDetails": obj.pdbNodeLevelDetails
          ? obj.pdbNodeLevelDetails.map(item => {
              return model.PluggableDatabaseNodeLevelDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
