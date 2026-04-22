"use client";

import { useEffect, useState } from "react";
import type { Service } from "./services.db.server";
import { useServices } from "./services.hook";

export function ServicesContent() {
	const { getServicesAction, createServiceAction, deleteServiceAction } =
		useServices();
	const [services, setServices] = useState<Service[]>([]);

	useEffect(() => {
		getServicesAction().then(setServices);
	}, [getServicesAction]);

	const handleCreate = async () => {
		const newService = await createServiceAction({
			data: {
				name: "Nuevo servicio",
				price: 100,
				category: "web",
			},
		});

		setServices((prev) => [...prev, newService]);
	};

	const handleDelete = async (id: string) => {
		await deleteServiceAction({ data: { id } });
		setServices((prev) => prev.filter((s) => s.id !== id));
	};

	return (
		<div>
			<button type="button" onClick={handleCreate}>
				Crear
			</button>

			{services.map((s) => (
				<div key={s.id}>
					{s.name} - ${s.price}
					<button type="button" onClick={() => handleDelete(s.id)}>
						Eliminar
					</button>
				</div>
			))}
		</div>
	);
}
