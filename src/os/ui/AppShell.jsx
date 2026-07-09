// Standard scrollable content region inside a window. `toolbar` stays pinned.
export default function AppShell({ toolbar, children }) {
  return (
    <div className="flex h-full flex-col">
      {toolbar && (
        <div className="shrink-0 border-b border-os-hairline px-5 py-3">{toolbar}</div>
      )}
      <div className="os-scroll min-h-0 flex-1 overflow-y-auto p-5">{children}</div>
    </div>
  );
}
