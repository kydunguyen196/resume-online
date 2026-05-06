"use client";

import dynamic from "next/dynamic";

const Particles = dynamic(() => import("@/components/Particles"), {
  ssr: false,
  loading: () => null,
});
const RemoteCursors = dynamic(
  () => import("@/components/realtime/remote-cursors"),
  {
    ssr: false,
    loading: () => null,
  }
);
const EasterEggs = dynamic(() => import("@/components/easter-eggs"), {
  ssr: false,
  loading: () => null,
});
const ElasticCursor = dynamic(() => import("@/components/ui/ElasticCursor"), {
  ssr: false,
  loading: () => null,
});
const RadialMenu = dynamic(() => import("@/components/radial-menu/index"), {
  ssr: false,
  loading: () => null,
});

export default function AppOverlays() {
  const realtimeEnabled = Boolean(process.env.NEXT_PUBLIC_WS_URL);

  return (
    <>
      <Particles
        className="fixed inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      {realtimeEnabled ? <RemoteCursors /> : null}
      <EasterEggs />
      <ElasticCursor />
      {realtimeEnabled ? <RadialMenu /> : null}
    </>
  );
}
