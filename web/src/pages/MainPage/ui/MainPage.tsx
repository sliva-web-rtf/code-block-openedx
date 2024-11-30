import { AttemptsList, useAttempts } from "@/entities/Attempt";
import {
  TaskDescription,
  TaskExamples,
  TaskRestrictions,
  useTask,
} from "@/entities/Task";
import { useXBlockInfo } from "@/entities/XBlock";
import { ErrorUI } from "@/shared/ui";
import { TaskCodeEditor } from "@/widgets/TaskCodeEditor";
import { FC } from "react";

export const MainPage: FC = () => {
  const { error: xBlockInfoError } = useXBlockInfo();
  const { error: taskError } = useTask();
  const { error: attemptsError } = useAttempts();

  return (
    <main className="flex w-full flex-col gap-4 p-4">
      {xBlockInfoError ? (
        <ErrorUI error={xBlockInfoError} />
      ) : (
        <>
          {taskError ? (
            <ErrorUI error={taskError} />
          ) : (
            <>
              <TaskDescription />
              <TaskRestrictions />
              <TaskExamples />
              <TaskCodeEditor />
            </>
          )}
          {attemptsError ? <ErrorUI error={attemptsError} /> : <AttemptsList />}
        </>
      )}
    </main>
  );
};
