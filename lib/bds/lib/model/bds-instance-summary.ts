/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
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
 * Summary details of the Big Data Service cluster.
 */
export interface BdsInstanceSummary {
  /**
   * The OCID of the Big Data Service resource.
   */
  "id": string;
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * The name of the cluster.
   */
  "displayName": string;
  /**
   * The state of the cluster.
   */
  "lifecycleState": string;
  /**
   * The number of nodes that form the cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numberOfNodes": number;
  /**
   * Number of nodes that require a maintenance reboot Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numberOfNodesRequiringMaintenanceReboot"?: number;
  /**
   * Version of the Hadoop distribution.
   */
  "clusterVersion"?: string;
  /**
   * Boolean flag specifying whether or not the cluster is highly available(HA).
   */
  "isHighAvailability": boolean;
  /**
   * Boolean flag specifying whether or not the cluster should be set up as secure.
   */
  "isSecure": boolean;
  /**
   * Boolean flag specifying whether Cloud SQL is configured or not.
   */
  "isCloudSqlConfigured": boolean;
  /**
   * Boolean flag specifying whether Kafka is configured or not.
   */
  "isKafkaConfigured": boolean;
  /**
   * Profile of the Big Data Service cluster.
   */
  "clusterProfile"?: string;
  /**
   * The time the cluster was created, shown as an RFC 3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope.
   * Exists for cross-compatibility only. For example, {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For example, {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace BdsInstanceSummary {
  export function getJsonObj(obj: BdsInstanceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BdsInstanceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
