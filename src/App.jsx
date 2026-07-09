import OS from './os/OS';

// The portfolio is a desktop workstation: src/os/ is the shell, src/os/apps/
// the applications, src/data/ the content. The legacy scroll-site components
// remain in src/components/ for reference but are no longer mounted.
export default function App() {
  return <OS />;
}
