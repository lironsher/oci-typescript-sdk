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
 * Request data required to clone a network firewall policy.
 */
export interface ApplyNetworkFirewallPolicyDetails {
  /**
   * Ordered priority list of firewall OCIDs on which the update needs to be applied in given order. If the list is a subset of the firewalls attached, then given firewalls would be deployed first with the change, followed by remaining firewalls.
   */
  "firewalls"?: Array<string>;
}

export namespace ApplyNetworkFirewallPolicyDetails {
  export function getJsonObj(obj: ApplyNetworkFirewallPolicyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ApplyNetworkFirewallPolicyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
