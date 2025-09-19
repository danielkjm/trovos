export type Task = {
  id: string;
  label: string;
  dueLabel: string;
  completed?: boolean;
};

export type TaskSuggestion = {
  label: string;
  dueLabel: string;
};

export type Medication = {
  id: string;
  name: string;
  schedule: string;
  icon: 'sun' | 'moon';
  description: string;
  instructions: string[];
  pillCount: number;
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

export const aiTaskSuggestions: TaskSuggestion[] = [
  {
    label: 'Log resting heart rate and share with care manager',
    dueLabel: 'Today',
  },
  {
    label: 'Change surgical dressing and inspect incision site',
    dueLabel: '09/22/25',
  },
  {
    label: 'Schedule cardiac rehab introduction session',
    dueLabel: '09/23/25',
  },
  {
    label: 'Prepare questions for cardiologist follow-up',
    dueLabel: '09/24/25',
  },
];

export const medications: Medication[] = [
  {
    id: 'med-1',
    name: 'Metoprolol',
    schedule: '1 Morning',
    icon: 'sun',
    pillCount: 32,
    description:
      'This medicine helps your heart by slowing it down and lowering your blood pressure. It makes it easier for your heart to pump and can prevent chest pain or future heart problems.',
    instructions: [
      'Take exactly as prescribed, usually once or twice a day.',
      'Take with or right after food to help your body absorb it better.',
      "Swallow tablets whole (don’t crush or chew unless told otherwise).",
      'Try to take it at the same time every day to keep steady levels.',
      'Do not stop suddenly; stopping without your doctor’s guidance may cause serious issues.',
    ],
  },
  {
    id: 'med-2',
    name: 'Atenolol',
    schedule: '1 Night',
    icon: 'moon',
    pillCount: 12,
    description:
      'Atenolol lowers your heart rate before bedtime to protect your heart while you rest. It eases strain on the heart muscle and supports recovery sleep.',
    instructions: [
      'Take at night with a light snack unless your doctor advises otherwise.',
      'Continue monitoring blood pressure daily and log readings.',
      'If a dose is missed, take it as soon as remembered unless it is near your next dose.',
      'Do not double up on doses.',
    ],
  },
  {
    id: 'med-3',
    name: 'Ibuprofen',
    schedule: '1 Morning',
    icon: 'sun',
    pillCount: 18,
    description:
      'Ibuprofen reduces pain and inflammation so you can move comfortably during recovery. Take it with food to protect your stomach.',
    instructions: [
      'Take with breakfast and a full glass of water.',
      'Do not exceed the prescribed daily amount.',
      'Avoid taking with other NSAIDs or blood thinners unless cleared by your doctor.',
      'Report any stomach pain or dark stools to your care team immediately.',
    ],
  },
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
