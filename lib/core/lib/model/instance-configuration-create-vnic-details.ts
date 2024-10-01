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
 * Contains the properties of the VNIC for an instance configuration. See {@link CreateVnicDetails}
 * and [Instance Configurations](https://docs.cloud.oracle.com/iaas/Content/Compute/Concepts/instancemanagement.htm#config) for more information.
 *
 */
export interface InstanceConfigurationCreateVnicDetails {
  /**
   * Whether to allocate an IPv6 address at instance and VNIC creation from an IPv6 enabled
   * subnet. Default: False. When provided you may optionally provide an IPv6 prefix
   * ({@code ipv6SubnetCidr}) of your choice to assign the IPv6 address from. If {@code ipv6SubnetCidr}
   * is not provided then an IPv6 prefix is chosen
   * for you.
   *
   */
  "assignIpv6Ip"?: boolean;
  /**
   * Whether the VNIC should be assigned a public IP address. See the {@code assignPublicIp} attribute of {@link CreateVnicDetails}
   * for more information.
   *
   */
  "assignPublicIp"?: boolean;
  /**
   * Whether the VNIC should be assigned a private DNS record. See the {@code assignPrivateDnsRecord} attribute of {@link CreateVnicDetails}
   * for more information.
   *
   */
  "assignPrivateDnsRecord"?: boolean;
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
    * Security Attributes for this resource. This is unique to ZPR, and helps identify which resources are allowed to be accessed by what permission controls.
* <p>
Example: {@code {\"Oracle-DataSecurity-ZPR\": {\"MaxEgressCount\": {\"value\":\"42\",\"mode\":\"audit\"}}}}
* 
    */
  "securityAttributes"?: { [key: string]: { [key: string]: any } };
  /**
   * A list of IPv6 prefixes from which the VNIC should be assigned an IPv6 address.
   * You can provide only the prefix and OCI selects an available
   * address from the range. You can optionally choose to leave the prefix range empty
   * and instead provide the specific IPv6 address that should be used from within that range.
   *
   */
  "ipv6AddressIpv6SubnetCidrPairDetails"?: Array<
    model.InstanceConfigurationIpv6AddressIpv6SubnetCidrPairDetails
  >;
  /**
   * The hostname for the VNIC's primary private IP.
   * See the {@code hostnameLabel} attribute of {@link CreateVnicDetails} for more information.
   *
   */
  "hostnameLabel"?: string;
  /**
   * A list of the OCIDs of the network security groups (NSGs) to add the VNIC to. For more
   * information about NSGs, see
   * {@link NetworkSecurityGroup}.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * A private IP address of your choice to assign to the VNIC.
   * See the {@code privateIp} attribute of {@link CreateVnicDetails} for more information.
   *
   */
  "privateIp"?: string;
  /**
   * Whether the source/destination check is disabled on the VNIC.
   * See the {@code skipSourceDestCheck} attribute of {@link CreateVnicDetails} for more information.
   *
   */
  "skipSourceDestCheck"?: boolean;
  /**
   * The OCID of the subnet to create the VNIC in.
   * See the {@code subnetId} attribute of {@link CreateVnicDetails} for more information.
   *
   */
  "subnetId"?: string;
}

export namespace InstanceConfigurationCreateVnicDetails {
  export function getJsonObj(obj: InstanceConfigurationCreateVnicDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "ipv6AddressIpv6SubnetCidrPairDetails": obj.ipv6AddressIpv6SubnetCidrPairDetails
          ? obj.ipv6AddressIpv6SubnetCidrPairDetails.map(item => {
              return model.InstanceConfigurationIpv6AddressIpv6SubnetCidrPairDetails.getJsonObj(
                item
              );
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstanceConfigurationCreateVnicDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "ipv6AddressIpv6SubnetCidrPairDetails": obj.ipv6AddressIpv6SubnetCidrPairDetails
          ? obj.ipv6AddressIpv6SubnetCidrPairDetails.map(item => {
              return model.InstanceConfigurationIpv6AddressIpv6SubnetCidrPairDetails.getDeserializedJsonObj(
                item
              );
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
