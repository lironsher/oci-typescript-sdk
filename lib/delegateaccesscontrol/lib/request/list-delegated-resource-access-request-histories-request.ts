/**
 *
 *
 * OpenAPI spec version: 20230801
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/delegateaccesscontrol/ListDelegatedResourceAccessRequestHistories.ts.html |here} to see how to use ListDelegatedResourceAccessRequestHistoriesRequest.
 */
export interface ListDelegatedResourceAccessRequestHistoriesRequest extends common.BaseRequest {
  /**
   * Unique Delegated Resource Access Request identifier
   */
  "delegatedResourceAccessRequestId": string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: model.SortOrders;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timestamp is descending. If no value is specified, timestamp is default.
   *
   */
  "sortBy"?: ListDelegatedResourceAccessRequestHistoriesRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListDelegatedResourceAccessRequestHistoriesRequest {
  export enum SortBy {
    Timestamp = "timestamp"
  }
}
