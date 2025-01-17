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
                    Create ticket
                </h2>
            }
        >
            <Head title="Create ticket" />

            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
                    <div className="flex justify-between items-center m-4 text-white">
                        <h3 className="text-lg">New ticket</h3>
                        <div className="flex space-x-4">
                            <Link href={route("tickets.index")}>
                                <InfoButton className="text-sm" />
                            </Link>
                        </div>
                    </div>

                    <div className="bg-gray-50 text-sm dark:bg-gray-700 p-4 rounded-lg shadow-md">
                        <form onSubmit={handleSubmit} action="#">
                            <div className="mb-4">
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    type="text"
                                    placeholder="ticket Subject"
                                    value={data.subject}
                                    onChange={(e) => setData("subject", e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.subject && (
                                    <span className="text-red-500">{errors.subject}</span>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    placeholder="ticket Description"
                                    value={data.description}
                                    onChange={(e) => setData("description", e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                ></textarea>
                                {errors.description && (
                                    <span className="text-red-500">{errors.description}</span>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="date_creation"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Creation Date
                                </label>
                                <input
                                    id="date_creation"
                                    type="date"
                                    value={data.date_creation}
                                    onChange={(e) => setData("date_creation", e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.date_creation && (
                                    <span className="text-red-500">{errors.date_creation}</span>
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
                                    onChange={(e) => setData("status", e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option value="">Select Status</option>
                                    <option value="open">Open</option>
                                    <option value="in_progress">In Progress</option>
                                    <option value="closed">Closed</option>
                                </select>
                                {errors.status && (
                                    <span className="text-red-500">{errors.status}</span>
                                )}
                            </div>

                            <div className="flex justify-end">
                                <CheckButton
                                    type="submit"
                                    disabled={processing}
                                    className="text-sm"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
