/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * A job execution is a unit of work being executed on behalf of a job.
 */
export interface JobExecution {
  /**
   * Unique key of the job execution resource.
   */
  "key": string;
  /**
   * The unique key of the parent job.
   */
  "jobKey"?: string;
  /**
   * Type of the job execution.
   */
  "jobType"?: model.JobType;
  /**
   * Sub-type of this job execution.
   */
  "subType"?: string;
  /**
   * The unique key of the parent execution or null if this job execution has no parent.
   */
  "parentKey"?: string;
  /**
   * The unique key of the triggering external scheduler resource or null if this job execution is not externally triggered.
   */
  "scheduleInstanceKey"?: string;
  /**
   * Status of the job execution, such as running, paused, or completed.
   */
  "lifecycleState"?: model.JobExecutionState;
  /**
   * The date and time the job execution was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: {@code 2019-03-25T21:10:29.600Z}
   *
   */
  "timeCreated"?: Date;
  /**
   * Time that job execution started. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeStarted"?: Date;
  /**
   * Time that the job execution ended or null if it hasn't yet completed.
   * An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   *
   */
  "timeEnded"?: Date;
  /**
   * Error code returned from the job execution or null if job is still running or didn't return an error.
   *
   */
  "errorCode"?: string;
  /**
   * Error message returned from the job execution or null if job is still running or didn't return an error.
   *
   */
  "errorMessage"?: string;
  /**
   * Process identifier related to the job execution if the job is an external job.
   */
  "processKey"?: string;
  /**
   * If the job is an external process, then a URL of the job for accessing this resource and its status.
   *
   */
  "externalUrl"?: string;
  /**
   * An identifier used for log message correlation.
   *
   */
  "eventKey"?: string;
  /**
   * The key of the associated data entity resource.
   */
  "dataEntityKey"?: string;
  /**
   * OCID of the user who created the job execution.
   */
  "createdById"?: string;
  /**
   * OCID of the user who updated the job execution.
   */
  "updatedBy"?: string;
  /**
   * URI to the job execution instance in the API.
   */
  "uri"?: string;
  /**
   * A map of maps that contains the execution context properties which are specific to a job execution. Each job
   * execution may define it's set of required and optional properties. The map keys are category names and the
   * values are maps of property name to property value. Every property is contained inside of a category. Most
   * job executions have required properties within the \"default\" category.
   * Example: {@code {\"properties\": { \"default\": { \"host\": \"host1\", \"port\": \"1521\", \"database\": \"orcl\"}}}}
   *
   */
  "properties"?: { [key: string]: { [key: string]: string } };
}

export namespace JobExecution {
  export function getJsonObj(obj: JobExecution): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JobExecution): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
