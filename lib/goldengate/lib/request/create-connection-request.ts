/**
 *
 *
 * OpenAPI spec version: 20200407
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/goldengate/CreateConnection.ts.html |here} to see how to use CreateConnectionRequest.
 */
export interface CreateConnectionRequest extends common.BaseRequest {
  /**
   * Specification of the Connection to create.
   *
   */
  "createConnectionDetails":
    | model.CreatePostgresqlConnectionDetails
    | model.CreateKafkaSchemaRegistryConnectionDetails
    | model.CreateMicrosoftSqlserverConnectionDetails
    | model.CreateJavaMessageServiceConnectionDetails
    | model.CreateGoogleBigQueryConnectionDetails
    | model.CreateAmazonKinesisConnectionDetails
    | model.CreateSnowflakeConnectionDetails
    | model.CreateAzureDataLakeStorageConnectionDetails
    | model.CreateMongoDbConnectionDetails
    | model.CreateAmazonS3ConnectionDetails
    | model.CreateHdfsConnectionDetails
    | model.CreateOciObjectStorageConnectionDetails
    | model.CreateDb2ConnectionDetails
    | model.CreateElasticsearchConnectionDetails
    | model.CreateAzureSynapseConnectionDetails
    | model.CreateRedisConnectionDetails
    | model.CreateMysqlConnectionDetails
    | model.CreateGenericConnectionDetails
    | model.CreateGoogleCloudStorageConnectionDetails
    | model.CreateKafkaConnectionDetails
    | model.CreateOracleConnectionDetails
    | model.CreateGoldenGateConnectionDetails
    | model.CreateAmazonRedshiftConnectionDetails
    | model.CreateOracleNosqlConnectionDetails;
  /**
   * A token that uniquely identifies a request so it can be retried, in case of a timeout or server error,
   * without the risk of executing that same action again. Retry tokens expire after 24 hours but can be
   * invalidated before then due to conflicting operations. For example, if a resource was deleted and purged
   * from the system, then a retry of the original creation request is rejected.
   *
   */
  "opcRetryToken"?: string;
  /**
   * The client request ID for tracing.
   *
   */
  "opcRequestId"?: string;
}
