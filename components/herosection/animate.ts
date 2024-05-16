export const slideUp = {
    initial: {
        y: "100%"
    },
    open: (i: number) => ({
        y: "0%",
        transition: {duration: 0.5, delay: 0.04 * i}
    }),
    closed: {
        y: "100%",
        transition: {duration: 0.7}
    }
}

export const opacityImage = {
    initial: {
        opacity: 0,
        y: "-100%"
    },
    open: {
        opacity: 1,
        y: "0%",
        transition: {duration: 0.2, delay: 0.5}
    },
    closed: {
        opacity: 0,
        y: "100%",
        transition: {duration: 0.7, delay: 0.5}
    }
}