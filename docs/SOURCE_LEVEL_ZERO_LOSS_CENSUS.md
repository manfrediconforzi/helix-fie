# HELIX / VORTEX — ZERO LOSS SOURCE-LEVEL CENSUS

Date: 2026-09-18
Status: FIRST CANONICAL SOURCE CENSUS
Mode: ZERO LOSS / READ-ONLY AUDIT

## 1. Scope

This census inventories the real source artifacts currently available across:
- the verified HELIX One-Click canonical launcher package;
- the current GitHub repository;
- the legacy Supabase project and its Edge Functions;
- current FIE / HELIX Vercel deployments;
- current Layerbase-facing runtime probes.

This document does not treat presence as proof of correctness.
It distinguishes:
- canonical intent;
- source code existence;
- deployment existence;
- runtime health;
- scientific validity.

No artifact is deleted or overwritten by this census.

## 2. Canonical launcher integrity

Artifact:
HELIX_ONE_CLICK_LAUNCHER(1).zip

Extracted canonical folder:
HELIX_New_Project_Canonical_v1

Manifest verification:
- files declared in canonical MANIFEST.json: 17
- files hash-verified: 17
- hash mismatches: 0
- byte-size mismatches: 0

Canonical contents include:
00_START_HERE.md
01_HEADER_OBJECTIVE.md
02_DETAILED_MACRO_SPECIFICATION.md
03_CONCEPTUAL_ARCHITECTURE.md
04_SCIENTIFIC_CONSTITUTION.md
05_FIE_HELIX_LEGACY_STATE.md
06_AGENT_ENGINE_BLUEPRINT.md
07_PORTFOLIO_CAPITAL_INTELLIGENCE.md
08_PRODUCT_VISION.md
09_IMPLEMENTATION_GOVERNANCE.md
10_ROADMAP_AND_GATES.md
11_PROJECT_INSTRUCTIONS.md
12_KICKOFF_PROMPT.md
13_GLOSSARY.md
14_DECISION_LOG.md
HELIX_CANONICAL_MASTER.md
SOURCE_OF_TRUTH.json

Launcher manifest states:
- network behavior: opens chatgpt.com only;
- system changes: none.

Canonical SOURCE_OF_TRUTH.json confirms:
- eight intelligence systems;
- Governor enabled;
- six independent horizons;
- three prediction targets;
- edge classes including NO_EDGE and INSUFFICIENT_EVIDENCE;
- DISCOVERY -> VALIDATION -> BLIND_PROOF -> FINAL_HOLDOUT;
- legacy policy RETAIN / ADAPT / REBUILD / DEPRECATE / QUARANTINE;
- next phase originally PHASE_1_REALITY_AUDIT.

Disposition:
RETAIN as constitutional evidence.
Never use this package as runtime proof.

## 3. Current GitHub repository census

Repository:
manfrediconforzi/helix-fie

Current surfaces:
- / — FIE
- /control/ — HELIX Control Center
- /vortex/ — VORTEX recovery / truth surface

Current high-value source modules inspected:
- assets/fie-app.js
- assets/control-v4-core.js
- assets/control-v4-science.js
- assets/control-v4-proof-agent.js
- assets/control-v4-capital-core.js
- assets/control-v4-final.js
- assets/control-identity.js
- assets/vortex.js
- control/index.html
- index.html
- vortex/index.html

### 3.1 FIE current reality

assets/fie-app.js:
- does not currently bind verified live Layerbase forecast telemetry;
- explicitly returns INSUFFICIENT EVIDENCE rather than fabricating a BUY;
- declares real capital 0 ready / paper mode only;
- uses browser-local portfolio state under fie_portfolio_v1;
- preserves three probabilities P(UP), P(BEAT), P(ECON) as blank when live evidence is not bound;
- preserves proof concepts and a sealed Final Holdout checkpoint.

Classification:
UI MODULE: IMPLEMENTED
LIVE FORECAST ADAPTER: NOT CONNECTED
SCIENTIFIC STATE: must not be inferred from page content
Disposition: RETAIN UI semantics / REBUILD live adapter

