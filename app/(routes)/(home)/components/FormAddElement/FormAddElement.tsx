"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "./FormAddElement.form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Copy, Earth, Eye, Shuffle } from "lucide-react";
import { copyClipboard } from "@/lib/copyClipboard";
import { useState } from "react";
import { generatePassword } from "@/lib/generatePassword";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormAddElementProps } from "./FormAddElement.type";

export function FormAddElement(prop: FormAddElementProps) {
  const { userId, typeElement } = prop;
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      typeElement,
      isFavourite: false,
      name: "",
      directory: "",
      username: "",
      password: "",
      urlWebsite: "",
      note: "",
      userId,
    },
  });
  const generateNewPassword = () => {
    const password = generatePassword();
    form.setValue("password", password);
  };
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/items", values);
      toast({ title: "Elemento guardado correctamente" });
      form.reset({
        typeElement,
        isFavourite: false,
        name: "",
        directory: "",
        username: "",
        password: "",
        urlWebsite: "",
        note: "",
      });
      router.refresh();
    } catch {
      toast({
        title: "Error al guardar el elemento",
        variant: "destructive",
      });
    }
  };
  const updateUrl = () => {
    form.setValue("urlWebsite", window.location.href);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-y-2 gap-x-4"
      >
        <div className="md:grid-cols-2 gap-y-2 gap-x-4 grid">
          <FormField
            control={form.control}
            name="urlWebsite"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Url website</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input {...field} />
                    <Earth
                      className="absolute top-3 right-2 cursor-pointer"
                      size={18}
                      onClick={updateUrl}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de usuario</FormLabel>
                <div className="relative">
                  <Input {...field} />
                  <Copy
                    className="absolute top-3 right-4 cursor-pointer"
                    size={18}
                    onClick={() => copyClipboard(field.value)}
                  />
                </div>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex justify-between p-[5px]">
                  Password
                  <Shuffle
                    className="cursor-pointer"
                    size={15}
                    onClick={generateNewPassword}
                  />
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                    />
                    <Eye
                      className="absolute top-3 right-10 cursor-pointer"
                      size={18}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                    <Copy
                      className="absolute top-3 right-2 cursor-pointer"
                      size={18}
                      onClick={() => copyClipboard(field.value)}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="directory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Directorio</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Elige el directorio" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Social">Social</SelectItem>
                    <SelectItem value="Arts">Arts</SelectItem>
                    <SelectItem value="Shopping">Shopping</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isFavourite"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  ¿Quieres seleccionar tu contraseña como favorita?
                </FormLabel>
                <div className="flex flex-row items-start space-x-3 space-y-0 p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Marcar como favorito</FormLabel>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notas</FormLabel>
              <FormControl>
                <Textarea className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <Button type="submit">Guardar</Button>
      </form>
    </Form>
  );
}
