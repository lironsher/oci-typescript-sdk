/**
 * Threat Intelligence API
 * Use the Threat Intelligence API to search for information about known threat indicators, including suspicious IP addresses, domain names, and other digital fingerprints. Threat Intelligence is a managed database of curated threat intelligence that comes from first party Oracle security insights, open source feeds, and vendor-procured data. For more information, see the [Threat Intelligence documentation](/iaas/Content/threat-intel/home.htm).
 * OpenAPI spec version: 20220901
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as model from "./model";
import * as responses from "./response";
import { ThreatintelWaiter } from "./threatintel-waiter";
import {
  composeResponse,
  composeRequest,
  GenericRetrier,
  developerToolConfiguration,
  logger
} from "oci-common";
const Breaker = require("opossum");

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ThreatintelApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class ThreatintelClient {
  protected static serviceEndpointTemplate =
    "https://api-threatintel.{region}.oci.{secondLevelDomain}";
  protected static endpointServiceName = "";
  protected "_realmSpecificEndpointTemplateEnabled": boolean = false;
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": ThreatintelWaiter;
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker: typeof Breaker | null = null;
  protected _httpOptions: any = undefined;
  protected _bodyDuplexMode: any = undefined;
  public targetService = "Threatintel";
  protected _regionId: string = "";
  protected "_region": common.Region;
  protected _lastSetRegionOrRegionId: string = "";

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
      this._httpOptions = clientConfiguration.httpOptions
        ? clientConfiguration.httpOptions
        : undefined;
      this._bodyDuplexMode = clientConfiguration.bodyDuplexMode
        ? clientConfiguration.bodyDuplexMode
        : undefined;
    }

    if (!developerToolConfiguration.isServiceEnabled("threatintelligence")) {
      let errmsg =
        "The developerToolConfiguration configuration disabled this service, this behavior is controlled by developerToolConfiguration.ociEnabledServiceSet variable. Please check if your local developer_tool_configuration file has configured the service you're targeting or contact the cloud provider on the availability of this service : ";
      throw errmsg.concat("threatintelligence");
    }

    // if circuit breaker is not created, check if circuit breaker system is enabled to use default circuit breaker
    const specCircuitBreakerEnabled = true;
    if (
      !this._circuitBreaker &&
      common.utils.isCircuitBreakerSystemEnabled(clientConfiguration!) &&
      (specCircuitBreakerEnabled || common.CircuitBreaker.DefaultCircuitBreakerOverriden)
    ) {
      this._circuitBreaker = new common.CircuitBreaker().circuit;
    }
    this._httpClient =
      params.httpClient ||
      new common.FetchHttpClient(
        requestSigner,
        this._circuitBreaker,
        this._httpOptions,
        this._bodyDuplexMode
      );

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20220901";
    logger.info(`ThreatintelClient endpoint set to ${this._endpoint}`);
  }

  /**
   * Determines whether realm specific endpoint should be used or not.
   * Set realmSpecificEndpointTemplateEnabled to "true" if the user wants to enable use of realm specific endpoint template, otherwise set it to "false"
   * @param realmSpecificEndpointTemplateEnabled flag to enable the use of realm specific endpoint template
   */
  public set useRealmSpecificEndpointTemplate(realmSpecificEndpointTemplateEnabled: boolean) {
    this._realmSpecificEndpointTemplateEnabled = realmSpecificEndpointTemplateEnabled;
    logger.info(
      `realmSpecificEndpointTemplateEnabled set to ${this._realmSpecificEndpointTemplateEnabled}`
    );
    if (this._lastSetRegionOrRegionId === common.Region.REGION_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
        ThreatintelClient.serviceEndpointTemplate,
        this._region,
        ThreatintelClient.endpointServiceName
      );
    } else if (this._lastSetRegionOrRegionId === common.Region.REGION_ID_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
        ThreatintelClient.serviceEndpointTemplate,
        this._regionId,
        ThreatintelClient.endpointServiceName
      );
    }
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this._region = region;
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      ThreatintelClient.serviceEndpointTemplate,
      region,
      ThreatintelClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_STRING;
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this._regionId = regionId;
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      ThreatintelClient.serviceEndpointTemplate,
      regionId,
      ThreatintelClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_ID_STRING;
  }

  /**
   * Creates a new ThreatintelWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): ThreatintelWaiter {
    this._waiters = new ThreatintelWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): ThreatintelWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
  }

  /**
   * Shutdown the circuit breaker used by the client when it is no longer needed
   */
  public shutdownCircuitBreaker() {
    if (this._circuitBreaker) {
      this._circuitBreaker.shutdown();
    }
  }

  /**
   * Get detailed information about a threat indicator with a given identifier.
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param GetIndicatorRequest
   * @return GetIndicatorResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/threatintelligence/GetIndicator.ts.html |here} to see how to use GetIndicator API.
   */
  public async getIndicator(
    getIndicatorRequest: requests.GetIndicatorRequest
  ): Promise<responses.GetIndicatorResponse> {
    logger.debug("Calling operation ThreatintelClient#getIndicator.");
    const operationName = "getIndicator";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/threat-intel/20220901/Indicator/GetIndicator";
    const pathParams = {
      "{indicatorId}": getIndicatorRequest.indicatorId
    };

    const queryParams = {
      "compartmentId": getIndicatorRequest.compartmentId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getIndicatorRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getIndicatorRequest.retryConfiguration,
      specRetryConfiguration
    );
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/indicators/{indicatorId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.GetIndicatorResponse>{},
        body: await response.json(),
        bodyKey: "indicator",
        bodyModel: model.Indicator,
        type: "model.Indicator",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Get the current count of each threat indicator type. Indicator counts can be sorted in ascending or descending order.
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param ListIndicatorCountsRequest
   * @return ListIndicatorCountsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/threatintelligence/ListIndicatorCounts.ts.html |here} to see how to use ListIndicatorCounts API.
   */
  public async listIndicatorCounts(
    listIndicatorCountsRequest: requests.ListIndicatorCountsRequest
  ): Promise<responses.ListIndicatorCountsResponse> {
    logger.debug("Calling operation ThreatintelClient#listIndicatorCounts.");
    const operationName = "listIndicatorCounts";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/threat-intel/20220901/IndicatorCountCollection/ListIndicatorCounts";
    const pathParams = {};

    const queryParams = {
      "compartmentId": listIndicatorCountsRequest.compartmentId,
      "sortOrder": listIndicatorCountsRequest.sortOrder
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listIndicatorCountsRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listIndicatorCountsRequest.retryConfiguration,
      specRetryConfiguration
    );
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/indicatorCounts",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListIndicatorCountsResponse>{},
        body: await response.json(),
        bodyKey: "indicatorCountCollection",
        bodyModel: model.IndicatorCountCollection,
        type: "model.IndicatorCountCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Get a list of threat indicator summaries based on the search criteria.
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param ListIndicatorsRequest
   * @return ListIndicatorsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/threatintelligence/ListIndicators.ts.html |here} to see how to use ListIndicators API.
   */
  public async listIndicators(
    listIndicatorsRequest: requests.ListIndicatorsRequest
  ): Promise<responses.ListIndicatorsResponse> {
    logger.debug("Calling operation ThreatintelClient#listIndicators.");
    const operationName = "listIndicators";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/threat-intel/20220901/IndicatorSummaryCollection/ListIndicators";
    const pathParams = {};

    const queryParams = {
      "compartmentId": listIndicatorsRequest.compartmentId,
      "threatTypeName": listIndicatorsRequest.threatTypeName,
      "type": listIndicatorsRequest.type,
      "value": listIndicatorsRequest.value,
      "confidenceGreaterThanOrEqualTo": listIndicatorsRequest.confidenceGreaterThanOrEqualTo,
      "timeUpdatedGreaterThanOrEqualTo": listIndicatorsRequest.timeUpdatedGreaterThanOrEqualTo,
      "timeUpdatedLessThan": listIndicatorsRequest.timeUpdatedLessThan,
      "timeLastSeenGreaterThanOrEqualTo": listIndicatorsRequest.timeLastSeenGreaterThanOrEqualTo,
      "timeLastSeenLessThan": listIndicatorsRequest.timeLastSeenLessThan,
      "timeCreatedGreaterThanOrEqualTo": listIndicatorsRequest.timeCreatedGreaterThanOrEqualTo,
      "timeCreatedLessThan": listIndicatorsRequest.timeCreatedLessThan,
      "limit": listIndicatorsRequest.limit,
      "page": listIndicatorsRequest.page,
      "sortOrder": listIndicatorsRequest.sortOrder,
      "sortBy": listIndicatorsRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listIndicatorsRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listIndicatorsRequest.retryConfiguration,
      specRetryConfiguration
    );
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/indicators",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListIndicatorsResponse>{},
        body: await response.json(),
        bodyKey: "indicatorSummaryCollection",
        bodyModel: model.IndicatorSummaryCollection,
        type: "model.IndicatorSummaryCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets a list of threat types that are available to use as parameters when querying indicators.
   * The list is sorted by threat type name according to the sort order query param.
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param ListThreatTypesRequest
   * @return ListThreatTypesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/threatintelligence/ListThreatTypes.ts.html |here} to see how to use ListThreatTypes API.
   */
  public async listThreatTypes(
    listThreatTypesRequest: requests.ListThreatTypesRequest
  ): Promise<responses.ListThreatTypesResponse> {
    logger.debug("Calling operation ThreatintelClient#listThreatTypes.");
    const operationName = "listThreatTypes";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/threat-intel/20220901/ThreatTypesCollection/ListThreatTypes";
    const pathParams = {};

    const queryParams = {
      "compartmentId": listThreatTypesRequest.compartmentId,
      "limit": listThreatTypesRequest.limit,
      "page": listThreatTypesRequest.page,
      "sortOrder": listThreatTypesRequest.sortOrder
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listThreatTypesRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listThreatTypesRequest.retryConfiguration,
      specRetryConfiguration
    );
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/threatTypes",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListThreatTypesResponse>{},
        body: await response.json(),
        bodyKey: "threatTypesCollection",
        bodyModel: model.ThreatTypesCollection,
        type: "model.ThreatTypesCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Get indicator summaries based on advanced search criteria.
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param SummarizeIndicatorsRequest
   * @return SummarizeIndicatorsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/threatintelligence/SummarizeIndicators.ts.html |here} to see how to use SummarizeIndicators API.
   */
  public async summarizeIndicators(
    summarizeIndicatorsRequest: requests.SummarizeIndicatorsRequest
  ): Promise<responses.SummarizeIndicatorsResponse> {
    logger.debug("Calling operation ThreatintelClient#summarizeIndicators.");
    const operationName = "summarizeIndicators";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/threat-intel/20220901/Indicator/SummarizeIndicators";
    const pathParams = {};

    const queryParams = {
      "compartmentId": summarizeIndicatorsRequest.compartmentId,
      "limit": summarizeIndicatorsRequest.limit,
      "page": summarizeIndicatorsRequest.page
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": summarizeIndicatorsRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      summarizeIndicatorsRequest.retryConfiguration,
      specRetryConfiguration
    );
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/indicators/actions/summarize",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        summarizeIndicatorsRequest.summarizeIndicatorsDetails,
        "SummarizeIndicatorsDetails",
        model.SummarizeIndicatorsDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.SummarizeIndicatorsResponse>{},
        body: await response.json(),
        bodyKey: "indicatorSummaryCollection",
        bodyModel: model.IndicatorSummaryCollection,
        type: "model.IndicatorSummaryCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }
}
