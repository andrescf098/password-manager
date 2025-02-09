import { useCallback } from "react";
import { toast } from "./use-toast";

export const useClipboard = () => {
  const copyClipboard = useCallback((value: string) => {
    if (typeof window !== "undefined" && navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(value)
        .then(() =>
          toast({
            title: "Copiado al portapapeles",
          })
        )
        .catch(() =>
          toast({
            title: "Error al copiar al portapapeles",
          })
        );
      toast({
        title: "Copiado al portapapeles",
      });
    }
  }, []);
  return copyClipboard;
};
