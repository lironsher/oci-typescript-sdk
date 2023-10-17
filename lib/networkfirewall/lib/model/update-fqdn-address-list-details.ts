/**
 * Network Firewall API
 * Use the Network Firewall API to create network firewalls and configure policies that regulates network traffic in and across VCNs.
 * OpenAPI spec version: 20230501
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
 * The request details to be updated in the address List for the policy.
 */
export interface UpdateFqdnAddressListDetails extends model.UpdateAddressListDetails {
  /**
   * List of FQDN addresses.
   */
  "addresses": Array<string>;

  "type": string;
}

export namespace UpdateFqdnAddressListDetails {
  export function getJsonObj(obj: UpdateFqdnAddressListDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateAddressListDetails.getJsonObj(obj) as UpdateFqdnAddressListDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "FQDN";
  export function getDeserializedJsonObj(
    obj: UpdateFqdnAddressListDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateAddressListDetails.getDeserializedJsonObj(
            obj
          ) as UpdateFqdnAddressListDetails)),
      ...{}
    };

    return jsonObj;
  }
}
