'use client';

import { useState } from 'react';
import { BrandLogo } from '@/components/common/BrandLogo';
import { ViewToggle } from '@/components/common/ViewToggle';
import { DashboardView } from '@/components/dashboard/DashboardView';
import { ChatSidebar } from '@/components/chat/ChatSidebar';
import { ChatView } from '@/components/chat/ChatView';
import { MedicationDetailView } from '@/components/dashboard/MedicationDetailView';
import { medications, patientName } from '@/data/patient';

export default function Home() {
  const [activeView, setActiveView] = useState<'dashboard' | 'chat'>('dashboard');
  const [dashboardMode, setDashboardMode] = useState<'main' | 'medication-detail'>('main');
  const [selectedMedicationId, setSelectedMedicationId] = useState<string>(medications[0]?.id ?? '');

  const containerClasses = (() => {
    if (activeView === 'chat') {
      return 'flex flex-1 gap-8 rounded-[40px] bg-white/95 p-8 shadow-[0px_32px_80px_rgba(31,31,56,0.08)]';
    }
    if (dashboardMode === 'medication-detail') {
      return 'flex flex-1 gap-8 rounded-[40px] bg-white/95 p-8 shadow-[0px_32px_80px_rgba(31,31,56,0.08)]';
    }
    return 'flex flex-1 gap-8 rounded-[40px] bg-[#F9F9FF] p-8 shadow-[0px_32px_80px_rgba(31,31,56,0.12)]';
  })();

  return (
    <div className="min-h-screen bg-[#F4F4FC] px-10 py-10">
      <div className="mx-auto flex min-h-[80vh] max-w-[1380px] flex-col gap-10">
        <header className="flex items-center justify-between">
          <BrandLogo />
          <ViewToggle
            active={activeView}
            onChange={(next) => {
              setActiveView(next);
              if (next === 'dashboard') {
                setDashboardMode('main');
              }
            }}
          />
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[15px] font-medium text-[#2F2F41]">{patientName}</p>
              <p className="text-[13px] text-[#8B8BA0]">Patient</p>
            </div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&w=120&h=120&q=60')] bg-cover bg-center" />
          </div>
        </header>

        <main className={containerClasses}>
          {activeView === 'chat' ? (
            <>
              <ChatSidebar />
              <ChatView />
            </>
          ) : dashboardMode === 'medication-detail' ? (
            <MedicationDetailView
              selectedId={selectedMedicationId}
              onSelect={setSelectedMedicationId}
              onBack={() => setDashboardMode('main')}
            />
          ) : (
            <DashboardView
              onOpenMedicationDetail={(id) => {
                if (id) {
                  setSelectedMedicationId(id);
                }
                setDashboardMode('medication-detail');
              }}
            />
          )}
        </main>
      </div>
    </div>
  );
}
