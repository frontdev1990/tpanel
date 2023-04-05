import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import moment from "jalali-moment";

export default function Dashboard(props) {
    const timetoJalali = (time, full = false) => {
        moment.locale("fa", { useGregorianParser: true });

        return full
            ? moment(time).format("HH:mm:ss")
            : moment(time).format("jYYYY/jMM/jDD");
    };
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    داشبورد
                </h2>
            }
        >
            <Head title="داشبورد" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <p>از منوی بالا گزینه ی مربوطه را انتخاب کنید</p>
                            <p>
                                امروز:
                                {timetoJalali(parseInt(props.now) * 1000)}
                            </p>
                            <p>
                                ساعت :
                                {timetoJalali(parseInt(props.now) * 1000, true)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
