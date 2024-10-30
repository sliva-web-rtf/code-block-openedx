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
import { FC } from "react";
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

export const TaskCodeEditor: FC = () => {
  const { data } = useTask();

  const form = useForm<TaskCodeEditorSchemaType>({
    defaultValues: {
      code: "",
      lang: data?.languages[0].image,
    },
    resolver: zodResolver(taskCodeEditorSchema),
  });

  const submitHandler: SubmitHandler<TaskCodeEditorSchemaType> = (data) => {
    console.log({ data });
    console.log({ ss: javascript({ jsx: true }) });
  };

  if (!data) {
    return null;
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
            {data.max_attempts > 0 && (
              <p>
                {data.attempts} попыток из {data.max_attempts}
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
