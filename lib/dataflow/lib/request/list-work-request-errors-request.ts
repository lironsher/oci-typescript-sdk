/**
 *
 *
 * OpenAPI spec version: 20200129
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/dataflow/ListWorkRequestErrors.ts.html |here} to see how to use ListWorkRequestErrorsRequest.
 */
export interface ListWorkRequestErrorsRequest extends common.BaseRequest {
  /**
   * The unique ID for a work request.
   *
   */
  "workRequestId": string;
  /**
   * The maximum number of results to return in a paginated {@code List} call.
   *
   */
  "limit"?: number;
  /**
   * Unique identifier for the request. If provided, the returned request ID will include this value.
   * Otherwise, a random request ID will be generated by the service.
   *
   */
  "opcRequestId"?: string;
  /**
   * The value of the {@code opc-next-page} or {@code opc-prev-page} response header from the last {@code List} call
   * to sent back to server for getting the next page of results.
   *
   */
  "page"?: string;
}
