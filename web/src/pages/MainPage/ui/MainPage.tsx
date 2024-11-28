import { AttemptsList } from "@/entities/Attempt";
import {
  TaskDescription,
  TaskFormats,
  TaskRestrictions,
} from "@/entities/Task";
import { TaskCodeEditor } from "@/widgets/TaskCodeEditor";
import { FC } from "react";

export const MainPage: FC = () => {
  return (
    <main className="container mx-auto flex w-full flex-col gap-4 p-4">
      <TaskDescription />
      <TaskFormats />
      <TaskRestrictions />
      {/* <TaskOutputFormat /> */}
      <TaskCodeEditor />
      <AttemptsList />
    </main>
  );
};
