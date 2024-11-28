import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui";
import { FC } from "react";
import { useTask } from "../hooks/useTask";
import { TaskRestrictionsSkeleton } from "./TaskRestrictionsSkeleton";

export const TaskRestrictions: FC = () => {
  const { data, isLoading } = useTask();

  if (isLoading || !data) {
    return <TaskRestrictionsSkeleton />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ограничения</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-4">
        <div className="flex flex-col gap-2 p-2 text-center">
          <p>Время</p>
          <p className="text-lg text-muted-foreground">{data.timeLimit.getSeconds()} секунд</p>
        </div>
        <div className="flex flex-col gap-2 p-2 text-center">
          <p>Память</p>
          <p className="text-lg text-muted-foreground">{data.memoryLimit} МБ</p>
        </div>
        <div className="flex flex-col gap-2 p-2 text-center">
          <p>Ввод</p>
          <p className="text-sm text-muted-foreground">{data.inputFormat}</p>
        </div>
        <div className="flex flex-col gap-2 p-2 text-center">
          <p>Вывод</p>
          <p className="text-sm text-muted-foreground">{data.outputFormat}</p>
        </div>
      </CardContent>
    </Card>
  );
};
