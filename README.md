# ChainMove

ChainMove is a proposed Stellar-native mobility payments and driver financing platform for escrowed ride settlement, transparent trip records, and inclusive transport access.

## Overview

ChainMove began as a decentralized transportation prototype and is being repositioned for the Stellar ecosystem as an in-development product focused on real-world mobility payments. The core idea is straightforward: riders should be able to book transport with clear pricing and protected funds, while drivers should receive fast settlement, stronger payment guarantees, and optional access to on-chain working capital.

This repository currently contains the original prototype application and a proposed architecture for the Stellar-based implementation. For Drip Wave submission purposes, the project is presented honestly as an active migration and product packaging effort rather than a finished Stellar deployment.

## Problem Statement

Transport payments in many emerging markets remain fragmented and high-friction:

- Riders often pay with poor visibility into fare custody, driver confirmation, or refund handling.
- Drivers face delayed cash flow, informal reconciliation, and limited access to affordable financing.
- Platform operators have difficulty proving settlement logic, payout rules, and trip-linked financial activity.
- Cross-border or multi-currency mobility flows are hard to support efficiently with traditional payment rails.

These issues are especially relevant in markets where mobile-first users need low-cost digital payments but do not have access to dependable financial infrastructure.

## Solution

ChainMove uses Stellar to coordinate mobility-related payment flows around three core primitives:

- Escrowed ride payments held until trip state changes are satisfied.
- Asset-based settlement using Stellar-issued tokens or regulated stable assets.
- Driver-facing payout and funding rails that can support instant release, reputation-linked incentives, and future credit products.

Under the proposed Stellar design, a rider funds a trip in advance, the trip is represented by an application record plus on-chain settlement state, and funds are released according to deterministic business rules. This reduces disputes, creates a verifiable payment history, and gives the ecosystem a practical transport use case instead of a purely speculative one.

## Why This Project Matters

Mobility is a high-frequency, everyday payment category. If transport can be settled transparently on Stellar, the network gains repeat transaction volume tied to real utility: commuting, ride pooling, dispatch, driver income, and local business movement.

ChainMove matters because it connects Stellar to a behavior users already understand and repeat. That makes it strategically useful for adoption, financial inclusion, and ecosystem visibility.

## Core Features

- Rider and driver onboarding with wallet-linked identities
- Pre-funded ride booking with escrowed settlement
- Deterministic release rules for booking, trip start, completion, cancellation, and refund cases
- Shared ride and solo ride booking flows
- Driver dashboard for earnings, trip history, and payout status
- Investor or sponsor flows for driver funding and fleet support
- On-chain transaction references attached to off-chain trip events
- Asset support for stable-value ride payments and regional expansion

## How It Works

1. A rider selects a route, fare option, and payment asset.
2. The application creates a trip record and prepares the settlement transaction.
3. Funds are moved into a contract-controlled or rules-controlled payment state on Stellar.
4. Driver acceptance and trip milestones update the trip lifecycle.
5. When the ride is completed, the contract releases funds to the driver and records the outcome.
6. Cancellation or dispute paths follow predefined refund and penalty logic.
7. Driver history can later support rewards, underwriting, or working-capital products.

## Stellar Ecosystem Alignment

ChainMove is a strong fit for Stellar because the network is optimized for practical asset movement, low fees, and payment-oriented product design. The proposed product uses Stellar where it is strongest:

- Consumer and merchant-style payments with predictable costs
- Stable asset settlement for transport fares
- Cross-border and corridor-friendly value transfer
- Soroban contracts for programmable release conditions
- Anchors and on/off-ramp partners for fiat access
- Wallet interoperability for broad user reach

## Specific Benefits to Stellar

- Increases on-chain utility through repeat transport payment flows
- Creates a visible real-world use case for Soroban contracts
- Expands demand for stable-value assets on Stellar
- Supports inclusive payment infrastructure for drivers and riders
- Opens a path for remittances and sponsor-funded transport flows
- Demonstrates how Stellar can power mobility, not just transfers

## Why Stellar Is the Right Blockchain

ChainMove needs low transaction costs, fast finality, simple asset support, and credible payment infrastructure. Stellar provides those advantages without requiring users to tolerate high fees or complex user flows. For a transport product, that matters more than generalized blockchain flexibility. The product benefits from payment-native primitives first, and smart contracts second.

## Value for Developers, Users, and the Ecosystem

### Developers

- A concrete mobility use case for Soroban contract patterns
- A reusable reference architecture for escrow, payout, and trip-linked assets
- Opportunities to integrate wallets, anchors, analytics, and compliance layers

### Users

- More transparent fare handling
- Better driver payout guarantees
- Cleaner cancellation and refund logic
- A path to low-friction digital transport payments

### Ecosystem

- Higher transaction utility from day-to-day activity
- Stronger storytelling around real-world adoption
- A foundation for transport-linked financial services on Stellar

## Technical Architecture

ChainMove is currently a monorepo with:

