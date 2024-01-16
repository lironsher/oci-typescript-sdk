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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datasafe/ListDatabaseTableAccessEntries.ts.html |here} to see how to use ListDatabaseTableAccessEntriesRequest.
 */
export interface ListDatabaseTableAccessEntriesRequest extends common.BaseRequest {
  /**
   * The OCID of the security policy report resource.
   */
  "securityPolicyReportId": string;
  /**
   * For list pagination. The maximum number of items to return per page in a paginated \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "limit"?: number;
  /**
   * For list pagination. The page token representing the page at which to start retrieving results. It is usually retrieved from a previous \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "page"?: string;
  /**
   * The scimQuery query parameter accepts filter expressions that use the syntax described in Section 3.2.2.2
   * of the System for Cross-Domain Identity Management (SCIM) specification, which is available
   * at [RFC3339](https://tools.ietf.org/html/draft-ietf-scim-api-12). In SCIM filtering expressions,
   * text, date, and time values must be enclosed in quotation marks, with date and time values using ISO-8601 format.
   * (Numeric and boolean values should not be quoted.)
   * <p>
   **Example:** query=(accessType eq 'SELECT') and (grantee eq 'ADMIN')
   *
   */
  "scimQuery"?: string;
  /**
   * The field to sort by. Only one sort parameter should be provided.
   *
   */
  "sortBy"?: ListDatabaseTableAccessEntriesRequest.SortBy;
  /**
   * The sort order to use, either ascending (ASC) or descending (DESC).
   */
  "sortOrder"?: ListDatabaseTableAccessEntriesRequest.SortOrder;
  /**
   * Unique identifier for the request.
   */
  "opcRequestId"?: string;
}

export namespace ListDatabaseTableAccessEntriesRequest {
  export enum SortBy {
    Key = "key",
    Grantee = "grantee",
    AccessType = "accessType",
    TableSchema = "tableSchema",
    TableName = "tableName",
    PrivilegeType = "privilegeType",
    Privilege = "privilege",
    PrivilegeGrantable = "privilegeGrantable",
    GrantFromRole = "grantFromRole",
    AccessThroughObject = "accessThroughObject",
    ColumnName = "columnName",
    Grantor = "grantor",
    AreAllTablesAccessible = "areAllTablesAccessible",
    IsAccessConstrainedByView = "isAccessConstrainedByView",
    IsAccessConstrainedByLabelSecurity = "isAccessConstrainedByLabelSecurity",
    IsAccessConstrainedByDatabaseVault = "isAccessConstrainedByDatabaseVault",
    IsAccessConstrainedByVirtualPrivateDatabase = "isAccessConstrainedByVirtualPrivateDatabase",
    IsAccessConstrainedByRedaction = "isAccessConstrainedByRedaction",
    IsAccessConstrainedByRealApplicationSecurity = "isAccessConstrainedByRealApplicationSecurity",
    IsAccessConstrainedBySqlFirewall = "isAccessConstrainedBySqlFirewall",
    IsSensitive = "isSensitive"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
