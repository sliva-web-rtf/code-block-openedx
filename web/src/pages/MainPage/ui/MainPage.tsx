import {
  TaskDescription,
  TaskInputFormat,
} from "@/entities/Task";
import { TaskCodeEditor } from "@/widgets/TaskCodeEditor";
import { FC } from "react";

export const MainPage: FC = () => {

  return (
    <main className="container mx-auto flex w-full flex-col gap-4 p-4">
      <TaskDescription />
      <TaskInputFormat />
      {/* <TaskOutputFormat /> */}
      <TaskCodeEditor />
    </main>
  );
};
