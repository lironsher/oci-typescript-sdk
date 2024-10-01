/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
 * The configuration details for creating a load balancer.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface CreateLoadBalancerDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment in which to create the load balancer.
   */
  "compartmentId": string;
  /**
    * A user-friendly name. It does not have to be unique, and it is changeable.
* Avoid entering confidential information.
* <p>
Example: {@code example_load_balancer}
* 
    */
  "displayName": string;
  /**
    * A template that determines the total pre-provisioned bandwidth (ingress plus egress).
* To get a list of available shapes, use the {@link #listShapes(ListShapesRequest) listShapes}
* operation.
* <p>
Example: {@code flexible}
* NOTE: After May 2023, Fixed shapes - 10Mbps, 100Mbps, 400Mbps, 8000Mbps would be deprecated and only shape
*       allowed would be {@code Flexible}
* 
    */
  "shapeName": string;
  /**
   * The configuration details to create load balancer using Flexible shape. This is required only if shapeName is {@code Flexible}.
   *
   */
  "shapeDetails"?: model.ShapeDetails;
  /**
    * Whether the load balancer has a VCN-local (private) IP address.
* <p>
If \"true\", the service assigns a private IP address to the load balancer.
* <p>
If \"false\", the service assigns a public IP address to the load balancer.
* <p>
A public load balancer is accessible from the internet, depending on your VCN's
* [security list rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securitylists.htm). For more information about public and
* private load balancers, see [How Load Balancing Works](https://docs.cloud.oracle.com/Content/Balance/Concepts/balanceoverview.htm#how-load-balancing-works).
* <p>
Example: {@code true}
* 
    */
  "isPrivate"?: boolean;
  /**
    * Whether or not the load balancer has delete protection enabled.
* <p>
If \"true\", the loadbalancer will be protected against deletion if configured to accept traffic.
* <p>
If \"false\", the loadbalancer will not be protected against deletion.
* <p>
Delete protection will not be enabled unless a value of \"true\" is provided.
* Example: {@code true}
* 
    */
  "isDeleteProtectionEnabled"?: boolean;
  /**
    * Whether the load balancer has an IPv4 or IPv6 IP address.
* <p>
If \"IPV4\", the service assigns an IPv4 address and the load balancer supports IPv4 traffic.
* <p>
If \"IPV6\", the service assigns an IPv6 address and the load balancer supports IPv6 traffic.
* <p>
Example: \"ipMode\":\"IPV6\"
* 
    */
  "ipMode"?: CreateLoadBalancerDetails.IpMode;
  /**
    * Whether or not the load balancer has the Request Id feature enabled for HTTP listeners.
* <p>
If \"true\", the load balancer will attach a unique request id header to every request
* passed through from the load balancer to load balancer backends. This same request id
* header also will be added to the response the lb received from the backend handling
* the request before the load balancer returns the response to the requestor. The name
* of the unique request id header is set the by value of requestIdHeader.
* <p>
If \"false\", the loadbalancer not add this unique request id header to either the request
* passed through to the load balancer backends nor to the reponse returned to the user.
* <p>
New load balancers have the Request Id feature disabled unless isRequestIdEnabled is set to true.
* <p>
Example: {@code true}
* 
    */
  "isRequestIdEnabled"?: boolean;
  /**
    * If isRequestIdEnabled is true then this field contains the name of the header field
* that contains the unique request id that is attached to every request from
* the load balancer to the load balancer backends and to every response from the load
* balancer.
* <p>
If a request to the load balancer already contains a header with same name as specified
* in requestIdHeader then the load balancer will not change the value of that field.
* <p>
If isRequestIdEnabled is false then this field is ignored.
* <p>
If this field is not set or is set to \"\" then this field defaults to X-Request-Id
* <p>
**Notes:**
* * Unless the header name is \"\" it must start with \"X-\" prefix.
* * Setting the header name to \"\" will set it to the default: X-Request-Id.
* 
    */
  "requestIdHeader"?: string;
  /**
   * An array of reserved Ips.
   *
   */
  "reservedIps"?: Array<model.ReservedIP>;
  "listeners"?: { [key: string]: model.ListenerDetails };
  "hostnames"?: { [key: string]: model.HostnameDetails };
  "backendSets"?: { [key: string]: model.BackendSetDetails };
  /**
    * An array of NSG [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) associated with this load balancer.
* <p>
During the load balancer's creation, the service adds the new load balancer to the specified NSGs.
* <p>
The benefits of using NSGs with the load balancer include:
* <p>
*  NSGs define network security rules to govern ingress and egress traffic for the load balancer.
* <p>
*  The network security rules of other resources can reference the NSGs associated with the load balancer
*    to ensure access.
* <p>
Example: {@code [\"ocid1.nsg.oc1.phx.unique_ID\"]}
* 
    */
  "networkSecurityGroupIds"?: Array<string>;
  /**
   * An array of subnet [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "subnetIds": Array<string>;
  "certificates"?: { [key: string]: model.CertificateDetails };
  "sslCipherSuites"?: { [key: string]: model.SSLCipherSuiteDetails };
  "pathRouteSets"?: { [key: string]: model.PathRouteSetDetails };
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * Extended Defined tags for ZPR for this resource. Each key is predefined and scoped to a namespace.
* <p>
Example: {@code {\"Oracle-ZPR\": {\"MaxEgressCount\": {\"value\":\"42\",\"mode\":\"audit\", \"usagetype\" : \"zpr\"}}}}
* 
    */
  "zprTags"?: { [key: string]: { [key: string]: any } };
  "ruleSets"?: { [key: string]: model.RuleSetDetails };
}

