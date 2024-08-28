/**
 * Fleet Application Management Service API
 * Fleet Application Management Service API. Use this API to for all FAMS related activities.
To manage fleets,view complaince report for the Fleet,scedule patches and other lifecycle activities

 * OpenAPI spec version: 20230831
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
 * The details of the task.
 */
export interface AssociatedSharedTaskDetails extends model.AssociatedTaskDetails {
  /**
   * The ID of taskRecord.
   */
  "taskRecordId": string;

  "scope": string;
}

export namespace AssociatedSharedTaskDetails {
  export function getJsonObj(obj: AssociatedSharedTaskDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AssociatedTaskDetails.getJsonObj(obj) as AssociatedSharedTaskDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const scope = "SHARED";
  export function getDeserializedJsonObj(
    obj: AssociatedSharedTaskDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AssociatedTaskDetails.getDeserializedJsonObj(obj) as AssociatedSharedTaskDetails)),
      ...{}
    };

    return jsonObj;
  }
}
