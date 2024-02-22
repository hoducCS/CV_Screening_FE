import BarChart from "@/modules/Dashboard/BarChart/BarChart";
import Invoices from "@/modules/Dashboard/Invoices/Invoices";
import { Button } from "@/components/ui/button"

export default function DashboardPage () {
    return (
        <>
            <div className="flex mt-8">
                <div className="w-2/3">
                    <div className="border border-solid border-black p-7 rounded-xl">
                        <div className="flex justify-between">
                            <div className="flex gap-5">
                                <p className="font-bold text-xl text-primary">Monthly Spend</p>
                                <p className="font-bold text-xl text-success">40$</p>
                                <p className="font-bold text-xl text-success">USD</p>
                            </div>
                            <div>

                            </div>
                        </div>
                        <BarChart/>
                    </div>
                </div>
                <div className="w-1/3">
                    <Invoices/>
                </div>
            </div>
        </>
    )
}