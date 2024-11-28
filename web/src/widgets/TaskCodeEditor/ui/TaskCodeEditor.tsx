import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui";
import { FC, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskCodeEditorSchema, TaskCodeEditorSchemaType } from "../libs/schema";
import { useTask } from "@/entities/Task";
import { TaskCodeEditorSkeleton } from "./TaskCodeEditorSkeleton";
import { usePostAnswer } from "@/entities/Answer";
import { useXBlockInfo } from "@/entities/XBlock";

export const TaskCodeEditor: FC = () => {
  const { data, isLoading } = useTask();
  const { mutateAsync } = usePostAnswer();
  const { data: xblockInfo } = useXBlockInfo();
  const { relationId, sectionId, userId } = xblockInfo || {};

  const form = useForm<TaskCodeEditorSchemaType>({
    defaultValues: {
      code: data?.languages[0].template || "",
      lang: data?.languages[0].image,
    },
    resolver: zodResolver(taskCodeEditorSchema),
  });

  useEffect(() => {
    if (!form.getValues("code")) {
      form.reset({
        code: data?.languages[0].template,
        lang: data?.languages[0].image,
      });
    }
  }, [form, data]);

  const submitHandler: SubmitHandler<TaskCodeEditorSchemaType> = async (
    data,
  ) => {
    if (!relationId || !sectionId || !userId) {
      return;
    }

    await mutateAsync({
      answer: data.code,
      image: data.lang,
      sectionType: "SECTION_TYPE_CODE",
      relationId,
      sectionId,
      userId,
    });
  };

  if (!data || isLoading) {
    return <TaskCodeEditorSkeleton />;
  }

  const isValid = form.formState.isValid;
  const isSubmitting = form.formState.isSubmitting;

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(submitHandler)}
      >
        <Card>
          <CardHeader className="flex-row justify-end">
            <Controller
              control={form.control}
              name="lang"
              render={({ field: { value, onChange } }) => (
                <Select value={value} onValueChange={onChange}>
                  <SelectTrigger className="w-64">
                    <SelectValue placeholder="Язык программирования" />
                  </SelectTrigger>
                  <SelectContent>
                    {data.languages.map((lang) => (
                      <SelectItem key={lang.image} value={lang.image}>
                        {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </CardHeader>
          <CardContent>
            <Controller
              control={form.control}
              name="lang"
              render={({ field: { value: langValue } }) => (
                <Controller
                  control={form.control}
                  name="code"
                  render={({ field: { onChange, value, onBlur } }) => (
                    <CodeMirror
                      lang={langValue}
                      onBlur={onBlur}
                      value={value}
                      onChange={onChange}
                      height="384px"
                      extensions={[python()]}
                    />
                  )}
                />
              )}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-row items-center justify-end space-y-0">
            {data.maxAttempts > 0 && (
              <p>
                {data.attempts} попыток из {data.maxAttempts}
              </p>
            )}
            <Button
              disabled={!isValid || isSubmitting}
              className="ml-auto"
              type="submit"
              variant="default"
            >
              Отправить
            </Button>
          </CardHeader>
        </Card>
      </form>
    </FormProvider>
  );
};
