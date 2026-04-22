import { type Service, services } from "./services.db.server";

export function getAllServices() {
	return services;
}

export function getServiceById(id: string) {
	return services.find((s) => s.id === id);
}

export function createService(data: Omit<Service, "id">) {
	const newService = {
		id: crypto.randomUUID(),
		...data,
	};

	services.push(newService);

	return newService;
}

export async function updateService(data: Partial<Service>): Promise<Service> {
	const service = services.find((s) => s.id === data.id);

	if (!service) {
		throw { code: "NOT_FOUND" };
	}

	Object.assign(service, data);

	return service;
}

export function deleteService(id: string) {
	const index = services.findIndex((s) => s.id === id);

	if (index === -1) {
		throw { code: "NOT_FOUND" };
	}

	services.splice(index, 1);

	return { success: true };
}
