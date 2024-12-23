"use client";

import { ReactNode, useState } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/shared/ui/resizable";
import { Button } from "@/shared/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SidebarShell, MetadataShell } from "../shells";

interface MainLayoutProps {
  navigationContent: ReactNode;
  mainContent: ReactNode;
  detailsContent?: ReactNode;
  showDetailsSidebar?: boolean;
}

export function MainLayout({
  navigationContent,
  mainContent,
  detailsContent,
  showDetailsSidebar = true,
}: MainLayoutProps) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [isDetailsCollapsed, setIsDetailsCollapsed] = useState(false);

  return (
    <div className="h-screen bg-background">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          defaultSize={15}
          minSize={0}
          maxSize={20}
          collapsible={true}
          collapsedSize={0}
          onCollapse={() => setIsNavCollapsed(true)}
          onExpand={() => setIsNavCollapsed(false)}
        >
          <div className="relative h-full">
            <SidebarShell>
              {navigationContent}
            </SidebarShell>
            <Button
              variant="ghost"
              size="icon"
              className="absolute -right-10 top-2 z-10"
              onClick={() => setIsNavCollapsed(!isNavCollapsed)}
            >
              {isNavCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={showDetailsSidebar ? 65 : 85} minSize={30}>
          {mainContent}
        </ResizablePanel>
        {showDetailsSidebar && detailsContent && (
          <>
            <ResizableHandle withHandle />
            <ResizablePanel
              defaultSize={20}
              minSize={0}
              maxSize={30}
              collapsible={true}
              collapsedSize={0}
              onCollapse={() => setIsDetailsCollapsed(true)}
              onExpand={() => setIsDetailsCollapsed(false)}
            >
              <div className="relative h-full">
                <MetadataShell>
                  {detailsContent}
                </MetadataShell>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -left-10 top-2 z-10"
                  onClick={() => setIsDetailsCollapsed(!isDetailsCollapsed)}
                >
                  {isDetailsCollapsed ? (
                    <ChevronLeft className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </ResizablePanel>
          </>
        )}
      </ResizablePanelGroup>
    </div>
  );
}