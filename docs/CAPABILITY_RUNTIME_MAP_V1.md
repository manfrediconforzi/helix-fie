# HELIX — CAPABILITY TO RUNTIME MAP v1

Date: 2026-09-18
Status: ZERO LOSS SOURCE-LINKED MAP

Purpose:
connect recovered capabilities to the actual object types that implement or previously implemented them.

Object types:
AGENT / ENGINE / JOB / API / RPC / DB / UI / BOARD / GATE / ARTIFACT

The presence of a legacy source does not make it canonical.

| Capability cluster | HELIX system | Canonical engine / owner | Recovered source implementation | Object types | Current runtime truth | ZERO LOSS disposition |
|---|---|---|---|---|---|---|
| Market Radar / Market Cockpit | OBSERVE | World Model Engine | fie-live, fie2-preview, fie2-read-gateway, global scout/scanners | ENGINE/API/RPC/DB/UI | Legacy Supabase implementation exists; canonical Layerbase binding absent | RETAIN capability / REBUILD runtime |
| Global Opportunity Discovery | OBSERVE + DISCOVER | World Model + Pattern Engine | fie-global-opportunity-scout, global-security-search, global-500-scanner | JOB/API/RPC/DB | Legacy source exists, provider/PIT contract not reverified | RETAIN / ADAPT |
| Security Onboarding | OBSERVE | Evidence Engine | fie-universal-engine, fie-radar3-auto-onboard | ENGINE/JOB/RPC/DB | Legacy Supabase only | RETAIN / REBUILD persistence |
| Company Intelligence | OBSERVE + THINK | Evidence / Expectation Gap Engines | fie2-vnext-preview, universal-engine, official-ir-ingest | ENGINE/API/RPC/DB/UI | Legacy contracts exist; canonical DB not verified | RETAIN / ADAPT |
| Official Filings / IR | OBSERVE | Evidence Engine | fie-official-ir-ingest | JOB/API/DB | SEC + official IR source logic exists | RETAIN / REBUILD canonical writes |
| News Room | OBSERVE + THINK | Evidence / Catalyst Engines | fie2-read-gateway, fie-v54-decision-stable, TMLE public/GDELT ingest | ENGINE/API/RPC/DB/UI | Legacy source chain exists | RETAIN / REBUILD |
| Evidence Quality / Source Diversity | OBSERVE + PROVE | Evidence Engine | v58 evidence-learning API, read gateway | ENGINE/RPC/DB/UI/GATE | Legacy contracts found; canonical persistence unverified | RETAIN |
| Expectations / Priced-In | OBSERVE + THINK | Expectation Gap Engine | vNEXT/v54 contracts, decision gateway | ENGINE/RPC/UI | Concept + legacy UI/RPC lineage found | RETAIN / ADAPT |
| Contradiction Intelligence | THINK | Contradiction Engine | canonical launcher + research lineage | ENGINE | No independently verified current runtime | RETAIN / REBUILD |
| Catalyst Intelligence | THINK | Catalyst Engine | official IR/news/event lineage | ENGINE | No independently verified canonical runtime | RETAIN / REBUILD |
| Blind-Spot Intelligence | THINK + PROVE | Blind-Spot Engine | canonical launcher / proof architecture | ENGINE/GATE | No verified current runtime | RETAIN / REBUILD |
| Pattern Room / Pattern Lab | DISCOVER | Pattern Engine | fie-v58-pattern-intelligence-dev | ENGINE/API/RPC/UI | Large legacy source exists; direct Layerbase logic embedded | RETAIN logic / REBUILD boundary |
| Pattern Observatory | DISCOVER + PROVE | Pattern + Proof Engines | v58 pattern intelligence | ENGINE/RPC/UI | Legacy implementation exists | RETAIN |
| Pattern Lifecycle | DISCOVER + PROVE | Pattern Engine + Governor | v58 pattern intelligence, lifecycle UI | ENGINE/JOB/RPC/GATE/UI | Legacy source exists; persistence state not verified | RETAIN / REBUILD persistence |
| Falsification Lab | PROVE | Proof Engine / Red Team | v58 validation runner / FIE3 extension | ENGINE/RPC/GATE/UI | Legacy implementation found | RETAIN / replay-verify |
| Pattern Synthesis | DISCOVER | Pattern Engine | v58 synthesis | ENGINE/RPC/UI | Legacy implementation found; hypothesis-only semantics correct | RETAIN |
| Predictive Ceiling | DISCOVER + PROVE | Pattern + Proof Engines | v58 predictive-ceiling RPCs, Control Center | ENGINE/RPC/UI/ARTIFACT | Legacy logic exists; current canonical metrics not verified | RETAIN / REBUILD source binding |
| Historical Leaderboard | PROVE | Proof Engine | v58 pattern intelligence | RPC/UI/ARTIFACT | Legacy evidence layer exists | RETAIN |
| Robust Leaderboard | PROVE | Proof Engine | v58 pattern intelligence | RPC/UI/ARTIFACT/GATE | Legacy contract exists; robust state must be revalidated | RETAIN |
| Multi-Horizon Forecasting | SYNTHESIZE | Probability Synthesis + Forecast Engines | v54 decision stable, v58 evidence learning, xhtml gateway | ENGINE/RPC/API/UI | Legacy horizon contracts found; FIE live adapter not bound | RETAIN / REBUILD |
| Probability Calibration | SYNTHESIZE + PROVE | Calibration Engine | v58/v59 proof contracts | ENGINE/RPC/DB/GATE/UI | Legacy contracts found; Layerbase persistence unverified | RETAIN / REBUILD |
| Decision Room | DECIDE | Decision Engine | fie-v54-decision-stable, decision-learning chain | ENGINE/API/RPC/UI | Legacy Supabase runtime exists | RETAIN / REBUILD |
| Dangerous / Abstention Gates | DECIDE + PROVE | Decision Engine / Gatekeeper | danger-zone scan, decision contracts | JOB/ENGINE/GATE/UI | Legacy source exists | RETAIN / ADAPT |
| Personal Decision Journal | LEARN | Error Learning Engine | fie-behaviour-engine, v53 UI | ENGINE/RPC/DB/UI | Legacy source exists | RETAIN / REBUILD persistence |
| Behaviour Engine | LEARN | Error Learning Engine | fie-behaviour-engine | ENGINE/RPC/DB/UI | Legacy source exists | RETAIN |
| Decision Regret / Relevance | LEARN | Error Learning Engine | scientist-decision-relevance, decision-regret-audit | ENGINE/JOB/ARTIFACT | Shadow/research legacy functions exist | RETAIN / replay-verify |
| Bundle 5/10/15 | COMBINE | Bundle / Portfolio Engine | fie-v57-bundle-engine-live + lab lineage | ENGINE/RPC/DB/UI | Rich legacy RPC contract exists | RETAIN / REBUILD storage |
| Bundle Learning / Reliability | COMBINE + LEARN | Bundle + Calibration Engines | v57 bundle RPC family | ENGINE/RPC/DB | Legacy implementation exists | RETAIN |
| Scenario / Stress | COMBINE | Scenario Engine | canonical launcher + bundle architecture | ENGINE | No current canonical runtime independently verified | RETAIN / REBUILD |
| Proof / Track Record | PROVE | Proof Engine | v58 evidence-learning API, v59 proof resilient | ENGINE/API/RPC/DB/UI | Legacy implementations exist; v59 also queries Layerbase directly | RETAIN / REBUILD canonical proof service |
| Proof Vault | PROVE | Proof Engine / Governor | xhtml gateway vault route, Control Center | API/DB/UI/GATE | Legacy route exists; current vault DB state unverified | RETAIN / VERIFY |
| Final Holdout Governance | PROVE | Governor / Sheriff / Court | canonical docs + Control Center checkpoint | GATE/ARTIFACT/UI | SEALED by canonical checkpoint; DB state not freshly verified | RETAIN / PROTECT |
| TMLE / Time Machine | DISCOVER + LEARN | Time Traveller / Pattern Engine | tmle public/GDELT/Bluesky ingests, FRED PIT backfill | JOB/API/RPC/DB/ARTIFACT | Historical ingest code exists; canonical scheduler/persistence unverified | RETAIN / REBUILD |
| Macro PIT / FRED | OBSERVE + DISCOVER | World Model / Evidence Engines | fie-fred-alfred-pit-backfill-v1 | JOB/API/RPC/DB | Source-level PIT objects recovered | RETAIN / REVERIFY |
| Error Memory / Failure Attribution | LEARN | Error Learning + Negative Knowledge Engines | failure-attribution-shadow, decision learning | ENGINE/JOB/DB/ARTIFACT | Shadow research exists; canonical memory DB unverified | RETAIN / REBUILD |
| Negative Knowledge | LEARN + PROVE | Knowledge / Negative Knowledge Engine | canonical docs + Control Center | ENGINE/DB/UI/ARTIFACT | Knowledge canon exists; storage not independently inventoried | RETAIN |
| Drift | LEARN | Drift Engine | canonical architecture + Control Center | ENGINE/JOB/GATE/UI | UI/canon exists, runtime not verified | RETAIN / REBUILD |
| Agent Organization | THINK + GOVERNOR | 33 seats / 10 Boards | canonical docs + control-v4-core topology | AGENT/BOARD/UI | Topology exists; 33/10 runtime values are checkpoint, not fresh receipts | RETAIN / VERIFY |
| Agent Evolution | LEARN + GOVERNOR | Coach / Scorekeeper / Red Team / Court | canonical docs + xhtml route + Control UI | AGENT/BOARD/GATE/API/UI | Legacy route/topology exists; canonical persistence unverified | RETAIN / REBUILD |
| Scheduler / Continuous Loops | ALL | Governor / Ops | legacy DB/cron assumptions, Control Center scheduler page | JOB/DB/UI | Direct scheduler inventory unavailable due DB timeout | RETAIN capability / REBUILD implementation |
| Canonical Layerbase API | ALL | Infrastructure | helix-api-health, cutover proxy, legacy xhtml bridge | API | Current direct route /api/layerbase = 503 CONFIG_REQUIRED | REBUILD |
| Layerbase Persistence | ALL | Infrastructure | helix-prod target id recovered from legacy source | DB | Canonical target identity known; schema/object inventory unverified | RETAIN target / VERIFY |
| FIE Consumer Today | DECIDE-facing product | FIE surface | assets/fie-app.js | UI | Implemented but deliberately no live Layerbase forecast adapter | RETAIN / REBUILD adapter |
| HELIX Control Center | MIRROR ONLY | Visual twin | /control + control-v4 modules | UI/API | Implemented UI, still calls legacy Supabase gateway | RETAIN UI / REBUILD API |
| VORTEX Truth Layer | GOVERNANCE / META | VORTEX | /vortex + docs | UI/ARTIFACT | Implemented recovery shell; live probe contract partially stale | RETAIN / ADAPT |

## Canonical conclusions

1. Scientific capabilities are substantially richer than the current static repo alone suggests.
2. Legacy Supabase contains many real contracts, but also many release wrappers and superseded versions.
3. The most valuable salvage targets are the semantic contracts, RPC interfaces, proof logic, PIT logic, negative knowledge and engine boundaries.
4. The least valuable runtime targets are one-shot publishers, redirect wrappers and obsolete UI release chains.
5. Layerbase is still the correct canonical target, but current direct Vercel Layerbase runtime is not configured.
6. Therefore runtime reconstruction must proceed from this map, not by copying the old Supabase database wholesale.

## Gate 0.5 remaining work

To call ZERO LOSS registry complete:
- attach each of the 100 Edge Functions to one row/group in this map;
- recover remaining throttled source signatures;
- recover DB function/view definitions when database access returns;
- inventory scheduler jobs;
- inventory Layerbase objects directly;
- assign explicit canonical owner + evidence contract for every retained capability;
- record replacement target for every DEPRECATE / QUARANTINE implementation.
