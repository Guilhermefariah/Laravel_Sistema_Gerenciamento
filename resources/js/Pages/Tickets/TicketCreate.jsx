import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InfoButton from "@/Components/Button/InfoButton";
import { Head, Link, useForm } from "@inertiajs/react";
import CheckButton from "@/Components/Button/CheckButton";

export default function TicketCreate() {
    const { data, setData, post, processing, errors } = useForm({
        subject: "",
        description: "",
        date_creation: "",
        status: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("tickets.store"));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-50 leading-tight">
                    Criar Ticket
                </h2>
            }
        >
            <Head title="Create ticket" />

            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-gray-200 shadow-md rounded-lg p-6">
                    <div className="flex justify-end items-center mb-6">
                        <Link href={route("tickets.index")}>
                            <InfoButton className="text-sm" />
                        </Link>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-lg text-gray-700"
                            >
                                Assunto
                            </label>
                            <input
                                id="subject"
                                type="text"
                                placeholder="Assunto do ticket"
                                value={data.subject}
                                onChange={(e) =>
                                    setData("subject", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-none shadow-sm focus:ring-blue-600 sm:text-sm text-gray-700"
                            />
                            {errors.subject && (
                                <span className="text-red-500 text-sm">
                                    {errors.subject}
                                </span>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="description"
                                className="block text-lg text-gray-700"
                            >
                                Descrição
                            </label>
                            <textarea
                                id="description"
                                placeholder="Descrição do ticket"
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-none shadow-sm focus:ring-blue-600 sm:text-sm text-gray-700"
                            ></textarea>
                            {errors.description && (
                                <span className="text-red-500 text-sm">
                                    {errors.description}
                                </span>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="date_creation"
                                className="block text-lg text-gray-700"
                            >
                                Data de Criação
                            </label>
                            <input
                                id="date_creation"
                                type="date"
                                value={data.date_creation}
                                onChange={(e) =>
                                    setData("date_creation", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-none shadow-sm focus:ring-blue-600 sm:text-sm text-gray-700"
                            />
                            {errors.date_creation && (
                                <span className="text-red-500 text-sm">
                                    {errors.date_creation}
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
                                value={data.status}
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-none shadow-sm focus:ring-blue-600 sm:text-sm text-gray-700"
                            >
                                <option value="">Selecionar Status</option>
                                <option value="Aberto">Aberto</option>
                                <option value="Em Progresso">
                                    Em Progresso
                                </option>
                                <option value="Fechado">Fechado</option>
                            </select>
                            {errors.status && (
                                <span className="text-red-500 text-sm">
                                    {errors.status}
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
