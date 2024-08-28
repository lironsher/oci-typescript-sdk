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
 * Details of the cloud Exadata infrastructure resource. Applies to Exadata Cloud Service instances only.
 *
 */
export interface CloudExadataInfrastructureSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the cloud Exadata infrastructure resource.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the cluster placement group of the Exadata Infrastructure.
   */
  "clusterPlacementGroupId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subscription with which resource needs to be associated with.
   */
  "subscriptionId"?: string;
  /**
   * The current lifecycle state of the cloud Exadata infrastructure resource.
   */
  "lifecycleState": CloudExadataInfrastructureSummary.LifecycleState;
  /**
   * The user-friendly name for the cloud Exadata infrastructure resource. The name does not need to be unique.
   */
  "displayName": string;
  /**
   * The model name of the cloud Exadata infrastructure resource.
   *
   */
  "shape": string;
  /**
   * The name of the availability domain that the cloud Exadata infrastructure resource is located in.
   */
  "availabilityDomain": string;
  /**
   * The number of compute servers for the cloud Exadata infrastructure. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "computeCount"?: number;
  /**
   * The number of storage servers for the cloud Exadata infrastructure. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "storageCount"?: number;
  /**
   * The total storage allocated to the cloud Exadata infrastructure resource, in gigabytes (GB). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalStorageSizeInGBs"?: number;
  /**
   * The available storage can be allocated to the cloud Exadata infrastructure resource, in gigabytes (GB). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableStorageSizeInGBs"?: number;
  /**
   * The total number of CPU cores allocated. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCount"?: number;
  /**
   * The total number of CPU cores available. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxCpuCount"?: number;
  /**
   * The memory allocated in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memorySizeInGBs"?: number;
  /**
   * The total memory available in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxMemoryInGBs"?: number;
  /**
   * The local node storage allocated in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dbNodeStorageSizeInGBs"?: number;
  /**
   * The total local node storage available in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxDbNodeStorageInGBs"?: number;
  /**
   * Size, in terabytes, of the DATA disk group.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataStorageSizeInTBs"?: number;
  /**
   * The total available DATA disk group size. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxDataStorageInTBs"?: number;
  /**
   * The requested number of additional storage servers for the Exadata infrastructure. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "additionalStorageCount"?: number;
  /**
   * The requested number of additional storage servers activated for the Exadata infrastructure. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "activatedStorageCount"?: number;
  /**
   * The date and time the cloud Exadata infrastructure resource was created.
   */
  "timeCreated"?: Date;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  "maintenanceWindow"?: model.MaintenanceWindow;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the last maintenance run.
   */
  "lastMaintenanceRunId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the next maintenance run.
   */
  "nextMaintenanceRunId"?: string;
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
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The list of customer email addresses that receive information from Oracle about the specified OCI Database service resource.
   * Oracle uses these email addresses to send notifications about planned and unplanned software maintenance updates, information about system hardware, and other information needed by administrators.
   * Up to 10 email addresses can be added to the customer contacts for a cloud Exadata infrastructure instance.
   *
   */
  "customerContacts"?: Array<model.CustomerContact>;
  /**
   * The software version of the storage servers (cells) in the cloud Exadata infrastructure.
   * Example: 20.1.15
   *
   */
  "storageServerVersion"?: string;
  /**
   * The software version of the database servers (dom0) in the cloud Exadata infrastructure.
   * Example: 20.1.15
   *
   */
  "dbServerVersion"?: string;
  /**
   * The monthly software version of the storage servers (cells) in the cloud Exadata infrastructure.
   * Example: 20.1.15
   *
   */
  "monthlyStorageServerVersion"?: string;
  /**
   * The monthly software version of the database servers (dom0) in the cloud Exadata infrastructure.
   * Example: 20.1.15
   *
   */
  "monthlyDbServerVersion"?: string;
  /**
   * Details of the file system configuration of the Exadata infrastructure.
   */
  "definedFileSystemConfigurations"?: Array<model.DefinedFileSystemConfiguration>;
  /**
   * If true, the infrastructure is using granular maintenance scheduling preference.
   */
  "isSchedulingPolicyAssociated"?: boolean;
}

export namespace CloudExadataInfrastructureSummary {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Updating = "UPDATING",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Failed = "FAILED",
    MaintenanceInProgress = "MAINTENANCE_IN_PROGRESS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CloudExadataInfrastructureSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "maintenanceWindow": obj.maintenanceWindow
          ? model.MaintenanceWindow.getJsonObj(obj.maintenanceWindow)
          : undefined,

        "customerContacts": obj.customerContacts
          ? obj.customerContacts.map(item => {
              return model.CustomerContact.getJsonObj(item);
            })
          : undefined,

        "definedFileSystemConfigurations": obj.definedFileSystemConfigurations
          ? obj.definedFileSystemConfigurations.map(item => {
              return model.DefinedFileSystemConfiguration.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CloudExadataInfrastructureSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "maintenanceWindow": obj.maintenanceWindow
          ? model.MaintenanceWindow.getDeserializedJsonObj(obj.maintenanceWindow)
          : undefined,

        "customerContacts": obj.customerContacts
          ? obj.customerContacts.map(item => {
              return model.CustomerContact.getDeserializedJsonObj(item);
            })
          : undefined,

        "definedFileSystemConfigurations": obj.definedFileSystemConfigurations
          ? obj.definedFileSystemConfigurations.map(item => {
              return model.DefinedFileSystemConfiguration.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
