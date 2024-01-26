"use client"
import { FormEvent } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function NewColumnForm (){
    function handleNewColumn (ev:FormEvent){
ev.preventDefault()
    }
    return (
        <form onSubmit={handleNewColumn} className="max-w-xs flex flex-col gap-2">
           <Input type="textt" placeholder="New Column Name" /> 
           <Button type="submit" variant={"default"} className="w-full">Create Column</Button>
        </form>
    )
} 