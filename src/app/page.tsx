import Board from "@/components/customComponents/Board";
import Boards from "@/components/customComponents/Boards";
import { Button } from "@/components/ui/button";
import LoginView from "@/components/views/LoginView";
import { authOptions } from "@/lib/authOptions";
import { StepForward } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return (<LoginView/>)
  }
  return (
    <div>
      <h4>Your boards goes here</h4>
      <Boards/>
      <Link href={"/new-board"}>
        <Button variant={"default"}>
        Create New Board
        <StepForward className="ml-2" />
        </Button>
      </Link>
    {/* <Board/> */}
   </div>
  );
}
