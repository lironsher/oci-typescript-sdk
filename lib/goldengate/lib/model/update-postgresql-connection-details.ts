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
 * The information to update a PostgreSQL Database Connection.
 *
 */
export interface UpdatePostgresqlConnectionDetails extends model.UpdateConnectionDetails {
  /**
   * The name of the database.
   *
   */
  "databaseName"?: string;
  /**
   * The name or address of a host.
   *
   */
  "host"?: string;
  /**
   * The port of an endpoint usually specified for a connection.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * The username Oracle GoldenGate uses to connect the associated RDBMS.  This username must
   * already exist and be available for use by the database.  It must conform to the security
   * requirements implemented by the database including length, case sensitivity, and so on.
   *
   */
  "username"?: string;
  /**
   * The password Oracle GoldenGate uses to connect the associated RDBMS.  It must conform to the
   * specific security requirements implemented by the database including length, case
   * sensitivity, and so on.
   *
   */
  "password"?: string;
  /**
   * An array of name-value pair attribute entries.
   * Used as additional parameters in connection string.
   *
   */
  "additionalAttributes"?: Array<model.NameValuePair>;
  /**
   * Security protocol for PostgreSQL.
   */
  "securityProtocol"?: string;
  /**
   * SSL modes for PostgreSQL.
   */
  "sslMode"?: string;
  /**
   * The base64 encoded certificate of the trusted certificate authorities (Trusted CA) for PostgreSQL.
   *
   */
  "sslCa"?: string;
  /**
   * The base64 encoded list of certificates revoked by the trusted certificate authorities (Trusted CA) for PostgreSQL.
   *
   */
  "sslCrl"?: string;
  /**
   * The base64 encoded certificate of the PostgreSQL server.
   *
   */
  "sslCert"?: string;
  /**
   * The base64 encoded private key of the PostgreSQL server.
   *
   */
  "sslKey"?: string;
  /**
   * The private IP address of the connection's endpoint in the customer's VCN, typically a
   * database endpoint or a big data endpoint (e.g. Kafka bootstrap server).
   * In case the privateIp is provided, the subnetId must also be provided.
   * In case the privateIp (and the subnetId) is not provided it is assumed the datasource is publicly accessible.
   * In case the connection is accessible only privately, the lack of privateIp will result in not being able to access the connection.
   *
   */
  "privateIp"?: string;

  "connectionType": string;
}

export namespace UpdatePostgresqlConnectionDetails {
  export function getJsonObj(
    obj: UpdatePostgresqlConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getJsonObj(obj) as UpdatePostgresqlConnectionDetails)),
      ...{
        "additionalAttributes": obj.additionalAttributes
          ? obj.additionalAttributes.map(item => {
              return model.NameValuePair.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const connectionType = "POSTGRESQL";
  export function getDeserializedJsonObj(
    obj: UpdatePostgresqlConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getDeserializedJsonObj(
            obj
          ) as UpdatePostgresqlConnectionDetails)),
      ...{
        "additionalAttributes": obj.additionalAttributes
          ? obj.additionalAttributes.map(item => {
              return model.NameValuePair.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
