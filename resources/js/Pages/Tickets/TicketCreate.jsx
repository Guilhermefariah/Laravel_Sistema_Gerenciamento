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
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Criar Ticket
                </h2>
            }
        >
            <Head title="Create ticket" />

            <div className="py-6 max-w-4xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                            Novo Ticket
                        </h3>
                        <Link href={route("tickets.index")}>
                            <InfoButton className="text-sm" />
                        </Link>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-lg font-medium text-gray-700 dark:text-gray-300"
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
                                className="mt-2 block w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-all"
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
                                className="block text-lg font-medium text-gray-700 dark:text-gray-300"
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
                                className="mt-2 block w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-all"
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
                                className="block text-lg font-medium text-gray-700 dark:text-gray-300"
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
                                className="mt-2 block w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-all"
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
                                className="block text-lg font-medium text-gray-700 dark:text-gray-300"
                            >
                                Status
                            </label>
                            <select
                                id="status"
                                value={data.status}
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                                className="mt-2 block w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-all"
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
