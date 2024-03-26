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
 * The configuration details for creating a backend set in a network load balancer.
 * For more information about backend set configuration, see
 * [Managing Backend Sets](https://docs.cloud.oracle.com/Content/NetworkLoadBalancer/BackendSets/backend-set-management.htm).
 * <p>
 **Caution:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface CreateBackendSetDetails {
  /**
    * A user-friendly name for the backend set that must be unique and cannot be changed.
* <p>
Valid backend set names include only alphanumeric characters, dashes, and underscores. Backend set names cannot
* contain spaces. Avoid entering confidential information.
* <p>
Example: {@code example_backend_set}
* 
    */
  "name": string;
  /**
    * The network load balancer policy for the backend set.
* <p>
Example: {@code FIVE_TUPLE}
* 
    */
  "policy": model.NetworkLoadBalancingPolicy;
  /**
   * If this parameter is enabled, then the network load balancer preserves the source IP of the packet when it is forwarded to backends.
   * Backends see the original source IP. If the isPreserveSourceDestination parameter is enabled for the network load balancer resource, then this parameter cannot be disabled.
   * The value is true by default.
   *
   */
  "isPreserveSource"?: boolean;
  /**
   * IP version associated with the backend set.
   */
  "ipVersion"?: model.IpVersion;
  /**
   * An array of backends to be associated with the backend set.
   */
  "backends"?: Array<model.BackendDetails>;
  "healthChecker": model.HealthCheckerDetails;
}

export namespace CreateBackendSetDetails {
  export function getJsonObj(obj: CreateBackendSetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "backends": obj.backends
          ? obj.backends.map(item => {
              return model.BackendDetails.getJsonObj(item);
            })
          : undefined,
        "healthChecker": obj.healthChecker
          ? model.HealthCheckerDetails.getJsonObj(obj.healthChecker)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateBackendSetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "backends": obj.backends
          ? obj.backends.map(item => {
              return model.BackendDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "healthChecker": obj.healthChecker
          ? model.HealthCheckerDetails.getDeserializedJsonObj(obj.healthChecker)
          : undefined
      }
    };

    return jsonObj;
  }
}
