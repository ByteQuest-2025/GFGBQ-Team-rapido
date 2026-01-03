import { motion } from 'framer-motion';
import { CheckCircle, Circle, Clock, AlertCircle, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Project, Milestone } from '@/data/mockData';

interface ProjectTrackerProps {
  project: Project;
}

const statusConfig = {
  'completed': { 
    icon: CheckCircle, 
    color: 'text-success', 
    bgColor: 'bg-success',
    label: 'Completed' 
  },
  'in-progress': { 
    icon: Clock, 
    color: 'text-info', 
    bgColor: 'bg-info',
    label: 'In Progress' 
  },
  'needs-approval': { 
    icon: AlertCircle, 
    color: 'text-warning', 
    bgColor: 'bg-warning',
    label: 'Pending Approval' 
  },
  'pending': { 
    icon: Circle, 
    color: 'text-muted-foreground', 
    bgColor: 'bg-muted-foreground',
    label: 'Pending' 
  },
};

const MilestoneStep = ({ 
  milestone, 
  index, 
  isLast,
  totalMilestones 
}: { 
  milestone: Milestone; 
  index: number;
  isLast: boolean;
  totalMilestones: number;
}) => {
  const config = statusConfig[milestone.status];
  const Icon = config.icon;
  const progress = milestone.targetAmount > 0 
    ? (milestone.currentAmount / milestone.targetAmount) * 100 
    : 0;

  return (
    <motion.div 
      className="relative flex items-start gap-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Timeline connector */}
      <div className="flex flex-col items-center">
        <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
          milestone.status === 'completed' 
            ? 'border-success bg-success/10' 
            : milestone.status === 'in-progress'
            ? 'border-info bg-info/10'
            : milestone.status === 'needs-approval'
            ? 'border-warning bg-warning/10'
            : 'border-border bg-muted'
        }`}>
          <Icon className={`h-5 w-5 ${config.color}`} />
        </div>
        {!isLast && (
          <div className={`w-0.5 flex-1 min-h-[60px] ${
            milestone.status === 'completed' ? 'bg-success' : 'bg-border'
          }`} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="font-medium text-foreground">{milestone.title}</h4>
            <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
          </div>
          <Badge 
            variant={milestone.status === 'completed' ? 'default' : 'secondary'}
            className={milestone.status === 'completed' ? 'bg-success text-success-foreground' : ''}
          >
            {config.label}
          </Badge>
        </div>
        
        {/* Progress bar for in-progress milestones */}
        {(milestone.status === 'in-progress' || milestone.status === 'needs-approval') && (
          <div className="mt-3 space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                ${milestone.currentAmount.toLocaleString()} of ${milestone.targetAmount.toLocaleString()}
              </span>
              <span className="font-medium text-foreground">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                className={`h-full rounded-full ${
                  milestone.status === 'needs-approval' ? 'bg-warning' : 'bg-info'
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ProjectTracker = ({ project }: ProjectTrackerProps) => {
  const completedMilestones = project.milestones.filter(m => m.status === 'completed').length;
  const overallProgress = (completedMilestones / project.milestones.length) * 100;

  const categoryColors = {
    education: 'bg-info/10 text-info',
    healthcare: 'bg-destructive/10 text-destructive',
    environment: 'bg-success/10 text-success',
    community: 'bg-secondary/10 text-secondary',
  };

  return (
    <Card className="shadow-card overflow-hidden">
      <CardHeader className="border-b border-border bg-muted/30">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge className={categoryColors[project.category]}>
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </Badge>
              <span className="text-sm text-muted-foreground">by {project.ngoName}</span>
            </div>
            <CardTitle className="font-display text-xl">{project.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{project.description}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Beneficiaries</p>
            <p className="font-display text-xl font-bold text-primary">
              {project.beneficiaries.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Overall progress pizza tracker */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-foreground">Overall Progress</span>
            <span className="text-muted-foreground">
              {completedMilestones} of {project.milestones.length} milestones
            </span>
          </div>
          <div className="flex gap-1">
            {project.milestones.map((milestone, idx) => {
              const config = statusConfig[milestone.status];
              return (
                <motion.div
                  key={milestone.id}
                  className={`h-3 flex-1 rounded-full ${
                    milestone.status === 'completed' 
                      ? 'bg-success' 
                      : milestone.status === 'in-progress'
                      ? 'bg-info'
                      : milestone.status === 'needs-approval'
                      ? 'bg-warning'
                      : 'bg-muted'
                  }`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                />
              );
            })}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="space-y-0">
          {project.milestones.map((milestone, idx) => (
            <MilestoneStep
              key={milestone.id}
              milestone={milestone}
              index={idx}
              isLast={idx === project.milestones.length - 1}
              totalMilestones={project.milestones.length}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectTracker;
