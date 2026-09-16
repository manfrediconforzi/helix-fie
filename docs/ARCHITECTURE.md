# HELIX UI Architecture Contract

## Two surfaces, one canonical truth

### FIE Front End `/`
Consumer decision surface. It exposes only decision-relevant calibrated outputs: three separate probabilities, edge class, horizon, reliability, coverage, track record, proof status and bundle behavior. Internal infrastructure and raw agent operations stay out of this surface.

Primary navigation: TODAY / MY TEST / PROOF / HOW FIE WORKS / LAB.

### HELIX Control Center `/control/`
Internal scientific operating system modeled structurally after the Agentic Legends Control Room, adapted to financial forecasting.

Six macro areas:
1. CONTROL — objective, operational state, blockers, maturity funnel, data health.
2. SCIENCE — Pattern Lab, models, baselines, ablations, interactions, Predictive Ceiling Map, Historical vs Robust leaderboards.
3. PROOF — validation, Blind Proof, Final Holdout governance, calibration, ESS, leakage, overfitting, regime stability, negative knowledge.
4. AGENTIC SYSTEM — organization, agents, boards, dependencies, tasks, runs, permissions and flow replay.
5. LEARNING — TMLE replay, Error Memory, Weakness Map, drift, Champion/Challenger, agent evolution.
6. BUILD & INFRASTRUCTURE — roadmap, WIP funnel, database, APIs, scheduler, security, costs, backups, Useful Files and operating manuals.

## Universal visual contract

Infographic first, tables second. Animation must communicate state, flow or dependency. Every title and KPI has a micro-description. Dependency state uses evidence-backed green / amber / red. No Green Without Evidence.

## Scientific invariants

Historical Maximum and Robust Maximum are separate. Reliability is always paired with Coverage. NO EDGE and INSUFFICIENT EVIDENCE are valid outputs. Direction, benchmark outperformance and economically attractive return are distinct prediction targets. 24H / 30D / 90D / 120D / 150D / 1Y are independent forecast problems. Final Holdout is rare and governed. Champion changes require out-of-sample proof and robustness gates.