- A `Next.js` frontend for rider, driver, and investor flows
- A legacy `Motoko` smart contract prototype from the project's earlier Internet Computer implementation

The proposed Stellar architecture replaces the legacy blockchain layer with a Soroban-based settlement system while preserving the product workflows already explored in the frontend.

### Proposed Architecture Direction

- Frontend: Next.js application for booking, dashboards, onboarding, and wallet interaction
- Indexing/API layer: Node.js or serverless service for trip state, notifications, and off-chain business logic
- Soroban contracts: escrow, trip settlement, payout rules, dispute hooks, and treasury controls
- Data store: PostgreSQL or Supabase for trip metadata, audit views, and operational analytics
- Asset layer: Stellar-issued asset or supported stable asset for settlement
- Identity layer: wallet-based authentication with optional KYC or anchor integration for regulated flows

## Proposed Tech Stack

- `Next.js` and `React`
- `TypeScript`
- `Tailwind CSS`
- `Soroban SDK` for smart contracts
- `stellar-sdk` / Soroban client libraries
- `Node.js` API services
- `PostgreSQL` or `Supabase`
- `Vercel` or comparable frontend hosting

## Smart Contract and Blockchain Interaction

The planned Stellar contract layer is responsible for:

- Creating and managing ride escrow states
- Releasing funds to drivers on successful completion
- Refunding riders when cancellation rules apply
- Applying platform fees or treasury allocations
- Supporting approved settlement assets
- Emitting contract events for indexing and auditability

Representative contract modules:

- `TripEscrow`: holds and releases ride funds
- `SettlementPolicy`: enforces payout, cancellation, and refund rules
- `Treasury`: collects platform fees and allocates ecosystem incentives
- `DriverIncentives`: optional rewards for verified activity and reliability

## Repository Status

This repository should be read as:

- A working product prototype for decentralized transport workflows
- A submission-ready maintainer package for the Stellar migration
- An honest early-stage roadmap, not a claim that Soroban integration is already complete

## Installation

The current codebase runs the original prototype stack.

### Prerequisites

- Node.js 20+
- npm 10+
- DFX 0.20+ for the legacy prototype backend

### Install Dependencies

```bash
npm install
cd frontend && npm install
```

## Local Development Setup

### Current Prototype

Start the legacy local blockchain environment:

```bash
dfx start --background --clean
dfx deploy
```

Run the frontend:

```bash
cd frontend
npm run dev
```

Open `http://localhost:3000`.

### Planned Stellar Development Track

As Stellar implementation work is added, local development will use:

```bash
# install dependencies
npm install

# run frontend
cd frontend
npm run dev

# run local API or indexer service when introduced
# npm run dev:api
```

## Environment Variables

Use `.env.example` as the template for local configuration.

Key variables expected for the Stellar migration include:

- `NEXT_PUBLIC_STELLAR_NETWORK`
- `NEXT_PUBLIC_STELLAR_RPC_URL`
- `NEXT_PUBLIC_HORIZON_URL`
- `NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE`
- `NEXT_PUBLIC_CHAINMOVE_ASSET_CODE`
- `NEXT_PUBLIC_CHAINMOVE_ASSET_ISSUER`
- `NEXT_PUBLIC_CHAINMOVE_CONTRACT_ID`
- `PLATFORM_TREASURY_PUBLIC_KEY`
- `PLATFORM_TREASURY_SECRET`

## Usage

Current prototype usage:

1. Register as a rider or driver.
2. Explore booking and dashboard flows in the web app.
3. Review the current transport interaction model and UI assumptions.

Planned Stellar usage:

1. Connect a Stellar wallet.
2. Select a trip and approved settlement asset.
3. Fund the trip escrow.
4. Complete the ride lifecycle.
5. Release payment to the driver according to contract rules.

## Roadmap

- Define Soroban contract interfaces for trip escrow and settlement
- Replace the legacy Motoko payment layer with Stellar-native contracts
- Introduce Stellar wallet connection and transaction signing
- Add event indexing and payment status tracking
- Support stable asset settlement for transport fares
- Pilot driver payout and sponsor-funded transport flows
- Add analytics for ecosystem usage and transaction volume

## Future Improvements

- Dispute resolution with admin or oracle-assisted review
- Fleet management and dispatch tools
- Driver reputation and underwriting models
- Merchant and employer-funded transport credits
- Corridor-based remittance to mobility wallets
- SEP-based integrations for anchors and regulated cash-in/cash-out

## Contributing

Contributions are welcome, especially in the following areas:

- Soroban contract design
- Stellar wallet integration
- Transport domain modeling
- Frontend cleanup and component consistency
- Event indexing and observability
- Documentation and ecosystem-facing developer guides

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the workflow.

## License

This project is released under the [MIT License](./LICENSE).

## Maintainer

Maintained by the ChainMove project team as part of its proposed Stellar migration and ecosystem submission packaging.

- Repository focus: decentralized mobility payments and driver finance on Stellar
- Submission stage: early-stage, in development
- Maintainer intent: open source, ecosystem-aligned, and integration-friendly
