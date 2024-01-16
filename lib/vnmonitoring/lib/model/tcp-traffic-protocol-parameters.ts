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

/**
 * Defines the {@code TrafficProtocolParameters} configuration for the TCP protocol.
 */
export interface TcpTrafficProtocolParameters extends model.TrafficProtocolParameters {
  /**
   * The source port to use in a {@code PathAnalyzerTest}. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sourcePort"?: number;
  /**
   * The destination port to use in a {@code PathAnalyzerTest}. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "destinationPort": number;

  "type": string;
}

export namespace TcpTrafficProtocolParameters {
  export function getJsonObj(obj: TcpTrafficProtocolParameters, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TrafficProtocolParameters.getJsonObj(obj) as TcpTrafficProtocolParameters)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "TCP";
  export function getDeserializedJsonObj(
    obj: TcpTrafficProtocolParameters,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TrafficProtocolParameters.getDeserializedJsonObj(
            obj
          ) as TcpTrafficProtocolParameters)),
      ...{}
    };

    return jsonObj;
  }
}
