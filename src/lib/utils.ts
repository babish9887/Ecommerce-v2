import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import CryptoJS from 'crypto-js'
import db from "@/db/db";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createSignature(message:any) {
      const secretKey = process.env.ESEWA_SECRET_KEY as string;
      const hash = CryptoJS.HmacSHA256(message, secretKey);
      const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
      return hashInBase64;
    }

