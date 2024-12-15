import { toast } from "@/components/ui/use-toast";
import { useToast as useToastOriginal } from "@/components/ui/use-toast";

export function useToast() {
  const { toast: showToast } = useToastOriginal();

  const showError = (message: string) => {
    showToast({
      variant: "destructive",
      title: "Error",
      description: message,
    });
  };

  const showSuccess = (message: string) => {
    showToast({
      title: "Success",
      description: message,
    });
  };

  return {
    toast: showToast,
    showError,
    showSuccess,
  };
}