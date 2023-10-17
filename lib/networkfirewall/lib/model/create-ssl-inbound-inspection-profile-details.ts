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
 * Request for creating SSLInboundInspection used on the firewall policy rules.
 */
export interface CreateSslInboundInspectionProfileDetails
  extends model.CreateDecryptionProfileDetails {
  /**
   * Whether to block sessions if SSL version is not supported.
   */
  "isUnsupportedVersionBlocked"?: boolean;
  /**
   * Whether to block sessions if SSL cipher suite is not supported.
   */
  "isUnsupportedCipherBlocked"?: boolean;
  /**
   * Whether to block sessions if the firewall is temporarily unable to decrypt their traffic.
   */
  "isOutOfCapacityBlocked"?: boolean;

  "type": string;
}

export namespace CreateSslInboundInspectionProfileDetails {
  export function getJsonObj(
    obj: CreateSslInboundInspectionProfileDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDecryptionProfileDetails.getJsonObj(
            obj
          ) as CreateSslInboundInspectionProfileDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "SSL_INBOUND_INSPECTION";
  export function getDeserializedJsonObj(
    obj: CreateSslInboundInspectionProfileDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDecryptionProfileDetails.getDeserializedJsonObj(
            obj
          ) as CreateSslInboundInspectionProfileDetails)),
      ...{}
    };

    return jsonObj;
  }
}
