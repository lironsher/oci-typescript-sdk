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
 * Reqeust for creating Security Rule used in the firewall policy rules.
 * Security Rules determine whether to block or allow a session based on traffic attributes,
 * such as  the source and destination IP address, protocol/port, and the HTTP(S) target URL.
 *
 */
export interface CreateSecurityRuleDetails {
  /**
   * Name for the Security rule, must be unique within the policy.
   */
  "name": string;
  "condition": model.SecurityRuleMatchCriteria;
  /**
   * Types of Action on the Traffic flow.
   * <p>
   * ALLOW - Allows the traffic.
   *   * DROP - Silently drops the traffic, e.g. without sending a TCP reset.
   *   * REJECT - Rejects the traffic, sending a TCP reset to client and/or server as applicable.
   *   * INSPECT - Inspects traffic for vulnerability as specified in `inspection`, which may result in rejection.
   *
   */
  "action": model.TrafficActionType;
  /**
   * Type of inspection to affect the Traffic flow. This is only applicable if action is INSPECT.
   * <p>
   * INTRUSION_DETECTION - Intrusion Detection.
   *   * INTRUSION_PREVENTION - Intrusion Detection and Prevention. Traffic classified as potentially malicious will be rejected as described in `type`.
   *
   */
  "inspection"?: model.TrafficInspectionType;
  "position"?: model.RulePosition;
}

export namespace CreateSecurityRuleDetails {
  export function getJsonObj(obj: CreateSecurityRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "condition": obj.condition
          ? model.SecurityRuleMatchCriteria.getJsonObj(obj.condition)
          : undefined,

        "position": obj.position ? model.RulePosition.getJsonObj(obj.position) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateSecurityRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "condition": obj.condition
          ? model.SecurityRuleMatchCriteria.getDeserializedJsonObj(obj.condition)
          : undefined,

        "position": obj.position
          ? model.RulePosition.getDeserializedJsonObj(obj.position)
          : undefined
      }
    };

    return jsonObj;
  }
}
