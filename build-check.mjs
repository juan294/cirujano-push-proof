import { aggregateMinutes } from './src/ledger.mjs';

// The build job's smoke check: the module loads and rounds per job.
if (aggregateMinutes([{ elapsedMs: 1 }, { elapsedMs: 60001 }]) !== 3) process.exit(1);
