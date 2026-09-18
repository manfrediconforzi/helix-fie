(function(){
"use strict";
var PAGES=[
["COMMAND","North Star and verified reconstruction truth"],
["SYSTEM MAP","Eight intelligence systems and governed dependencies"],
["SCIENCE","Pattern discovery, horizons, KPIs and predictive ceiling"],
["PROOF","Scientific gates, baselines and anti-overfitting"],
["AGENTS","33 seats, 10 boards and three operating loops"],
["ENGINES","Canonical intelligence and decision engines"],
["DATA / LAYERBASE","Canonical memory, cutover and infrastructure truth"],
["RECOVERY","Retain / adapt / rebuild / quarantine plan"]
];
var SYSTEMS=[
["OBSERVE & UNDERSTAND","World Intelligence","Build the point-in-time world state from market, company, macro, news, events and regime evidence."],
["THINK","Collective Investment Intelligence","Specialist agents interpret evidence, expectations, contradictions, catalysts and blind spots."],
["DISCOVER","Machine Research & Pattern Intelligence","Generate, mutate, ablate, combine and falsify predictive patterns at machine scale."],
["SYNTHESIZE","Probability Intelligence","Convert evidence into calibrated probabilities without collapsing distinct prediction targets."],
["DECIDE","Capital Decision Intelligence","Transform prediction into BUY / SELL / WAIT / abstain under explicit risk and proof constraints."],
["COMBINE","Portfolio Probability Intelligence","Optimize joint portfolio behavior, dependencies, diversification and tail states."],
["PROVE","Scientific Intelligence","Independent validation, blind proof, calibration, leakage and overfitting control."],
["LEARN","Compounding Intelligence","Resolve outcomes, classify errors, detect drift and create controlled challengers."]
];
var KPI=["AUC","Brier Score","Log Loss","ECE / Calibration Error","Balanced Accuracy","Directional Accuracy","Coverage","RAW N","Effective N","PROOF Score","Incremental Edge vs Baseline","Overfitting Risk","Complexity Penalty","Economic Utility"];
var BASELINES=["Random 50/50","Always Up","Always Down","Historical Base Rate","Benchmark","Simple Momentum","Naive Persistence"];
var FAMILIES=["PRICE","FUNDAMENTALS","MACRO","NEWS","EVENTS","INFLUENCERS","MARKET REGIME"];
var AGENTS=["Mr Wolf","The Scout","The Tape","The Accountant","The Weatherman","The Editor","The Chameleon","The Whisperer","The Sniper","The Quant","The Spider","The Detective","The Prospector","The Alchemist","The Architect","The Time Traveller","The Gambler","The Bookmaker","The Prosecutor","The Inspector","The Gatekeeper","The Canary","The Chairman","The Treasurer","The General","The Sentinel","The Scorekeeper","The Coroner","The Coach","The Judge","The Sheriff","The Broker","The Archivist"];
var BOARDS=["Watchtower","Observatory","Lab","Odds Room","Red Team","Committee","Capital Room","Court","Memory Room","Coaching Room"];
var ENGINES=[
["World Model Engine","Point-in-time state of the investable world."],
["Evidence Engine","Source eligibility, lineage, freshness and evidence quality."],
["Expectation Gap Engine","Difference between market expectations and observed evidence."],
["Contradiction Engine","Conflicts across signals, sources and narratives."],
["Catalyst Engine","Upcoming or emerging events capable of changing the distribution."],
["Blind-Spot Engine","Information and assumptions the current system may be missing."],
["Pattern Engine","Discovery, synthesis, interactions, ablations and pattern lifecycle."],
["Regime Engine","Market environment classification and transition risk."],
["Probability Synthesis Engine","Calibrated fusion of heterogeneous evidence."],
["Forecast Engine","Three probability targets across six independent horizons."],
["Decision Engine","Prediction-to-action policy with abstention."],
["Bundle / Portfolio Engine","Joint multi-asset optimization and causal diversification."],
["Scenario Engine","Stress, tail and alternative-world simulation."],
["Proof Engine","Validation, Blind Proof and protected holdout governance."],
["Calibration Engine","Reliability of declared probabilities."],
["Drift Engine","Signal, model, data and regime drift detection."],
["Error Learning Engine","Structured error memory and challenger generation."],
["Knowledge / Negative Knowledge Engine","Preserves validated knowledge and falsified hypotheses."]
];
var RECOVERY=[
["Canonical documents","VERIFIED","Manifest hashes checked; scientific constitution, objective, architecture and governance recovered."],
["FIE current surface","VERIFIED","Current repository exposes the decision-facing FIE surface."],
["HELIX current surface","VERIFIED","Current repository and production deployment expose HELIX Control Center."],
["Legacy engine inventory","VERIFIED","Legacy Edge Function inventory contains FIE, pattern, proof, TMLE, bundle and migration machinery."],
["Layerbase target identity","VERIFIED","helix-prod is referenced by the recovery bridge; target database id is recorded."],
["Layerbase live connectivity","WARNING","Recent health calls produced both 200 and 503. Do not claim stable cutover."],
["Layerbase schema parity","UNVERIFIED","Canonical schemas and row parity require fresh independent verification."],
["Control Center runtime","CONFLICT","Current control-v4 core still calls the old Supabase Edge Function."],
["Supabase cutoff","BLOCKED","Cannot be declared complete while the UI/runtime depends on the legacy Edge endpoint."],
["Scheduler replacement","UNVERIFIED","pg_cron cannot be assumed migrated to Layerbase."],
["33 agents / 10 boards","CHECKPOINT","Canonical organizational checkpoint. RUNNING is not current scientific validation."],
["Champion","0","No canonical Champion may be inferred or promoted from UI."],
["Final Holdout","SEALED","Protected from optimization and rebuild."],
["Real capital","0 READY","Paper / shadow only until full scientific release gates pass."]
];
var page=decodeURIComponent(location.hash.slice(1)||"COMMAND");
function e(id){return document.getElementById(id)}
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function st(s){var u=String(s||"").toUpperCase(),c=/VERIFIED|READY|PASS|SEALED/.test(u)?"green":/BLOCK|CONFLICT|FAIL/.test(u)?"red":/WARNING|CHECKPOINT|UNVERIFIED|PARTIAL/.test(u)?"amber":"grey";return '<span class="status '+c+'">'+esc(s)+'</span>'}
function head(t,d,s){return '<div class="section-head"><div><h2>'+esc(t)+'</h2><p>'+esc(d)+'</p></div>'+(s?st(s):"")+'</div>'}
function metric(a,b,c){return '<div class="metric"><span class="label">'+esc(a)+'</span><b>'+esc(b)+'</b><small>'+esc(c)+'</small></div>'}
function panel(k,t,p){return '<div class="panel"><span class="kicker">'+esc(k)+'</span><h3>'+esc(t)+'</h3><p>'+esc(p)+'</p></div>'}
function nav(){var n=e("nav");n.innerHTML='<div class="group">VORTEX CORE</div>'+PAGES.map(function(x){return '<button data-p="'+x[0]+'" class="'+(page===x[0]?"active":"")+'"><span>'+x[0]+'</span><span>›</span></button>'}).join("");Array.prototype.forEach.call(n.querySelectorAll("button"),function(b){b.onclick=function(){go(b.dataset.p)}})}
function go(p){page=p;location.hash=encodeURIComponent(p);e("side").classList.remove("open");nav();render();window.scrollTo({top:0,behavior:"smooth"})}
function hero(title,copy){return '<section class="hero"><div class="hero-card"><span class="eyebrow">VORTEX · CANONICAL FINANCE INTELLIGENCE</span><h1>'+title+'</h1><p>'+copy+'</p><div class="pill-row"><span class="pill">ROBUST MAXIMUM</span><span class="pill">PROBABILITY FIRST</span><span class="pill">ABSTENTION ALLOWED</span><span class="pill">NO GREEN WITHOUT EVIDENCE</span></div></div><div class="hero-viz"><div class="core-orbit o1"></div><div class="core-orbit o2"></div><div class="core-orbit o3"></div><div class="core-dot">VORTEX<br>TRUTH CORE</div><div class="sat s1">FIE</div><div class="sat s2">HELIX</div><div class="sat s3">PROOF</div><div class="sat s4">LEARNING</div><div class="sat s5">LAYERBASE</div><div class="sat s6">CAPITAL</div></div></section>'}
function command(){
return hero("Recover the road.<br>Rebuild the machine.","VORTEX restores FIE + HELIX as one coherent system. FIE remains the decision surface. HELIX remains the scientific machine. Layerbase becomes canonical memory. VORTEX is the operating and truth layer that prevents the architecture from fragmenting again.")+
'<div class="metric-grid">'+
metric("CANONICAL CHAMPION","0","No model has passed the complete governed proof stack.")+
metric("FINAL HOLDOUT","SEALED","Protected evidence. Never a tuning surface.")+
metric("REAL CAPITAL","0 READY","No horizon is authorized for real-capital release.")+
metric("HORIZONS","6","24H · 30D · 90D · 120D · 150D · 1Y")+
metric("TARGETS","3","Direction · beat benchmark · economic return")+
metric("EDGE LANGUAGE","5 STATES","High · Medium · Low · No Edge · Insufficient Evidence")+
'</div>'+
head("Current reconstruction truth","What is verified now versus what remains a blocker.","TRUTH FIRST")+
'<div class="recovery-grid">'+RECOVERY.slice(0,9).map(function(r){return '<div class="recovery-card"><div class="meta"><span class="kicker">'+esc(r[0])+'</span>'+st(r[1])+'</div><p>'+esc(r[2])+'</p></div>'}).join("")+'</div>'+
head("One hierarchy","VORTEX prevents FIE, HELIX and infrastructure from becoming separate competing truths.")+
'<div class="flow"><div class="step">VORTEX<br>MASTER TRUTH</div><span class="arrow">→</span><div class="step">FIE<br>DECISION SURFACE</div><span class="arrow">+</span><div class="step">HELIX<br>SCIENTIFIC CORE</div><span class="arrow">→</span><div class="step">LAYERBASE<br>CANONICAL MEMORY</div><span class="arrow">→</span><div class="step">PROOF + LEARNING<br>EVIDENCE LOOP</div></div>';
}
function systemMap(){
return hero("One machine.<br>Eight intelligences.","The architecture is functional, not page-driven. Every layer owns a distinct part of the path from world evidence to robust prediction, governed action, proof and learning.")+
head("Intelligence systems","Click a system to inspect its purpose and role.")+
'<div class="system-grid">'+SYSTEMS.map(function(x,i){return '<div class="system-card inspect" data-title="'+esc(x[0])+'" data-detail="'+esc(x[2])+'"><span class="num">0'+(i+1)+'</span><span class="kicker">'+esc(x[1])+'</span><h3>'+esc(x[0])+'</h3><p>'+esc(x[2])+'</p></div>'}).join("")+'</div>'+
head("Canonical cycle","The machine loops only after outcome and proof are observed.")+
'<div class="flow">'+["WORLD","OBSERVE","THINK","DISCOVER","SYNTHESIZE","PREDICT","DECIDE","COMBINE","ACT / ABSTAIN","PROVE","LEARN"].map(function(x,i,a){return '<div class="step">'+x+'</div>'+(i<a.length-1?'<span class="arrow">→</span>':"")}).join("")+'</div>';
}
function science(){
return hero("Discover.<br>Calibrate. Falsify.","The objective is not the prettiest backtest. It is the highest predictive edge that survives unseen data, overlap adjustment, temporal transfer, calibration and complexity penalties.")+
'<div class="metric-grid">'+metric("HISTORICAL MAX","SEPARATE","Best result ever observed in the past.")+metric("ROBUST MAX","NORTH STAR","Best result surviving genuinely unseen data.")+metric("COVERAGE","ALWAYS PAIRED","Accuracy without coverage is incomplete.")+metric("EFFECTIVE N","MANDATORY","Overlap and correlation reduce real information.")+metric("PLATEAU","DETECT","Change signal family when marginal gain vanishes.")+metric("ABSTAIN","VALID","No Edge is a scientifically useful output.")+'</div>'+
head("Pattern families","Independent signal families feeding Pattern Lab.")+
'<div class="pill-row">'+FAMILIES.map(function(x){return '<span class="pill">'+x+'</span>'}).join("")+'</div>'+
head("Required metrics","Every challenger must expose probability quality, discrimination, coverage and robustness.")+
'<div class="grid4">'+KPI.map(function(x){return panel("KPI",x,"Must be measured out-of-sample where applicable and bound to provenance, horizon, sample and experiment.")}).join("")+'</div>'+
head("Independent horizons","Each horizon is a different statistical problem.")+
'<div class="flow">'+["24H","30D","90D","120D","150D","1Y"].map(function(x){return '<div class="step">'+x+'<br><span>own patterns · weights · calibration</span></div>'}).join('<span class="arrow">≠</span>')+'</div>';
}
function proof(){
return hero("Evidence must<br>survive gates.","Scientific proof is an independent firewall. A candidate can look excellent historically and still remain unusable if it fails transfer, calibration, effective-sample, leakage or overfitting checks.")+
head("Scientific pipeline","Final Holdout is intentionally protected.")+
'<div class="gate-lane">'+[
["DISCOVERY","generate candidate"],["VALIDATION","walk-forward / purged"],["BLIND PROOF","untouched evidence"],["ANTI-OVERFIT","leakage + testing"],["CALIBRATION","probability reliability"],["ESS","independent info"],["FINAL HOLDOUT","rare protected gate"],["CHAMPION","governed promotion"],["RELEASE","capital authorization"]
].map(function(x,i){return '<div class="gate"><span class="kicker">'+String(i+1).padStart(2,"0")+'</span><b>'+x[0]+'</b><span>'+x[1]+'</span></div>'}).join("")+'</div>'+
head("Mandatory baselines","A challenger has no edge if it cannot beat simple alternatives.")+
'<div class="pill-row">'+BASELINES.map(function(x){return '<span class="pill">'+x+'</span>'}).join("")+'</div>'+
head("Anti-overfitting checks","These are scientific controls, not optional diagnostics.")+
'<div class="grid3">'+["Look-ahead bias","Survivorship bias","Selection bias","Data leakage","Multiple testing","Sample overlap","Ticker concentration","Regime concentration","Parameter instability"].map(function(x){return panel("CONTROL",x,"Must be evidenced before promotion or release.")}).join("")+'</div>';
}
function agents(){
return hero("A living organization.<br>Not a list of bots.","Agents have ownership, handovers, evidence requirements and governed authority. Their runtime state must never be confused with scientific validation.")+
'<div class="metric-grid">'+metric("SEATS","33","Canonical organizational checkpoint.")+metric("BOARDS","10","Functional operating subgraphs.")+metric("RESEARCH LOOP","6 STAGES","Watchtower to Court.")+metric("LIVE LOOP","7 STAGES","Observation to Memory.")+metric("EVOLUTION LOOP","6 STAGES","Score → Coach → Challenger → Proof.")+metric("QC FAIL","NO BYPASS","Red Team / Court controls are independent.")+'</div>'+
head("Canonical Boards","Checkpoint topology; current runtime requires fresh Layerbase receipts.")+
'<div class="board-map">'+BOARDS.map(function(x){return '<div class="board"><b>'+x+'</b><span>Mission · ownership · handover · evidence · state</span></div>'}).join("")+'</div>'+
head("33 canonical seats","Click an agent. VORTEX will eventually bind each seat to live inputs, outputs, task receipts and AMI.")+
'<div class="agents">'+AGENTS.map(function(x,i){return '<div class="agent inspect" data-title="'+esc(x)+'" data-detail="Canonical seat '+(i+1)+' of 33. Current recovery classification: CHECKPOINT until Layerbase runtime receipts are re-verified."><b>'+esc(x)+'</b><span>seat '+String(i+1).padStart(2,"0")+' · CHECKPOINT</span></div>'}).join("")+'</div>'+
head("Three operating loops","Functional flow is more important than raw agent count.")+
'<div class="grid3">'+panel("RESEARCH","Watchtower → Observatory → Lab → Odds Room → Red Team → Court","Discovery to independent scientific governance.")+panel("LIVE","Watchtower → Observatory → Probability Stack → Committee → Capital Room → Sentinel → Memory","Evidence to governed decision and observed outcome.")+panel("AGENT EVOLUTION","Scorekeeper + Quant → Coach → Challenger → A/B + OOS + Ablation → Red Team → Court / Sheriff","Agent changes are challengers, not silent mutations.")+'</div>';
}
function engines(){
return hero("Agents think.<br>Engines govern outputs.","Engines are stable functional services. Agents generate specialist intelligence and proposals; engines turn those inputs into canonical objects under explicit scientific and capital rules.")+
head("Canonical engine map","Every engine must expose inputs, outputs, dependencies, evidence, version and truth state.")+
'<div class="engine-grid">'+ENGINES.map(function(x){return '<div class="engine inspect" data-title="'+esc(x[0])+'" data-detail="'+esc(x[1])+'"><b>'+esc(x[0])+'</b><span>'+esc(x[1])+'</span></div>'}).join("")+'</div>'+
head("Authority separation","Prevents one clever agent from becoming the whole investment process.")+
'<div class="flow"><div class="step">AGENTS<br>INTELLIGENCE</div><span class="arrow">→</span><div class="step">ENGINES<br>CANONICAL OUTPUTS</div><span class="arrow">→</span><div class="step">GOVERNOR<br>TRANSITION CONTROL</div><span class="arrow">→</span><div class="step">PROOF / CAPITAL<br>CONSEQUENCE</div></div>';
}
function dataLayer(){
return hero("Canonical memory.<br>One backend.","Layerbase helix-prod is the intended canonical database. The legacy Supabase project is archaeological evidence only until all runtime dependencies are removed and fresh Layerbase receipts prove replacement.")+
'<div class="metric-grid">'+
metric("TARGET","helix-prod","Layerbase PostgreSQL target.")+
metric("TARGET ID","98cf9ec0…","Recovery bridge references the canonical target identity.")+
metric("LEGACY SOURCE","SUPABASE","Read-only audit source; not future canonical runtime.")+
metric("DUAL WRITE","OFF","Must remain off.")+
metric("LIVE HEALTH","MIXED","Recent endpoint evidence includes both 200 and 503.")+
metric("CUTOVER","NOT PROVEN","Do not delete legacy dependency until runtime parity passes.")+
'</div>'+
head("Canonical Layerbase domains","Recovery architecture separates stable responsibilities.")+
'<div class="grid3">'+panel("CORE","helix_core","Instruments, sources, system state and stable reference objects.")+panel("DATA","helix_data","Point-in-time observations, market bars and evidence datasets.")+panel("AGENTIC","helix_agentic","Agents, boards, runs, handovers and agent evolution.")+panel("GOVERNANCE","helix_governance","Holdouts, champions, gates, releases and constitutional controls.")+panel("OPS","helix_ops","Migration ledger, quality checks, health, scheduler and operational receipts.")+panel("TRANSITION","helix","Legacy / transitional scientific objects only where recovery requires them.")+'</div>'+
head("Critical contradiction","This is the current break in the road.","BLOCKED")+
'<div class="notice">The current HELIX Control Center code still reads from the old Supabase Edge Function. Layerbase bridge logic exists, but the UI has not yet been rebound to a stable canonical Layerbase API. VORTEX therefore marks the cutover as NOT PROVEN rather than pretending the migration is finished.</div>'+
head("Live service probes","Browser-side probes are supplemental only; failure may be CORS or service state.")+
'<div id="liveProbes" class="recovery-grid"><div class="recovery-card"><span class="kicker">LIVE PROBE</span><h3>Not run yet</h3><p>Probing canonical health services…</p></div></div>';
}
function recovery(){
var gates=["CANONICAL TRUTH","LAYERBASE LIVE","DATA PARITY / REBUILD","RUNTIME CUTOVER","SCHEDULERS / LOOPS","SCIENCE EXECUTION","PROOF","LEARNING","VORTEX PRODUCTION"];
return hero("Recover selectively.<br>Do not copy chaos.","Legacy is classified, not blindly migrated. Working scientific knowledge is retained; brittle infrastructure is rebuilt; failed hypotheses remain negative knowledge; obsolete pieces are quarantined or deprecated.")+
head("Recovery classification","Every legacy object gets one explicit disposition.")+
'<div class="grid4">'+panel("RETAIN","Preserve","Scientific constitution, negative knowledge, proven data lineage and useful canonical objects.")+panel("ADAPT","Modernize","Valid logic whose interfaces or infrastructure must change for Layerbase.")+panel("REBUILD","Reconstruct","Critical runtime, API, scheduler or data component that cannot be trusted as-is.")+panel("QUARANTINE / DEPRECATE","Isolate","Obsolete, redundant, contaminated or misleading legacy assets.")+'</div>'+
head("Evidence matrix","Current recovery status from documents, code, legacy functions and live infrastructure audit.")+
'<div class="table-wrap"><table><thead><tr><th>OBJECT</th><th>STATE</th><th>EVIDENCE / INTERPRETATION</th></tr></thead><tbody>'+RECOVERY.map(function(r){return '<tr><td>'+esc(r[0])+'</td><td>'+st(r[1])+'</td><td>'+esc(r[2])+'</td></tr>'}).join("")+'</tbody></table></div>'+
head("Recovery gates","Order matters. Cosmetic progress cannot skip infrastructure or proof.")+
'<div class="gate-lane">'+gates.map(function(x,i){var state=i===0?"VERIFIED":i===1?"IN PROGRESS":"LOCKED";return '<div class="gate"><span class="kicker">GATE '+i+'</span><b>'+x+'</b><span>'+state+'</span></div>'}).join("")+'</div>'+
head("Immediate critical path","The shortest path back to a coherent machine.")+
'<div class="flow">'+["PROVE LAYERBASE","INVENTORY CANONICAL OBJECTS","BUILD LAYERBASE API","REBIND FIE + HELIX","RESTORE SCHEDULERS","RUN SCIENCE","RUN PROOF","RUN LEARNING","CUT SUPABASE"].map(function(x,i,a){return '<div class="step">'+x+'</div>'+(i<a.length-1?'<span class="arrow">→</span>':"")}).join("")+'</div>';
}
function render(){
e("pageName").textContent=page;
var fn={"COMMAND":command,"SYSTEM MAP":systemMap,"SCIENCE":science,"PROOF":proof,"AGENTS":agents,"ENGINES":engines,"DATA / LAYERBASE":dataLayer,"RECOVERY":recovery}[page]||command;
e("vortexMain").innerHTML=fn();
bindInspect();
if(page==="DATA / LAYERBASE")runProbes();
}
function bindInspect(){Array.prototype.forEach.call(document.querySelectorAll(".inspect"),function(x){x.onclick=function(){e("drawerKicker").textContent="VORTEX OBJECT";e("drawerTitle").textContent=x.dataset.title||"Detail";e("drawerBody").innerHTML='<div class="detail-row"><b>WHY IT EXISTS</b><span>'+esc(x.dataset.detail||"No detail")+'</span></div><div class="detail-row"><b>TRUTH RULE</b><span>No state is promoted beyond available evidence.</span></div>';e("drawer").classList.add("open")}})}
function runProbes(){
var base="https://helix-api-health.vercel.app";
var xs=[["API health","/api/health"],["Layerbase","/api/layerbase"],["Parity","/api/parity"],["Target audit","/api/target-audit"]];
var box=e("liveProbes");if(!box)return;
box.innerHTML=xs.map(function(x,i){return '<div class="recovery-card" id="probe'+i+'"><span class="kicker">'+x[0]+'</span><h3>PROBING</h3><p>'+x[1]+'</p></div>'}).join("");
xs.forEach(function(x,i){fetch(base+x[1],{cache:"no-store"}).then(function(r){return r.text().then(function(t){return{ok:r.ok,status:r.status,text:t}})}).then(function(z){var el=e("probe"+i);if(!el)return;el.innerHTML='<div class="meta"><span class="kicker">'+x[0]+'</span>'+st(z.ok?"VERIFIED":"WARNING")+'</div><h3>HTTP '+z.status+'</h3><p>'+esc(z.text.slice(0,260))+'</p>'}).catch(function(err){var el=e("probe"+i);if(!el)return;el.innerHTML='<div class="meta"><span class="kicker">'+x[0]+'</span>'+st("UNVERIFIED")+'</div><h3>NO BROWSER RECEIPT</h3><p>'+esc(String(err.message||err))+'</p>'})});
}
e("menu").onclick=function(){e("side").classList.toggle("open")};
e("drawerClose").onclick=function(){e("drawer").classList.remove("open")};
nav();render();
})();