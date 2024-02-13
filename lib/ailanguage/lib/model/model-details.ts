/**
 * Language API
 * OCI Language Service solutions can help enterprise customers integrate AI into their products immediately using our proven,
pre-trained and custom models or containers, without a need to set up an house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI and ML operations, which shortens the time to market.

 * OpenAPI spec version: 20221001
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
 * Possible model types
 */
export interface ModelDetails {
  /**
   * supported language default value is en
   */
  "languageCode"?: string;

  "modelType": string;
}

export namespace ModelDetails {
  export function getJsonObj(obj: ModelDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "PRE_TRAINED_KEYPHRASE_EXTRACTION":
          return model.PreTrainedKeyPhraseExtractionModelDetails.getJsonObj(
            <model.PreTrainedKeyPhraseExtractionModelDetails>(<object>jsonObj),
            true
          );
        case "PRE_TRAINED_HEALTH_NLU":
          return model.PreTrainedHealthNluModelDetails.getJsonObj(
            <model.PreTrainedHealthNluModelDetails>(<object>jsonObj),
            true
          );
        case "PRE_TRAINED_UNIVERSAL":
          return model.PreTrainedUniversalModel.getJsonObj(
            <model.PreTrainedUniversalModel>(<object>jsonObj),
            true
          );
        case "NAMED_ENTITY_RECOGNITION":
          return model.NamedEntityRecognitionModelDetails.getJsonObj(
            <model.NamedEntityRecognitionModelDetails>(<object>jsonObj),
            true
          );
        case "PRE_TRAINED_LANGUAGE_DETECTION":
          return model.PreTrainedLanguageDetectionModelDetails.getJsonObj(
            <model.PreTrainedLanguageDetectionModelDetails>(<object>jsonObj),
            true
          );
        case "PRE_TRAINED_NAMED_ENTITY_RECOGNITION":
          return model.PreTrainedNamedEntityRecognitionModelDetails.getJsonObj(
            <model.PreTrainedNamedEntityRecognitionModelDetails>(<object>jsonObj),
            true
          );
        case "PRE_TRAINED_SENTIMENT_ANALYSIS":
          return model.PreTrainedSentimentAnalysisModelDetails.getJsonObj(
            <model.PreTrainedSentimentAnalysisModelDetails>(<object>jsonObj),
            true
          );
        case "PRE_TRAINED_PHI":
          return model.PreTrainedPhiModelDetails.getJsonObj(
            <model.PreTrainedPhiModelDetails>(<object>jsonObj),
            true
          );
        case "PRE_TRAINED_TEXT_CLASSIFICATION":
          return model.PreTrainedTextClassificationModelDetails.getJsonObj(
            <model.PreTrainedTextClassificationModelDetails>(<object>jsonObj),
            true
          );
        case "TEXT_CLASSIFICATION":
          return model.TextClassificationModelDetails.getJsonObj(
            <model.TextClassificationModelDetails>(<object>jsonObj),
            true
          );
        case "PRE_TRAINED_SUMMARIZATION":
          return model.PreTrainedSummarization.getJsonObj(
            <model.PreTrainedSummarization>(<object>jsonObj),
            true
          );
        case "PRE_TRAINED_PII":
          return model.PreTrainedPiiModelDetails.getJsonObj(
            <model.PreTrainedPiiModelDetails>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ModelDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "PRE_TRAINED_KEYPHRASE_EXTRACTION":
          return model.PreTrainedKeyPhraseExtractionModelDetails.getDeserializedJsonObj(
            <model.PreTrainedKeyPhraseExtractionModelDetails>(<object>jsonObj),
            true
          );
        case "PRE_TRAINED_HEALTH_NLU":
          return model.PreTrainedHealthNluModelDetails.getDeserializedJsonObj(
            <model.PreTrainedHealthNluModelDetails>(<object>jsonObj),
            true
          );
        case "PRE_TRAINED_UNIVERSAL":
          return model.PreTrainedUniversalModel.getDeserializedJsonObj(
            <model.PreTrainedUniversalModel>(<object>jsonObj),
            true
          );
        case "NAMED_ENTITY_RECOGNITION":
          return model.NamedEntityRecognitionModelDetails.getDeserializedJsonObj(
            <model.NamedEntityRecognitionModelDetails>(<object>jsonObj),
            true
          );
        case "PRE_TRAINED_LANGUAGE_DETECTION":
          return model.PreTrainedLanguageDetectionModelDetails.getDeserializedJsonObj(
            <model.PreTrainedLanguageDetectionModelDetails>(<object>jsonObj),
            true
          );
        case "PRE_TRAINED_NAMED_ENTITY_RECOGNITION":
          return model.PreTrainedNamedEntityRecognitionModelDetails.getDeserializedJsonObj(
            <model.PreTrainedNamedEntityRecognitionModelDetails>(<object>jsonObj),
            true
          );
        case "PRE_TRAINED_SENTIMENT_ANALYSIS":
          return model.PreTrainedSentimentAnalysisModelDetails.getDeserializedJsonObj(
            <model.PreTrainedSentimentAnalysisModelDetails>(<object>jsonObj),
            true
          );
        case "PRE_TRAINED_PHI":
          return model.PreTrainedPhiModelDetails.getDeserializedJsonObj(
            <model.PreTrainedPhiModelDetails>(<object>jsonObj),
            true
          );
        case "PRE_TRAINED_TEXT_CLASSIFICATION":
          return model.PreTrainedTextClassificationModelDetails.getDeserializedJsonObj(
            <model.PreTrainedTextClassificationModelDetails>(<object>jsonObj),
            true
          );
        case "TEXT_CLASSIFICATION":
          return model.TextClassificationModelDetails.getDeserializedJsonObj(
            <model.TextClassificationModelDetails>(<object>jsonObj),
            true
          );
        case "PRE_TRAINED_SUMMARIZATION":
          return model.PreTrainedSummarization.getDeserializedJsonObj(
            <model.PreTrainedSummarization>(<object>jsonObj),
            true
          );
        case "PRE_TRAINED_PII":
          return model.PreTrainedPiiModelDetails.getDeserializedJsonObj(
            <model.PreTrainedPiiModelDetails>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}
