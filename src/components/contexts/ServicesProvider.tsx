"use client";
import { createContext, useState } from "react";

import type { ServicesContextType } from "u/types";


export const ServicesContext = createContext<ServicesContextType | null>(null);

export default function ServicesProvider({ children }: { children: React.ReactNode }) {
	
	const [isPending, setIsPending] = useState(false);
	
	return (
		<ServicesContext.Provider value={{ isPending, setIsPending }}>
			{children}
		</ServicesContext.Provider>
	)
}