### 3.2 HELIX Control Center current reality

assets/control-v4-core.js contains a direct legacy runtime dependency:

https://pyhajsqoukeazhyicgjr.supabase.co/functions/v1/fie-xhtml-render-test?api=

It also contains a static checkpoint:
- agents 33 / 33
- boards 10 / 10
- active Champion 0
- Final Holdout accessed false
- real-capital-ready horizons 0

Important:
checkpoint values are not fresh Layerbase receipts.

Classification:
UI MODULE: IMPLEMENTED
CANONICAL API BINDING: LEGACY / CONFLICT
Layerbase cutover: NOT PROVEN
Disposition: RETAIN UI / REBUILD API boundary

### 3.3 VORTEX current reality

assets/vortex.js:
- describes Layerbase helix-prod as canonical target;
- points live probes at helix-api-health.vercel.app;
- still includes probe paths /api/health, /api/parity and /api/target-audit that are no longer present in the latest helix-api-health deployment;
- correctly flags Control Center Supabase dependency and Layerbase parity as unverified.

Classification:
TRUTH UI: IMPLEMENTED
LIVE PROBE CONTRACT: PARTIALLY STALE
Disposition: RETAIN / ADAPT probe contract after canonical API is rebuilt

## 4. Legacy Supabase Edge Function census

Legacy project:
pyhajsqoukeazhyicgjr

Metadata census:
- Edge Functions discovered: 100
- status in inventory: ACTIVE
- function generations span FIE 1.x/2.x/v32/v40-v59/FIE3 and HELIX cutover work

Initial functional grouping from slug + source inspection:

| Cluster | Count | Meaning |
|---|---:|---|
| UI / gateway / publisher | 34 | Consumer pages, previews, stable gateways, redirects, release wrappers |
| Decision / behavior / learning | 13 | Decision learning, journal, behavior, regret / relevance |
| Proof / QA | 12 | QA wrappers, proof APIs, resilient proof |
| Portfolio / bundle | 9 | Bundle engine and bundle lab generations |
| General / support | 9 | Universal engine, auth, KPI taxonomy, evidence-learning wrappers |
| Source ingest | 7 | IR, FRED, Danelfin, BigData, TradingView / provider probes |
| TMLE / historical data | 7 | Public / GDELT / Bluesky ingest, FRED PIT, shadow history |
| Discovery / scanning | 5 | Global opportunity/security scanners and intraday danger scan |
| Science research | 3 | Disagreement, failure attribution, world-model audit |
| Pattern intelligence | 1 | Large pattern intelligence engine |
| TOTAL | 100 | Metadata-complete legacy Edge inventory |

### 4.1 Source inspection coverage

Source inspection completed for:
- the first 57 functions in chronological inventory order;
- plus critical later functions in Bundle, Pattern, Evidence Learning, Proof Resilient, TMLE, FRED PIT and FIE3 Consumer.

Because Supabase throttled further source reads, remaining source inspection is explicitly PARTIAL, not silently assumed.

All 100 functions remain preserved at metadata level.

## 5. Legacy source clusters and canonical disposition

### 5.1 Migration / bridge / master gateway

Primary artifact:
fie-xhtml-render-test
version observed: 114
source size observed: ~160k characters

Recovered responsibilities include routes for:
- snapshot
- ceiling
- patterns
- vault
- models
- macro
- macro-oot
- agent evolution
- Layerbase health / ready
- Layerbase cutover
- target probe
- selective rebuild price schema / audit / SQL
- macro rebuild schema / audit / lineage
- copy / verification utilities

Recovered Layerbase-related environment contracts include:
LAYERBASE_API_KEY
HELIX_LAYERBASE_API_KEY
LAYERBASE_DATABASE_URL
DATABASE_URL_LAYERBASE
HELIX_LAYERBASE_DATABASE_URL
LAYERBASE_DATABASE_ID
LAYERBASE_DB_ID
HELIX_LAYERBASE_DATABASE_ID
LAYERBASE_API_URL

