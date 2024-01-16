/**
 *
 *
 * OpenAPI spec version: 20181231
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/cims/ListIncidents.ts.html |here} to see how to use ListIncidentsRequest.
 */
export interface ListIncidentsRequest extends common.BaseRequest {
  /**
   * The OCID of the tenancy.
   */
  "compartmentId": string;
  /**
   * The Customer Support Identifier (CSI) associated with the support account.
   */
  "csi"?: string;
  /**
   * For list pagination. The maximum number of results per page, or items to return in a paginated \"List\" call. For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "limit"?: number;
  /**
   * The key to use to sort the returned items.
   */
  "sortBy"?: model.SortBy;
  /**
   * The order to sort the results in.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The current state of the ticket.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * For list pagination. The value of the {@code opc-next-page} response header from the previous \"List\" call. For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   */
  "opcRequestId"?: string;
  /**
   * User OCID for Oracle Identity Cloud Service (IDCS) users who also have a federated Oracle Cloud Infrastructure account.
   */
  "ocid"?: string;
  /**
   * The region of the tenancy.
   */
  "homeregion"?: string;
  /**
   * The kind of support request.
   */
  "problemType"?: string;
  /**
   * Token type that determine which cloud provider the request come from.
   */
  "bearertokentype"?: string;
  /**
   * Token that provided by multi cloud provider, which help to validate the email.
   */
  "bearertoken"?: string;
  /**
   * IdToken that provided by multi cloud provider, which help to validate the email.
   */
  "idtoken"?: string;
  /**
   * The OCID of identity domain.
   */
  "domainid"?: string;
}
