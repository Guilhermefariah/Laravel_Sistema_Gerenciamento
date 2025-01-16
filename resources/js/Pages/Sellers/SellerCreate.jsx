import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InfoButton from "@/Components/Button/InfoButton";
import SuccessButton from "@/Components/Button/SuccessButton";
import { Head, Link, useForm } from "@inertiajs/react";

export default function sellerCreate() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        phone: "",
        amount_tickets: "",
        status: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("sellers.store"));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Vendedores
                </h2>
            }
        >
            <Head title="Create seller" />

            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
                    <div className="flex justify-between items-center m-4 text-white">
                        <h3 className="text-lg">Cadastrar vendedor</h3>
                        <div className="flex space-x-4">
                            <Link href={route("sellers.index")}>
                                <InfoButton className="text-sm">
                                    List
                                </InfoButton>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-gray-50 text-sm dark:bg-gray-700 p-4 rounded-lg shadow-md">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-200"
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
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.name && (
                                    <span className="text-red-500">
                                        {errors.name}
                                    </span>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-200"
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
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.email && (
                                    <span className="text-red-500">
                                        {errors.email}
                                    </span>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-200"
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
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.phone && (
                                    <span className="text-red-500">
                                        {errors.phone}
                                    </span>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="amount_tickets"
                                    className="block text-sm font-medium text-gray-200"
                                >
                                    Quantidade de Tickets
                                </label>
                                <select
                                    id="amount_tickets"
                                    value={data.amount_tickets}
                                    onChange={(e) =>
                                        setData(
                                            "amount_tickets",
                                            e.target.value
                                        )
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option value="#">Selecione</option>
                                    <option value="Aberto">Aberto</option>
                                    <option value="Em Andamento">
                                        Em Andamento
                                    </option>
                                    <option value="Resolvido">Resolvido</option>
                                </select>
                                {errors.amount_tickets && (
                                    <span className="text-red-500">
                                        {errors.amount_tickets}
                                    </span>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="status"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Status
                                </label>
                                <select
                                    id="status"
                                    value={data.status}
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option value="#">Selecionar status</option>
                                    <option value="active">Ativo</option>
                                    <option value="inactive">Inativo</option>
                                </select>
                                {errors.status && (
                                    <span className="text-red-500">
                                        {errors.status}
                                    </span>
                                )}
                            </div>

                            <div className="flex justify-end">
                                <SuccessButton
                                    type="submit"
                                    disabled={processing}
                                    className="text-sm"
                                >
                                    Cadastrar
                                </SuccessButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
