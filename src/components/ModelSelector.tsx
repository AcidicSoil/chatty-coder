
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Model {
  name: string;
  fullName: string;
  size: string;
  modified: string;
}

interface ModelSelectorProps {
  models: Model[];
  selectedModel: string;
  onModelSelect: (model: string) => void;
  onRefresh: () => void;
}

const ModelSelector = ({ models, selectedModel, onModelSelect, onRefresh }: ModelSelectorProps) => {
  return (
    <Card className="p-6 space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-foreground">Available Models</h3>
        <Button variant="ghost" size="icon" onClick={onRefresh} className="hover:rotate-180 transition-transform duration-500">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
      
      <Select value={selectedModel} onValueChange={onModelSelect}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a model" />
        </SelectTrigger>
        <SelectContent>
          {models.map((model) => (
            <SelectItem key={model.fullName} value={model.fullName}>
              {model.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Model</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Last Modified</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {models.map((model) => (
              <TableRow key={model.fullName}>
                <TableCell className="font-medium">{model.name}</TableCell>
                <TableCell>{model.size}</TableCell>
                <TableCell>{model.modified}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default ModelSelector;
