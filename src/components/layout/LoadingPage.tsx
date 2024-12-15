import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { PageContainer } from "./PageContainer";

export function LoadingPage() {
  return (
    <PageContainer>
      <div className="h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    </PageContainer>
  );
}