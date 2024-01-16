/**
 * GovernanceRulesControlPlane API
 * A description of the GovernanceRulesControlPlane API
 * OpenAPI spec version: 20220504
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
 * A summary of the governance rule.
 */
export interface GovernanceRuleSummary {
  /**
   * The Oracle ID ([OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)) of the governance rule.
   */
  "id": string;
  /**
   * The Oracle ID ([OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)) of the root compartment containing the governance rule.
   */
  "compartmentId": string;
  /**
   * Display name of the governance rule.
   */
  "displayName": string;
  /**
    * Type of the governance rule, can be one of QUOTA, TAG, ALLOWED_REGIONS.
* <p>
Example: {@code QUOTA}
* 
    */
  "type": model.GovernanceRuleType;
  /**
    * The type of option used to create the governance rule, could be one of TEMPLATE or CLONE.
* <p>
Example: {@code TEMPLATE}
* 
    */
  "creationOption": model.CreationOption;
  /**
    * Date and time the governance rule was created. An RFC3339 formatted datetime string.
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeCreated": Date;
  /**
    * Date and time the governance rule was updated. An RFC3339 formatted datetime string.
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeUpdated": Date;
  /**
   * The current state of the governance rule.
   */
  "lifecycleState": model.GovernanceRuleLifecycleState;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags": { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace GovernanceRuleSummary {
  export function getJsonObj(obj: GovernanceRuleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GovernanceRuleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
