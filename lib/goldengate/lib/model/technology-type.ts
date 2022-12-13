/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The technology type.
 *
 **/
export enum TechnologyType {
  Goldengate = "GOLDENGATE",
  OciAutonomousDatabase = "OCI_AUTONOMOUS_DATABASE",
  OciMysql = "OCI_MYSQL",
  OciObjectStorage = "OCI_OBJECT_STORAGE",
  OciStreaming = "OCI_STREAMING",
  OracleDatabase = "ORACLE_DATABASE",
  OracleExadata = "ORACLE_EXADATA",
  AmazonRdsOracle = "AMAZON_RDS_ORACLE",
  AmazonAuroraMysql = "AMAZON_AURORA_MYSQL",
  AmazonAuroraPostgresql = "AMAZON_AURORA_POSTGRESQL",
  AmazonRdsMariadb = "AMAZON_RDS_MARIADB",
  AmazonRdsMysql = "AMAZON_RDS_MYSQL",
  AmazonRdsPostgresql = "AMAZON_RDS_POSTGRESQL",
  ApacheKafka = "APACHE_KAFKA",
  AzureDataLakeStorage = "AZURE_DATA_LAKE_STORAGE",
  AzureEventHubs = "AZURE_EVENT_HUBS",
  AzureMysql = "AZURE_MYSQL",
  AzurePostgresql = "AZURE_POSTGRESQL",
  AzureSynapseAnalytics = "AZURE_SYNAPSE_ANALYTICS",
  ConfluentKafka = "CONFLUENT_KAFKA",
  ConfluentSchemaRegistry = "CONFLUENT_SCHEMA_REGISTRY",
  GoogleCloudSqlMysql = "GOOGLE_CLOUD_SQL_MYSQL",
  GoogleCloudSqlPostgresql = "GOOGLE_CLOUD_SQL_POSTGRESQL",
  Mariadb = "MARIADB",
  MysqlServer = "MYSQL_SERVER",
  PostgresqlServer = "POSTGRESQL_SERVER"
}

export namespace TechnologyType {
  export function getJsonObj(obj: TechnologyType): TechnologyType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: TechnologyType): TechnologyType {
    return obj;
  }
}