This source proves that a Layerbase bridge / rebuild implementation existed.

It does NOT prove current stable Layerbase runtime.

Canonical disposition:
CAPABILITY: RETAIN / ADAPT
LEGACY IMPLEMENTATION: QUARANTINE after replacement
REPLACEMENT: canonical server-side Layerbase API with explicit route contracts

### 5.2 Read gateway / FIE vNEXT lineage

Key artifacts:
fie2-read-gateway
fie2-orchestra-fast-read
fie-v54-stable-gateway
fie-v54-decision-stable

Recovered contracts include:
fie2_decision_room_v3
fie2_quality_orchestra
fie2_news_room
fie2_portfolio_risk_room_v3
fie_multi_horizon_snapshot_v1
fie2_orchestra_fast_read_v1

Canonical disposition:
CAPABILITY: RETAIN
RUNTIME: REBUILD / ADAPT against Layerbase

### 5.3 Market discovery / onboarding

Key artifacts:
fie-global-opportunity-scout
fie-global-security-search
fie-global-500-scanner
fie-radar3-auto-onboard
fie-danger-zone-intraday-scan
fie-tradingview-scan-test

Recovered external providers:
Yahoo Finance
TradingView scanner
SEC

Recovered data/RPC contracts include:
fie_global_scout_snapshots
fie_global_scout_latest_v1
fie_global_search_v2
fie_radar3_onboarding_queue
daily_prices
fie_register_security_and_track
fie_apply_price_engine
ingest_sec_companyfacts_generic_v1
fie_ingest_sec_recent_filings_v1
fie2_universal_onboarding_cycle_v2
fie_intraday_signal_snapshots
fie_global_radar3_universe
fie_refresh_danger_zone_alerts_v1

Canonical disposition:
CAPABILITY: RETAIN
PROVIDER / PIT ELIGIBILITY: REVERIFY
RUNTIME: REBUILD or ADAPT after source contract audit

### 5.4 Decision learning / behavior

Key artifacts:
fie-decision-learning-live
fie-v54-decision-stable
fie-v55-decision-learning-readonly
fie-v55-decision-learning-dev*
fie-v56-decision-learning-dev
fie-behaviour-engine
fie-v53-behaviour-ui
fie-scientist-decision-relevance-v1/v2
fie-decision-policy-shadow-v1
fie-decision-regret-audit-v1

Recovered behavior RPCs:
fie_behaviour_dashboard_v1
fie_decision_journal_create_v1
fie_decision_journal_review_v1

Canonical disposition:
Personal behavior capability: RETAIN
Decision learning capability: RETAIN
Legacy implementation: ADAPT / REBUILD
Scientific impact claims: UNMEASURED until replayed

### 5.5 Portfolio Probability / Bundle

Key artifact:
fie-v57-bundle-engine-live

Recovered RPC contracts:
fie_bundle_learning_run
fie_bundle_metric_snapshot
fie_bundle_public_payload
fie_bundle_reliability
fie_freeze_generated_bundle
fie_horizon_catalog_v1
fie_horizon_scientific_status_v1
fie_invalidate_bundle
fie_promote_bundle_challenger
fie_resolve_bundle
fie_resolve_due_bundles
fie_rollback_bundle_version

Historical function chain also includes:
bundle-engine-dev
dev2
dev3
dev4
bundle-lab-dev
bundle-lab-dev-final
bundle-lab-release
bundle-lab-live

Canonical disposition:
CAPABILITY: RETAIN
LEARNING / GOVERNANCE CONTRACTS: RETAIN
RUNTIME STORAGE: REBUILD on Layerbase
LEGACY VERSION CHAIN: DEPRECATE as runtime only after archived lineage exists

### 5.6 Pattern Intelligence

Key artifact:
fie-v58-pattern-intelligence-dev
version observed: 24
source size observed: ~74k characters

