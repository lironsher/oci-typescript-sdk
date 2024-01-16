/**
 * Identity and Access Management Service API
 * Use the Identity and Access Management Service API to manage users, groups, identity domains, compartments, policies, tagging, and limits. For information about managing users, groups, compartments, and policies, see [Identity and Access Management (without identity domains)](/iaas/Content/Identity/Concepts/overview.htm). For information about tagging and service limits, see [Tagging](/iaas/Content/Tagging/Concepts/taggingoverview.htm) and [Service Limits](/iaas/Content/General/Concepts/servicelimits.htm). For information about creating, modifying, and deleting identity domains, see [Identity and Access Management (with identity domains)](/iaas/Content/Identity/home.htm).
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

export interface UpdateNetworkSourceDetails {
  /**
   * The description you assign to the network source. Does not have to be unique, and it's changeable.
   */
  "description"?: string;
  /**
   * A list of allowed public IP addresses and CIDR ranges.
   *
   */
  "publicSourceList"?: Array<string>;
  /**
   * A list of allowed VCN OCID and IP range pairs.
   * Example:{@code \"vcnId\": \"ocid1.vcn.oc1.iad.aaaaaaaaexampleuniqueID\", \"ipRanges\": [ \"129.213.39.0/24\" ]}
   *
   */
  "virtualSourceList"?: Array<model.NetworkSourcesVirtualSourceList>;
  /**
   * -- The services attribute has no effect and is reserved for use by Oracle. --
   *
   */
  "services"?: Array<string>;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateNetworkSourceDetails {
  export function getJsonObj(obj: UpdateNetworkSourceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "virtualSourceList": obj.virtualSourceList
          ? obj.virtualSourceList.map(item => {
              return model.NetworkSourcesVirtualSourceList.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateNetworkSourceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "virtualSourceList": obj.virtualSourceList
          ? obj.virtualSourceList.map(item => {
              return model.NetworkSourcesVirtualSourceList.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
