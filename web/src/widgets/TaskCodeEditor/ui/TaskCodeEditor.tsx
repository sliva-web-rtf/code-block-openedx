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
import { javascript } from "@codemirror/lang-javascript";
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

export const TaskCodeEditor: FC = () => {
  const { data, isLoading } = useTask();
  const { mutateAsync } = usePostAnswer();

  const form = useForm<TaskCodeEditorSchemaType>({
    defaultValues: {
      code: data?.languages[0].template,
      lang: data?.languages[0].image,
    },
    resolver: zodResolver(taskCodeEditorSchema),
  });

  useEffect(() => {
    form.reset({
      code: data?.languages[0].template,
      lang: data?.languages[0].image,
    })
  }, [form, data])


  const submitHandler: SubmitHandler<TaskCodeEditorSchemaType> = async (data) => {
    console.log({ data });
    console.log({ ss: javascript({ jsx: true }) });

    await mutateAsync({
      answer: data.code,
      image: data.lang,
      sectionType: 'SECTION_TYPE_CODE',
      relationId: '1bab2a4a-7a70-4952-b5d6-7c2b612e0357',
      sectionId: '2ce0f1a5-b4d9-4480-ba9f-c235b67a782d',
      userId: 'test@test.ru'
    })
  };

  if (!data || isLoading) {
    return <TaskCodeEditorSkeleton />;
  }

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
                  render={({ field: { onChange, value, ref, onBlur } }) => (
                    <CodeMirror
                      theme={"dark"}
                      ref={ref}
                      lang={langValue}
                      onBlur={onBlur}
                      value={value}
                      onChange={onChange}
                      height="256px"
                      extensions={[javascript({ typescript: true, jsx: true })]}
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
            <Button className="ml-auto" type="submit" variant="default">
              Отправить
            </Button>
          </CardHeader>
        </Card>
      </form>
    </FormProvider>
  );
};
