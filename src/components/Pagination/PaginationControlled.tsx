import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useEffect} from "react";

type PaginationControlledPropsType = {
    totalCount: number,
    page: number,
    onPageChange: (page:number) => void
}

export function PaginationControlled(props: PaginationControlledPropsType) {

    // const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        props.onPageChange(value);
    };
    // useEffect(() => {
    //         setPage(props.page)
    //     },
    //     [props.page])
    return (
        <Stack spacing={2}>
            <Typography>Page: {props.page}</Typography>
            <Pagination count={props.totalCount} page={props.page} onChange={handleChange}/>
        </Stack>
    );
}