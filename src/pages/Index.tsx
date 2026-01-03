import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import DonorDashboard from '@/components/donor/DonorDashboard';
import AdminPanel from '@/components/admin/AdminPanel';
import ValidatorPortal from '@/components/validator/ValidatorPortal';

type ViewType = 'donor' | 'admin' | 'validator';

const Index = () => {
  const [activeView, setActiveView] = useState<ViewType>('donor');

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeView={activeView} onViewChange={setActiveView} />
      
      <main className="container py-8">
        {activeView === 'donor' && <DonorDashboard />}
        {activeView === 'admin' && <AdminPanel />}
        {activeView === 'validator' && <ValidatorPortal />}
      </main>
    </div>
  );
};

export default Index;
