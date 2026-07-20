# 05. Functional Requirements

---

## Overview

The following functional requirements define **what our solution must do** from the user's perspective. Requirements are grouped by domain and numbered for traceability. Each requirement is written to be specific, testable, and directly traceable to the features outlined in the Proposed Solution (Section 02).

---

## 5.1 Authentication & Security

| ID | Requirement | Priority |
|----|-------------|----------|
| **FR-01** | The system shall allow new users to register using their email address, phone number, and NIC (National Identity Card) for identity verification. | 🔴 Must |
| **FR-02** | The system shall enforce multi-factor authentication (MFA) for all login attempts, requiring at least two verification methods (password + OTP or biometric). | 🔴 Must |
| **FR-03** | The system shall support biometric authentication (fingerprint and facial recognition) as a second authentication factor on supported devices. | 🔴 Must |
| **FR-04** | The system shall automatically lock a user's account after 5 consecutive failed login attempts and notify the user via email and SMS. | 🔴 Must |
| **FR-05** | The system shall allow users to reset their password securely via email verification link or SMS OTP, with the reset link expiring after 15 minutes. | 🔴 Must |
| **FR-06** | The system shall automatically terminate inactive user sessions after 10 minutes of inactivity and require re-authentication. | 🟡 Should |
| **FR-07** | The system shall notify users via push notification and email when a login is detected from a new or unrecognized device. | 🟡 Should |

---

## 5.2 Account Management

| ID | Requirement | Priority |
|----|-------------|----------|
| **FR-08** | The system shall display the user's real-time account balance on the dashboard immediately upon login. | 🔴 Must |
| **FR-09** | The system shall allow users to view their complete transaction history with filtering options (by date range, transaction type, amount range, and recipient). | 🔴 Must |
| **FR-10** | The system shall support multiple account types (savings, current, business) under a single user profile. | 🔴 Must |
| **FR-11** | The system shall provide a KYC (Know Your Customer) verification workflow where users upload identity documents for administrative review and approval. | 🔴 Must |
| **FR-12** | The system shall allow users to manage their personal profile information including name, contact details, preferred language, and notification preferences. | 🟡 Should |
| **FR-13** | The system shall allow users to download account statements in PDF format for any specified date range. | 🟡 Should |

---

## 5.3 Transactions & Payments

| ID | Requirement | Priority |
|----|-------------|----------|
| **FR-14** | The system shall allow users to transfer funds to other accounts within the platform with real-time confirmation and receipt generation. | 🔴 Must |
| **FR-15** | The system shall process all financial transactions atomically — ensuring that both debit and credit operations either complete fully or not at all (ACID compliance). | 🔴 Must |
| **FR-16** | The system shall allow users to make utility bill payments (electricity, water, internet, mobile) through integrated payment processing. | 🔴 Must |
| **FR-17** | The system shall support scheduled and recurring payments, allowing users to set up automatic transfers on specified dates and frequencies. | 🟡 Should |
| **FR-18** | The system shall support QR code-based payments for merchant transactions. | 🟢 Could |
| **FR-19** | The system shall generate a digital receipt for every completed transaction, accessible from the transaction history. | 🔴 Must |
| **FR-20** | The system shall send real-time push notifications to users for all transaction events (debits, credits, payment confirmations, failed transactions). | 🔴 Must |

---

## 5.4 Loan Management

| ID | Requirement | Priority |
|----|-------------|----------|
| **FR-21** | The system shall allow users to apply for loans by submitting a digital application with required financial information and supporting documents. | 🟡 Should |
| **FR-22** | The system shall provide an automated eligibility assessment based on account history, credit score, and financial behavior. | 🟡 Should |
| **FR-23** | The system shall allow users to track their loan application status (submitted, under review, approved, rejected) in real-time. | 🟡 Should |
| **FR-24** | The system shall display loan repayment schedules, outstanding balances, and next payment dates for approved loans. | 🟡 Should |

---

## 5.5 Fraud Detection & Security Alerts

| ID | Requirement | Priority |
|----|-------------|----------|
| **FR-25** | The system shall use AI/ML-based behavioral analysis to detect and flag unusual transaction patterns (unusual amounts, times, locations, or recipients) in real-time. | 🔴 Must |
| **FR-26** | The system shall automatically freeze an account upon detecting confirmed suspicious activity and notify the user immediately via all available channels. | 🔴 Must |
| **FR-27** | The system shall allow users to report unauthorized or fraudulent transactions through an in-app reporting mechanism with case tracking. | 🔴 Must |
| **FR-28** | The system shall provide real-time fraud alerts to users and administrators when anomalous activity is detected. | 🟡 Should |

---

## 5.6 Notifications

| ID | Requirement | Priority |
|----|-------------|----------|
| **FR-29** | The system shall support multi-channel notifications including push notifications, SMS, and email for all critical events. | 🔴 Must |
| **FR-30** | The system shall allow users to customize their notification preferences (channels, frequency, event types) from their profile settings. | 🟡 Should |
| **FR-31** | The system shall maintain a notification history accessible from the user dashboard. | 🟡 Should |

---

## 5.7 Administration

| ID | Requirement | Priority |
|----|-------------|----------|
| **FR-32** | The system shall provide administrators with a real-time dashboard displaying system health metrics (service status, response times, error rates, active users). | 🔴 Must |
| **FR-33** | The system shall allow administrators to manage user accounts including the ability to suspend, reactivate, verify, and delete accounts. | 🔴 Must |
| **FR-34** | The system shall generate automated daily, weekly, and monthly transaction summary reports for administrative review. | 🟡 Should |
| **FR-35** | The system shall provide a comprehensive audit trail viewer that allows administrators to search and filter all system events by user, action, timestamp, and IP address. | 🔴 Must |

---

## 5.8 Requirements Summary

| Category | Count | Must | Should | Could |
|----------|-------|------|--------|-------|
| Authentication & Security | 7 | 5 | 2 | 0 |
| Account Management | 6 | 4 | 2 | 0 |
| Transactions & Payments | 7 | 5 | 1 | 1 |
| Loan Management | 4 | 0 | 4 | 0 |
| Fraud Detection | 4 | 3 | 1 | 0 |
| Notifications | 3 | 1 | 2 | 0 |
| Administration | 4 | 3 | 1 | 0 |
| **Total** | **35** | **21** | **13** | **1** |
