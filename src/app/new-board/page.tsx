"use client";
import { createBoard } from "@/actions/boardActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";

export default function NewBoard() {
  const handleNewBoardSubmit = async (formData: FormData) => {
    const boardName = formData.get("name")?.toString() || "";
      const { id } = await createBoard(boardName);
      redirect(`/boards/${id}`)
  };
  return (
    <div>
      <form action={handleNewBoardSubmit} className="max-w-xs block">
        <h1 className="text-2xl mb-4">Create New Board</h1>
        <Input type="text" name="name" placeholder="Board name" />
        <Button type="submit" className="mt-2 w-full">
          Create Board
        </Button>
      </form>
    </div>
  );
}
