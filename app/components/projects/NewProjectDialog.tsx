"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewProjectDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-orange-500 hover:bg-orange-600">
          + New Project
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
        </DialogHeader>

        <div className="space-y-5">

          <div>
            <Label htmlFor="projectName">Project Name</Label>

            <Input
              id="projectName"
              placeholder="Warehouse Alba Iulia"
            />
          </div>

          <div>
            <Label htmlFor="client">Client</Label>

            <Input
              id="client"
              placeholder="ABC Construct"
            />
          </div>

          <div>
            <Label htmlFor="description">
              Description
            </Label>

            <Textarea
              id="description"
              placeholder="Project description..."
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">

            <Button
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button className="bg-orange-500 hover:bg-orange-600">
              Create Project
            </Button>

          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}