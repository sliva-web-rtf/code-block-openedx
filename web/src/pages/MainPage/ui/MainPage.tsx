import {
  TaskDescription,
  TaskInputFormat,
  TaskOutputFormat,
} from "@/entities/Task";
import { useXBlockInfo, XBlockErrorUI } from "@/entities/XBlock";
import { TaskCodeEditor } from "@/widgets/TaskCodeEditor";
import { FC } from "react";

export const MainPage: FC = () => {
  const { data, isError, isFetched } = useXBlockInfo();

  return (
    <main className="container mx-auto flex w-full flex-col gap-4 p-4">
      {((!data && isFetched)) && <XBlockErrorUI />}
      {data && (
        <>
          <TaskDescription />
          <TaskInputFormat />
          {/* <TaskOutputFormat /> */}
          <TaskCodeEditor />
        </>
      )}
    </main>
  );
};
