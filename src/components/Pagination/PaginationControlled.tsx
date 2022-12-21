import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useTranslation} from "react-i18next";

type PaginationControlledPropsType = {
    totalCount: number,
    page: number,
    onPageChange: (page: number) => void
}

export function PaginationControlled(props: PaginationControlledPropsType) {
    const {t} = useTranslation()

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        props.onPageChange(value);
    };

    return (
        <Stack spacing={2}>
            <Typography>{t('NEWS.PAGINATION')}{props.page}</Typography>
            <Pagination count={props.totalCount} page={props.page} onChange={handleChange}/>
        </Stack>
    );
}