# ChainMove

**A Stellar-native mobility payments and ride escrow platform for trusted transport settlement.**

## Overview

ChainMove is an early-stage infrastructure and application project for transport payments on Stellar. The goal is to let riders pre-fund trips, drivers receive provable payouts, and mobility operators settle fares with transparent, low-cost blockchain infrastructure.

The current repository contains a legacy prototype built on the Internet Computer. This Drip Wave submission documents the proposed migration path to Stellar and positions ChainMove as a practical Soroban-based mobility payments product. The target end state is a Stellar-native platform for ride escrow, driver payouts, transport credits, and wallet-based fare settlement.

## Problem Statement

Informal and fragmented transportation markets have three recurring problems:

- riders do not have a reliable way to prove payment or dispute incomplete trips
- drivers face delayed settlement, chargeback risk, and weak earnings records
- transport platforms in emerging markets often depend on expensive intermediaries for collection, custody, and payouts

These issues are especially acute in corridors where digital payments are inconsistent, card penetration is low, and operators need stable-value settlement rather than volatile assets.

## Solution

ChainMove uses Stellar for fare escrow and settlement. A rider locks the trip fare in a smart-contract-controlled flow before pickup. Once the trip is completed, the driver receives settlement automatically according to contract rules. The same system can support:

- direct rider-to-driver trip payments
- fleet or cooperative payouts
- transport credit issuance for campuses, employers, and communities
- stablecoin-based settlement using Stellar assets such as USDC or approved local-currency assets

Off-chain services handle routing, matching, notifications, and trip telemetry. Stellar handles payment finality, asset movement, and auditable settlement.

## Why This Project Matters

Transport is a high-frequency payments use case. If users can pay, settle, and verify mobility transactions on Stellar, the network gains repeated real-world usage rather than one-off demonstrations. ChainMove is valuable because it turns everyday transport activity into wallet activity, asset transfers, and merchant-like settlement on Stellar.

For the ecosystem, that means:

- more transaction volume from a concrete consumer use case
- stronger utility for wallets and stable assets
- a pathway for anchors and issuers to plug into local mobility payments
- better rails for transport cooperatives, dispatchers, and informal operators

## Core Features

- Rider-funded trip escrow with milestone-based release
- Driver payout history and earnings proofs
- Support for XLM, USDC, and approved Stellar-issued transport assets
- Driver and operator onboarding with wallet-based identity flows
- Trip receipts and settlement references that are independently verifiable
- Optional dispute window and operator review for failed or cancelled rides
- Wallet-friendly payment flows for mobile-first users
- Transport credit support for institutions and communities

## How It Works

1. A driver or operator publishes ride availability and fare terms through the application layer.
2. A rider selects a trip and authorizes payment from a Stellar wallet.
3. The fare is placed into a Soroban escrow contract.
4. Trip state changes are recorded by the application backend and referenced by the settlement flow.
5. On successful completion, the contract releases funds to the driver and any configured operator fee account.
6. On cancellation or dispute, the contract follows the refund or review policy.
7. Both rider and driver retain an auditable payment record linked to the Stellar transaction history.

## Stellar Ecosystem Alignment

ChainMove is designed around areas where Stellar has a clear advantage:

- low transaction costs for frequent, low-ticket transport payments
- strong support for asset issuance and stable-value settlement
- practical wallet interoperability for consumer-facing payment flows
- fast finality for time-sensitive merchant and gig-worker payouts
- good fit for cross-border or multi-currency transport corridors through anchors and issued assets

## Specific Benefits to Stellar

### Increased Utility on Stellar

ChainMove increases network utility by creating recurring payment activity tied to real mobility demand. Instead of treating blockchain as a speculative layer, it uses Stellar as settlement infrastructure for a service people already use daily.

### Adoption Driver

Mobility is a practical onboarding vector. Riders, drivers, fleet managers, and local transport businesses can all interact with Stellar through a familiar service: paying for movement.

### Accessibility and Financial Inclusion

Drivers in underserved markets often lack reliable digital earnings records and fast settlement rails. ChainMove can improve this by providing wallet-based payouts, stablecoin settlement, and a usable earnings trail that may support future access to savings, credit, or insurance products.

### Developer and Ecosystem Value

The project can serve as a reusable reference for:

- Soroban escrow patterns
- wallet-based mobility payments
- stable asset acceptance in consumer apps
- transport credit issuance on Stellar
- application-layer coordination around on-chain settlement

## Why Stellar Is the Right Blockchain

Stellar is the right execution environment for ChainMove because the product depends on low-cost settlement, asset flexibility, and payment-oriented infrastructure. The project does not require an expensive or highly speculative execution environment. It requires predictable payments, stable assets, and a realistic path to consumer adoption. Stellar provides those primitives more naturally than general-purpose chains focused primarily on DeFi speculation.

## Current Status

This repository is in transition.

- The codebase currently includes a legacy Next.js plus Motoko prototype from an earlier Internet Computer implementation.
- The Stellar-native contract layer described in this README is proposed and not yet implemented in this repository.
- This submission should therefore be read as a credible migration plan, product thesis, and maintainer package for the next development phase.

## Technical Architecture

### High-Level Components

