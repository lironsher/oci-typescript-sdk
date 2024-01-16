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

export interface UpdateVnicDetails {
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
  /**
    * The hostname for the VNIC's primary private IP. Used for DNS. The value is the hostname
* portion of the primary private IP's fully qualified domain name (FQDN)
* (for example, {@code bminstance1} in FQDN {@code bminstance1.subnet123.vcn1.oraclevcn.com}).
* Must be unique across all VNICs in the subnet and comply with
* [RFC 952](https://tools.ietf.org/html/rfc952) and
* [RFC 1123](https://tools.ietf.org/html/rfc1123).
* The value appears in the {@link Vnic} object and also the
* {@link PrivateIp} object returned by
* {@link #listPrivateIps(ListPrivateIpsRequest) listPrivateIps} and
* {@link #getPrivateIp(GetPrivateIpRequest) getPrivateIp}.
* <p>
For more information, see
* [DNS in Your Virtual Cloud Network](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/dns.htm).
* 
    */
  "hostnameLabel"?: string;
  /**
    * A list of the OCIDs of the network security groups (NSGs) to add the VNIC to. Setting this as
* an empty array removes the VNIC from all network security groups.
* <p>
If the VNIC belongs to a VLAN as part of the Oracle Cloud VMware Solution (instead of
* belonging to a subnet), the value of the {@code nsgIds} attribute is ignored. Instead, the
* VNIC belongs to the NSGs that are associated with the VLAN itself. See {@link Vlan}.
* <p>
For more information about NSGs, see
* {@link NetworkSecurityGroup}.
* 
    */
  "nsgIds"?: Array<string>;
  /**
    * Whether the source/destination check is disabled on the VNIC.
* Defaults to {@code false}, which means the check is performed. For information about why you would
* skip the source/destination check, see
* [Using a Private IP as a Route Target](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/managingroutetables.htm#privateip).
* <p>
If the VNIC belongs to a VLAN as part of the Oracle Cloud VMware Solution (instead of
* belonging to a subnet), the value of the {@code skipSourceDestCheck} attribute is ignored.
* This is because the source/destination check is always disabled for VNICs in a VLAN.
* Example: {@code true}
* 
    */
  "skipSourceDestCheck"?: boolean;
}

export namespace UpdateVnicDetails {
  export function getJsonObj(obj: UpdateVnicDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateVnicDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
