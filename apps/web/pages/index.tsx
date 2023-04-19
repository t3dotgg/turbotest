export const dynamic = "force-dynamic";

export default function Web() {
  const url = process.env.VERCEL_URL ?? "none";
  return (
    <div>
      <h1>Web</h1>
      {url}
    </div>
  );
}
