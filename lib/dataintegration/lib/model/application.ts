/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The application type contains the audit summary information and the definition of the application.
 */
export interface Application {
  /**
   * Generated key that can be used in API calls to identify application.
   */
  "key"?: string;
  /**
   * The object type.
   */
  "modelType"?: string;
  /**
   * The object's model version.
   */
  "modelVersion"?: string;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * Detailed description for the object.
   */
  "description"?: string;
  /**
   * The application's version. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "applicationVersion"?: number;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * The version of the object that is used to track changes in the object instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion"?: number;
  /**
   * A list of dependent objects in this patch.
   */
  "dependentObjectMetadata"?: Array<model.PatchObjectMetadata>;
  /**
   * A list of objects that are published or unpublished in this patch.
   */
  "publishedObjectMetadata"?: { [key: string]: model.PatchObjectMetadata };
  "sourceApplicationInfo"?: model.SourceApplicationInfo;
  /**
   * The date and time the application was patched, in the timestamp format defined by RFC3339.
   *
   */
  "timePatched"?: Date;
  /**
   * OCID of the resource that is used to uniquely identify the application
   */
  "id"?: string;
  /**
   * OCID of the compartment that this resource belongs to. Defaults to compartment of the Workspace.
   */
  "compartmentId"?: string;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "displayName"?: string;
  /**
   * The date and time the application was created, in the timestamp format defined by RFC3339.
   *
   */
  "timeCreated"?: Date;
  /**
   * The date and time the application was updated, in the timestamp format defined by RFC3339.
   * example: 2019-08-25T21:10:29.41Z
   *
   */
  "timeUpdated"?: Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The current state of the workspace.
   */
  "lifecycleState"?: Application.LifecycleState;
  "metadata"?: model.ObjectMetadata;
  /**
   * A key map. If provided, key is replaced with generated key. This structure provides mapping between user provided key and generated key.
   */
  "keyMap"?: { [key: string]: string };
}

export namespace Application {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Application): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "dependentObjectMetadata": obj.dependentObjectMetadata
          ? obj.dependentObjectMetadata.map(item => {
              return model.PatchObjectMetadata.getJsonObj(item);
            })
          : undefined,
        "publishedObjectMetadata": obj.publishedObjectMetadata
          ? common.mapContainer(obj.publishedObjectMetadata, model.PatchObjectMetadata.getJsonObj)
          : undefined,
        "sourceApplicationInfo": obj.sourceApplicationInfo
          ? model.SourceApplicationInfo.getJsonObj(obj.sourceApplicationInfo)
          : undefined,

        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Application): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,

        "dependentObjectMetadata": obj.dependentObjectMetadata
          ? obj.dependentObjectMetadata.map(item => {
              return model.PatchObjectMetadata.getDeserializedJsonObj(item);
            })
          : undefined,
        "publishedObjectMetadata": obj.publishedObjectMetadata
          ? common.mapContainer(
              obj.publishedObjectMetadata,
              model.PatchObjectMetadata.getDeserializedJsonObj
            )
          : undefined,
        "sourceApplicationInfo": obj.sourceApplicationInfo
          ? model.SourceApplicationInfo.getDeserializedJsonObj(obj.sourceApplicationInfo)
          : undefined,

        "metadata": obj.metadata
          ? model.ObjectMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined
      }
    };

    return jsonObj;
  }
}
