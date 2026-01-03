import { motion } from 'framer-motion';
import { Heart, DollarSign, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ImpactStats as ImpactStatsType } from '@/data/mockData';

interface ImpactStatsProps {
  stats: ImpactStatsType;
}

const StatCard = ({ 
  icon: Icon, 
  label, 
  value, 
  suffix = '',
  delay = 0 
}: { 
  icon: React.ElementType; 
  label: string; 
  value: number; 
  suffix?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Card className="shadow-card hover:shadow-elevated transition-shadow duration-300">
      <CardContent className="flex items-center gap-4 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
          <Icon className="h-6 w-6 text-accent-foreground" />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="font-display text-2xl font-bold text-foreground">
            {value.toLocaleString()}{suffix}
          </p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const ImpactStats = ({ stats }: ImpactStatsProps) => {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-semibold text-foreground">
        Total Impact
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={Heart}
          label="Lives Touched"
          value={stats.totalLivesTouched}
          delay={0}
        />
        <StatCard
          icon={DollarSign}
          label="Funds Distributed"
          value={stats.totalFundsDistributed}
          suffix=""
          delay={0.1}
        />
        <StatCard
          icon={CheckCircle}
          label="Projects Completed"
          value={stats.projectsCompleted}
          delay={0.2}
        />
        <StatCard
          icon={Clock}
          label="Active Projects"
          value={stats.activeProjects}
          delay={0.3}
        />
      </div>
    </div>
  );
};

export default ImpactStats;
