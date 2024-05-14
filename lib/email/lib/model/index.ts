/**
 * Email Delivery API
 * Use the Email Delivery API to do the necessary set up to send high-volume and application-generated emails through the OCI Email Delivery service.
For more information, see [Overview of the Email Delivery Service](/iaas/Content/Email/Concepts/overview.htm).

 **Note:** Write actions (POST, UPDATE, DELETE) may take several minutes to propagate and be reflected by the API.
 If a subsequent read request fails to reflect your changes, wait a few minutes and try again.

 * OpenAPI spec version: 20170907
 * Contact: email-dev_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ActionType from "./action-type";
export import ActionType = ActionType.ActionType;
import * as ChangeEmailDomainCompartmentDetails from "./change-email-domain-compartment-details";
export import ChangeEmailDomainCompartmentDetails = ChangeEmailDomainCompartmentDetails.ChangeEmailDomainCompartmentDetails;
import * as ChangeSenderCompartmentDetails from "./change-sender-compartment-details";
export import ChangeSenderCompartmentDetails = ChangeSenderCompartmentDetails.ChangeSenderCompartmentDetails;
import * as Configuration from "./configuration";
export import Configuration = Configuration.Configuration;
import * as CreateDkimDetails from "./create-dkim-details";
export import CreateDkimDetails = CreateDkimDetails.CreateDkimDetails;
import * as CreateEmailDomainDetails from "./create-email-domain-details";
export import CreateEmailDomainDetails = CreateEmailDomainDetails.CreateEmailDomainDetails;
import * as CreateEmailReturnPathDetails from "./create-email-return-path-details";
export import CreateEmailReturnPathDetails = CreateEmailReturnPathDetails.CreateEmailReturnPathDetails;
import * as CreateSenderDetails from "./create-sender-details";
export import CreateSenderDetails = CreateSenderDetails.CreateSenderDetails;
import * as CreateSuppressionDetails from "./create-suppression-details";
export import CreateSuppressionDetails = CreateSuppressionDetails.CreateSuppressionDetails;
import * as Dkim from "./dkim";
export import Dkim = Dkim.Dkim;
import * as DkimCollection from "./dkim-collection";
export import DkimCollection = DkimCollection.DkimCollection;
import * as DkimSummary from "./dkim-summary";
export import DkimSummary = DkimSummary.DkimSummary;
import * as DomainVerificationStatusType from "./domain-verification-status-type";
export import DomainVerificationStatusType = DomainVerificationStatusType.DomainVerificationStatusType;
import * as EmailDomain from "./email-domain";
export import EmailDomain = EmailDomain.EmailDomain;
import * as EmailDomainCollection from "./email-domain-collection";
export import EmailDomainCollection = EmailDomainCollection.EmailDomainCollection;
import * as EmailDomainSummary from "./email-domain-summary";
export import EmailDomainSummary = EmailDomainSummary.EmailDomainSummary;
import * as EmailReturnPath from "./email-return-path";
export import EmailReturnPath = EmailReturnPath.EmailReturnPath;
import * as EmailReturnPathCollection from "./email-return-path-collection";
export import EmailReturnPathCollection = EmailReturnPathCollection.EmailReturnPathCollection;
import * as EmailReturnPathSummary from "./email-return-path-summary";
export import EmailReturnPathSummary = EmailReturnPathSummary.EmailReturnPathSummary;
import * as OperationStatus from "./operation-status";
export import OperationStatus = OperationStatus.OperationStatus;
import * as OperationType from "./operation-type";
export import OperationType = OperationType.OperationType;
import * as Sender from "./sender";
export import Sender = Sender.Sender;
import * as SenderSummary from "./sender-summary";
export import SenderSummary = SenderSummary.SenderSummary;
import * as SortOrder from "./sort-order";
export import SortOrder = SortOrder.SortOrder;
import * as Suppression from "./suppression";
export import Suppression = Suppression.Suppression;
import * as SuppressionReason from "./suppression-reason";
export import SuppressionReason = SuppressionReason.SuppressionReason;
import * as SuppressionSummary from "./suppression-summary";
export import SuppressionSummary = SuppressionSummary.SuppressionSummary;
import * as UpdateDkimDetails from "./update-dkim-details";
export import UpdateDkimDetails = UpdateDkimDetails.UpdateDkimDetails;
import * as UpdateEmailDomainDetails from "./update-email-domain-details";
export import UpdateEmailDomainDetails = UpdateEmailDomainDetails.UpdateEmailDomainDetails;
import * as UpdateEmailReturnPathDetails from "./update-email-return-path-details";
export import UpdateEmailReturnPathDetails = UpdateEmailReturnPathDetails.UpdateEmailReturnPathDetails;
import * as UpdateSenderDetails from "./update-sender-details";
export import UpdateSenderDetails = UpdateSenderDetails.UpdateSenderDetails;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestError from "./work-request-error";
export import WorkRequestError = WorkRequestError.WorkRequestError;
import * as WorkRequestErrorCollection from "./work-request-error-collection";
export import WorkRequestErrorCollection = WorkRequestErrorCollection.WorkRequestErrorCollection;
import * as WorkRequestLogEntry from "./work-request-log-entry";
export import WorkRequestLogEntry = WorkRequestLogEntry.WorkRequestLogEntry;
import * as WorkRequestLogEntryCollection from "./work-request-log-entry-collection";
export import WorkRequestLogEntryCollection = WorkRequestLogEntryCollection.WorkRequestLogEntryCollection;
import * as WorkRequestResource from "./work-request-resource";
export import WorkRequestResource = WorkRequestResource.WorkRequestResource;
import * as WorkRequestSummary from "./work-request-summary";
export import WorkRequestSummary = WorkRequestSummary.WorkRequestSummary;
import * as WorkRequestSummaryCollection from "./work-request-summary-collection";
export import WorkRequestSummaryCollection = WorkRequestSummaryCollection.WorkRequestSummaryCollection;
