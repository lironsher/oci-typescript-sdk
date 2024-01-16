/**
 *
 *
 * OpenAPI spec version: 20190301
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/secrets/ListSecretBundleVersions.ts.html |here} to see how to use ListSecretBundleVersionsRequest.
 */
export interface ListSecretBundleVersionsRequest extends common.BaseRequest {
  /**
   * The OCID of the secret.
   */
  "secretId": string;
  /**
   * Unique identifier for the request.
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return in a paginated \"List\" call. For information about pagination, see
   * [List Pagination](https://docs.cloud.oracle.com/#API/Concepts/usingapi.htm#List_Pagination).
   *
   */
  "limit"?: number;
  /**
   * The value of the {@code opc-next-page} response header from the previous \"List\" call. For information about
   * pagination, see [List Pagination](https://docs.cloud.oracle.com/#API/Concepts/usingapi.htm#List_Pagination).
   *
   */
  "page"?: string;
  /**
   * The field to sort by. You can specify only one sort order. The default
   * order for {@code VERSION_NUMBER} is descending.
   *
   */
  "sortBy"?: ListSecretBundleVersionsRequest.SortBy;
  /**
   * The sort order to use, either ascending ({@code ASC}) or descending ({@code DESC}).
   *
   */
  "sortOrder"?: ListSecretBundleVersionsRequest.SortOrder;
}

export namespace ListSecretBundleVersionsRequest {
  export enum SortBy {
    VersionNumber = "VERSION_NUMBER"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
