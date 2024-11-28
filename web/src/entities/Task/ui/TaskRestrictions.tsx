import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui";
import { FC } from "react";
import { useTask } from "../hooks/useTask";
import { TaskFormatsSkeleton } from "./TaskFormatsSkeleton";

export const TaskRestrictions: FC = () => {
  const { data, isLoading } = useTask();

  if (isLoading || !data) {
    return <TaskFormatsSkeleton />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ограничения</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2">
        <div className="flex flex-col justify-center gap-2 p-2 text-center">
          <p>Память</p>
          <p className="text-lg">{data?.timeLimit.getSeconds()} секунд</p>
        </div>
        <div className="flex flex-col justify-center gap-2 p-2 text-center">
          <p>Время</p>
          <p className="text-lg">{data?.memoryLimit} МБ</p>
        </div>
      </CardContent>
    </Card>
  );
};
