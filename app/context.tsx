'use client'
import { createContext } from "react";

interface TaskData {
    id: number;
    texto: string;
    status: boolean;
}
export const MyContext = createContext<string[]>([]);