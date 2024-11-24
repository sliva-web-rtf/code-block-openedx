import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui";
import { FC } from "react";
import { useTask } from "../hooks/useTask";

export const TaskInputFormat: FC = () => {
  const { data } = useTask();

  if (!data?.format) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Формат ввода</CardTitle>
        <CardDescription>{data?.format}</CardDescription>
      </CardHeader>
    </Card>
  );
};
