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
* A server where Oracle Database software is running.
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
* 
*/
export interface DbNodeSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the database node.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the DB system.
   */
  "dbSystemId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VNIC.
   */
  "vnicId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the backup VNIC.
   */
  "backupVnicId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the host IP address associated with the database node. Use this OCID with either the
   * {@link #getPrivateIp(GetPrivateIpRequest) getPrivateIp} or the {@link #getPublicIpByPrivateIpId(GetPublicIpByPrivateIpIdRequest) getPublicIpByPrivateIpId} API to get the IP address
   * needed to make a database connection.
   * <p>
   **Note:** Applies only to Exadata Cloud Service.
   *
   */
  "hostIpId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the backup IP address associated with the database node. Use this OCID with either the
   * {@link #getPrivateIp(GetPrivateIpRequest) getPrivateIp} or the {@link #getPublicIpByPrivateIpId(GetPublicIpByPrivateIpIdRequest) getPublicIpByPrivateIpId} API to get the IP address
   * needed to make a database connection.
   * <p>
   **Note:** Applies only to Exadata Cloud Service.
   *
   */
  "backupIpId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the second VNIC.
   * <p>
   **Note:** Applies only to Exadata Cloud Service.
   *
   */
  "vnic2Id"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the second backup VNIC.
   * <p>
   **Note:** Applies only to Exadata Cloud Service.
   *
   */
  "backupVnic2Id"?: string;
  /**
   * The current state of the database node.
   */
  "lifecycleState": DbNodeSummary.LifecycleState;
  /**
   * The host name for the database node.
   */
  "hostname"?: string;
  /**
   * The name of the Fault Domain the instance is contained in.
   */
  "faultDomain"?: string;
  /**
   * The date and time that the database node was created.
   */
  "timeCreated": Date;
  /**
   * The size (in GB) of the block storage volume allocation for the DB system. This attribute applies only for virtual machine DB systems.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "softwareStorageSizeInGB"?: number;
  /**
   * The type of database node maintenance.
   */
  "maintenanceType"?: DbNodeSummary.MaintenanceType;
  /**
   * Start date and time of maintenance window.
   */
  "timeMaintenanceWindowStart"?: Date;
  /**
   * End date and time of maintenance window.
   */
  "timeMaintenanceWindowEnd"?: Date;
  /**
   * Additional information about the planned maintenance.
   */
  "additionalDetails"?: string;
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
  /**
   * Information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The number of CPU cores enabled on the Db node. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCount"?: number;
  /**
   * The allocated memory in GBs on the Db node. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memorySizeInGBs"?: number;
  /**
   * The allocated local node storage in GBs on the Db node. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dbNodeStorageSizeInGBs"?: number;
  /**
   * The total number of CPU cores reserved on the Db node. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalCpuCoreCount"?: number;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Exacc Db server associated with the database node.
   */
  "dbServerId"?: string;
}

export namespace DbNodeSummary {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Updating = "UPDATING",
    Stopping = "STOPPING",
    Stopped = "STOPPED",
    Starting = "STARTING",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum MaintenanceType {
    VmdbRebootMigration = "VMDB_REBOOT_MIGRATION",
    ExadbxsRebootMigration = "EXADBXS_REBOOT_MIGRATION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DbNodeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DbNodeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
