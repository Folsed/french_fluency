export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className='absolute inset-0 bg-background flex items-center justify-center'>
            <div className='page-loader'></div>
        </div>
    )
}
