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
 * Source of the database entity. CRUD operations for Autonomous and MACS managed databases all route through DBaaS.
 **/
export enum DatabaseEntitySource {
  EmManagedExternalDatabase = "EM_MANAGED_EXTERNAL_DATABASE",
  PeComanagedDatabase = "PE_COMANAGED_DATABASE",
  MdsMysqlDatabaseSystem = "MDS_MYSQL_DATABASE_SYSTEM",
  MacsManagedCloudDatabase = "MACS_MANAGED_CLOUD_DATABASE"
}

export namespace DatabaseEntitySource {
  export function getJsonObj(obj: DatabaseEntitySource): DatabaseEntitySource {
    return obj;
  }
  export function getDeserializedJsonObj(obj: DatabaseEntitySource): DatabaseEntitySource {
    return obj;
  }
}
