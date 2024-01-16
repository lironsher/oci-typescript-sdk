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
 * This lets the labeler specify a series of coordinates in the image to represent an object and apply labels to it.  The coordinates are connected in the order that they are provided. The last coordinate in the array is connected to the first coordinate.
 */
export interface ImageObjectSelectionEntity extends model.Entity {
  /**
   * A collection of label entities.
   */
  "labels": Array<model.Label>;
  "boundingPolygon": model.BoundingPolygon;
  /**
   * A simple key-value pair that is applied without any predefined name, type, or scope. It exists for cross-compatibility only.
   * For example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "extendedMetadata"?: { [key: string]: string };

  "entityType": string;
}

export namespace ImageObjectSelectionEntity {
  export function getJsonObj(obj: ImageObjectSelectionEntity, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Entity.getJsonObj(obj) as ImageObjectSelectionEntity)),
      ...{
        "labels": obj.labels
          ? obj.labels.map(item => {
              return model.Label.getJsonObj(item);
            })
          : undefined,
        "boundingPolygon": obj.boundingPolygon
          ? model.BoundingPolygon.getJsonObj(obj.boundingPolygon)
          : undefined
      }
    };

    return jsonObj;
  }
  export const entityType = "IMAGEOBJECTSELECTION";
  export function getDeserializedJsonObj(
    obj: ImageObjectSelectionEntity,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Entity.getDeserializedJsonObj(obj) as ImageObjectSelectionEntity)),
      ...{
        "labels": obj.labels
          ? obj.labels.map(item => {
              return model.Label.getDeserializedJsonObj(item);
            })
          : undefined,
        "boundingPolygon": obj.boundingPolygon
          ? model.BoundingPolygon.getDeserializedJsonObj(obj.boundingPolygon)
          : undefined
      }
    };

    return jsonObj;
  }
}
