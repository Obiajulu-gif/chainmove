# Contributing to ChainMove

## Scope

ChainMove is currently an early-stage repository with two realities:

- a legacy Internet Computer prototype remains in the codebase
- the submission direction and future implementation target are Stellar and Soroban

Contributions should preserve that distinction and avoid presenting unfinished migration work as production-ready.

## How to Contribute

1. Open an issue describing the problem, proposal, or bug.
2. Confirm whether the change applies to the legacy prototype, the Stellar migration plan, or both.
3. Keep pull requests focused and easy to review.
4. Update documentation when product behavior, architecture, or setup changes.

## Recommended Contribution Areas

- Soroban escrow contract design
- Stellar wallet integration
- transport payment UX
- backend event processing and indexing
- test coverage
- documentation and reviewer-facing materials

## Development Standards

- Use clear, minimal commits.
- Prefer TypeScript for new frontend and service code.
- Add tests when introducing behavior that affects payments or settlement.
- Document assumptions around trust, custody, and dispute handling.
- Do not remove unrelated user changes from the worktree.

## Pull Request Checklist

- the change has a clear purpose
- documentation is updated where needed
- environment variables are documented
- payment or settlement logic changes include tests or explicit test gaps
- the PR description explains whether the work is legacy-prototype maintenance or Stellar migration work

## Reporting Issues

When opening an issue, include:

- expected behavior
- actual behavior
- reproduction steps
- screenshots or logs if relevant
- whether the issue affects the current prototype or the planned Stellar architecture

## Code of Conduct

Be direct, respectful, and technically precise. Review discussions should focus on correctness, user impact, and maintainability.
