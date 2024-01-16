/**
 *
 *
 * OpenAPI spec version: 20200531
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/logging/ListLogGroups.ts.html |here} to see how to use ListLogGroupsRequest.
 */
export interface ListLogGroupsRequest extends common.BaseRequest {
  /**
   * Compartment OCID to list resources in. See compartmentIdInSubtree
   *      for nested compartments traversal.
   *
   */
  "compartmentId": string;
  /**
   * Specifies whether or not nested compartments should be traversed. Defaults to false.
   */
  "isCompartmentIdInSubtree"?: boolean;
  /**
   * Resource name.
   */
  "displayName"?: string;
  /**
   * For list pagination. The value of the {@code opc-next-page} or {@code opc-previous-page} response header from the previous \"List\" call.
   * For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * The maximum number of items to return in a paginated \"List\" call.
   *
   */
  "limit"?: number;
  /**
   * The field to sort by (one column only). Default sort order is
   * ascending exception of {@code timeCreated} and {@code timeLastModified} columns (descending).
   *
   */
  "sortBy"?: ListLogGroupsRequest.SortBy;
  /**
   * The sort order to use, whether 'asc' or 'desc'.
   *
   */
  "sortOrder"?: ListLogGroupsRequest.SortOrder;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about
   * a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListLogGroupsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
