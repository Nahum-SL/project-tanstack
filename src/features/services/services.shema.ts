import { z } from "zod";

export const createServiceSchema = z.object({
	name: z.string().min(3),
	price: z.number().min(1),
	category: z.string(),
});

export const updateServiceSchema = createServiceSchema.extend({
	id: z.string(),
});

export const deleteServiceSchema = z.object({
	id: z.string(),
});
