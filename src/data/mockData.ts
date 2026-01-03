export interface Milestone {
  id: string;
  projectId: string;
  title: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  status: 'pending' | 'in-progress' | 'completed' | 'needs-approval';
  proofUrl?: string;
  proofType?: 'image' | 'pdf';
  createdAt: string;
  completedAt?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  ngoName: string;
  totalFunding: number;
  fundsUtilized: number;
  beneficiaries: number;
  milestones: Milestone[];
  createdAt: string;
  category: 'education' | 'healthcare' | 'environment' | 'community';
}

export interface ImpactStats {
  totalLivesTouched: number;
  totalFundsDistributed: number;
  projectsCompleted: number;
  activeProjects: number;
  pendingApprovals: number;
}

export const mockProjects: Project[] = [
  {
    id: 'proj-001',
    title: 'Clean Water Initiative',
    description: 'Providing clean drinking water to rural communities in East Africa through sustainable well construction.',
    ngoName: 'WaterAid Foundation',
    totalFunding: 50000,
    fundsUtilized: 35000,
    beneficiaries: 2500,
    category: 'community',
    createdAt: '2024-01-15',
    milestones: [
      {
        id: 'ms-001',
        projectId: 'proj-001',
        title: 'Phase 1: Site Survey & Planning',
        description: 'Complete geological survey and community consultation',
        targetAmount: 5000,
        currentAmount: 5000,
        status: 'completed',
        createdAt: '2024-01-20',
        completedAt: '2024-02-10',
      },
      {
        id: 'ms-002',
        projectId: 'proj-001',
        title: 'Phase 2: Equipment Procurement',
        description: 'Purchase drilling equipment and materials',
        targetAmount: 15000,
        currentAmount: 15000,
        status: 'completed',
        proofUrl: '/proof/equipment-invoice.pdf',
        proofType: 'pdf',
        createdAt: '2024-02-15',
        completedAt: '2024-03-01',
      },
      {
        id: 'ms-003',
        projectId: 'proj-001',
        title: 'Phase 3: Well Construction',
        description: 'Construct 5 community wells',
        targetAmount: 20000,
        currentAmount: 15000,
        status: 'in-progress',
        createdAt: '2024-03-05',
      },
      {
        id: 'ms-004',
        projectId: 'proj-001',
        title: 'Phase 4: Community Training',
        description: 'Train local maintenance teams',
        targetAmount: 10000,
        currentAmount: 0,
        status: 'pending',
        createdAt: '2024-03-10',
      },
    ],
  },
  {
    id: 'proj-002',
    title: 'Rural Education Program',
    description: 'Building schools and providing educational materials for children in underserved areas.',
    ngoName: 'Education First',
    totalFunding: 75000,
    fundsUtilized: 45000,
    beneficiaries: 850,
    category: 'education',
    createdAt: '2024-02-01',
    milestones: [
      {
        id: 'ms-005',
        projectId: 'proj-002',
        title: 'Phase 1: Land Acquisition',
        description: 'Secure land for school construction',
        targetAmount: 10000,
        currentAmount: 10000,
        status: 'completed',
        createdAt: '2024-02-05',
        completedAt: '2024-02-28',
      },
      {
        id: 'ms-006',
        projectId: 'proj-002',
        title: 'Phase 2: Building Construction',
        description: 'Construct 4-classroom school building',
        targetAmount: 35000,
        currentAmount: 35000,
        status: 'needs-approval',
        proofUrl: '/proof/building-photos.jpg',
        proofType: 'image',
        createdAt: '2024-03-01',
      },
      {
        id: 'ms-007',
        projectId: 'proj-002',
        title: 'Phase 3: Furniture & Materials',
        description: 'Provide desks, chairs, and learning materials',
        targetAmount: 20000,
        currentAmount: 0,
        status: 'pending',
        createdAt: '2024-03-15',
      },
      {
        id: 'ms-008',
        projectId: 'proj-002',
        title: 'Phase 4: Teacher Training',
        description: 'Recruit and train local teachers',
        targetAmount: 10000,
        currentAmount: 0,
        status: 'pending',
        createdAt: '2024-03-20',
      },
    ],
  },
  {
    id: 'proj-003',
    title: 'Healthcare Access Program',
    description: 'Establishing mobile health clinics to provide medical services to remote communities.',
    ngoName: 'Health Without Borders',
    totalFunding: 100000,
    fundsUtilized: 62000,
    beneficiaries: 5200,
    category: 'healthcare',
    createdAt: '2024-01-01',
    milestones: [
      {
        id: 'ms-009',
        projectId: 'proj-003',
        title: 'Phase 1: Vehicle Procurement',
        description: 'Purchase and equip mobile clinic vehicles',
        targetAmount: 40000,
        currentAmount: 40000,
        status: 'completed',
        createdAt: '2024-01-10',
        completedAt: '2024-02-15',
      },
      {
        id: 'ms-010',
        projectId: 'proj-003',
        title: 'Phase 2: Medical Supplies',
        description: 'Stock essential medicines and equipment',
        targetAmount: 25000,
        currentAmount: 22000,
        status: 'needs-approval',
        proofUrl: '/proof/supplies-receipt.pdf',
        proofType: 'pdf',
        createdAt: '2024-02-20',
      },
      {
        id: 'ms-011',
        projectId: 'proj-003',
        title: 'Phase 3: Staff Hiring',
        description: 'Recruit doctors, nurses, and support staff',
        targetAmount: 20000,
        currentAmount: 0,
        status: 'pending',
        createdAt: '2024-03-01',
      },
      {
        id: 'ms-012',
        projectId: 'proj-003',
        title: 'Phase 4: Community Outreach',
        description: 'Launch awareness campaigns and schedule visits',
        targetAmount: 15000,
        currentAmount: 0,
        status: 'pending',
        createdAt: '2024-03-10',
      },
    ],
  },
];

export const mockImpactStats: ImpactStats = {
  totalLivesTouched: 8550,
  totalFundsDistributed: 142000,
  projectsCompleted: 12,
  activeProjects: 3,
  pendingApprovals: 2,
};

export const getPendingMilestones = (): (Milestone & { projectTitle: string; ngoName: string })[] => {
  const pending: (Milestone & { projectTitle: string; ngoName: string })[] = [];
  
  mockProjects.forEach(project => {
    project.milestones
      .filter(m => m.status === 'needs-approval')
      .forEach(milestone => {
        pending.push({
          ...milestone,
          projectTitle: project.title,
          ngoName: project.ngoName,
        });
      });
  });
  
  return pending;
};
