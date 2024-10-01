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
 * Network load balancer object to be used for list operations.
 */
export interface NetworkLoadBalancerSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network load balancer.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment containing the network load balancer.
   */
  "compartmentId": string;
  /**
    * A user-friendly name, which does not have to be unique, and can be changed.
* <p>
Example: {@code example_load_balancer}
* 
    */
  "displayName": string;
  /**
   * The current state of the network load balancer.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * A message describing the current state in more detail.
   * For example, can be used to provide actionable information for a resource in Failed state.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * IP version associated with the NLB.
   */
  "nlbIpVersion"?: model.NlbIpVersion;
  /**
    * The date and time the network load balancer was created, in the format defined by RFC3339.
* <p>
Example: {@code 2020-05-01T21:10:29.600Z}
* 
    */
  "timeCreated": Date;
  /**
    * The time the network load balancer was updated. An RFC3339 formatted date-time string.
* <p>
Example: {@code 2020-05-01T22:10:29.600Z}
* 
    */
  "timeUpdated"?: Date;
  /**
   * An array of IP addresses.
   *
   */
  "ipAddresses": Array<model.IpAddress>;
  /**
    * Whether the network load balancer has a virtual cloud network-local (private) IP address.
* <p>
If \"true\", then the service assigns a private IP address to the network load balancer.
* <p>
If \"false\", then the service assigns a public IP address to the network load balancer.
* <p>
A public network load balancer is accessible from the internet, depending the
* [security list rules](https://docs.cloud.oracle.com/Content/network/Concepts/securitylists.htm) for your virtual cloudn network. For more information about public and
* private network load balancers,
* see [How Network Load Balancing Works](https://docs.cloud.oracle.com/Content/Balance/Concepts/balanceoverview.htm#how-network-load-balancing-works).
* This value is true by default.
* <p>
Example: {@code true}
* 
    */
  "isPrivate"?: boolean;
  /**
   * When enabled, the skipSourceDestinationCheck parameter is automatically enabled on the load balancer VNIC.
   * Packets are sent to the backend set without any changes to the source and destination IP.
   *
   */
  "isPreserveSourceDestination"?: boolean;
  /**
   * This can only be enabled when NLB is working in transparent mode with source destination header preservation enabled.
   * This removes the additional dependency from NLB backends(like Firewalls) to perform SNAT.
   *
   */
  "isSymmetricHashEnabled"?: boolean;
  /**
   * The subnet in which the network load balancer is spawned [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "subnetId": string;
  /**
    * An array of network security groups [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) associated with the network load
* balancer.
* <p>
During the creation of the network load balancer, the service adds the new load balancer to the specified network security groups.
* <p>
The benefits of associating the network load balancer with network security groups include:
* <p>
*  Network security groups define network security rules to govern ingress and egress traffic for the network load balancer.
* <p>
*  The network security rules of other resources can reference the network security groups associated with the network load balancer
*    to ensure access.
* <p>
Example: [\"ocid1.nsg.oc1.phx.unique_ID\"]
* 
    */
  "networkSecurityGroupIds"?: Array<string>;
  /**
   * Listeners associated with the network load balancer.
   */
  "listeners"?: { [key: string]: model.Listener };
  /**
   * Backend sets associated with the network load balancer.
   */
  "backendSets"?: { [key: string]: model.BackendSet };
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * ZPR tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code { \"oracle-zpr\": { \"td\": { \"value\": \"42\", \"mode\": \"audit\" } } }}
* 
    */
  "securityAttributes"?: { [key: string]: { [key: string]: any } };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Key-value pair representing system tags' keys and values scoped to a namespace.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace NetworkLoadBalancerSummary {
  export function getJsonObj(obj: NetworkLoadBalancerSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "ipAddresses": obj.ipAddresses
          ? obj.ipAddresses.map(item => {
              return model.IpAddress.getJsonObj(item);
            })
          : undefined,

        "listeners": obj.listeners
          ? common.mapContainer(obj.listeners, model.Listener.getJsonObj)
          : undefined,
        "backendSets": obj.backendSets
          ? common.mapContainer(obj.backendSets, model.BackendSet.getJsonObj)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NetworkLoadBalancerSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "ipAddresses": obj.ipAddresses
          ? obj.ipAddresses.map(item => {
              return model.IpAddress.getDeserializedJsonObj(item);
            })
          : undefined,

        "listeners": obj.listeners
          ? common.mapContainer(obj.listeners, model.Listener.getDeserializedJsonObj)
          : undefined,
        "backendSets": obj.backendSets
          ? common.mapContainer(obj.backendSets, model.BackendSet.getDeserializedJsonObj)
          : undefined
      }
    };

    return jsonObj;
  }
}
