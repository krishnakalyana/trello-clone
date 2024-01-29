import Board from "@/components/customComponents/Board";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
   <div>
    <Board/>
   </div>
  );
}
