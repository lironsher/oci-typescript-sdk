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
 * Represents an attachment between a VNIC and an instance. For more information, see
 * [Virtual Network Interface Cards (VNICs)](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/managingVNICs.htm).
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you
 * supply string values using the API.
 *
 */
export interface VnicAttachment {
  /**
    * The availability domain of the instance.
* <p>
Example: {@code Uocm:PHX-AD-1}
* 
    */
  "availabilityDomain": string;
  /**
   * The OCID of the compartment the VNIC attachment is in, which is the same
   * compartment the instance is in.
   *
   */
  "compartmentId": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The OCID of the VNIC attachment.
   */
  "id": string;
  /**
   * The OCID of the instance.
   */
  "instanceId": string;
  /**
   * The current state of the VNIC attachment.
   */
  "lifecycleState": VnicAttachment.LifecycleState;
  /**
   * Which physical network interface card (NIC) the VNIC uses.
   * Certain bare metal instance shapes have two active physical NICs (0 and 1). If
   * you add a secondary VNIC to one of these instances, you can specify which NIC
   * the VNIC will use. For more information, see
   * [Virtual Network Interface Cards (VNICs)](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/managingVNICs.htm).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nicIndex"?: number;
  /**
   * The OCID of the subnet to create the VNIC in.
   */
  "subnetId"?: string;
  /**
    * The OCID of the VLAN to create the VNIC in. Creating the VNIC in a VLAN (instead
* of a subnet) is possible only if you are an Oracle Cloud VMware Solution customer.
* See {@link Vlan}.
* <p>
An error is returned if the instance already has a VNIC attached to it from this VLAN.
* 
    */
  "vlanId"?: string;
  /**
    * The date and time the VNIC attachment was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeCreated": Date;
  /**
    * The Oracle-assigned VLAN tag of the attached VNIC. Available after the
* attachment process is complete.
* <p>
However, if the VNIC belongs to a VLAN as part of the Oracle Cloud VMware Solution,
* the {@code vlanTag} value is instead the value of the {@code vlanTag} attribute for the VLAN.
* See {@link Vlan}.
* <p>
Example: {@code 0}
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "vlanTag"?: number;
  /**
   * The OCID of the VNIC. Available after the attachment process is complete.
   *
   */
  "vnicId"?: string;
}

export namespace VnicAttachment {
  export enum LifecycleState {
    Attaching = "ATTACHING",
    Attached = "ATTACHED",
    Detaching = "DETACHING",
    Detached = "DETACHED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: VnicAttachment): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VnicAttachment): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
