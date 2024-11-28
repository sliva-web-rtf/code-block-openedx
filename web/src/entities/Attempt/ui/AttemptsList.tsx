import { FC } from "react";
import { useAttempts } from "../hooks/useAttempts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ScrollArea,
} from "@/shared/ui";
import { getPrettyVerdict } from "../utils/getPrettyVerdict";
import { cn } from "@/shared/utils";
import { AnswerVerdict } from "../libs/verdict";
import { AttemptsListSkeleton } from "./AttemptsListSkeleton";

export const AttemptsList: FC = () => {
  const { data: attempts, isLoading } = useAttempts();

  if (isLoading || !attempts) {
    return <AttemptsListSkeleton />;
  }

  if (!attempts.length) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Предыдущие попытки</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion className="w-full" collapsible type="single">
          <ScrollArea className="flex max-h-[285px] w-full pr-4">
            {attempts.reverse().map((attempt, index, arr) => {
              return (
                <AccordionItem value={attempt.createdAt.toString()}>
                  <AccordionTrigger>
                    <p className="flex-grow text-left">
                      Попытка {arr.length - index}
                    </p>
                    <time className="mr-2 text-sm text-gray-500">
                      {attempt.createdAt.toLocaleString("ru")}
                    </time>
                  </AccordionTrigger>
                  <AccordionContent className="grid h-[114px] grid-cols-4">
                    <div className="flex flex-col justify-center gap-2 p-2 text-center">
                      <p>Вердикт</p>
                      <p
                        className={cn("text-lg", {
                          ["text-green-500"]:
                            attempt.verdict === AnswerVerdict.OK,
                          ["text-red-500"]:
                            attempt.verdict !== AnswerVerdict.OK,
                        })}
                      >
                        {getPrettyVerdict(attempt.verdict)}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center gap-2 p-2 text-center">
                      <p>Баллы</p>
                      <p className="text-lg">{attempt.score}</p>
                    </div>
                    <div className="flex flex-col justify-center gap-2 p-2 text-center">
                      <p>Тест</p>
                      <p className="text-lg">{attempt.test}</p>
                    </div>
                    <div className="flex flex-col justify-center gap-2 p-2 text-center">
                      <p>Время</p>
                      <p className="text-lg">
                        {attempt.time.getMilliseconds()} мс
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </ScrollArea>
        </Accordion>
      </CardContent>
    </Card>
  );
};
