import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InfoButton from "@/Components/Button/InfoButton";
import { Head, Link, useForm } from "@inertiajs/react";
import CheckButton from "@/Components/Button/CheckButton";

export default function SellerCreate() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        phone: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("sellers.store"));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-50 leading-tight">
                    Novo Vendedor
                </h2>
            }
        >
            <Head title="Create Seller" />

            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-gray-200 shadow-md rounded-lg p-6">
                    <div className="flex justify-end items-center mb-6">
                        <Link href={route("sellers.index")}>
                            <InfoButton className="text-sm" />
                        </Link>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-lg text-gray-700"
                            >
                                Nome
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Nome do vendedor"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-none shadow-sm focus:ring-blue-600 sm:text-sm text-gray-700"
                            />
                            {errors.name && (
                                <span className="text-red-500 text-sm">
                                    {errors.name}
                                </span>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-lg text-gray-700"
                            >
                                E-Mail
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="E-mail do vendedor"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-none shadow-sm focus:ring-blue-600 sm:text-sm text-gray-700"
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm">
                                    {errors.email}
                                </span>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-lg text-gray-700"
                            >
                                Telefone
                            </label>
                            <input
                                id="phone"
                                type="text"
                                placeholder="Telefone do vendedor"
                                value={data.phone}
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-none shadow-sm focus:ring-blue-600 sm:text-sm text-gray-700"
                            />
                            {errors.phone && (
                                <span className="text-red-500 text-sm">
                                    {errors.phone}
                                </span>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="status"
                                className="block text-lg text-gray-700"
                            >
                                Status
                            </label>
                            <select
                                id="status"
                                name="status"
                                type="text"
                                value={data.status}
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-none shadow-sm focus:ring-blue-600 sm:text-sm text-gray-700"
                            >
                                <option value="ativo">Ativo</option>
                                <option value="inativo">Inativo</option>
                            </select>
                            {errors.status && (
                                <span className="text-red-500 text-sm">
                                    {errors.status}
                                </span>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="amount_tickets"
                                className="block text-lg text-gray-700"
                            >
                                Quantidade de Tickets
                            </label>
                            <select
                                id="amount_tickets"
                                name="amount_tickets"
                                type="text"
                                placeholder="Quantidade de tickets"
                                value={data.amount_tickets}
                                onChange={(e) =>
                                    setData("amount_tickets", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-none shadow-sm focus:ring-blue-600 sm:text-sm text-gray-700"
                            >
                                <option value="em_aberto"> Em Aberto </option>
                                <option value="em_andamento">
                                    Em Andamento
                                </option>
                                <option value="resolvido">Resolvido</option>
                            </select>

                            {errors.amount_tickets && (
                                <span className="text-red-500 text-sm">
                                    {errors.amount_tickets}
                                </span>
                            )}
                        </div>

                        <div className="flex justify-end">
                            <CheckButton type="submit" disabled={processing} />
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
