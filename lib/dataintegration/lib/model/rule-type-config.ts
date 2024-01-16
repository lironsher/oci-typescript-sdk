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
 * The rule type config.
 */
export interface RuleTypeConfig extends model.DynamicTypeHandler {
  /**
   * The key of the object.
   */
  "key"?: string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Deprecated - Reference to a typed object, this can be either a key value to an object within the document, a shall referenced to a {@code TypedObject} or a full {@code TypedObject} definition.
   */
  "scope"?: any;
  "scopeReference"?: model.ScopeReference;
  /**
   * Specifies whether it is ordered by rule.
   */
  "isOrderByRule"?: boolean;
  /**
   * The projection rules.
   */
  "projectionRules"?: Array<model.ProjectionRule>;
  "configValues"?: model.ConfigValues;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;

  "modelType": string;
}

export namespace RuleTypeConfig {
  export function getJsonObj(obj: RuleTypeConfig, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.DynamicTypeHandler.getJsonObj(obj) as RuleTypeConfig)),
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "scopeReference": obj.scopeReference
          ? model.ScopeReference.getJsonObj(obj.scopeReference)
          : undefined,

        "projectionRules": obj.projectionRules
          ? obj.projectionRules.map(item => {
              return model.ProjectionRule.getJsonObj(item);
            })
          : undefined,
        "configValues": obj.configValues
          ? model.ConfigValues.getJsonObj(obj.configValues)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "RULE_TYPE_CONFIGS";
  export function getDeserializedJsonObj(obj: RuleTypeConfig, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DynamicTypeHandler.getDeserializedJsonObj(obj) as RuleTypeConfig)),
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,

        "scopeReference": obj.scopeReference
          ? model.ScopeReference.getDeserializedJsonObj(obj.scopeReference)
          : undefined,

        "projectionRules": obj.projectionRules
          ? obj.projectionRules.map(item => {
              return model.ProjectionRule.getDeserializedJsonObj(item);
            })
          : undefined,
        "configValues": obj.configValues
          ? model.ConfigValues.getDeserializedJsonObj(obj.configValues)
          : undefined
      }
    };

    return jsonObj;
  }
}
