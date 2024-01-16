/**
 *
 *
 * OpenAPI spec version: 20200430
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/dataintegration/ListDependentObjects.ts.html |here} to see how to use ListDependentObjectsRequest.
 */
export interface ListDependentObjectsRequest extends common.BaseRequest {
  /**
   * The workspace ID.
   */
  "workspaceId": string;
  /**
   * The application key.
   */
  "applicationKey": string;
  /**
   * Specifies the fields to get for an object.
   */
  "fields"?: Array<string>;
  /**
   * Used to filter by the name of the object.
   */
  "name"?: string;
  /**
   * This parameter can be used to filter objects by the names that match partially or fully with the given value.
   */
  "nameContains"?: string;
  /**
   * Used to filter by the identifier of the published object.
   *
   */
  "identifier"?: Array<string>;
  /**
   * Used to filter by the object type of the object.
   * It can be suffixed with an optional filter operator InSubtree.
   * For Data Integration APIs, a filter based on type Task is used.
   *
   */
  "type"?: Array<string>;
  /**
   * Used in association with type parameter. If value is true,
   * then type all sub types of the given type parameter is considered.
   * If value is false, then sub types are not considered. Default is false.
   *
   */
  "typeInSubtree"?: string;
  /**
   * Sets the maximum number of results per page, or items to return in a paginated {@code List} call. See [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "limit"?: number;
  /**
   * For list pagination. The value for this parameter is the {@code opc-next-page} or the {@code opc-prev-page} response header from the previous {@code List} call. See [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "page"?: string;
  /**
   * Specifies sort order to use, either {@code ASC} (ascending) or {@code DESC} (descending).
   */
  "sortOrder"?: ListDependentObjectsRequest.SortOrder;
  /**
   * Specifies the field to sort by. Accepts only one field. By default, when you sort by time fields, results are shown in descending order. All other fields default to ascending order. Sorting related parameters are ignored when parameter {@code query} is present (search operation and sorting order is by relevance score in descending order).
   */
  "sortBy"?: ListDependentObjectsRequest.SortBy;
  /**
   * Unique Oracle-assigned identifier for the request. If
   * you need to contact Oracle about a particular request,
   * please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListDependentObjectsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeCreated = "TIME_CREATED",
    DisplayName = "DISPLAY_NAME",
    TimeUpdated = "TIME_UPDATED"
  }
}
