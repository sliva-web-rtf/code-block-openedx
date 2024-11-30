import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import {
  LucideProps,
  ShieldAlertIcon,
  ShieldEllipsisIcon,
  ShieldQuestionIcon,
} from "lucide-react";
import { ErrorType, IError } from "../types";

type ErrorUIProps = {
  error: IError;
  className?: string;
};

const ErrorIconMap: Record<
  ErrorType,
  React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >
> = {
  [ErrorType.FETCH]: ShieldAlertIcon,
  [ErrorType.BAD_ARGS]: ShieldEllipsisIcon,
  [ErrorType.PARSE]: ShieldEllipsisIcon,
  [ErrorType.UNKNOWN]: ShieldQuestionIcon,
};

export const ErrorUI: FC<ErrorUIProps> = ({ error, className }) => {
  const Icon = ErrorIconMap[error.type];

  return (
    <Card className={className}>
      <CardHeader className="items-center">
        <Icon className="h-32 w-32" />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-center">{error.message}</CardTitle>
      </CardContent>
    </Card>
  );
};