Recovered RPCs include:
fie_horizon_catalog_v1
fie_horizon_scientific_status_v1
fie_predictive_ceiling_map_v1
fie_pure_momentum_proof_summary_v1
helix_control_room_v1
tmle_candidate_feed_v1
tmle_pattern_leaderboard_v1

This function also contains direct Layerbase API query logic referencing target database:
98cf9ec0-a13c-40be-bafe-3cbc37949c0b

Recovered feature areas from the legacy UI / route contract include:
- Pattern Observatory
- Scientific Lifecycle
- Validation Runner
- Pattern Synthesis
- Horizon Governance
- Predictive Ceiling v2
- Historical / Robust Leaderboards

Canonical disposition:
CAPABILITY: RETAIN
SCIENTIFIC LOGIC: RETAIN subject to replay verification
LEGACY DIRECT API BINDING: REBUILD
PRODUCTION WEIGHTS: no automatic carry-over

### 5.7 Evidence / Proof / Horizon Science

Key artifact:
fie-v58-evidence-learning-api-dev

Recovered RPC contracts include:
fie_1y_structural_scientific_suite_v1
fie_24h_readiness_audit_v1
fie_agent_multi_horizon_context_v1
fie_fundamentals_horizon_profile_v1
fie_horizon_catalog_v1
fie_horizon_scientific_status_v1
fie_influencer_horizon_profile_v1
fie_macro_horizon_mapping_v1
fie_market_regime_horizon_profile_v1
fie_multi_horizon_migration_report_v1
fie_multi_horizon_observability_v1
fie_multi_horizon_regression_suite_v1
fie_news_temporal_impact_profile_v1
fie_predictive_ceiling_map_v1
fie_proof_forecasts_v1
fie_proof_learning_v1
fie_proof_metric_history_v1
fie_proof_patterns_v1
fie_proof_summary_v1
fie_proof_summary_v2
fie_signal_horizon_matrix_v1
fie_trader_memory_scientific_status_v1
tmle_health_v1
tmle_pattern_leaderboard_v1
tmle_summary_v1

Key artifact:
fie-v59-proof-resilient-dev

It contains direct Layerbase query logic in addition to legacy proof integration.

Canonical disposition:
CAPABILITY: RETAIN
PROOF RESULTS: preserve as evidence artifacts, not auto-promote
RUNTIME: REBUILD around canonical Layerbase proof schema

### 5.8 TMLE / historical / PIT ingest

Key artifacts:
fie-tmle-public-ingest
fie-tmle-public-ingest-v2
fie-tmle-gdelt-ingest-v1/v2
fie-tmle-bluesky-ingest-v1
fie-fred-alfred-pit-backfill-v1
fie-danelfin-shadow-history-v1

Recovered external provider contracts include:
GDELT
FRED / ALFRED
Danelfin
LunarCrush
TipRanks
BigData

Recovered FRED PIT objects:
fie_macro_pit_features
fie_macro_pit_ingest_runs
fie_provider_intelligence_gate
RPC: fie_macro_target_dates_v1

Canonical disposition:
TMLE capability: RETAIN
provider eligibility: REVERIFY individually
historical data: selective reconstruction / PIT audit
no blind import into Layerbase

### 5.9 Official filings / company evidence

Key artifact:
fie-official-ir-ingest

Recovered sources include:
SEC submissions / archives
official investor-relations domains for selected issuers

Canonical disposition:
RETAIN source logic concept
REVERIFY parser, timestamp and PIT contracts
rebuild canonical evidence writes on Layerbase

### 5.10 Historical UI / publisher wrappers

Examples:
fie-v32-allrooms-colors
fie-v32-header-inspector
fie-v32-publish-static
fie-v32-publish-svg
fie-v32-mobile-menu-patch
fie-v40-publisher-once through fie-v52-live-visuals-publisher-once
multiple one-shot QA wrappers

Source inspection shows many publisher-once functions are extremely small wrappers rather than independent scientific logic.

Example:
fie-v32-allrooms-colors currently redirects to fie-v54-friends-release.

