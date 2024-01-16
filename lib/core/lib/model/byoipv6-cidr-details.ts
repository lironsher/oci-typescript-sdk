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
 * The list of one or more BYOIPv6 prefixes for the VCN that meets the following criteria:
 * - The prefix must be from a BYOIPv6 range.
 * - The IPv6 prefixes must be valid.
 * - Multiple prefix must not overlap each other or the on-premises network prefix.
 * - The number of prefixes must not exceed the limit of IPv6 prefixes allowed to a VCN.
 *
 */
export interface Byoipv6CidrDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the {@code ByoipRange} resource to which the CIDR block belongs.
   */
  "byoipv6RangeId": string;
  /**
   * An IPv6 prefix required to create a VCN with a BYOIP prefix. It could be the whole prefix identified in {@code byoipv6RangeId}, or a subrange.
   * Example: {@code 2001:0db8:0123::/48}
   *
   */
  "ipv6CidrBlock": string;
}

export namespace Byoipv6CidrDetails {
  export function getJsonObj(obj: Byoipv6CidrDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Byoipv6CidrDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
