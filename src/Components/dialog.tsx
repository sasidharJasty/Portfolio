import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;


const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      `
      fixed inset-0 z-50
      bg-black/60
      backdrop-blur-md
      transition-all


      data-[state=open]:animate-in
      data-[state=open]:fade-in

      data-[state=closed]:animate-out
      data-[state=closed]:fade-out
      `,
      className
    )}
    {...props}
  />
));

DialogOverlay.displayName =
  DialogPrimitive.Overlay.displayName;



const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />

    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          `
          relative

          w-full
          max-w-3xl
          max-h-[90vh]

          overflow-y-auto

          rounded-3xl

          border
          border-neutral-200/60
          dark:border-neutral-800/80

          bg-white
          dark:bg-neutral-950

          shadow-[0_25px_80px_rgba(0,0,0,0.35)]

          ring-1
          ring-black/5
          dark:ring-white/10

          backdrop-blur-xl

          scrollbar-thin

          data-[state=open]:animate-in
          data-[state=open]:fade-in
          data-[state=open]:zoom-in-95

          data-[state=closed]:animate-out
          data-[state=closed]:fade-out
          data-[state=closed]:zoom-out-95

          duration-300
          `,
          className
        )}
        {...props}
      >

        {/* subtle top glow */}
        <div
          className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-32

          bg-gradient-to-b
          from-blue-500/10
          to-transparent

          dark:from-blue-400/10
          "
        />


        {children}


        <DialogPrimitive.Close
          className="
          absolute
          right-5
          top-5
          z-30

          flex
          h-10
          w-10

          items-center
          justify-center

          rounded-full

          bg-white/80
          dark:bg-neutral-900/80

          border
          border-neutral-200
          dark:border-neutral-800

          shadow-md

          text-neutral-500

          backdrop-blur-md

          transition-all

          hover:scale-110
          hover:bg-neutral-100

          dark:hover:bg-neutral-800

          hover:text-black
          dark:hover:text-white
          "
        >
          <X className="h-5 w-5" />
        </DialogPrimitive.Close>


      </DialogPrimitive.Content>
    </div>

  </DialogPortal>
));

DialogContent.displayName =
  DialogPrimitive.Content.displayName;

DialogContent.displayName =
  DialogPrimitive.Content.displayName;



const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col gap-2",
      className
    )}
    {...props}
  />
);


const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex justify-end gap-3",
      className
    )}
    {...props}
  />
);



const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      `
      text-3xl
      font-bold
      tracking-tight

      text-neutral-900
      dark:text-white
      `,
      className
    )}
    {...props}
  />
));

DialogTitle.displayName =
  DialogPrimitive.Title.displayName;



const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      `
      text-sm
      leading-relaxed

      text-neutral-500
      dark:text-neutral-400
      `,
      className
    )}
    {...props}
  />
));

DialogDescription.displayName =
  DialogPrimitive.Description.displayName;



export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
