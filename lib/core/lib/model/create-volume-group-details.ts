/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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

export interface CreateVolumeGroupDetails {
  /**
   * The availability domain of the volume group.
   */
  "availabilityDomain": string;
  /**
   * If provided, specifies the ID of the volume backup policy to assign to the newly
   * created volume group. If omitted, no policy will be assigned.
   *
   */
  "backupPolicyId"?: string;
  /**
   * The OCID of the compartment that contains the volume group.
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  "sourceDetails":
    | model.VolumeGroupSourceFromVolumeGroupReplicaDetails
    | model.VolumeGroupSourceFromVolumeGroupDetails
    | model.VolumeGroupSourceFromVolumesDetails
    | model.VolumeGroupSourceFromVolumeGroupBackupDetails;
  /**
   * The list of volume group replicas that this volume group will be enabled to have
   * in the specified destination availability domains.
   *
   */
  "volumeGroupReplicas"?: Array<model.VolumeGroupReplicaDetails>;
  /**
   * The clusterPlacementGroup Id of the volume group for volume group placement.
   */
  "clusterPlacementGroupId"?: string;
  /**
   * The OCID of the Vault service key which is the master encryption key for the volume's cross region backups, which will be used in the destination region to encrypt the backup's encryption keys.
   * For more information about the Vault service and encryption keys, see
   * [Overview of Vault service](https://docs.cloud.oracle.com/iaas/Content/KeyManagement/Concepts/keyoverview.htm) and
   * [Using Keys](https://docs.cloud.oracle.com/iaas/Content/KeyManagement/Tasks/usingkeys.htm).
   *
   */
  "xrcKmsKeyId"?: string;
}

export namespace CreateVolumeGroupDetails {
  export function getJsonObj(obj: CreateVolumeGroupDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceDetails": obj.sourceDetails
          ? model.VolumeGroupSourceDetails.getJsonObj(obj.sourceDetails)
          : undefined,
        "volumeGroupReplicas": obj.volumeGroupReplicas
          ? obj.volumeGroupReplicas.map(item => {
              return model.VolumeGroupReplicaDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateVolumeGroupDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceDetails": obj.sourceDetails
          ? model.VolumeGroupSourceDetails.getDeserializedJsonObj(obj.sourceDetails)
          : undefined,
        "volumeGroupReplicas": obj.volumeGroupReplicas
          ? obj.volumeGroupReplicas.map(item => {
              return model.VolumeGroupReplicaDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
