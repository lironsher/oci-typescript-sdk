/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

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

export interface CreateServiceGatewayDetails {
  /**
   * The [OCID] (https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment to contain the service gateway.
   *
   */
  "compartmentId": string;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
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
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
    * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the route table the service gateway will use.
* <p>
If you don't specify a route table here, the service gateway is created without an associated route
* table. The Networking service does NOT automatically associate the attached VCN's default route table
* with the service gateway.
* <p>
For information about why you would associate a route table with a service gateway, see
* [Transit Routing: Private Access to Oracle Services](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/transitroutingoracleservices.htm).
* 
    */
  "routeTableId"?: string;
  /**
    * List of the OCIDs of the {@link Service} objects to
* enable for the service gateway. This list can be empty if you don't want to enable any
* {@code Service} objects when you create the gateway. You can enable a {@code Service}
* object later by using either {@link #attachServiceId(AttachServiceIdRequest) attachServiceId}
* or {@link #updateServiceGateway(UpdateServiceGatewayRequest) updateServiceGateway}.
* <p>
For each enabled {@code Service}, make sure there's a route rule with the {@code Service} object's {@code cidrBlock}
* as the rule's destination and the service gateway as the rule's target. See
* {@link RouteTable}.
* 
    */
  "services": Array<model.ServiceIdRequestDetails>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VCN.
   *
   */
  "vcnId": string;
}

export namespace CreateServiceGatewayDetails {
  export function getJsonObj(obj: CreateServiceGatewayDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "services": obj.services
          ? obj.services.map(item => {
              return model.ServiceIdRequestDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateServiceGatewayDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "services": obj.services
          ? obj.services.map(item => {
              return model.ServiceIdRequestDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
