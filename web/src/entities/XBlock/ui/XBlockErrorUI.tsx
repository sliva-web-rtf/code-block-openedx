import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui";
import { FC } from "react";

export const XBlockErrorUI: FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>Произошла ошибка</CardTitle>
      <CardDescription>
        Не удалось загрузить данные о задании. Попробуйте попытку позже
      </CardDescription>
    </CardHeader>
  </Card>
);
