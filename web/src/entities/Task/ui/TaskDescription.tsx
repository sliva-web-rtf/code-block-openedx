import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui";
import { FC } from "react";
import { useTask } from "../hooks/useTask";
import { TaskDescriptionSkeleton } from "./TaskDescriptionSkeleton";

export const TaskDescription: FC = () => {
  const { data: taskData, isLoading: isTaskLoading } = useTask();

  if (isTaskLoading || !taskData) {
    return <TaskDescriptionSkeleton />
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">{taskData.title}</CardTitle>
        <CardDescription>{taskData.content}</CardDescription>
      </CardHeader>
    </Card>
  );
};
