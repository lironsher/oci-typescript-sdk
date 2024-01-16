/**
 * Functions Service API
 * API for the Functions service.

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
 * Summary of the PbfListing.
 */
export interface PbfListingSummary {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * A brief descriptive name for the PBF listing. The PBF listing name must be unique, and not match and existing
   * PBF.
   *
   */
  "name": string;
  /**
   * A short overview of the PBF Listing: the purpose of the PBF and and associated information.
   */
  "description": string;
  "publisherDetails": model.PublisherDetails;
  /**
   * An array of Trigger. A list of triggers that may activate the PBF.
   */
  "triggers"?: Array<model.Trigger>;
  /**
   * The time the PbfListing was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The last time the PbfListing was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated": Date;
  /**
   * The current state of the PBF resource.
   */
  "lifecycleState": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace PbfListingSummary {
  export function getJsonObj(obj: PbfListingSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "publisherDetails": obj.publisherDetails
          ? model.PublisherDetails.getJsonObj(obj.publisherDetails)
          : undefined,
        "triggers": obj.triggers
          ? obj.triggers.map(item => {
              return model.Trigger.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PbfListingSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "publisherDetails": obj.publisherDetails
          ? model.PublisherDetails.getDeserializedJsonObj(obj.publisherDetails)
          : undefined,
        "triggers": obj.triggers
          ? obj.triggers.map(item => {
              return model.Trigger.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
