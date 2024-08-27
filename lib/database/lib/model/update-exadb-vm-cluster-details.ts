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
 * Details for updating the Exadata VM cluster on Exascale Infrastructure. Applies to Exadata Database Service on Exascale Infrastructure only.
 *
 */
export interface UpdateExadbVmClusterDetails {
  /**
   * The user-friendly name for the Exadata VM cluster on Exascale Infrastructure. The name does not need to be unique.
   */
  "displayName"?: string;
  /**
   * The number of Total ECPUs for an Exadata VM cluster on Exascale Infrastructure.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalECpuCount"?: number;
  /**
   * The number of ECPUs to enable for an Exadata VM cluster on Exascale Infrastructure.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "enabledECpuCount"?: number;
  "vmFileSystemStorage"?: model.ExadbVmClusterStorageDetails;
  /**
   * The number of nodes to be added in the Exadata VM cluster on Exascale Infrastructure.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nodeCount"?: number;
  /**
   * The Oracle license model that applies to the Exadata VM cluster on Exascale Infrastructure. The default is BRING_YOUR_OWN_LICENSE.
   *
   */
  "licenseModel"?: UpdateExadbVmClusterDetails.LicenseModel;
  /**
   * The public key portion of one or more key pairs used for SSH access to the Exadata VM cluster on Exascale Infrastructure.
   */
  "sshPublicKeys"?: Array<string>;
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
  "dataCollectionOptions"?: model.DataCollectionOptions;
  /**
   * Operating system version of the image.
   */
  "systemVersion"?: string;
  /**
    * Grid Setup will be done using this grid image id.
* <p>
The grid image id can be extracted from
* 1. Obtain the supported major versions using API /20160918/giVersions?compartmentId=<compartmentId>&shape=EXADB_XS&availabilityDomain=<AD name>
* 2. Replace {version} with one of the supported major versions and obtain the supported minor versions using 
* API /20160918/giVersions/{version}/minorVersions?compartmentId=<compartmentId>&shapeFamily=EXADB_XS&availabilityDomain=<AD name>
* 
    */
  "gridImageId"?: string;
  /**
   * The update action.
   */
  "updateAction"?: UpdateExadbVmClusterDetails.UpdateAction;
}

export namespace UpdateExadbVmClusterDetails {
  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE"
  }

  export enum UpdateAction {
    RollingApply = "ROLLING_APPLY",
    NonRollingApply = "NON_ROLLING_APPLY",
    Precheck = "PRECHECK",
    Rollback = "ROLLBACK"
  }

  export function getJsonObj(obj: UpdateExadbVmClusterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "vmFileSystemStorage": obj.vmFileSystemStorage
          ? model.ExadbVmClusterStorageDetails.getJsonObj(obj.vmFileSystemStorage)
          : undefined,

        "dataCollectionOptions": obj.dataCollectionOptions
          ? model.DataCollectionOptions.getJsonObj(obj.dataCollectionOptions)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateExadbVmClusterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "vmFileSystemStorage": obj.vmFileSystemStorage
          ? model.ExadbVmClusterStorageDetails.getDeserializedJsonObj(obj.vmFileSystemStorage)
          : undefined,

        "dataCollectionOptions": obj.dataCollectionOptions
          ? model.DataCollectionOptions.getDeserializedJsonObj(obj.dataCollectionOptions)
          : undefined
      }
    };

    return jsonObj;
  }
}
