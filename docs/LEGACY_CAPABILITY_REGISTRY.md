# HELIX — LEGACY CAPABILITY REGISTRY

Date: 2026-09-18
Status: SOURCE-LINKED ZERO-LOSS INVENTORY v1

This registry preserves the recovered legacy capability estate. It is intentionally conservative: similar labels are not deleted merely because they may later be merged.

Source-level linkage is tracked in:
- `docs/SOURCE_LEVEL_ZERO_LOSS_CENSUS.md`
- `docs/SOURCE_CENSUS_MANIFEST.json`
- `docs/LEGACY_EDGE_FUNCTION_INVENTORY.json`
- `docs/CAPABILITY_RUNTIME_MAP_V1.md`
- `docs/CAPABILITY_RUNTIME_MAP_V1.json`

Current Gate 0.5 state: IN PROGRESS. Edge metadata coverage is complete; DB/scheduler/Layerbase-object verification remains incomplete.

| Canonical domain | Legacy capability / label | Source generation | Initial disposition | Current note |
|---|---|---|---|---|
| Executive | Market Radar | FIE 2.0 | ADAPT | Preserve as market-state capability |
| Executive | What to Buy | FIE 2.0 | ADAPT | Reframe as selective opportunity surfacing, never unconditional advice |
| Company | Company Intelligence | FIE 2.0 / vNEXT | RETAIN | Core company analysis capability |
| Decision | Decision Room | FIE 2.0 / vNEXT | RETAIN | Core decision intelligence |
| Portfolio | Portfolio & Risk | FIE 2.0 / vNEXT | RETAIN | Merge into Portfolio Probability domain only after contract parity |
| Proof | Proof | FIE 2.0 / 3.0 | RETAIN | Consumer proof surface |
| System | FIE Brain | FIE 2.0 | ADAPT | Map underlying logic to HELIX engines, keep alias |
| Executive | Market Cockpit | vNEXT / v54 | RETAIN | Internal market operating view |
| Executive | What Changed | vNEXT / v54 | RETAIN | Delta intelligence across snapshots |
| News | News Room | vNEXT / v54 | RETAIN | Deduplicated causal news intelligence |
| Pattern | Pattern Room | vNEXT / v54 | RETAIN | Advanced pattern analysis |
| Synthesis | Orchestra | vNEXT / v54 | ADAPT | Preserve as explainable multi-engine synthesis view |
| Proof | Quality / Reliability | vNEXT / v54 | RETAIN | Must remain distinct from P(UP) |
| Proof | Proof / Lineage | vNEXT / v54 | RETAIN | Evidence chain and provenance |
| Learning | Learning Room | vNEXT / v54 | RETAIN | Outcome / error / replay loop |
| Learning | Correction Room | vNEXT / v54 | RETAIN | Rollback / mutation / challenger repair |
| Operations | System Health | vNEXT / v54 | RETAIN | Runtime health only, never scientific validity |
| Executive | Daily Brief | vNEXT / v54 | RETAIN | Decision-relevant summary |
| Data | Source Diversity | vNEXT / v54 | RETAIN | Evidence quality input |
| Model | Challenger Factory | vNEXT / v54 | RETAIN | Challenger generation |
| Model | Champion Lab | vNEXT / v54 | RETAIN | Governance surface, no direct Champion mutation |
| Education | Onboarding | vNEXT / v54 | RETAIN | Product explainability |
| Education | Universal KPI | vNEXT / v54 | ADAPT | KPI dictionary / semantic layer |
| Company | Expectations | vNEXT / v54 | RETAIN | Expectation-gap intelligence |
| Company | Management | vNEXT / v54 | RETAIN | Management evidence module |
| Personal | My Investor Lab | v53/v54 | RETAIN | Personal decision intelligence |
| Personal | My Score | v53/v54 | RETAIN | Personal process metric, not market edge |
| Personal | Decision Journal | v53/v54 | RETAIN | Frozen personal decision record |
| Personal | Behaviour Engine | v53/v54 | RETAIN | Behavioural bias analysis |
| Personal | Outcomes & Lessons | v53/v54 | RETAIN | Personal feedback loop |
| Consumer | Today | FIE 3.0 | RETAIN | Primary simple FIE surface |
| Consumer | My Test | FIE 3.0 | RETAIN | Virtual trial / paper experiment |
| Education | How FIE Works | FIE 3.0 | RETAIN | Consumer explainability |
| Consumer | Lab | FIE 3.0 | ADAPT | Gateway to advanced HELIX/FIE capabilities |
| Science | HELIX Control Room | FIE 3.0 extensions | ADAPT | Preserve content, move under canonical Control Center |
| Pattern | Pattern & Schemi | FIE 3.0 extensions | RETAIN | Visual pattern intelligence |
| Pattern | Animated Pattern Map | FIE 3.0 extensions | RETAIN | Representation of family topology |
| Pattern | Family Pulse | FIE 3.0 extensions | RETAIN | Signal composition; never reliability |
| Pattern | Canonical Library | FIE 3.0 extensions | RETAIN | Pattern taxonomy |
| Pattern | New Pattern Stream | FIE 3.0 extensions | RETAIN | Discovery feed |
| Pattern | Horizon Evidence | FIE 3.0 extensions | RETAIN | Horizon-specific proof |
| Pattern | Scientific Lifecycle | FIE 3.0 extensions | RETAIN | Discovery -> Champion state machine |
| Pattern | Pattern Performance Observatory | FIE 3.0 extensions | RETAIN | Pattern evidence observatory |
| Regime | Regime Intelligence | FIE 3.0 extensions | RETAIN | Context engine view |
| Pattern | Pattern Lifecycle Automation | FIE 3.0 extensions | RETAIN | Automated lifecycle orchestration |
| Proof | Pre-Validation / Falsification Lab | FIE 3.0 extensions | RETAIN | Explicit pre-validation boundary |
| Pattern | Pattern Synthesis Forge | FIE 3.0 extensions | RETAIN | Hypothesis generation only |
| Governance | Champion / Challenger Governance | FIE 3.0 extensions | RETAIN | Horizon-specific governance |
| Ceiling | Predictive Ceiling Map 2.0 | FIE 3.0 extensions | RETAIN | Historical vs robust separation |
| Ceiling | Historical Leaderboard | FIE 3.0 extensions | RETAIN | Descriptive historical layer |
| Ceiling | Robust Leaderboard | FIE 3.0 extensions | RETAIN | Canonical robust layer |
| Proof | HELIX vs Legacy Proof Race | FIE 3.0 extensions | RETAIN | Paired comparison under same cases |
| Control | Overview | HELIX Control Center | RETAIN | Master operational truth |
| Control | Live System | HELIX Control Center | RETAIN | Canonical live loops |
| Control | Cycles | HELIX Control Center | RETAIN | Scheduled execution view |
| Control | Activity | HELIX Control Center | RETAIN | Canonical event stream |
| Science | Historical Intelligence | HELIX Control Center | RETAIN | QI / Time Machine / discovery |
| Science | Backbone Map | HELIX Control Center | RETAIN | Full system visual map |
| Science | Science | HELIX Control Center | RETAIN | Multi-horizon scientific workspace |
| Ceiling | Predictive Ceiling | HELIX Control Center | RETAIN | Canonical ceiling view |
| Ceiling | Leaderboards | HELIX Control Center | RETAIN | Historical + robust |
| Pattern | Pattern Lab | HELIX Control Center | RETAIN | Registry / synthesis / tests |
| Model | Models | HELIX Control Center | RETAIN | Champion / Challenger cockpit |
| Proof | Macro Transfer | HELIX Control Center | RETAIN | External temporal transfer |
| Proof | Macro OOT 2026 | HELIX Control Center | RETAIN | Frozen OOT research artifact |
| Science | Research Lab | HELIX Control Center | RETAIN | Research funnel |
| Proof | Proof Vault | HELIX Control Center | RETAIN | Sealed proof artifacts |
| Proof | Calibration | HELIX Control Center | RETAIN | Probability reliability |
| Proof | Baselines | HELIX Control Center | RETAIN | Mandatory benchmark family |
| Knowledge | Negative Knowledge | HELIX Control Center | RETAIN | Failed hypotheses as assets |
| Agentic | Organization | HELIX Control Center | RETAIN | Functional org |
| Agentic | Boards | HELIX Control Center | RETAIN | 10 canonical boards |
| Agentic | Agents | HELIX Control Center | RETAIN | 33 canonical seats |
| Agentic | Agent Evolution | HELIX Control Center | RETAIN | Agent challenger lifecycle |
| Governance | Governance | HELIX Control Center | RETAIN | Court / Sheriff / Red Team |
| Learning | Error Memory | HELIX Control Center | RETAIN | Structured mistakes |
| Learning | Drift | HELIX Control Center | RETAIN | Pattern/model/regime drift |
| Learning | Historical Replay | HELIX Control Center | RETAIN | PIT replay |
| Learning | Coaching | HELIX Control Center | RETAIN | Agent marginal intelligence |
| Capital | Real Titles | HELIX Control Center | RETAIN | Real securities watch / inspection |
| Capital | My Money | HELIX Control Center | RETAIN | Paper portfolio |
| Capital | Bundle Builder | HELIX Control Center | RETAIN | 5/10/15 portfolio construction |
| Capital | Trade History | HELIX Control Center | RETAIN | Frozen ledger |
| Capital | P&L Attribution | HELIX Control Center | RETAIN | Outcome decomposition |
| Capital | Replay | HELIX Control Center | RETAIN | Entry evidence vs now |
| Data | Data Health | HELIX Control Center | RETAIN | Source and PIT readiness |
| Infrastructure | Scheduler | HELIX Control Center | REBUILD | Must be Layerbase-compatible and receipt-producing |
| Infrastructure | Database Cutover | HELIX Control Center | ADAPT | Becomes legacy-to-canonical reconstruction / cutoff view |
| Infrastructure | Infrastructure | HELIX Control Center | RETAIN | Topology, cost, continuity |
| Operations | WIP | HELIX Control Center | RETAIN | Evidence-based delivery funnel |

## Registry rules

1. This table is inventory, not proof of implementation.
2. RETAIN means preserve capability semantics, not necessarily legacy code.
3. ADAPT means preserve intent while changing contract, naming or surface.
4. REBUILD means the capability is required but the runtime implementation is not trusted or no longer canonical.
5. DEPRECATE and QUARANTINE require explicit evidence and rationale before assignment.
6. No row may be removed; superseded rows remain searchable with replacement references.
7. The registry must eventually gain runtime, owner, engine, data-contract, evidence-contract and verification fields for every row.
