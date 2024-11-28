import { Card, CardHeader, CardTitle } from "@/shared/ui";
import { FC } from "react";
import { useTask } from "../hooks/useTask";
import { TaskFormatsSkeleton } from "./TaskFormatsSkeleton";

export const TaskFormats: FC = () => {
  const { data, isLoading } = useTask();

  if (isLoading || !data) {
    return <TaskFormatsSkeleton />
  }

  if (!data.format) {
    return null
  }

  return <Card>
    <CardHeader>
      <CardTitle>Формат ввода</CardTitle>
    </CardHeader>
  </Card>;
};
