/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * Properties that are required to create a Skill from scratch.
 */
export interface CreateNewSkillDetails extends model.CreateSkillDetails {
  /**
   * The reource's name. The name can contain only letters, numbers, periods, and underscores. The name must begin with a letter.
   *
   */
  "name": string;
  /**
   * The resource's display name.
   *
   */
  "displayName": string;
  /**
   * The resource's version. The version can only contain numbers, letters, periods, underscores, dashes or spaces.  The version must begin with a letter or a number.
   *
   */
  "version": string;
  /**
   * A list of native languages supported by this resource.
   */
  "nativeLanguageTags"?: Array<string>;

  "kind": string;
}

export namespace CreateNewSkillDetails {
  export function getJsonObj(obj: CreateNewSkillDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateSkillDetails.getJsonObj(obj) as CreateNewSkillDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const kind = "NEW";
  export function getDeserializedJsonObj(
    obj: CreateNewSkillDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateSkillDetails.getDeserializedJsonObj(obj) as CreateNewSkillDetails)),
      ...{}
    };

    return jsonObj;
  }
}
