import BeforeAfterPage from "~/app/before-after/page";
import Homepage from "~/app/page";
import ProcessPage from "~/app/process/page";
import { ScrollArea } from "~/components/ui/scroll-area";
import type { PressureBrosData } from "~/types/types";

interface PreviewPaneProps {
  data: PressureBrosData;
  activePage: string;
  width: number;
}

export function PreviewPane({ data, activePage, width }: PreviewPaneProps) {
  // Change this to page names
  const renderPreview = () => {
    switch (activePage) {
      case "homepage":
        return <Homepage adminContent={data} adminError={false} />;
      case "beforeAfterPage":
        return <BeforeAfterPage adminContent={data} adminError={false} />;
      case "processPage":
        return <ProcessPage adminContent={data} adminError={false} />;
      default:
        return <Homepage adminContent={data} adminError={false} />;
    }
  };

  return (
    <div className="bg-white" style={{ width: `${width}%` }}>
      <ScrollArea className="h-full">{renderPreview()}</ScrollArea>
    </div>
  );
}
