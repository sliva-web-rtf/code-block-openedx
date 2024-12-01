import { TaskForm } from "@/widgets/TaskForm";
import { FC } from "react";

export const MainPage: FC = () => {
  return (
    <main className="flex w-full flex-col gap-4 p-4">
      <TaskForm />
    </main>
  );
};
