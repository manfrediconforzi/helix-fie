# HELIX Implementation Funnel

Status is evidence-based. Planned architecture is not counted as implemented runtime.

| Stage | Current state | Exit evidence |
|---|---|---|
| Foundation | AMBER | Canonical repo, UI architecture, front/back shells, scientific invariants documented |
| Connectivity | RED | Layerbase connection proven; secrets outside repo; health receipt |
| Core Execution | RED | Point-in-time forecast pipeline executes end-to-end |
| Interdependencies | RED | Agents/boards exchange canonical objects with lineage |
| QA | RED | Leakage, bias, overlap and reproducibility gates running |
| Proof | RED | Validation + Blind Proof metrics persisted and rendered |
| Learning | RED | TMLE replay, error memory, drift and challenger loop running |
| Control Room | AMBER | Shell exists; live canonical telemetry not connected |
| Production Maturity | RED / LOCKED | Security, backup/restore, observability, proof and governance gates pass |

## Immediate critical path

1. Deploy current static front/back shell to Netlify.
2. Connect Layerbase through a server-side boundary; never expose PostgreSQL credentials in browser code.
3. Define canonical API contract for system state, forecasts, proof, patterns, agents, runs and evidence.
4. Build live CONTROL surface from evidence receipts.
5. Implement SCIENCE and PROOF data models before cosmetic green states.
6. Add agent runtime / flow replay only when execution lineage exists.
7. Implement TMLE and Champion/Challenger after point-in-time data integrity is proven.