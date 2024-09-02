import axios from "axios";
import Navbar from "@/app/components/Navbar";

interface PageProps {
  searchParams: { search: string };
}

const ResultsPage = async ({ searchParams }: PageProps) => {
  const searchQuery = searchParams.search || "";

  try {
    const response = await axios.post(
      `http://nba-insight.vercel.app/api/search`,
      {
        search: searchQuery,
      }
    );
    const players = response.data;

    if (players.length === 0) {
      return (
        <div>
          <Navbar />
          <div className="customFontClass">
            No players found for "{searchQuery}".
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
                    <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-24">
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
                      Team
                    </th>
                    <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-20">
                      Nat
                    </th>
                    <th className="px-1 py-2 text-left font-medium text-black uppercase tracking-wider w-24">
                      College
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {players.map((player: any) => (
                    <tr key={player.player} className="hover:bg-sky-500">
                      <td className="px-1 py-2 whitespace-nowrap text-xs font-medium text-gray-900">
                        {player.Player}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player.Pos}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player.Age}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player.G}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player.GS}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player.MP}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player.FG}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player.FGA}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player["FG%"]}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player["3P"]}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player["3PA"]}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player["3P%"]}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player["2P"]}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player["2PA"]}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player["2P%"]}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player["eFG%"]}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player["FT"]}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player["FTA"]}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player["FT%"]}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player["ORB"]}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player["DRB"]}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player["TRB"]}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player.AST}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player.STL}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player.BLK}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player.TOV}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player.PF}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player.PTS}
                      </td>
                      <td className="px-1 py-2 text-xs text-black">
                        {player.Team}
                      </td>
                      <td className="px-1 py-2 whitespace-nowrap text-xs text-black">
                        {player.Birth}
                      </td>
                      <td className="px-1 py-2 text-xs text-black">
                        {player.College}
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
  } catch (error) {
    console.error("Failed to fetch players:", error);

    return (
      <div>
        <Navbar />
        <div className="customFontClass">
          Failed to load players for team "{searchQuery}". Please try again
          later.
        </div>
      </div>
    );
  }
};

export default ResultsPage;
