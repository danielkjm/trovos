export type Task = {
  id: string;
  label: string;
  dueLabel: string;
  completed?: boolean;
};

export type Medication = {
  id: string;
  name: string;
  schedule: string;
  icon: 'sun' | 'moon';
};

export type FileSummary = {
  id: string;
  label: string;
  count: number;
};

export type Appointment = {
  id: string;
  title: string;
  time: string;
  color: 'purple' | 'white';
};

export const initialTasks: Task[] = [
  {
    id: 'task-1',
    label: 'Call Insurance company',
    dueLabel: 'Today',
    completed: true,
  },
  {
    id: 'task-2',
    label: 'Review insurance/billing paperwork and submit claims if needed.',
    dueLabel: 'Today',
  },
  {
    id: 'task-3',
    label: 'Log symptoms and send to care manager',
    dueLabel: '09/22/25',
  },
  {
    id: 'task-4',
    label: 'Final medication check',
    dueLabel: '09/24/25',
  },
  {
    id: 'task-5',
    label: 'Review progress and concerns with family/support',
    dueLabel: '09/24/25',
  },
];

export const medications: Medication[] = [
  { id: 'med-1', name: 'Metoprolol', schedule: '1 Morning', icon: 'sun' },
  { id: 'med-2', name: 'Atenolol', schedule: '1 Night', icon: 'moon' },
  { id: 'med-3', name: 'Ibuprofen', schedule: '1 Morning', icon: 'sun' },
];

export const fileSummaries: FileSummary[] = [
  { id: 'file-1', label: 'Discharge', count: 2 },
  { id: 'file-2', label: 'Insurance', count: 4 },
];

export const appointments: Appointment[] = [
  {
    id: 'appt-1',
    title: 'Pick up blood thinner from pharmacy',
    time: '11:30 AM - 12:30 PM',
    color: 'purple',
  },
  {
    id: 'appt-2',
    title: 'Call Cardiologist for followup',
    time: '2:00 PM - 3:00 PM',
    color: 'white',
  },
];

export const patientName = 'Jerry Andrews';
export const careManagerCount = 2;
