import { createServerFn } from "@tanstack/react-start";
import { requireAuth } from "../auth/server/auth.guard.server";
import {
	createService,
	deleteService,
	getAllServices,
	updateService,
} from "./services.service.server";
import {
	createServiceSchema,
	deleteServiceSchema,
	updateServiceSchema,
} from "./services.shema";

export const getServicesAction = createServerFn().handler(async () => {
	requireAuth();
	return getAllServices();
});

export const createServiceAction = createServerFn()
	.inputValidator(createServiceSchema)
	.handler(async ({ data }) => {
		requireAuth();
		return createService(data);
	});

export const updateServiceAction = createServerFn()
	.inputValidator(updateServiceSchema)
	.handler(async ({ data }) => {
		requireAuth();
		return updateService(data);
	});

export const deleteServiceAction = createServerFn()
	.inputValidator(deleteServiceSchema)
	.handler(async ({ data }: { data: { id: string } }) => {
		requireAuth();
		return deleteService(data.id);
	});
