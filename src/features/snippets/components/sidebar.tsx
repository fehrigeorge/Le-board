"use client";

import { PlusCircle, Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { ScrollArea } from "@/shared/ui/scroll-area";

export function Sidebar() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-2">
        <Button
          variant="default"
          className="flex-1 justify-start space-x-2"
        >
          <PlusCircle size={16} />
          <span>New Snippet</span>
        </Button>
      </div>
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search snippets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-8 bg-background"
        />
        {search && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full"
            onClick={() => setSearch("")}
          >
            <X size={16} />
          </Button>
        )}
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="space-y-2">
          {/* Snippet list will go here */}
        </div>
      </ScrollArea>
    </div>
  );
}