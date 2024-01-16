/**
 * Data Labeling API
 * Use Data Labeling API to create Annotations on Images, Texts & Documents, and generate snapshots.
 * OpenAPI spec version: 20211001
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
 * This is the payload sent in the CreateAnnotation operation.  It contains all the information required for a user to create an annotation for a record.
 */
export interface CreateAnnotationDetails {
  /**
   * The OCID of the record annotated.
   */
  "recordId": string;
  /**
   * The OCID of the compartment for the annotation.
   */
  "compartmentId": string;
  /**
   * The entity types are validated against the dataset to ensure consistency.
   */
  "entities": Array<model.Entity>;
  /**
   * A simple key-value pair that is applied without any predefined name, type, or scope. It exists for cross-compatibility only.
   * For example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateAnnotationDetails {
  export function getJsonObj(obj: CreateAnnotationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "entities": obj.entities
          ? obj.entities.map(item => {
              return model.Entity.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateAnnotationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "entities": obj.entities
          ? obj.entities.map(item => {
              return model.Entity.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
