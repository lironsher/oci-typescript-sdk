/**
 * Compute Cloud@Customer API
 * Use the Compute Cloud@Customer API to manage Compute Cloud@Customer infrastructures and upgrade schedules.
For more information see [Compute Cloud@Customer documentation](/iaas/compute-cloud-at-customer/home.htm).

 * OpenAPI spec version: 20221208
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
 * Dynamic routing information for the Compute Cloud@Customer infrastructure.
 *
 */
export interface CccInfrastructureRoutingDynamicDetails {
  /**
   * The list of peer devices in the dynamic routing configuration.
   */
  "peerInformation"?: Array<model.PeerInformation>;
  /**
   * The Oracle Autonomous System Number (ASN) to control routing and exchange information
   * within the dynamic routing configuration.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "oracleAsn"?: number;
  /**
   * The topology in use for the Border Gateway Protocol (BGP) configuration.
   *
   */
  "bgpTopology"?: CccInfrastructureRoutingDynamicDetails.BgpTopology;
}

export namespace CccInfrastructureRoutingDynamicDetails {
  export enum BgpTopology {
    Triangle = "TRIANGLE",
    Square = "SQUARE",
    Mesh = "MESH",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CccInfrastructureRoutingDynamicDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "peerInformation": obj.peerInformation
          ? obj.peerInformation.map(item => {
              return model.PeerInformation.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CccInfrastructureRoutingDynamicDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "peerInformation": obj.peerInformation
          ? obj.peerInformation.map(item => {
              return model.PeerInformation.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
