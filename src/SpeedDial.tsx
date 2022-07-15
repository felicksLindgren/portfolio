import { Backdrop, SpeedDial as MuiSpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { Box } from '@mui/system';
import { AppProps } from 'next/app';
import { Dispatch, SetStateAction, useState } from 'react';
import Link from './Link';

type Action = {
    icon: JSX.Element,
    name: string
    href?: string
}

type SpeedDialProps = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    actions: Action[]

} & AppProps

export default function SpeedDial({ actions, open, setOpen }: SpeedDialProps) {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <MuiSpeedDial
            ariaLabel="SpeedDial"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}>
            {
                actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen
                        onClick={handleClose}
                    />

                ))
            }
        </MuiSpeedDial>
    )
}