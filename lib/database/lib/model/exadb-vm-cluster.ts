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
 * Details of the Exadata VM cluster on Exascale Infrastructure. Applies to Exadata Database Service on Exascale Infrastructure only.
 *
 */
export interface ExadbVmCluster {
  "iormConfigCache"?: model.ExadataIormConfig;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Exadata VM cluster on Exascale Infrastructure.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The name of the availability domain in which the Exadata VM cluster on Exascale Infrastructure is located.
   *
   */
  "availabilityDomain": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet associated with the Exadata VM cluster on Exascale Infrastructure.
   *
   */
  "subnetId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the backup network subnet associated with the Exadata VM cluster on Exascale Infrastructure.
   *
   */
  "backupSubnetId": string;
  /**
   * The list of [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm).
   * **NsgIds restrictions:**
   * - A network security group (NSG) is optional for Autonomous Databases with private access. The nsgIds list can be empty.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * A list of the [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that the backup network of this DB system belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm). Applicable only to Exadata systems.
   *
   */
  "backupNetworkNsgIds"?: Array<string>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the last maintenance update history entry. This value is updated when a maintenance update starts.
   */
  "lastUpdateHistoryEntryId"?: string;
  /**
   * The port number configured for the listener on the Exadata VM cluster on Exascale Infrastructure. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "listenerPort"?: number;
  /**
   * The current state of the Exadata VM cluster on Exascale Infrastructure.
   */
  "lifecycleState": ExadbVmCluster.LifecycleState;
  /**
   * The number of nodes in the Exadata VM cluster on Exascale Infrastructure.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nodeCount": number;
  /**
   * The shape of the Exadata VM cluster on Exascale Infrastructure resource
   *
   */
  "shape": string;
  /**
   * The user-friendly name for the Exadata VM cluster on Exascale Infrastructure. The name does not need to be unique.
   */
  "displayName": string;
  /**
   * The date and time that the Exadata VM cluster on Exascale Infrastructure was created.
   */
  "timeCreated"?: Date;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The time zone to use for the Exadata VM cluster on Exascale Infrastructure. For details, see [Time Zones](https://docs.cloud.oracle.com/Content/Database/References/timezones.htm).
   *
   */
  "timeZone"?: string;
  /**
    * The hostname for the Exadata VM cluster on Exascale Infrastructure. The hostname must begin with an alphabetic character, and 
* can contain alphanumeric characters and hyphens (-). For Exadata systems, the maximum length of the hostname is 12 characters.
* <p>
The maximum length of the combined hostname and domain is 63 characters.
* <p>
**Note:** The hostname must be unique within the subnet. If it is not unique, 
* then the Exadata VM cluster on Exascale Infrastructure will fail to provision.
* 
    */
  "hostname": string;
  /**
   * A domain name used for the Exadata VM cluster on Exascale Infrastructure. If the Oracle-provided internet and VCN
   * resolver is enabled for the specified subnet, then the domain name for the subnet is used
   * (do not provide one). Otherwise, provide a valid DNS domain name. Hyphens (-) are not permitted.
   * Applies to Exadata Database Service on Exascale Infrastructure only.
   *
   */
  "domain": string;
  /**
   * The cluster name for Exadata VM cluster on Exascale Infrastructure. The cluster name must begin with an alphabetic character, and may contain hyphens (-). Underscores (_) are not permitted. The cluster name can be no longer than 11 characters and is not case sensitive.
   *
   */
  "clusterName"?: string;
  /**
   * A valid Oracle Grid Infrastructure (GI) software version.
   */
  "giVersion"?: string;
  /**
   * Grid Setup will be done using this grid image id
   */
  "gridImageId"?: string;
  /**
   * The type of Grid Image
   */
  "gridImageType"?: ExadbVmCluster.GridImageType;
  /**
   * Operating system version of the image.
   */
  "systemVersion"?: string;
  /**
   * The public key portion of one or more key pairs used for SSH access to the Exadata VM cluster on Exascale Infrastructure.
   */
  "sshPublicKeys": Array<string>;
  /**
   * The Oracle license model that applies to the Exadata VM cluster on Exascale Infrastructure. The default is BRING_YOUR_OWN_LICENSE.
   *
   */
  "licenseModel"?: ExadbVmCluster.LicenseModel;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Single Client Access Name (SCAN) IP addresses associated with the Exadata VM cluster on Exascale Infrastructure.
   * SCAN IP addresses are typically used for load balancing and are not assigned to any interface.
   * Oracle Clusterware directs the requests to the appropriate nodes in the cluster.
   * <p>
   **Note:** For a single-node DB system, this list is empty.
   *
   */
  "scanIpIds"?: Array<string>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the virtual IP (VIP) addresses associated with the Exadata VM cluster on Exascale Infrastructure.
   * The Cluster Ready Services (CRS) creates and maintains one VIP address for each node in the Exadata Cloud Service instance to
   * enable failover. If one node fails, then the VIP is reassigned to another active node in the cluster.
   *
   */
  "vipIds"?: Array<string>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the DNS record for the SCAN IP addresses that are associated with the Exadata VM cluster on Exascale Infrastructure.
   *
   */
  "scanDnsRecordId"?: string;
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
   * The FQDN of the DNS record for the SCAN IP addresses that are associated with the Exadata VM cluster on Exascale Infrastructure.
   *
   */
  "scanDnsName"?: string;
  /**
   * The OCID of the zone with which the Exadata VM cluster on Exascale Infrastructure is associated.
   *
   */
  "zoneId"?: string;
  /**
   * The TCP Single Client Access Name (SCAN) port. The default port is 1521. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "scanListenerPortTcp"?: number;
  /**
   * The Secured Communication (TCPS) protocol Single Client Access Name (SCAN) port. The default port is 2484.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "scanListenerPortTcpSsl"?: number;
  /**
   * The private zone ID in which you want DNS records to be created.
   *
   */
  "privateZoneId"?: string;
  "dataCollectionOptions"?: model.DataCollectionOptions;
  /**
   * The number of Total ECPUs for an Exadata VM cluster on Exascale Infrastructure.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalECpuCount": number;
  /**
   * The number of ECPUs to enable for an Exadata VM cluster on Exascale Infrastructure.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "enabledECpuCount": number;
  "vmFileSystemStorage": model.ExadbVmClusterStorageDetails;
  "snapshotFileSystemStorage"?: model.ExadbVmClusterStorageDetails;
  "totalFileSystemStorage"?: model.ExadbVmClusterStorageDetails;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Exadata Database Storage Vault.
   */
  "exascaleDbStorageVaultId": string;
  /**
   * The memory that you want to be allocated in GBs. Memory is calculated based on 11 GB per VM core reserved.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memorySizeInGBs"?: number;
}

export namespace ExadbVmCluster {
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

  export enum GridImageType {
    ReleaseUpdate = "RELEASE_UPDATE",
    CustomImage = "CUSTOM_IMAGE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ExadbVmCluster): object {
    const jsonObj = {
      ...obj,
      ...{
        "iormConfigCache": obj.iormConfigCache
          ? model.ExadataIormConfig.getJsonObj(obj.iormConfigCache)
          : undefined,

        "dataCollectionOptions": obj.dataCollectionOptions
          ? model.DataCollectionOptions.getJsonObj(obj.dataCollectionOptions)
          : undefined,

        "vmFileSystemStorage": obj.vmFileSystemStorage
          ? model.ExadbVmClusterStorageDetails.getJsonObj(obj.vmFileSystemStorage)
          : undefined,
        "snapshotFileSystemStorage": obj.snapshotFileSystemStorage
          ? model.ExadbVmClusterStorageDetails.getJsonObj(obj.snapshotFileSystemStorage)
          : undefined,
        "totalFileSystemStorage": obj.totalFileSystemStorage
          ? model.ExadbVmClusterStorageDetails.getJsonObj(obj.totalFileSystemStorage)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExadbVmCluster): object {
    const jsonObj = {
      ...obj,
      ...{
        "iormConfigCache": obj.iormConfigCache
          ? model.ExadataIormConfig.getDeserializedJsonObj(obj.iormConfigCache)
          : undefined,

        "dataCollectionOptions": obj.dataCollectionOptions
          ? model.DataCollectionOptions.getDeserializedJsonObj(obj.dataCollectionOptions)
          : undefined,

        "vmFileSystemStorage": obj.vmFileSystemStorage
          ? model.ExadbVmClusterStorageDetails.getDeserializedJsonObj(obj.vmFileSystemStorage)
          : undefined,
        "snapshotFileSystemStorage": obj.snapshotFileSystemStorage
          ? model.ExadbVmClusterStorageDetails.getDeserializedJsonObj(obj.snapshotFileSystemStorage)
          : undefined,
        "totalFileSystemStorage": obj.totalFileSystemStorage
          ? model.ExadbVmClusterStorageDetails.getDeserializedJsonObj(obj.totalFileSystemStorage)
          : undefined
      }
    };

    return jsonObj;
  }
}