- `frontend/`: rider, driver, and operator interface
- `contracts/` planned: Soroban contracts for escrow, payout rules, and transport credits
- `services/` planned: backend services for dispatch, trip state, pricing, and notifications
- `docs/`: product and architecture documentation for the Stellar migration

### Proposed System Design

- **Client application**: Next.js web app, with a clear path to React Native or PWA packaging for mobile-first distribution
- **Wallet layer**: Stellar wallet integration for transaction signing and account management
- **Contract layer**: Soroban smart contracts for ride escrow, release conditions, refunds, and operator fee routing
- **Application backend**: API and worker layer for trip orchestration, route metadata, event indexing, and notifications
- **Data layer**: PostgreSQL for off-chain trip data, operator records, and analytics
- **Indexer/observer**: service that maps contract events and Stellar transactions back into application-readable trip state

## Proposed Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Contracts**: Rust, Soroban SDK
- **Blockchain access**: Stellar RPC, Horizon, Stellar SDKs
- **Wallet integration**: Stellar wallet connectors compatible with user-facing browser and mobile wallets
- **Backend**: Node.js or NestJS, PostgreSQL, Redis, background workers
- **Maps and routing**: Mapbox or Google Maps Platform
- **Notifications**: Twilio, WhatsApp Business API, or transactional email providers
- **Observability**: Sentry, OpenTelemetry, and structured logs

## Smart Contract / Blockchain Interaction

The core on-chain logic is expected to include:

- **Ride Escrow Contract**: receives trip funds, validates settlement conditions, and releases payment
- **Fee Routing Logic**: optionally splits a fare among driver, operator, and protocol treasury
- **Refund and Cancellation Logic**: handles pre-start cancellations and operator-reviewed disputes
- **Transport Credit Asset Support**: accepts approved Stellar-issued assets for closed-loop or institutional mobility programs

Typical flow:

1. Rider selects a trip and payment asset.
2. Wallet signs a transaction funding the escrow contract.
3. Backend tracks trip lifecycle and submits permitted state updates.
4. Settlement event triggers payout to the driver.
5. Transaction hash becomes the ride receipt reference.

## Installation

### Current Prototype

The current repository can still be run as the legacy prototype:

```bash
npm install
cd frontend
npm install
```

## Local Development Setup

### Legacy Prototype Setup

```bash
cp frontend/.env.example frontend/.env
dfx start --background --clean
dfx deploy
cd frontend
npm run dev
```

### Planned Stellar Development Setup

The Stellar-native stack is not yet implemented in this repository. The expected local workflow for the migration phase is:

```bash
cp .env.example .env
npm install
# contract and backend commands will be added once the Soroban modules are introduced
```

## Environment Variables

The repository currently includes Internet Computer variables for the legacy prototype. The root `.env.example` defines the planned environment surface for the Stellar migration.

Expected migration variables include:

```env
NEXT_PUBLIC_STELLAR_NETWORK=testnet
NEXT_PUBLIC_SOROBAN_RPC_URL=https://soroban-testnet.stellar.org
NEXT_PUBLIC_HORIZON_URL=https://horizon-testnet.stellar.org
NEXT_PUBLIC_APP_URL=http://localhost:3000
STELLAR_ADMIN_SECRET_KEY=
ESCROW_CONTRACT_ID=
DATABASE_URL=
REDIS_URL=
MAPS_API_KEY=
NOTIFICATIONS_PROVIDER=
```

## Usage

### Current Repository

Today, this repository is primarily useful as:

- a product submission package for Drip Wave
- a reference for the inherited ride-booking prototype
- a planning base for implementing the Stellar migration

### Intended Usage After Migration

- riders book trips and pre-fund escrow in supported Stellar assets
- drivers receive contract-governed payouts
- operators monitor trip settlements and fee flows
- institutions can issue or manage transport credits on Stellar

## Roadmap

### Phase 0

- clean repository metadata and submission materials
- define Stellar product scope and migration plan
- identify the minimum escrow contract requirements

### Phase 1

- implement Soroban escrow contract
- replace ICP-specific authentication and chain logic
- integrate Stellar wallet signing
- ship basic rider and driver payment flows

### Phase 2

- add operator dashboards
- introduce cancellations, refunds, and disputes
- support USDC and selected Stellar-issued transport assets

### Phase 3

- launch institutional transport credit pilots
- integrate anchor or payout partner flows where appropriate
- add analytics, receipts, and exportable settlement history

## Future Improvements

- recurring commuter passes represented as Stellar-issued assets
- pooled ride settlement and multi-passenger trip accounting
- driver reputation and service guarantees backed by attestations
- embedded finance products for drivers based on verifiable earnings history
- corridor-specific remittance plus mobility bundles using Stellar anchors

## Contribution Guidelines

Contributions are welcome, especially in the following areas:

- Soroban contract design and review
- wallet UX and transaction flow design
- transport operations logic
- mobile and low-bandwidth UX
- documentation, issue triage, and testing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution standards.

## License

This project is released under the MIT License. See [LICENSE](./LICENSE).

## Maintainer

**Emmanuel Okoye**  
Maintainer, product lead, and repository owner for the ChainMove submission package.

If you are reviewing this repository as part of Drip Wave, the correct reading is: ChainMove is an in-development mobility payments project with an existing transport prototype and a proposed Stellar-native migration path focused on escrow, settlement, and ecosystem utility.
