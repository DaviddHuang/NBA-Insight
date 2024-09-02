import { NextRequest, NextResponse } from "next/server";
import playerData from "./db.json";

export async function POST(request: NextRequest) {
  const { team, position, search } = await request.json();

  let filteredPlayers = playerData;

  if (team) {
    filteredPlayers = filteredPlayers.filter(player => player.Team === team);
  }

  if (position) {
    filteredPlayers = filteredPlayers.filter(player => player.Pos === position);
  }

  if (search) {
    const lowercasedSearch = search.toLowerCase();
    filteredPlayers = filteredPlayers.filter(player =>
      player.Player.toLowerCase().includes(lowercasedSearch)
    );
    filteredPlayers = filteredPlayers.sort((a, b) =>
      a.Player.localeCompare(b.Player)
    );
  } else {
    filteredPlayers = filteredPlayers.sort((a, b) => b.PTS - a.PTS);
  }

  return NextResponse.json(filteredPlayers);
}


