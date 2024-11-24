import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui";
import { FC } from "react";
import { useTask } from "../hooks/useTask";
import { useXBlockInfo } from "@/entities/XBlock";

export const TaskDescription: FC = () => {
  const { data } = useTask();
  const { data: xBlockInfo } = useXBlockInfo();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{data?.title}</CardTitle>
        <CardDescription>{data?.content}</CardDescription>
        {import.meta.env.DEV && xBlockInfo && (
          <div>
            <p>User Id - {xBlockInfo.userId}</p>
            <p>User Id - {xBlockInfo.sectionId}</p>
            <p>User Id - {xBlockInfo.relationId}</p>
          </div>
        )}
      </CardHeader>
    </Card>
  );
};
