/**
 * NetworkLoadBalancer API
 * This describes the network load balancer API.
 * OpenAPI spec version: 20200501
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
 * The configuration of the listener.
 * For more information about listener configuration, see
 * [Managing Load Balancer Listeners](https://docs.cloud.oracle.com/Content/NetworkLoadBalancer/Listeners/listener-management.htm).
 *
 */
export interface ListenerSummary {
  /**
    * A friendly name for the listener. It must be unique and it cannot be changed.
* <p>
Example: {@code example_listener}
* 
    */
  "name": string;
  /**
    * The name of the associated backend set.
* <p>
Example: {@code example_backend_set}
* 
    */
  "defaultBackendSetName": string;
  /**
    * The communication port for the listener.
* <p>
Example: {@code 80}
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "port": number;
  /**
    * The protocol on which the listener accepts connection requests.
* For public network load balancers, ANY protocol refers to TCP/UDP with the wildcard port.
* For private network load balancers, ANY protocol refers to TCP/UDP/ICMP (note that ICMP requires isPreserveSourceDestination to be set to true).
* \"ListNetworkLoadBalancersProtocols\" API is deprecated and it will not return the updated values. Use the allowed values for the protocol instead.
* <p>
Example: {@code TCP}
* 
    */
  "protocol": model.ListenerProtocols;
  /**
   * IP version associated with the listener.
   */
  "ipVersion"?: model.IpVersion;
  /**
   * Property to enable/disable PPv2 feature for this listener.
   */
  "isPpv2Enabled"?: boolean;
}

export namespace ListenerSummary {
  export function getJsonObj(obj: ListenerSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ListenerSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
