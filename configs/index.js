const configs = {
    port: process.env.PORT||8080,
    mongoURI: process.env.MONGODB_URI||"mongodb://localhost:27017/contacts",
    secret: process.env.SECRET
}

export default configs;
