import { prisma } from "@/lib/prisma";
import Navbar from "@/app/components/Navbar";

interface PageProps {
  params: { id: string };
}

const abbreviationMapping: { [key: string]: string } = {
  "Point Guard": "PG",
  "Shooting Guard": "SG",
  "Small Forward": "SF",
  "Power Forward": "PF",
  Center: "C",
};

const formatSlugToTitle = (slug: string): string => {
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return abbreviationMapping[title] || slug;
};

const PlayerPage = async ({ params }: PageProps) => {
  const players = await prisma.player.findMany({
    where: { pos: formatSlugToTitle(params.id) },
    orderBy: {
      pts: "desc",
    },
  });

  if (players.length === 0) {
    return (
      <div>
        <Navbar />
        <div className="customFontClass">
          No players found for team "{formatSlugToTitle(params.id)}".
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="px-4 pt-24">
        <div className="overflow-x-auto">
          <div className="max-h-[calc(100vh-6rem)] overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200 text-xs border border-black border-collapse">
              <thead className="bg-gray-300 border border-black sticky top-0 z-20">
                <tr>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-20">
                    Name
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-14">
                    Pos
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-10">
                    Age
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-10">
                    GP
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-10">
                    GS
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-14">
                    MPG
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-14">
                    FGM
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-14">
                    FGA
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-14">
                    FG%
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-14">
                    3PM
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-14">
                    3PA
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-14">
                    3P%
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-14">
                    2PM
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-14">
                    2PA
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-14">
                    2P%
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-16">
                    EFG%
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-14">
                    FTM
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-14">
                    FTA
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-14">
                    FT%
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-14">
                    ORB
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-14">
                    DRB
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-14">
                    TR
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-12">
                    APG
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-12">
                    SPG
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-12">
                    BPG
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-12">
                    TOV
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-12">
                    PF
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-12">
                    PPG
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-20">
                    Nat
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-12">
                    Team
                  </th>
                  <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-10">
                    College
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {players.map((player) => (
                  <tr key={player.player} className="hover:bg-sky-500">
                    <td className="px-1 py-2 whitespace-nowrap text-xs font-medium text-gray-900">
                      {player.player}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.pos}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.age}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.g}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.gs}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.mp}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.fg}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.fga}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.fg_percentage}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.threep}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.threepa}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.threep_percentage}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.twop}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.twopa}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.twop_percentage}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.efg_percentage}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.ft}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.fta}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.ft_percentage}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.orb}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.drb}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.trb}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.ast}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.stl}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.blk}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.tov}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.pf}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.pts}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.birth}
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                      {player.team}
                    </td>
                    <td className="px-1 py-2 text-xs text-black">
                      {player.college}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
