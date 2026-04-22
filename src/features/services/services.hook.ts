import {
	createServiceAction,
	deleteServiceAction,
	getServicesAction,
	updateServiceAction,
} from "./services.action";

export function useServices() {
	return {
		getServicesAction,
		createServiceAction,
		deleteServiceAction,
		updateServiceAction,
	};
}
