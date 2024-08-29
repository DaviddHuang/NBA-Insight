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
        <div>No players found for team "{formatSlugToTitle(params.id)}".</div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="px-4 pt-24">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-xs">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-20">
                  Name
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-14">
                  Pos
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-10">
                  Age
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-10">
                  GP
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-10">
                  GS
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-14">
                  MPG
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-14">
                  FGM
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-14">
                  FGA
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-14">
                  FG%
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-14">
                  3PM
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-14">
                  3PA
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-14">
                  3P%
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-14">
                  2PM
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-14">
                  2PA
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-14">
                  2P%
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-16">
                  EFG%
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-14">
                  FTM
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-14">
                  FTA
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-14">
                  FT%
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-14">
                  ORB
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-14">
                  DRB
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-14">
                  TR
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-12">
                  APG
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-12">
                  SPG
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-12">
                  BPG
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-12">
                  TOV
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-12">
                  PF
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-12">
                  PPG
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-20">
                  Nat
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-12">
                  Team
                </th>
                <th className="px-1 py-2 text-left font-medium text-gray-500 uppercase tracking-wider w-10">
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
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.pos}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.age}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.g}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.gs}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.mp}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.fg}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.fga}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.fg_percentage}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.threep}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.threepa}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.threep_percentage}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.twop}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.twopa}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.twop_percentage}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.efg_percentage}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.ft}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.fta}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.ft_percentage}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.orb}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.drb}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.trb}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.ast}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.stl}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.blk}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.tov}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.pf}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.pts}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.birth}
                  </td>
                  <td className="px-1 py-2 whitespace-nowrap text-xs text-gray-500">
                    {player.team}
                  </td>
                  <td className="px-1 py-2 text-xs text-gray-500">
                    {player.college}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
