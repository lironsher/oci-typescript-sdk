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
 * An asynchronous replica of a block volume that can then be used to create
 * a new block volume or recover a block volume. For more information, see [Overview
 * of Cross-Region Volume Replication](https://docs.cloud.oracle.com/iaas/Content/Block/Concepts/volumereplication.htm)
 * To use any of the API operations, you must be authorized in an IAM policy.
 * If you're not authorized, talk to an administrator. If you're an administrator
 * who needs to write policies to give users access, see [Getting Started with
 * Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you
 * supply string values using the API.
 *
 */
export interface BlockVolumeReplica {
  /**
    * The availability domain of the block volume replica.
* <p>
Example: {@code Uocm:PHX-AD-1}
* 
    */
  "availabilityDomain": string;
  /**
   * The OCID of the compartment that contains the block volume replica.
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
  "displayName": string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The block volume replica's Oracle ID (OCID).
   */
  "id": string;
  /**
   * The current state of a block volume replica.
   */
  "lifecycleState": BlockVolumeReplica.LifecycleState;
  /**
   * The size of the source block volume, in GBs.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInGBs": number;
  /**
   * The date and time the block volume replica was created. Format defined
   * by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeCreated": Date;
  /**
   * The date and time the block volume replica was last synced from the source block volume.
   * Format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeLastSynced": Date;
  /**
   * The OCID of the source block volume.
   */
  "blockVolumeId": string;
  /**
   * The total size of the data transferred from the source block volume to the block volume replica, in GBs.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalDataTransferredInGBs"?: number;
  /**
   * The OCID of the volume group replica.
   *
   */
  "volumeGroupReplicaId"?: string;
  /**
   * The OCID of the Vault service key to assign as the master encryption key for the block volume replica, see
   * [Overview of Vault service](https://docs.cloud.oracle.com/iaas/Content/KeyManagement/Concepts/keyoverview.htm) and
   * [Using Keys](https://docs.cloud.oracle.com/iaas/Content/KeyManagement/Tasks/usingkeys.htm).
   *
   */
  "kmsKeyId"?: string;
}

export namespace BlockVolumeReplica {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Activating = "ACTIVATING",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Faulty = "FAULTY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: BlockVolumeReplica): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BlockVolumeReplica): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
