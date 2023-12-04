/**
 * Oracle Cloud VMware Solution API
 * Use the Oracle Cloud VMware API to create SDDCs and manage ESXi hosts and software. 
For more information, see [Oracle Cloud VMware Solution](/iaas/Content/VMware/Concepts/ocvsoverview.htm).

 * OpenAPI spec version: 20230701
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
* An ESXi host is a node in a Cluster. At a minimum, each Cluster has 3 ESXi hosts
* that are used to implement a functioning VMware environment.
* <p>
In terms of implementation, an ESXi host is a Compute instance that
* is configured with the chosen bundle of VMware software.
* <p>
Notice that an `EsxiHost` object has its own OCID (`id`), and a separate
* attribute for the OCID of the Compute instance (`computeInstanceId`).
* 
*/
export interface EsxiHost {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the ESXi host.
   *
   */
  "id": string;
  /**
   * A descriptive name for the ESXi host. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the SDDC that the
   * ESXi host belongs to.
   *
   */
  "sddcId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Cluster that the
   * ESXi host belongs to.
   *
   */
  "clusterId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment that
   * contains the Cluster.
   *
   */
  "compartmentId"?: string;
  /**
   * In terms of implementation, an ESXi host is a Compute instance that
   * is configured with the chosen bundle of VMware software. The `computeInstanceId`
   * is the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of that Compute instance.
   *
   */
  "computeInstanceId"?: string;
  /**
    * The date and time the ESXi host was created, in the format defined by
* [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
  /**
   * The date and time the ESXi host was updated, in the format defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the ESXi host.
   */
  "lifecycleState"?: model.LifecycleStates;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the deleted ESXi Host with LeftOver billing cycle.
   *
   */
  "billingDonorHostId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the active ESXi Host to swap billing with current host.
   *
   */
  "swapBillingHostId"?: string;
  /**
   * Indicates whether this host is in the progress of billing continuation.
   *
   */
  "isBillingContinuationInProgress"?: boolean;
  /**
   * Indicates whether this host is in the progress of swapping billing.
   *
   */
  "isBillingSwappingInProgress"?: boolean;
  /**
   * The billing option currently used by the ESXi host.
   * {@link #listSupportedCommitments(ListSupportedCommitmentsRequest) listSupportedCommitments}.
   *
   */
  "currentCommitment": model.Commitment;
  /**
   * The billing option to switch to after the current billing cycle ends.
   * If `nextCommitment` is null or empty, `currentCommitment` continues to the next billing cycle.
   * {@link #listSupportedCommitments(ListSupportedCommitmentsRequest) listSupportedCommitments}.
   *
   */
  "nextCommitment": model.Commitment;
  /**
   * Current billing cycle end date. If the value in `currentCommitment` and `nextCommitment` are different, the value specified in `nextCommitment`
   * becomes the new `currentCommitment` when the `contractEndDate` is reached.
   * Example: `2016-08-25T21:10:29.600Z`
   *
   */
  "billingContractEndDate": Date;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the ESXi host that failed.
   *
   */
  "failedEsxiHostId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the ESXi host that
   * is created to replace the failed host.
   *
   */
  "replacementEsxiHostId"?: string;
  /**
   * The date and time when the new esxi host should start billing cycle.
   * [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2021-07-25T21:10:29.600Z`
   *
   */
  "gracePeriodEndDate"?: Date;
  /**
   * The version of VMware software that Oracle Cloud VMware Solution installed on the ESXi hosts.
   *
   */
  "vmwareSoftwareVersion": string;
  /**
   * The version of ESXi software that Oracle Cloud VMware Solution installed on the ESXi hosts.
   *
   */
  "esxiSoftwareVersion"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the ESXi host that
   * will be upgraded.
   *
   */
  "nonUpgradedEsxiHostId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the ESXi host that
   * is newly created to upgrade the original host.
   *
   */
  "upgradedReplacementEsxiHostId"?: string;
  /**
   * The availability domain of the ESXi host.
   *
   */
  "computeAvailabilityDomain": string;
  /**
   * The compute shape name of the ESXi host.
   * {@link #listSupportedHostShapes(ListSupportedHostShapesRequest) listSupportedHostShapes}.
   *
   */
  "hostShapeName": string;
  /**
   * The OCPU count of the ESXi host.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "hostOcpuCount"?: number;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Capacity Reservation.
   *
   */
  "capacityReservationId"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags": { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags": { [key: string]: { [key: string]: any } };
}

export namespace EsxiHost {
  export function getJsonObj(obj: EsxiHost): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EsxiHost): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
