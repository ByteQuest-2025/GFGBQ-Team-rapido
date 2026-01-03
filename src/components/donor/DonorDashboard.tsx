import { motion } from 'framer-motion';
import ImpactStats from './ImpactStats';
import ProjectTracker from './ProjectTracker';
import { mockProjects, mockImpactStats } from '@/data/mockData';

const DonorDashboard = () => {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-2">
        <h1 className="font-display text-3xl font-bold text-foreground">
          Donor Dashboard
        </h1>
        <p className="text-muted-foreground">
          Track the impact of your contributions in real-time
        </p>
      </div>

      <ImpactStats stats={mockImpactStats} />

      <div className="space-y-4">
        <h2 className="font-display text-xl font-semibold text-foreground">
          Active Projects
        </h2>
        <div className="grid gap-6">
          {mockProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <ProjectTracker project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DonorDashboard;
