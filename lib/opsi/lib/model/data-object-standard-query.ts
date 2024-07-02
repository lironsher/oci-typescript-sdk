/**
 * Ops Insights API
 * Use the Ops Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Ops Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Information required to execute query on data objects. Query is given in standard SQL syntax providing flexibility
 * to form complex queries such as queries with joins and nested queries.
 *
 */
export interface DataObjectStandardQuery extends model.DataObjectQuery {
  /**
   * SQL query statement with standard Oracle supported SQL syntax.
   * - When Warehouse (e.g: Awr hub) data objects are queried, use the actual names of underlying data objects (e.g: tables, views) in the query.
   * The same query that works through JDBC connection with the OperationsInsightsWarehouseUsers credentials will work here and vice-versa.
   * SCHEMA.VIEW syntax can also be used here.
   * - When OPSI data objects are queried, use name of the respective OPSI data object, just like how views are used in a query.
   * Identifier of the OPSI data object cannot be used in the query.
   *
   */
  "statement"?: string;
  "timeFilters"?: model.DataObjectQueryTimeFilters;

  "queryType": string;
}

export namespace DataObjectStandardQuery {
  export function getJsonObj(obj: DataObjectStandardQuery, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataObjectQuery.getJsonObj(obj) as DataObjectStandardQuery)),
      ...{
        "timeFilters": obj.timeFilters
          ? model.DataObjectQueryTimeFilters.getJsonObj(obj.timeFilters)
          : undefined
      }
    };

    return jsonObj;
  }
  export const queryType = "STANDARD_QUERY";
  export function getDeserializedJsonObj(
    obj: DataObjectStandardQuery,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataObjectQuery.getDeserializedJsonObj(obj) as DataObjectStandardQuery)),
      ...{
        "timeFilters": obj.timeFilters
          ? model.DataObjectQueryTimeFilters.getDeserializedJsonObj(obj.timeFilters)
          : undefined
      }
    };

    return jsonObj;
  }
}
