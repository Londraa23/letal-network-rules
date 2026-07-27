const SERVER_ADDRESS = "letal.net";

export interface ServerStatus {
  online: boolean;
  players?: {
    online: number;
    max: number;
  };
}

export async function getServerStatus(): Promise<ServerStatus> {
  try {
    const res = await fetch(`https://api.mcsrvstat.us/3/${SERVER_ADDRESS}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return { online: false };

    const data = await res.json();

    if (!data?.online) return { online: false };

    return {
      online: true,
      players:
        typeof data.players?.online === "number" && typeof data.players?.max === "number"
          ? { online: data.players.online, max: data.players.max }
          : undefined,
    };
  } catch {
    return { online: false };
  }
}
