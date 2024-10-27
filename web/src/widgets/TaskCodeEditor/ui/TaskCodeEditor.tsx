import {
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

export const TaskCodeEditor: FC = () => {
  return (
    <Card>
      <CardHeader className="flex-row justify-end">
        <Select>
          <SelectTrigger className="w-64">
            <SelectValue placeholder="Язык программирования" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="javascript">JavaScript</SelectItem>
            <SelectItem value="typescript">TypeScript</SelectItem>
            <SelectItem value="csharp">C#</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <CodeMirror height="256px" extensions={[javascript({ jsx: true })]} />
      </CardContent>
    </Card>
  );
};
