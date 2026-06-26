import React, { useState, useEffect } from 'react';
import { ArrowTrendingUpIcon, Cog8ToothIcon, Cube16SolidIcon, SearchIcon } from './Icons';

export default function DashboardPreview() {
  const [isLoading, setIsLoading] = useState(true);
  const [logs, setLogs] = useState([
    { id: 1, time: '10:04:12', msg: 'Syncing PostgreSQL nodes...', status: 'success' },
    { id: 2, time: '10:04:14', msg: 'Broadcasting webhook mutation triggers', status: 'success' },
    { id: 3, time: '10:04:15', msg: 'Partitioning Snowflake database blocks...', status: 'processing' },
  ]);

  const [latencyHistory, setLatencyHistory] = useState([4, 6, 3, 7, 5, 8, 4, 3, 5, 6, 4, 3, 2, 4, 3]);

  // Handle simulated loading and real-time dashboard activity
  useEffect(() => {
    // 500ms loading skeleton trigger
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    const logTimer = setInterval(() => {
      setLogs((prev) => {
        const nextTime = new Date().toTimeString().split(' ')[0];
        const randomMsgs = [
          'Compiling database mappings...',
          'Analyzing Kafka stream thresholds...',
          'Flushing buffer pool records to S3...',
          'Securing credentials TLS handshake...',
          'Garbage collector clearing worker caches...',
        ];
        const randomMsg = randomMsgs[Math.floor(Math.random() * randomMsgs.length)];
        const newLog = {
          id: Date.now(),
          time: nextTime,
          msg: randomMsg,
          status: Math.random() > 0.15 ? 'success' : 'processing',
        };
        return [newLog, ...prev.slice(0, 4)];
      });

      setLatencyHistory((prev) => {
        const nextVal = Math.floor(Math.random() * 6) + 2;
        return [...prev.slice(1), nextVal];
      });
    }, 4000);

    return () => {
      clearTimeout(loadTimer);
      clearInterval(logTimer);
    };
  }, []);

  return (
    <section id="demo" className="py-24 bg-brand-dark/30 border-y border-brand-border/5 relative overflow-hidden">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 grid-background opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-heading font-semibold text-brand-yellow uppercase tracking-widest bg-brand-teal/20 px-3 py-1.5 rounded-full border border-brand-border/10">
            Control Center Live Preview
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-light">
            Real-time Pipeline Operations
          </h2>
          <p className="text-brand-light/75 font-body text-base max-w-xl mx-auto">
            Interact with our operational telemetry. Track node latency, throughput anomalies, and continuous logging.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="w-full glass-panel rounded-2xl border border-brand-border/10 overflow-hidden shadow-2xl min-h-[460px]">
          {/* Header Bar */}
          <div className="px-6 py-4 bg-brand-dark/80 border-b border-brand-border/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-brand-yellow/80 block animate-pulse"></span>
                <span className="text-xs font-heading font-bold text-brand-light">SYSTEM ONLINE</span>
              </div>
              <span className="text-xs text-brand-light/35 font-heading">|</span>
              <span className="text-xs font-heading text-brand-light/60">Cluster: <span className="text-brand-orange">us-east-4</span></span>
            </div>

            {/* Mock search input */}
            <div className="relative w-64">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-light/40" />
              <input 
                type="text" 
                placeholder="Search index logs..."
                readOnly
                className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-brand-dark/50 border border-brand-border/10 text-xs font-body text-brand-light focus:outline-none placeholder:text-brand-light/30"
              />
            </div>
          </div>

          {isLoading ? (
            /* Lightweight loading skeleton */
            <div className="grid grid-cols-1 lg:grid-cols-12 animate-pulse">
              {/* Left Sidebar Skeleton (Col 3) */}
              <div className="lg:col-span-3 p-6 border-r border-brand-border/10 bg-brand-dark/20 text-left space-y-6">
                <div className="h-3 w-20 bg-brand-light/10 rounded"></div>
                <div className="space-y-3">
                  <div className="h-10 bg-brand-light/5 rounded-lg border border-brand-border/5"></div>
                  <div className="h-10 bg-brand-light/5 rounded-lg border border-brand-border/5"></div>
                  <div className="h-10 bg-brand-light/5 rounded-lg border border-brand-border/5"></div>
                </div>
                <div className="pt-4 border-t border-brand-border/5 space-y-3">
                  <div className="h-2 w-28 bg-brand-light/10 rounded"></div>
                  <div className="space-y-2">
                    <div className="h-1.5 bg-brand-light/5 rounded-full w-full"></div>
                    <div className="h-1.5 bg-brand-light/5 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>

              {/* Middle Graph Skeleton (Col 6) */}
              <div className="lg:col-span-6 p-6 flex flex-col justify-between text-left gap-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-16 bg-brand-light/5 rounded-xl border border-brand-border/5"></div>
                  <div className="h-16 bg-brand-light/5 rounded-xl border border-brand-border/5"></div>
                  <div className="h-16 bg-brand-light/5 rounded-xl border border-brand-border/5"></div>
                </div>
                <div className="flex-1 p-4 rounded-xl bg-brand-dark/50 border border-brand-border/5 min-h-[180px] flex items-center justify-center">
                  <div className="w-4/5 h-24 bg-brand-light/5 rounded-lg border border-brand-border/5 animate-pulse"></div>
                </div>
              </div>

              {/* Right Sidebar Skeleton (Col 3) */}
              <div className="lg:col-span-3 p-6 bg-brand-dark/20 text-left flex flex-col justify-between gap-6">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-16 bg-brand-light/10 rounded"></div>
                    <div className="h-3 w-12 bg-brand-light/10 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-12 bg-brand-light/5 rounded border border-brand-border/5"></div>
                    <div className="h-12 bg-brand-light/5 rounded border border-brand-border/5"></div>
                    <div className="h-12 bg-brand-light/5 rounded border border-brand-border/5"></div>
                  </div>
                </div>
                <div className="h-12 bg-brand-light/5 rounded-lg border border-brand-border/5"></div>
              </div>
            </div>
          ) : (
            /* Actual Dashboard Telemetry View */
            <div className="grid grid-cols-1 lg:grid-cols-12 animate-fade-in">
              {/* Left Sidebar: Connector health (Col 3) */}
              <div className="lg:col-span-3 p-6 border-r border-brand-border/10 bg-brand-dark/20 text-left space-y-6">
                <h3 className="text-xs font-heading font-bold text-brand-light/40 uppercase tracking-wider">Connectors</h3>
                
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-brand-dark/40 border border-brand-yellow/20 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-yellow"></div>
                      <span className="font-heading font-semibold text-brand-light">PostgreSQL Engine</span>
                    </div>
                    <span className="text-brand-light/40">Active</span>
                  </div>

                  <div className="p-3 rounded-lg bg-brand-dark/40 border border-brand-border/5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></div>
                      <span className="font-heading font-semibold text-brand-light">Snowflake Warehouse</span>
                    </div>
                    <span className="text-brand-light/40">Re-indexing</span>
                  </div>

                  <div className="p-3 rounded-lg bg-brand-dark/40 border border-brand-border/5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-teal/80"></div>
                      <span className="font-heading font-semibold text-brand-light">AWS S3 Ingestion</span>
                    </div>
                    <span className="text-brand-light/40">Active</span>
                  </div>
                </div>

                {/* Cluster utilization */}
                <div className="pt-4 border-t border-brand-border/5 space-y-3">
                  <h4 className="text-[10px] font-heading font-bold text-brand-light/40 uppercase tracking-wider">Cluster Capacity</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-heading">
                      <span className="text-brand-light/60">CPU Efficiency</span>
                      <span className="text-brand-light font-bold">42.8%</span>
                    </div>
                    <div className="h-1.5 w-full bg-brand-dark rounded-full overflow-hidden">
                      <div className="h-full bg-brand-yellow" style={{ width: '42.8%' }}></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-heading">
                      <span className="text-brand-light/60">RAM Allocation</span>
                      <span className="text-brand-light font-bold">12.1 GB</span>
                    </div>
                    <div className="h-1.5 w-full bg-brand-dark rounded-full overflow-hidden">
                      <div className="h-full bg-brand-orange" style={{ width: '74%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Main View: Sparklines and Stats (Col 6) */}
              <div className="lg:col-span-6 p-6 flex flex-col justify-between text-left gap-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-brand-dark/30 border border-brand-border/5">
                    <span className="text-[10px] font-heading font-bold text-brand-light/40 uppercase block mb-1">Compute Cost</span>
                    <span className="text-lg font-heading font-bold text-brand-light">$0.004 <span className="text-xs text-brand-light/50">/m</span></span>
                  </div>
                  <div className="p-4 rounded-xl bg-brand-dark/30 border border-brand-border/5">
                    <span className="text-[10px] font-heading font-bold text-brand-light/40 uppercase block mb-1">Queue Backlog</span>
                    <span className="text-lg font-heading font-bold text-brand-orange">0 <span className="text-xs text-brand-light/50">events</span></span>
                  </div>
                  <div className="p-4 rounded-xl bg-brand-dark/30 border border-brand-border/5">
                    <span className="text-[10px] font-heading font-bold text-brand-light/40 uppercase block mb-1">Daily Sync</span>
                    <span className="text-lg font-heading font-bold text-brand-light">14.2 GB</span>
                  </div>
                </div>

                {/* Dynamic SVGs Sparkline/Throughput graph */}
                <div className="flex-1 p-4 rounded-xl bg-brand-dark/50 border border-brand-border/5 flex flex-col justify-between min-h-[180px]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-heading font-bold text-brand-light/50 uppercase">Anomaly Analysis (Latency ms)</span>
                    <span className="text-xs font-heading text-brand-yellow font-semibold">avg: 4.2ms</span>
                  </div>

                  <div className="h-32 w-full flex items-end justify-between pt-4 pb-2 px-1 relative">
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-4 border-b border-brand-border/5">
                      <div className="border-t border-brand-border/5 w-full"></div>
                      <div className="border-t border-brand-border/5 w-full"></div>
                    </div>

                    {/* Sparkline Bars */}
                    {latencyHistory.map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center justify-end h-full mx-0.5 group relative">
                        <div 
                          className={`w-full rounded-t transition-all duration-300 ${
                            val > 6 ? 'bg-brand-orange/80 group-hover:bg-brand-orange' : 'bg-brand-yellow/80 group-hover:bg-brand-yellow'
                          }`} 
                          style={{ height: `${val * 10}%` }}
                        ></div>
                        <span className="absolute bottom-full mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-light text-brand-dark text-[9px] font-heading font-bold px-1.5 py-0.5 rounded shadow">
                          {val}ms
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar: Active Live Logs (Col 3) */}
              <div className="lg:col-span-3 p-6 bg-brand-dark/20 text-left flex flex-col justify-between gap-6">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-heading font-bold text-brand-light/40 uppercase tracking-wider">Live Activity</h3>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-ping"></span>
                      <span className="text-[10px] font-heading text-brand-yellow">Streaming</span>
                    </div>
                  </div>

                  {/* Log List */}
                  <div className="space-y-3 font-heading text-xs max-h-60 overflow-y-auto no-scrollbar">
                    {logs.map((log) => (
                      <div key={log.id} className="p-2.5 rounded bg-brand-dark/40 border border-brand-border/5 space-y-1">
                        <div className="flex items-center justify-between text-[10px] text-brand-light/40">
                          <span>[{log.time}]</span>
                          <span className={log.status === 'success' ? 'text-brand-teal' : 'text-brand-orange'}>
                            {log.status === 'success' ? '✔ ok' : '⚡ running'}
                          </span>
                        </div>
                        <p className="text-brand-light/80 text-[11px] leading-relaxed">
                          {log.msg}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action summary footer */}
                <div className="p-3.5 rounded-lg bg-brand-teal/10 border border-brand-border/5 text-[11px] font-heading leading-relaxed animate-pulse">
                  <span className="text-brand-yellow font-bold">Node Worker 03</span> isolated a type-mismatch error automatically. Pipeline continued with zero interruption.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
