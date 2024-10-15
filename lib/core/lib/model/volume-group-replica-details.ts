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

/**
 * Contains the details for the volume group replica.
 */
export interface VolumeGroupReplicaDetails {
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * The availability domain of the volume group replica.
* <p>
Example: {@code Uocm:PHX-AD-1}
* 
    */
  "availabilityDomain": string;
  /**
   * The OCID of the Vault service key which is the master encryption key for the cross region volume group's replicas, which will be used in the destination region to encrypt the volume group's replicas encryption keys.
   * For more information about the Vault service and encryption keys, see
   * [Overview of Vault service](https://docs.cloud.oracle.com/iaas/Content/KeyManagement/Concepts/keyoverview.htm) and
   * [Using Keys](https://docs.cloud.oracle.com/iaas/Content/KeyManagement/Tasks/usingkeys.htm).
   *
   */
  "xrrKmsKeyId"?: string;
}

export namespace VolumeGroupReplicaDetails {
  export function getJsonObj(obj: VolumeGroupReplicaDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VolumeGroupReplicaDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
