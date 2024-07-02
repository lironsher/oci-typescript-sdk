/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Configure the time slot for applying VM cloud automation software updates to the cluster. When nothing is selected, the default time slot is 12 AM to 2 AM UTC. Any 2-hour slot is available starting at 12 AM.
 *
 */
export interface CloudAutomationApplyUpdateTimePreference {
  /**
   * Start time for polling VM cloud automation software updates for the cluster. If the startTime is not specified, 12 AM UTC is used by default.
   *
   */
  "applyUpdatePreferredStartTime"?: string;
  /**
   * End time for polling VM cloud automation software updates for the cluster. If the endTime is not specified, 2 AM UTC is used by default.
   *
   */
  "applyUpdatePreferredEndTime"?: string;
}

export namespace CloudAutomationApplyUpdateTimePreference {
  export function getJsonObj(obj: CloudAutomationApplyUpdateTimePreference): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CloudAutomationApplyUpdateTimePreference): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
