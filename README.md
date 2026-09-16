# HELIX / FIE

Canonical UI repository for the Finance Intelligence Engine.

## Surfaces

- `/` — FIE 3.0 front end: probability-first decision surface.
- `/control/` — HELIX Control Center: science, proof, agentic system, learning, build and infrastructure.

## Scientific UI contract

The interface must distinguish Historical Maximum from Robust Maximum, report reliability together with coverage, preserve NO EDGE / INSUFFICIENT EVIDENCE as valid outputs, and keep three prediction targets separate: direction, benchmark outperformance and economically attractive return.

Horizons are independent prediction problems: 24H, 30D, 90D, 120D, 150D and 1Y.

No state may be rendered healthy/green without verifiable evidence.

## Deployment

Static shell is Netlify-compatible via `netlify.toml`. Layerbase is the target PostgreSQL data layer; runtime connectivity must be evidenced before UI status changes from pending.
