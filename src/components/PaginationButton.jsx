'use client'

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

export default function PaginationButton() {
    const pathname = usePathname();
    const searchparamas = useSearchParams();
    const searchTerm = searchparamas.get('search');
    const startIndex = +searchparamas.get('start') || 1;

    return (
        <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
            {startIndex >= 9 && (
                <Link href={`${pathname}?search=${searchTerm}&start=${startIndex - 10}`}>
                    <div className='flex flex-col cursor-pointer items-center hover:underline'>
                        <BsChevronLeft className="h-5" />
                        <p>Previous</p>
                    </div>
                </Link>
            )}
            {startIndex <= 90 && (
                <Link
                    href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
                >
                    <div className="flex flex-col cursor-pointer items-center hover:underline">
                        <BsChevronRight className="h-5" />
                        <p>Next</p>
                    </div>
                </Link>
            )}
        </div>
    )
}
