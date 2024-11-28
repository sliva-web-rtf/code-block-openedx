import { Card } from "@/shared/ui";
import { FC } from "react";

export const TaskDescriptionSkeleton: FC = () => {
  return <Card className="h-32 animate-pulse bg-border" />;
};
