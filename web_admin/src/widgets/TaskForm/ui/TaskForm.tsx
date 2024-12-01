import {
  usePatchXBlockInfo,
  useXBlockInfo,
  XBlockInfoUpdateDto,
  XBlockInfoUpdateSchema,
} from "@/entities/XBlock";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export const TaskForm: FC = () => {
  const { data: XBlockInfo } = useXBlockInfo();
  const { mutateAsync } = usePatchXBlockInfo();
  const { relationId, sectionId } = XBlockInfo || {};
  const form = useForm<XBlockInfoUpdateDto>({
    defaultValues: {
      sectionId: "",
      relationId: "",
    },
    values: {
      relationId: relationId!,
      sectionId: sectionId!,
    },
    resolver: zodResolver(XBlockInfoUpdateSchema),
  });

  const submitHandler: SubmitHandler<XBlockInfoUpdateDto> = async (data) => {
    await mutateAsync(data);
  };

  const { control, formState } = form;
  const { isValid, isSubmitting } = formState;

  return (
    <form onSubmit={form.handleSubmit(submitHandler)}>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Настройки задания</CardTitle>
        </CardHeader>
        <CardContent className="gap-4 flex flex-col">
          <Controller
            control={control}
            name="sectionId"
            render={({ field: { name, onBlur, onChange, ref, value } }) => (
              <div className="flex flex-col gap-1">
                <p>Section UUID</p>
                <Input
                  ref={ref}
                  name={name}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name="relationId"
            render={({ field: { name, onBlur, onChange, ref, value } }) => (
              <div className="flex flex-col gap-1">
                <p>Relation UUID</p>
                <Input
                  ref={ref}
                  name={name}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              </div>
            )}
          />
        </CardContent>
        <CardFooter className="justify-end">
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Отправить
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};
