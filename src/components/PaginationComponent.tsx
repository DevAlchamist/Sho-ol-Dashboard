import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

interface PaginationProps<T> {
    data: T[];
    renderItem: (item: T) => React.ReactNode;
    itemsPerPage: number;
}

function PaginationComponent<T>({ data, renderItem, itemsPerPage }: PaginationProps<T>): JSX.Element {
    // Pagination state
    const [page, setPage] = useState<number>(1);

    // Function to display items for the current page
    const displayItemsForPage = (pageNumber: number): T[] => {
        const startIndex: number = (pageNumber - 1) * itemsPerPage;
        const endIndex: number = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    };

    // Function to handle pagination changesch-dash/src/components/PaginationComponent.tsx
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    // Function to calculate total pages based on total items and items per page
    const getTotalPages = (): number => {
        return Math.ceil(data.length / itemsPerPage);
    };
    return (
        <div>
            <Box className="my-5 gap-5 p-5 grid grid-cols-12">
                {displayItemsForPage(page).map((item, index) => (
                    <div key={index}>{renderItem(item)}</div>
                ))}
            </Box>
            {/* Pagination component */}
            <Box display="flex" justifyContent="center">
                <Pagination count={getTotalPages()} page={page} onChange={handleChange} />
            </Box>
        </div>
    );
}

export default PaginationComponent;
