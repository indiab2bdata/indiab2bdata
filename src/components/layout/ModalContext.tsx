"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type ModalContextValue = {
  isOpen: boolean;
  source: string;
  openModal: (source?: string) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("popup");

  const value = useMemo(
    () => ({
      isOpen,
      source,
      openModal: (nextSource?: string) => {
        setSource(nextSource ?? "popup");
        setIsOpen(true);
      },
      closeModal: () => setIsOpen(false),
    }),
    [isOpen, source]
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within a ModalProvider");
  return ctx;
}
