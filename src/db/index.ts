import mongoose from "mongoose"
const uri = process.env.DB_URI

const connect = async () => {
    try {
        await mongoose.connect(uri!)
        const connection = mongoose.connection
        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })
    } catch (error) {
        console.log('Error in connecting to the db', error)
    }

}

export default connect