Canonical disposition:
HISTORICAL PROVENANCE: RETAIN
ACTIVE RUNTIME: DEPRECATE after archival and replacement verification
DO NOT COUNT AS DISTINCT SCIENTIFIC CAPABILITIES

## 6. Vercel deployment census

FIE / HELIX projects discovered: 11

1. helix-api-health
2. helix-cutover-proxy
3. helix-control-center
4. helix-control-center-v4-stable
5. helix-control-center-v4-fixed
6. helix-v4-test
7. helix-fie-control-center
8. fie3-consumer-dev
9. fie3-test-render
10. fie-finance-intelligence-engine-v32
11. fie-finance-intelligence-engine

At census time, each had a latest deployment in READY state.

READY only means Vercel deployed the artifact.
It does not prove functional Layerbase connectivity or scientific validity.

## 7. Current Layerbase-facing runtime verification

### 7.1 helix-api-health

Current root response:
HELIX Layerbase Runtime
Canonical direct health: /api/layerbase
No Supabase dependency.

Actual probe:
GET /api/layerbase
HTTP 503

Payload:
ok=false
state=CONFIG_REQUIRED
provider=LAYERBASE
error=DATABASE_URL_NOT_CONFIGURED

Previously known routes:
/api/health
/api/layerbase-status
/api/layerbase-health
/api/parity
/api/target-audit

currently return 404 on the latest deployment.

Interpretation:
- the Vercel project exists;
- latest deployment is READY;
- canonical Layerbase database URL is not configured in that deployment;
- old route contract has changed / disappeared;
- therefore this deployment is not current proof of Layerbase readiness.

### 7.2 helix-cutover-proxy

GET /api/env returns 200, but reports all checked Layerbase configuration flags false:
LAYERBASE_KEY
LAYERBASE_API_KEY
LAYERBASE_DATABASE_ID
LAYERBASE_DATABASE_URL
DATABASE_URL
POSTGRES_URL
LAYERBASE_URL

Interpretation:
deployment exists, but it is not configured as a working Layerbase cutover service.

## 8. Database census status

Direct metadata query against legacy Supabase PostgreSQL was attempted read-only through information_schema.

Result:
connection terminated due to connection timeout.

Therefore:
- direct table inventory: UNVERIFIED in this pass;
- direct row counts: UNVERIFIED;
- direct constraint / sequence inventory: UNVERIFIED;
- direct scheduler / pg_cron inventory: UNVERIFIED.

Known objects recovered from source code remain SOURCE-DERIVED, not DB-VERIFIED.

This distinction must remain visible.

## 9. Source-derived object registry

Confirmed from inspected source contracts:

### Tables / persistent objects
companies
daily_prices
fie_global_scout_snapshots
fie_radar3_onboarding_queue
fie_intraday_signal_snapshots
fie_global_radar3_universe
fie_macro_pit_features
fie_macro_pit_ingest_runs
fie_provider_intelligence_gate
evidence

This list is incomplete by design because many legacy functions call RPCs that hide underlying tables.

### High-value RPC families

Market / onboarding:
fie_local_security_search
fie_engine_onboarding_status
fie2_company_onboarding_readiness_v1
fie_register_security_and_track
fie_global_scout_latest_v1
fie_global_search_v2
fie_apply_price_engine
ingest_sec_companyfacts_generic_v1
fie_ingest_sec_recent_filings_v1
fie2_universal_onboarding_cycle_v2
fie_refresh_danger_zone_alerts_v1

Decision:
fie_multi_horizon_snapshot_v1
fie2_decision_room_v3
fie2_quality_orchestra
fie2_news_room
fie2_portfolio_risk_room_v3

Behavior:
fie_behaviour_dashboard_v1
fie_decision_journal_create_v1
fie_decision_journal_review_v1

Portfolio:
fie_bundle_learning_run
fie_bundle_metric_snapshot
fie_bundle_public_payload
fie_bundle_reliability
fie_freeze_generated_bundle
fie_invalidate_bundle
fie_promote_bundle_challenger
fie_resolve_bundle
fie_resolve_due_bundles
fie_rollback_bundle_version

