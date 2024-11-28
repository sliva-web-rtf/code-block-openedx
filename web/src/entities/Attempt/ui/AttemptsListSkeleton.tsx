import { Card } from "@/shared/ui";
import { FC } from "react";

export const AttemptsListSkeleton: FC = () => {
  return <Card className="h-48 animate-pulse bg-border" />;
};
