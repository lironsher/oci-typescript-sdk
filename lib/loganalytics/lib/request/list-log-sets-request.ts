/**
 *
 *
 * OpenAPI spec version: 20200601
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loganalytics/ListLogSets.ts.html |here} to see how to use ListLogSetsRequest.
 */
export interface ListLogSetsRequest extends common.BaseRequest {
  /**
   * The Logging Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending ({@code ASC}) or descending ({@code DESC}).
   *
   */
  "sortOrder"?: ListLogSetsRequest.SortOrder;
  /**
   * If this filter is present, each of the logsets returned must contain the value of this filter.
   *
   */
  "logSetNameContains"?: Array<string>;
}

export namespace ListLogSetsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
