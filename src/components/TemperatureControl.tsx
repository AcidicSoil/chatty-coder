
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

interface TemperatureControlProps {
  value: number;
  onChange: (value: number[]) => void;
}

const TemperatureControl = ({ value, onChange }: TemperatureControlProps) => {
  return (
    <Card className="p-6 animate-fadeIn">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-foreground">Temperature</h3>
          <span className="text-sm text-muted-foreground">{value.toFixed(2)}</span>
        </div>
        <Slider
          value={[value]}
          onValueChange={onChange}
          min={0}
          max={1}
          step={0.1}
          className="w-full"
        />
        <p className="text-sm text-muted-foreground">
          Lower values make the output more focused and deterministic, while higher values make it more creative and varied.
        </p>
      </div>
    </Card>
  );
};

export default TemperatureControl;
