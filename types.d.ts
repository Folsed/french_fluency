
declare global {
    var _mongoClientPromise: Promise<typeof mongoose> | undefined
}

export {}
