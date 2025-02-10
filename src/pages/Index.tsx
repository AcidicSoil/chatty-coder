
import { useState } from "react";
import ModelSelector from "@/components/ModelSelector";
import ChatInterface from "@/components/ChatInterface";
import TemperatureControl from "@/components/TemperatureControl";
import { useToast } from "@/components/ui/use-toast";

interface Model {
  name: string;
  fullName: string;
  size: string;
  modified: string;
}

const Index = () => {
  const { toast } = useToast();
  const [models] = useState<Model[]>([
    {
      name: "llama2",
      fullName: "llama2:7b",
      size: "3.8GB",
      modified: "2024-03-10",
    },
  ]);
  const [selectedModel, setSelectedModel] = useState(models[0].fullName);
  const [temperature, setTemperature] = useState(0.7);

  const handleSendMessage = async (message: string) => {
    toast({
      title: "Message sent",
      description: "Your message has been sent to the model.",
    });
    // Implement actual message sending logic here
  };

  const handleRefreshModels = () => {
    toast({
      title: "Models refreshed",
      description: "The model list has been updated.",
    });
    // Implement actual model refresh logic here
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center mb-8 animate-fadeIn">
          AI-Assisted Code Generator
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-6">
            <ModelSelector
              models={models}
              selectedModel={selectedModel}
              onModelSelect={setSelectedModel}
              onRefresh={handleRefreshModels}
            />
            <TemperatureControl
              value={temperature}
              onChange={(value) => setTemperature(value[0])}
            />
          </div>
          
          <div className="md:col-span-2">
            <ChatInterface onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
