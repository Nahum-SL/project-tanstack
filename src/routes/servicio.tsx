import { createFileRoute } from "@tanstack/react-router";
import { AuthStatus } from "#/features/auth/components/authStatus";
import { ServicesContent } from "#/features/services/services.ui";

export const Route = createFileRoute("/servicio")({
	component: ServicesPage,
});

function ServicesPage() {
	return (
		<div>
			<AuthStatus />
			<ServicesContent />
		</div>
	);
}
