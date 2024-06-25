/**
 *
 *
 * OpenAPI spec version: 20230518
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/databasemigration/ListWorkRequestErrors.ts.html |here} to see how to use ListWorkRequestErrorsRequest.
 */
export interface ListWorkRequestErrorsRequest extends common.BaseRequest {
  /**
   * The ID of the asynchronous request.
   *
   */
  "workRequestId": string;
  /**
   * The maximum number of items to return.
   *
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   *
   */
  "page"?: string;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timestamp is descending.
   *
   */
  "sortBy"?: ListWorkRequestErrorsRequest.SortBy;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   *
   */
  "sortOrder"?: model.SortOrders;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListWorkRequestErrorsRequest {
  export enum SortBy {
    Timestamp = "timestamp"
  }
}
