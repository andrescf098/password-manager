"use client";
import { FormProfileProps } from "./FormProfile.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { formSchema } from "./FormProfile.form";
import Image from "next/image";
import { useState } from "react";
import { UploadButton } from "@/lib/uploadthing";
import { Upload } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export function FormProfile(props: FormProfileProps) {
  const { user } = props;
  const router = useRouter();
  const [showUploadPhoto, setShowUploadPhoto] = useState(false);
  const [photoUploader, setPhotoUploader] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user.name || "",
      email: user.email || "",
      profileImage: user.profileImage || "",
      username: user.username || "",
      id: user.id,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch("/api/profile", values);
      toast({
        title: "Guardado",
      });
      router.refresh();
      setShowUploadPhoto(false);
      setPhotoUploader(false);
    } catch {
      toast({
        title: "Error",
        description: "Ocurrió un error al guardar los cambios",
      });
    }
  };
  return (
    <div className="max-w-lg border border-gray-300 rounded-md p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="profileImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Imagen de perfil</FormLabel>
                <FormControl>
                  <div>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={
                          user.profileImage
                            ? user.profileImage
                            : "/images/default-profile.jpg"
                        }
                        alt="Image profile"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div className="w-[200px]">
                        {showUploadPhoto ? (
                          <UploadButton
                            className="rounded-md text-slate-800 bg-slate-200 mt-3"
                            {...field}
                            endpoint="profileImage"
                            onClientUploadComplete={(res) => {
                              form.setValue("profileImage", res[0]?.ufsUrl);
                              setPhotoUploader(true);
                            }}
                            onUploadError={(error: Error) => {
                              console.error(error);
                            }}
                          />
                        ) : (
                          <Button
                            onClick={() => setShowUploadPhoto((prev) => !prev)}
                          >
                            <Upload className="mr-2 w-4 h-4" /> Cambiar foto
                          </Button>
                        )}
                      </div>
                    </div>
                    {photoUploader && (
                      <p className="text-sm">Imagen actualizada</p>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input disabled {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Deadpool" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de usuario</FormLabel>
                <FormControl>
                  <Input placeholder="Deadpool" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Guardar</Button>
        </form>
      </Form>
    </div>
  );
}
