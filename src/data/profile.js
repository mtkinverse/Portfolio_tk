// Identity data for the desktop hero widgets and Start menu header.
// Grounded in context/resumes/Resume - Taha Khan - 2.1 - current.pdf.
const profile = {
  name: 'Muhammad Taha Khan',
  shortName: 'Taha Khan',
  roles: ['Backend Engineer', 'Distributed Systems', 'Agentic AI'],
  title: 'Associate Backend Developer',
  org: '360XpertsSolutions',
  education: 'BS-CS · NUCES-FAST · Graduated June 2026',
  // Background-removed RGBA cutout (transparent PNG) — hero wallpaper figure
  portrait: '/myPic.png',
  // Regular photo (background intact) — small round avatar in taskbar/Start
  avatar: '/myPic-profileIcon.jpg',
  email: 'taha.1405.khan@gmail.com',
  phone: '+92 306 2992398',
  stats: [
    { label: 'Years experience', value: '1+' },
    { label: 'Client projects', value: '6+' },
    { label: 'Engineers led', value: '3-4' },
    { label: 'CGPA', value: '3.76' },
  ],
  techChips: [
    'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Redis',
    'RabbitMQ', 'Kafka', 'Kubernetes', 'Docker', 'AWS',
  ],
};

export default profile;
