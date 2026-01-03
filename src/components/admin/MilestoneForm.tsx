import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Upload, FileText, Image, X, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { mockProjects } from '@/data/mockData';

const MilestoneForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    projectId: '',
    title: '',
    description: '',
    targetAmount: '',
  });
  const [uploadedFile, setUploadedFile] = useState<{ name: string; type: 'image' | 'pdf' } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Milestone Created",
      description: `"${formData.title}" has been added to the project.`,
    });

    setFormData({
      projectId: '',
      title: '',
      description: '',
      targetAmount: '',
    });
    setUploadedFile(null);
  };

  const handleFileUpload = (type: 'image' | 'pdf') => {
    // Mock file upload
    setUploadedFile({
      name: type === 'image' ? 'proof-of-impact.jpg' : 'receipt-document.pdf',
      type,
    });

    toast({
      title: "File Uploaded",
      description: `${type === 'image' ? 'Image' : 'PDF'} uploaded successfully.`,
    });
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-display">
          <Plus className="h-5 w-5 text-primary" />
          Create New Milestone
        </CardTitle>
        <CardDescription>
          Add a new milestone to track project progress and upload proof of impact.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="project">Project</Label>
              <Select
                value={formData.projectId}
                onValueChange={(value) => setFormData({ ...formData, projectId: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a project" />
                </SelectTrigger>
                <SelectContent>
                  {mockProjects.map((project) => (
                    <SelectItem key={project.id} value={project.id}>
                      {project.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="targetAmount">Target Amount ($)</Label>
              <Input
                id="targetAmount"
                type="number"
                placeholder="e.g., 10000"
                value={formData.targetAmount}
                onChange={(e) => setFormData({ ...formData, targetAmount: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Milestone Title</Label>
            <Input
              id="title"
              placeholder="e.g., Phase 1: Buy Materials"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe what this milestone will accomplish..."
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          {/* Proof of Impact Upload */}
          <div className="space-y-3">
            <Label>Proof of Impact (Optional)</Label>
            
            {uploadedFile ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-between rounded-lg border border-success/30 bg-success/5 p-4"
              >
                <div className="flex items-center gap-3">
                  {uploadedFile.type === 'image' ? (
                    <Image className="h-5 w-5 text-success" />
                  ) : (
                    <FileText className="h-5 w-5 text-success" />
                  )}
                  <div>
                    <p className="font-medium text-foreground">{uploadedFile.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {uploadedFile.type === 'image' ? 'Image file' : 'PDF document'}
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setUploadedFile(null)}
                  className="h-8 w-8 text-muted-foreground hover:text-destructive"
                >
                  <X className="h-4 w-4" />
                </Button>
              </motion.div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                <Button
                  type="button"
                  variant="outline"
                  className="h-auto flex-col gap-2 py-6 hover:border-primary hover:bg-primary/5"
                  onClick={() => handleFileUpload('image')}
                >
                  <Image className="h-8 w-8 text-muted-foreground" />
                  <div className="text-center">
                    <p className="font-medium">Upload Image</p>
                    <p className="text-xs text-muted-foreground">JPG, PNG up to 10MB</p>
                  </div>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="h-auto flex-col gap-2 py-6 hover:border-primary hover:bg-primary/5"
                  onClick={() => handleFileUpload('pdf')}
                >
                  <FileText className="h-8 w-8 text-muted-foreground" />
                  <div className="text-center">
                    <p className="font-medium">Upload PDF</p>
                    <p className="text-xs text-muted-foreground">PDF up to 25MB</p>
                  </div>
                </Button>
              </div>
            )}
          </div>

          <Button type="submit" className="w-full gap-2 shadow-primary">
            <Check className="h-4 w-4" />
            Create Milestone
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default MilestoneForm;