Science / pattern / proof:
fie_horizon_catalog_v1
fie_horizon_scientific_status_v1
fie_predictive_ceiling_map_v1
fie_pure_momentum_proof_summary_v1
helix_control_room_v1
tmle_candidate_feed_v1
tmle_pattern_leaderboard_v1
fie_1y_structural_scientific_suite_v1
fie_24h_readiness_audit_v1
fie_agent_multi_horizon_context_v1
fie_fundamentals_horizon_profile_v1
fie_influencer_horizon_profile_v1
fie_macro_horizon_mapping_v1
fie_market_regime_horizon_profile_v1
fie_multi_horizon_migration_report_v1
fie_multi_horizon_observability_v1
fie_multi_horizon_regression_suite_v1
fie_news_temporal_impact_profile_v1
fie_proof_forecasts_v1
fie_proof_learning_v1
fie_proof_metric_history_v1
fie_proof_patterns_v1
fie_proof_summary_v1
fie_proof_summary_v2
fie_signal_horizon_matrix_v1
fie_trader_memory_scientific_status_v1
tmle_health_v1
tmle_summary_v1
fie_macro_target_dates_v1

## 10. Canonical source-of-truth implications

### Retain
- scientific constitution;
- canonical launcher;
- recovered negative knowledge;
- pattern / proof / TMLE / bundle capability contracts;
- 33-seat / 10-board topology as organizational canon;
- historical UI and release lineage;
- source and provider contracts where eligible.

### Adapt
- gateways;
- decision APIs;
- pattern intelligence APIs;
- proof APIs;
- provider ingests;
- VORTEX live probe contract.

### Rebuild
- canonical Layerbase server-side API;
- FIE live forecast adapter;
- HELIX Control Center API boundary;
- Layerbase-backed persistence for retained engines;
- scheduler / continuous loops;
- runtime evidence receipts;
- direct Layerbase health / parity / audit service.

### Deprecate after archival
- one-shot publisher wrappers;
- obsolete release redirects;
- obsolete QA wrappers;
- superseded UI gateways.

### Quarantine
- any legacy component that performs unsafe direct writes, has uncertain PIT lineage, conflicts with canonical scientific rules, or relies on unverifiable migration assumptions.

Quarantine is not deletion.

## 11. Critical blockers confirmed

1. Current HELIX Control Center still calls legacy Supabase Edge runtime.
2. FIE current surface has no verified live Layerbase forecast adapter.
3. helix-api-health current Layerbase route is CONFIG_REQUIRED because DATABASE_URL is not configured.
4. helix-cutover-proxy currently has no Layerbase configuration.
5. Legacy Supabase DB metadata access times out.
6. Full Layerbase schema / object inventory is not independently verified.
7. Scheduler replacement is not independently verified.
8. Remaining Edge source census is partially throttled by Supabase; metadata coverage remains complete.

## 12. Gate impact

GATE 0 — Canonical truth recovered
Status: STRONG / preserved by launcher + repository canon.

GATE 0.5 — ZERO LOSS registry complete
Status: IN PROGRESS.
Metadata-level capability and Edge inventory exists.
Remaining work: object-level mapping for all functions / RPCs / datasets / jobs.

GATE 1 — Layerbase live
Status: BLOCKED.
Current direct Vercel runtime reports DATABASE_URL_NOT_CONFIGURED.

GATE 2+ — LOCKED by evidence.
No higher gate should be claimed complete.

## 13. Next source-level work

Without changing UI:
1. finish source inspection of throttled Edge Functions;
2. map all RPC names to canonical capabilities;
3. recover underlying table / view / function definitions when DB access returns;
4. inventory schedulers / pg_cron / automation contracts;
5. inventory current Layerbase schemas and objects directly;
6. produce capability -> Agent / Engine / Job / API / DB / UI / Board / Gate mapping;
7. produce KEEP / REBUILD execution backlog from that matrix;
8. only then alter runtime or navigation.

