/**
 * Generative AI Agents Management API
 * **Generative AI Agents API**


OCI Generative AI Agents is a fully managed service that combines the power of large language models (LLMs) with an intelligent retrieval system to create contextually relevant answers by searching your knowledge base, making your AI applications smart and efficient.

OCI Generative AI Agents supports several ways to onboard your data and then allows you and your customers to interact with your data using a chat interface or API.

Use the Generative AI Agents API to create and manage agents, knowledge bases, data sources, endpoints, data ingestion jobs, and work requests.

For creating and managing client chat sessions see the [Generative AI Agents Client API](#/EN/generative-ai-agents-client/latest/).

To learn more about the service, see the [Generative AI Agents documentation](/iaas/Content/generative-ai-agents/home.htm).

 * OpenAPI spec version: 20240531
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
* **DataIngestionJob**
* <p>
When you create a data source, you specify the location of the data files. To make those files usable by an agent, you must download them into the agent's associated knowledge base, a process known as data ingestion. Data ingestion is a process that extracts data from data source documents, converts it into a structured format suitable for analysis, and then stores it in a knowledge base.
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see [Getting Started with Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/policiesgs/get-started-with-policies.htm).
* 
*/
export interface DataIngestionJob {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the DataIngestionJob.
   */
  "id": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   */
  "displayName": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the parent DataSource.
   */
  "dataSourceId": string;
  "dataIngestionJobStatistics": model.DataIngestionJobStatistics;
  /**
    * The date and time the data ingestion job was created, in the format defined by [RFC 3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeCreated": Date;
  /**
    * The date and time the data ingestion job was updated, in the format defined by [RFC 3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeUpdated"?: Date;
  /**
   * The current state of the data ingestion job.
   */
  "lifecycleState": DataIngestionJob.LifecycleState;
  /**
   * A message that describes the current state of the data ingestion job in more detail. For example,
   * can be used to provide actionable information for a resource in the Failed state.
   *
   */
  "lifecycleDetails"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags": { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
    * System tags for this resource. Each key is predefined and scoped to a namespace.
* <p>
Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DataIngestionJob {
  export enum LifecycleState {
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Waiting = "WAITING",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DataIngestionJob): object {
    const jsonObj = {
      ...obj,
      ...{
        "dataIngestionJobStatistics": obj.dataIngestionJobStatistics
          ? model.DataIngestionJobStatistics.getJsonObj(obj.dataIngestionJobStatistics)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataIngestionJob): object {
    const jsonObj = {
      ...obj,
      ...{
        "dataIngestionJobStatistics": obj.dataIngestionJobStatistics
          ? model.DataIngestionJobStatistics.getDeserializedJsonObj(obj.dataIngestionJobStatistics)
          : undefined
      }
    };

    return jsonObj;
  }
}
