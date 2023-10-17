/**
 * Managed Access API
 * Use the Managed Access API to approve access requests, create and manage templates, and manage resource approval settings. For more information, see [Managed Access Overview](https://docs.oracle.com/iaas/Content/managed-access/home.htm).

Use the table of contents and search tool to explore the Managed Access API.

 * OpenAPI spec version: 20220126
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
 * Details for generating report of Access Requests to export action
 */
export interface ExportAccessRequestsDetails {
  /**
   * The unique identifier (OCID) of the lockbox box that the access request is associated with which is immutable.
   */
  "lockboxId": string;
  /**
   * Date and time after which access requests were created, as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339)
   */
  "timeCreatedAfter": Date;
  /**
   * Date and time before which access requests were created, as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339)s
   */
  "timeCreatedBefore": Date;
}

export namespace ExportAccessRequestsDetails {
  export function getJsonObj(obj: ExportAccessRequestsDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExportAccessRequestsDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
