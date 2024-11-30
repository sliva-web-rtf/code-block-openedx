import { FC } from "react";
import { useTask } from "../hooks/useTask";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui";

export const TaskExamples: FC = () => {
  const { data } = useTask();

  if (!data?.exampleTests.length) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Примеры</CardTitle>
      </CardHeader>
      <CardContent>
        {data.exampleTests.map((exampleTest) => (
          <div
            key={exampleTest.stdin + exampleTest.stdout}
            className="grid grid-cols-2"
          >
            <div className="flex flex-col gap-2 p-2 text-center">
              <p>Ввод</p>
              <p className="text-lg italic text-muted-foreground">
                {exampleTest.stdin}
              </p>
            </div>
            <div className="flex flex-col gap-2 p-2 text-center">
              <p>Вывод</p>
              <p className="text-lg italic text-muted-foreground">
                {exampleTest.stdout}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
