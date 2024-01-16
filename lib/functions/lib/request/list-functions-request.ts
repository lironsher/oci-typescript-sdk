/**
 *
 *
 * OpenAPI spec version: 20181201
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/functions/ListFunctions.ts.html |here} to see how to use ListFunctionsRequest.
 */
export interface ListFunctionsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the application to which this function belongs.
   *
   */
  "applicationId": string;
  /**
 * The maximum number of items to return. 1 is the minimum, 50 is the maximum.
* <p>
Default: 10
* 
 */
  "limit"?: number;
  /**
   * The pagination token for a list query returned by a previous operation
   *
   */
  "page"?: string;
  /**
   * The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * A filter to return only functions that match the lifecycle state in this parameter.
   * Example: {@code Creating}
   *
   */
  "lifecycleState"?: string;
  /**
   * A filter to return only functions with display names that match the display name string. Matching is exact.
   *
   */
  "displayName"?: string;
  /**
   * A filter to return only functions with the specified OCID.
   *
   */
  "id"?: string;
  /**
   * Specifies sort order.
   * <p>
   * **ASC:** Ascending sort order.
   * * **DESC:** Descending sort order.
   *
   */
  "sortOrder"?: ListFunctionsRequest.SortOrder;
  /**
 * Specifies the attribute with which to sort the rules.
* <p>
Default: {@code displayName}
* <p>
* **timeCreated:** Sorts by timeCreated.
* * **displayName:** Sorts by displayName.
* * **id:** Sorts by id.
* 
 */
  "sortBy"?: ListFunctionsRequest.SortBy;
}

export namespace ListFunctionsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    Id = "id",
    DisplayName = "displayName"
  }
}
