"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

export default function LoginView() {
    return <div>
        <Button
            onClick={()=> signIn("google")}
            variant={"default"}
            className="bg-accent text-accent-foreground">Login</Button>
    </div>
}