import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, ExternalLink, FileText, Image, Clock, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { getPendingMilestones } from '@/data/mockData';

const ValidatorPortal = () => {
  const { toast } = useToast();
  const [pendingItems, setPendingItems] = useState(getPendingMilestones());

  const handleApprove = (milestoneId: string, title: string) => {
    setPendingItems(items => items.filter(item => item.id !== milestoneId));
    toast({
      title: "Milestone Approved",
      description: `"${title}" has been verified and approved.`,
    });
  };

  const handleReject = (milestoneId: string, title: string) => {
    setPendingItems(items => items.filter(item => item.id !== milestoneId));
    toast({
      title: "Milestone Rejected",
      description: `"${title}" has been sent back for review.`,
      variant: "destructive",
    });
  };

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-2">
        <h1 className="font-display text-3xl font-bold text-foreground">
          Validator Portal
        </h1>
        <p className="text-muted-foreground">
          Review and approve milestone completions submitted by NGOs
        </p>
      </div>

      {/* Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="border-warning/30 bg-warning/5 shadow-card">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-warning/20">
              <AlertTriangle className="h-6 w-6 text-warning" />
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-foreground">
                {pendingItems.length}
              </p>
              <p className="text-sm text-muted-foreground">
                Milestones pending your approval
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Pending Approvals List */}
      <div className="space-y-4">
        <h2 className="font-display text-xl font-semibold text-foreground">
          Pending Approvals
        </h2>

        <AnimatePresence mode="popLayout">
          {pendingItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-lg border-2 border-dashed border-border bg-muted/30 p-12 text-center"
            >
              <CheckCircle className="mx-auto h-12 w-12 text-success" />
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                All Caught Up!
              </h3>
              <p className="mt-2 text-muted-foreground">
                There are no milestones pending approval at this time.
              </p>
            </motion.div>
          ) : (
            <div className="grid gap-4">
              {pendingItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Card className="shadow-card overflow-hidden">
                    <CardHeader className="border-b border-border bg-muted/30 pb-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <CardTitle className="font-display text-lg">
                            {item.title}
                          </CardTitle>
                          <CardDescription>
                            {item.projectTitle} • {item.ngoName}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="border-warning text-warning">
                          <Clock className="mr-1 h-3 w-3" />
                          Pending
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>

                        <div className="flex items-center justify-between rounded-lg bg-muted/50 p-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Amount Requested</p>
                            <p className="font-display text-xl font-bold text-foreground">
                              ${item.currentAmount.toLocaleString()}
                              <span className="text-sm font-normal text-muted-foreground">
                                {' '}/ ${item.targetAmount.toLocaleString()}
                              </span>
                            </p>
                          </div>
                          
                          {item.proofUrl && (
                            <Button variant="outline" size="sm" className="gap-2">
                              {item.proofType === 'image' ? (
                                <Image className="h-4 w-4" />
                              ) : (
                                <FileText className="h-4 w-4" />
                              )}
                              View Proof
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          )}
                        </div>

                        <div className="flex gap-3 pt-2">
                          <Button
                            onClick={() => handleApprove(item.id, item.title)}
                            className="flex-1 gap-2 shadow-primary"
                          >
                            <CheckCircle className="h-4 w-4" />
                            Approve
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => handleReject(item.id, item.title)}
                            className="flex-1 gap-2 border-destructive/30 text-destructive hover:bg-destructive/10"
                          >
                            <XCircle className="h-4 w-4" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ValidatorPortal;
