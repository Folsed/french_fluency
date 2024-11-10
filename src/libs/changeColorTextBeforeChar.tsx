export const formatText = (text: string, beforeChar: string, color: string) => {
    const [before, after] = text.split('?')
    return (
        <>
            <span className='text-blue-500'>{before}?</span>
            {after && <span>{after}</span>}
        </>
    )
}