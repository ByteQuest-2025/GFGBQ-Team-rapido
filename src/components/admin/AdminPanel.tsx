import { motion } from 'framer-motion';
import { BarChart3, FolderOpen, Clock, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import MilestoneForm from './MilestoneForm';
import { mockProjects } from '@/data/mockData';

const AdminPanel = () => {
  const totalMilestones = mockProjects.reduce((acc, p) => acc + p.milestones.length, 0);
  const completedMilestones = mockProjects.reduce(
    (acc, p) => acc + p.milestones.filter(m => m.status === 'completed').length, 
    0
  );
  const pendingApproval = mockProjects.reduce(
    (acc, p) => acc + p.milestones.filter(m => m.status === 'needs-approval').length, 
    0
  );

  const stats = [
    { icon: FolderOpen, label: 'Total Projects', value: mockProjects.length },
    { icon: BarChart3, label: 'Total Milestones', value: totalMilestones },
    { icon: TrendingUp, label: 'Completed', value: completedMilestones },
    { icon: Clock, label: 'Awaiting Approval', value: pendingApproval },
  ];

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-2">
        <h1 className="font-display text-3xl font-bold text-foreground">
          NGO Admin Panel
        </h1>
        <p className="text-muted-foreground">
          Manage your projects, create milestones, and upload proof of impact
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Card className="shadow-card">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <stat.icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
                  <p className="font-display text-xl font-bold text-foreground">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Milestone Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <MilestoneForm />
      </motion.div>

      {/* Existing Milestones Preview */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="font-display text-xl font-semibold text-foreground">
          Recent Milestones
        </h2>
        <div className="grid gap-3">
          {mockProjects.flatMap(project => 
            project.milestones.slice(0, 2).map(milestone => (
              <Card key={milestone.id} className="shadow-card">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">{milestone.title}</p>
                    <p className="text-sm text-muted-foreground">{project.title}</p>
                  </div>
                  <div className={`rounded-full px-3 py-1 text-xs font-medium ${
                    milestone.status === 'completed' 
                      ? 'bg-success/10 text-success'
                      : milestone.status === 'in-progress'
                      ? 'bg-info/10 text-info'
                      : milestone.status === 'needs-approval'
                      ? 'bg-warning/10 text-warning'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {milestone.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </div>
                </CardContent>
              </Card>
            ))
          ).slice(0, 6)}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AdminPanel;
