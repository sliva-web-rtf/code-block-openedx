import { useTheme } from "@/shared/hooks";
import {
  Button,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/shared/ui";
import { Cog } from "lucide-react";
import { FC } from "react";

export const TaskDescription: FC = () => {
  const { setTheme } = useTheme();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Задание 1</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Cog />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>hi</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Тема</DropdownMenuSubTrigger>
                <DropdownMenuSubContent sideOffset={8}>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Темная
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Светная
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    Системная
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <CardDescription>
          Даны два числа A и B. Вам нужно вычислить их сумму A+B. В этой задаче
          для работы с входными и выходными данными вы можете использовать и
          файлы и потоки на ваше усмотрение.
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
