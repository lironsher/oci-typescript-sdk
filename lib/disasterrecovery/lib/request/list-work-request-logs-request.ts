/**
 *
 *
 * OpenAPI spec version: 20220125
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/disasterrecovery/ListWorkRequestLogs.ts.html |here} to see how to use ListWorkRequestLogsRequest.
 */
export interface ListWorkRequestLogsRequest extends common.BaseRequest {
  /**
 * The ID (OCID) of the asynchronous request.
* <p>
Example: {@code ocid1.workrequest.oc1..uniqueID}
* 
 */
  "workRequestId": string;
  /**
   * The client request ID for tracing.
   *
   */
  "opcRequestId"?: string;
  /**
 * For list pagination. The value of the {@code opc-next-page} response
* header from the previous \"List\" call.
* <p>
For important details about how pagination works,
* see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* 
 */
  "page"?: string;
  /**
 * For list pagination. The maximum number of results per page,
* or items to return in a paginated \"List\" call.
* 1 is the minimum, 1000 is the maximum.
* <p>
For important details about how pagination works,
* see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: {@code 100}
* 
 */
  "limit"?: number;
  /**
   * The field to sort by. Only one sort order may be provided.
   * Default order for timeAccepted is descending.
   *
   */
  "sortBy"?: ListWorkRequestLogsRequest.SortBy;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   *
   */
  "sortOrder"?: model.SortOrder;
}

export namespace ListWorkRequestLogsRequest {
  export enum SortBy {
    TimeAccepted = "timeAccepted"
  }
}
