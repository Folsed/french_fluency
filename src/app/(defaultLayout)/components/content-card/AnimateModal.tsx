'use client'
import useMeasure from 'react-use-measure'
import {
    useDragControls,
    useMotionValue,
    useAnimate,
    motion,
} from 'framer-motion'

interface IAnimateModal {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
}

const AnimateModal: React.FC<IAnimateModal> = ({ open, setOpen, children }) => {
    const [scope, animate] = useAnimate()
    const [drawerRef, { height }] = useMeasure()

    const y = useMotionValue(0)
    const controls = useDragControls()

    const handleClose = async () => {
        document.body.classList.remove('scroll-blocked')
        animate(scope.current, {
            opacity: [1, 0],
        })

        const yStart = typeof y.get() === 'number' ? y.get() : 0

        await animate('#drawer', {
            y: [yStart, height],
        })

        setOpen(false)
    }

    return (
        <>
            {open && (
                <motion.div
                    ref={scope}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={handleClose}
                    className='fixed inset-0 z-50 bg-neutral-950/70'
                >
                    <motion.div
                        id='drawer'
                        ref={drawerRef}
                        onClick={(e) => e.stopPropagation()}
                        initial={{ y: '100%' }}
                        animate={{ y: '0%' }}
                        transition={{
                            ease: 'easeInOut',
                        }}
                        className='absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-purple-50'
                        style={{ y }}
                        drag='y'
                        dragControls={controls}
                        onDragEnd={() => {
                            if (y.get() >= 50) {
                                handleClose()
                            }
                        }}
                        dragListener={false}
                        dragConstraints={{
                            top: 0,
                            bottom: 0,
                        }}
                        dragElastic={{
                            top: 0,
                            bottom: 0.7,
                        }}
                    >
                        <div className='absolute left-0 right-0 top-0 z-10 flex justify-center bg-purple-50 p-4'>
                            <button
                                className='h-2 w-32 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing'
                                onPointerDown={(e) => {
                                    controls.start(e)
                                }}
                            ></button>
                        </div>
                        <div className='relative z-0 h-full overflow-y-scroll no-scrollbar pt-12'>
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    )
}

export default AnimateModal
