import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui";
import { FC } from "react";
import { useTask } from "../hooks/useTask";

export const TaskInputFormat: FC = () => {
  const { data } = useTask();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Формат ввода</CardTitle>
        <CardDescription>{data?.input_format}</CardDescription>
      </CardHeader>
    </Card>
  );
};
