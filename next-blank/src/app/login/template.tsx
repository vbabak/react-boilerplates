export default function Template({ children }: { children: React.ReactNode }) {
  const ms = new Date().getMilliseconds();
  return <div>
    <h2>Template {ms}</h2>
    {children}
  </div>
}
