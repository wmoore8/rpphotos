import React from 'react'
import {Box, Skeleton} from '@mui/material'

const DEFAULT_ROW_HEIGHT = 40

export interface GridSkeletonProps {
    rows?:             number
    cols?:             number
    rowHeight?:        number
    verticalOffset?:   number
    horizontalOffset?: number
    animation?:        'wave' | 'pulse'
}

export default function GridSkeleton({
    rows             = 1,
    cols             = 1,
    rowHeight        = DEFAULT_ROW_HEIGHT,
    verticalOffset   = 0,
    horizontalOffset = 0,
    animation        = 'wave'
}: GridSkeletonProps) {

    return (
        <div style={{width: '101%'}}>
            <Box
                display='grid'
                width='100%'
                height='100%'
                gridTemplateRows={`repeat(${rows}, ${rowHeight}px)`}
                gridTemplateColumns={`repeat(${cols}, auto)`}
                sx={{
                    transform: `translate(${horizontalOffset}px, ${verticalOffset}px)`
                }}
            >
                {[Array.from(Array(rows * cols)).keys()].map(i =>
                    <Skeleton
                      height={rowHeight}
                      animation={animation}
                      variant="rectangular"
                      sx={{
                          display: 'flex',
                          backgroundColor: '#494848',
                          gridRow: 'auto / auto',
                          gridColumn: 'auto / auto',
                          border: '1px solid #3d3c3c'
                      }}
                    />
                )}
            </Box>
        </div>
    );
}