export namespace CreateLoadBalancerDetails {
  export enum IpMode {
    Ipv4 = "IPV4",
    Ipv6 = "IPV6"
  }

  export function getJsonObj(obj: CreateLoadBalancerDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "shapeDetails": obj.shapeDetails
          ? model.ShapeDetails.getJsonObj(obj.shapeDetails)
          : undefined,

        "reservedIps": obj.reservedIps
          ? obj.reservedIps.map(item => {
              return model.ReservedIP.getJsonObj(item);
            })
          : undefined,
        "listeners": obj.listeners
          ? common.mapContainer(obj.listeners, model.ListenerDetails.getJsonObj)
          : undefined,
        "hostnames": obj.hostnames
          ? common.mapContainer(obj.hostnames, model.HostnameDetails.getJsonObj)
          : undefined,
        "backendSets": obj.backendSets
          ? common.mapContainer(obj.backendSets, model.BackendSetDetails.getJsonObj)
          : undefined,

        "certificates": obj.certificates
          ? common.mapContainer(obj.certificates, model.CertificateDetails.getJsonObj)
          : undefined,
        "sslCipherSuites": obj.sslCipherSuites
          ? common.mapContainer(obj.sslCipherSuites, model.SSLCipherSuiteDetails.getJsonObj)
          : undefined,
        "pathRouteSets": obj.pathRouteSets
          ? common.mapContainer(obj.pathRouteSets, model.PathRouteSetDetails.getJsonObj)
          : undefined,

        "ruleSets": obj.ruleSets
          ? common.mapContainer(obj.ruleSets, model.RuleSetDetails.getJsonObj)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateLoadBalancerDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "shapeDetails": obj.shapeDetails
          ? model.ShapeDetails.getDeserializedJsonObj(obj.shapeDetails)
          : undefined,

        "reservedIps": obj.reservedIps
          ? obj.reservedIps.map(item => {
              return model.ReservedIP.getDeserializedJsonObj(item);
            })
          : undefined,
        "listeners": obj.listeners
          ? common.mapContainer(obj.listeners, model.ListenerDetails.getDeserializedJsonObj)
          : undefined,
        "hostnames": obj.hostnames
          ? common.mapContainer(obj.hostnames, model.HostnameDetails.getDeserializedJsonObj)
          : undefined,
        "backendSets": obj.backendSets
          ? common.mapContainer(obj.backendSets, model.BackendSetDetails.getDeserializedJsonObj)
          : undefined,

        "certificates": obj.certificates
          ? common.mapContainer(obj.certificates, model.CertificateDetails.getDeserializedJsonObj)
          : undefined,
        "sslCipherSuites": obj.sslCipherSuites
          ? common.mapContainer(
              obj.sslCipherSuites,
              model.SSLCipherSuiteDetails.getDeserializedJsonObj
            )
          : undefined,
        "pathRouteSets": obj.pathRouteSets
          ? common.mapContainer(obj.pathRouteSets, model.PathRouteSetDetails.getDeserializedJsonObj)
          : undefined,

        "ruleSets": obj.ruleSets
          ? common.mapContainer(obj.ruleSets, model.RuleSetDetails.getDeserializedJsonObj)
          : undefined
      }
    };

    return jsonObj;
  }
}
