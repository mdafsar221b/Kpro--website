'use client';

import { useState } from 'react';
import { Eye, Truck, ShieldAlert, CheckCircle2, AlertTriangle, RefreshCw, Sliders } from 'lucide-react';

export default function SolutionsSimulator() {
  const [activeTab, setActiveTab] = useState<'thirdeye' | 'supply' | 'security'>('thirdeye');

  // ThirdEye AI State
  const [defectThreshold, setDefectThreshold] = useState(85);
  const [fps, setFps] = useState(30);
  const [simulatedDefect, setSimulatedDefect] = useState(false);
  const [thirdeyeLogs, setThirdeyeLogs] = useState<string[]>([
    'System ready. Neural edge runtime initialized.',
    'Model loaded: Kpro-ResNet-Defect-v4.2.',
  ]);

  // Supply Chain State
  const [stockLevel, setStockLevel] = useState(45);
  const [safetyBuffer, setSafetyBuffer] = useState(30);
  const [supplyLogs, setSupplyLogs] = useState<string[]>([
    'Solver status: Optimal linear programming model loaded.',
    'Node A & B inventory telemetry synced.',
  ]);

  // Security Threat State
  const [perimeterStatus, setPerimeterStatus] = useState<'clean' | 'threat'>('clean');
  const [securityLogs, setSecurityLogs] = useState<string[]>([
    'UEBA baseline active: 1,420 user behavior profiles indexed.',
    'Perimeter status: Verified zero anomaly drift.',
  ]);

  const handleSimulateDefect = () => {
    setSimulatedDefect(true);
    setThirdeyeLogs((prev) => [
      `DEFECT DETECTED: Micro-fracture located on unit #A-${Math.floor(1000 + Math.random() * 9000)}.`,
      `Confidence: ${(defectThreshold + Math.random() * 5).toFixed(1)}% | Frame #${Math.floor(10000 + Math.random() * 50000)}`,
      ...prev.slice(0, 5),
    ]);
    setTimeout(() => setSimulatedDefect(false), 3000);
  };

  const handleRebalanceSupply = () => {
    setStockLevel(85);
    setSupplyLogs((prev) => [
      'REBALANCE SOLVED: Transferred 400 units from Regional Node B to Central Hub.',
      'Logistics cost minimized with zero SLA violations.',
      ...prev.slice(0, 5),
    ]);
  };

  const handleTriggerThreat = () => {
    setPerimeterStatus('threat');
    setSecurityLogs((prev) => [
      'SECURITY LOCKOUT: Behavioral variance calculated at 88% on User "dev-lead-04".',
      'Anomalous database export attempt blocked. Perimeter locked.',
      ...prev.slice(0, 5),
    ]);
  };

  const handleResetThreat = () => {
    setPerimeterStatus('clean');
    setSecurityLogs((prev) => [
      'ADMIN OVERRIDE: Perimeter reset. Digital certificates re-verified.',
      ...prev.slice(0, 5),
    ]);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      {/* Tab Switcher */}
      <div className="flex border-b border-slate-200 bg-slate-50">
        <button
          onClick={() => setActiveTab('thirdeye')}
          className={`flex-1 py-4 px-6 text-sm font-semibold border-b-2 flex items-center justify-center gap-2 transition-colors ${
            activeTab === 'thirdeye'
              ? 'border-brand-blue text-brand-blue bg-white'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Eye className="w-4 h-4" />
          <span>ThirdEye AI Vision</span>
        </button>
        <button
          onClick={() => setActiveTab('supply')}
          className={`flex-1 py-4 px-6 text-sm font-semibold border-b-2 flex items-center justify-center gap-2 transition-colors ${
            activeTab === 'supply'
              ? 'border-brand-blue text-brand-blue bg-white'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Truck className="w-4 h-4" />
          <span>Supply Chain ML Solver</span>
        </button>
        <button
          onClick={() => setActiveTab('security')}
          className={`flex-1 py-4 px-6 text-sm font-semibold border-b-2 flex items-center justify-center gap-2 transition-colors ${
            activeTab === 'security'
              ? 'border-brand-blue text-brand-blue bg-white'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>UEBA Threat Security</span>
        </button>
      </div>

      {/* Simulator Content */}
      <div className="p-8">
        {activeTab === 'thirdeye' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Edge Computer Vision Defect Monitor
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Simulate camera frame rate and edge sensitivity thresholds for industrial manufacturing lines.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Edge Node Active
                </span>
              </div>

              {/* Sliders */}
              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                    <span>Defect Sensitivity Threshold</span>
                    <span className="text-brand-blue">{defectThreshold}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="99"
                    value={defectThreshold}
                    onChange={(e) => setDefectThreshold(Number(e.target.value))}
                    className="w-full accent-brand-blue cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                    <span>Camera Sampling Rate</span>
                    <span className="text-brand-blue">{fps} FPS</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="60"
                    value={fps}
                    onChange={(e) => setFps(Number(e.target.value))}
                    className="w-full accent-brand-blue cursor-pointer"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleSimulateDefect}
                  className="btn-primary text-xs"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Simulate Part Scan &amp; Defect</span>
                </button>
              </div>

              {/* Simulated visual feedback */}
              <div className="relative h-44 bg-slate-900 rounded-lg overflow-hidden flex items-center justify-center border border-slate-800">
                <div className="text-center text-slate-400 text-xs">
                  <div className="font-mono text-slate-500 mb-1">CAMERA FEED STREAM 01 // ASSEMBLY LINE 4</div>
                  <div className="font-semibold text-slate-300">Continuous 4K Optical Ingestion ({fps} FPS)</div>
                </div>

                {simulatedDefect && (
                  <div className="absolute inset-4 border-2 border-dashed border-rose-500 bg-rose-500/10 rounded flex items-center justify-center text-rose-300 text-xs font-bold font-mono">
                    DEFECT IDENTIFIED: #DF-992 // TOLERANCE BREACH
                  </div>
                )}
              </div>
            </div>

            {/* Logs Column */}
            <div className="lg:col-span-5 bg-slate-900 rounded-lg p-5 font-mono text-xs text-slate-300 h-96 flex flex-col justify-between">
              <div>
                <div className="text-slate-400 font-semibold border-b border-slate-800 pb-2 mb-3">
                  EDGE TELEMETRY LOGS
                </div>
                <div className="space-y-2">
                  {thirdeyeLogs.map((log, idx) => (
                    <div key={idx} className="leading-relaxed text-slate-400">
                      <span className="text-brand-orange">&gt;</span> {log}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-[10px] text-slate-500 pt-3 border-t border-slate-800">
                Latency: 14ms // Hardware: NVIDIA TensorRT Edge Node
              </div>
            </div>
          </div>
        )}

        {activeTab === 'supply' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Supply Chain Rebalancing Solver
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Evaluate inventory buffers, predicted warehouse stockouts, and auto-procure replenishment batches.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                    <span>Central Warehouse Stock</span>
                    <span>{stockLevel}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        stockLevel < safetyBuffer ? 'bg-amber-500' : 'bg-emerald-500'
                      }`}
                      style={{ width: `${stockLevel}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                    <span>Safety Buffer Requirement</span>
                    <span>{safetyBuffer}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    value={safetyBuffer}
                    onChange={(e) => setSafetyBuffer(Number(e.target.value))}
                    className="w-full accent-brand-blue cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleRebalanceSupply}
                  className="btn-primary text-xs"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Execute Multi-Echelon Rebalancing</span>
                </button>
                <button
                  onClick={() => setStockLevel(25)}
                  className="btn-secondary text-xs"
                >
                  Simulate Supply Shock
                </button>
              </div>

              {stockLevel < safetyBuffer && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-md flex items-center gap-2 text-xs text-amber-800">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600" />
                  <span>Inventory buffer below safety threshold. Optimization solver recommends procurement dispatch.</span>
                </div>
              )}
            </div>

            <div className="lg:col-span-5 bg-slate-900 rounded-lg p-5 font-mono text-xs text-slate-300 h-96 flex flex-col justify-between">
              <div>
                <div className="text-slate-400 font-semibold border-b border-slate-800 pb-2 mb-3">
                  SOLVER EXECUTION TRACE
                </div>
                <div className="space-y-2">
                  {supplyLogs.map((log, idx) => (
                    <div key={idx} className="leading-relaxed text-slate-400">
                      <span className="text-emerald-400">&gt;</span> {log}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-[10px] text-slate-500 pt-3 border-t border-slate-800">
                LP Solver: Kpro Simplex Vector Kernel // Convergence: 0.08s
              </div>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  UEBA Anomaly Detection &amp; Threat Defense
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  User and Entity Behavior Analytics monitoring for insider data exfiltration and credential misuse.
                </p>
              </div>

              <div className="p-6 border rounded-lg bg-slate-50 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Perimeter Security State</div>
                  <div className={`text-xl font-bold mt-1 ${perimeterStatus === 'clean' ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {perimeterStatus === 'clean' ? 'Secure // Normal Baseline' : 'Locked // Exfiltration Threat'}
                  </div>
                </div>

                <div className="flex gap-2">
                  {perimeterStatus === 'clean' ? (
                    <button
                      onClick={handleTriggerThreat}
                      className="btn-secondary text-xs text-rose-700 border-rose-200 hover:bg-rose-50"
                    >
                      Simulate Exfiltration Breach
                    </button>
                  ) : (
                    <button
                      onClick={handleResetThreat}
                      className="btn-primary text-xs"
                    >
                      Admin Reset Perimeter
                    </button>
                  )}
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                When anomalies exceed statistical deviations, UEBA automatically revokes session tokens and isolates endpoints.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-900 rounded-lg p-5 font-mono text-xs text-slate-300 h-96 flex flex-col justify-between">
              <div>
                <div className="text-slate-400 font-semibold border-b border-slate-800 pb-2 mb-3">
                  SECURITY SIEM STREAM
                </div>
                <div className="space-y-2">
                  {securityLogs.map((log, idx) => (
                    <div key={idx} className="leading-relaxed text-slate-400">
                      <span className="text-rose-400">&gt;</span> {log}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-[10px] text-slate-500 pt-3 border-t border-slate-800">
                Security Engine: Zero-Trust Vector Analyzer // TLS 1.3
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
