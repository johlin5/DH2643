

export default {
    upLoadImage: async (_: any, { file,id }: any) => {
        console.log(file);
        console.log(id);
        const { createReadStream, filename, mimetype, encoding } = await file;
        // Invoking the `createReadStream` will return a Readable Stream.
        // See https://nodejs.org/api/stream.html#stream_readable_streams
        const stream = createReadStream();
        return { filename, mimetype, encoding };
    },
}