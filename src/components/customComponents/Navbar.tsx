import { getServerSession } from "next-auth";
import LogoutButton from "./LogoutButton";
import { authOptions } from "@/lib/authOptions";
import { Card } from "../ui/card";
import LoginButton from "./LoginButton";

export default async function  Navbar() {
    const session = await getServerSession(authOptions)
    return <Card className="w-full p-2 flex justify-between">{session && session?.user?.name} {session ?   <LogoutButton /> :<LoginButton />}</Card>
}