import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(8, { message: "Kata sandi harus memiliki minimal 8 karakter" })
  .regex(/[a-z]/, {
    message: "Kata sandi harus memiliki minimal 1 huruf kecil",
  })
  .regex(/[A-Z]/, {
    message: "Kata sandi harus memiliki minimal 1 huruf besar",
  })
  .regex(/[0-9]/, { message: "Kata sandi harus memiliki minimal 1 angka" });

export const emailSchema = z
  .string({ message: "Email wajib diisi" })
  .email({ message: "Format email tidak valid" });
